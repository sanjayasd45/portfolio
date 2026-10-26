import { Resend } from 'resend';

// In-memory sliding-window rate limiter
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Periodically clean up stale rate-limit records
if (typeof setInterval !== 'undefined') {
  setInterval(() => {
    const now = Date.now();
    for (const [ip, timestamps] of rateLimitMap.entries()) {
      const valid = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS);
      if (valid.length === 0) {
        rateLimitMap.delete(ip);
      } else {
        rateLimitMap.set(ip, valid);
      }
    }
  }, 5 * 60 * 1000).unref?.();
}

function getClientIp(req) {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.headers.get('x-real-ip') || req.headers.get('cf-connecting-ip') || '127.0.0.1';
}

function checkRateLimit(ip) {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);

  if (timestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    const oldest = timestamps[0];
    const retryAfterSec = Math.max(1, Math.ceil((RATE_LIMIT_WINDOW_MS - (now - oldest)) / 1000));
    return { allowed: false, retryAfterSec };
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return { allowed: true };
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export async function POST(req) {
  try {
    // 1. IP Rate Limiting
    const clientIp = getClientIp(req);
    const rateLimit = checkRateLimit(clientIp);

    if (!rateLimit.allowed) {
      return new Response(
        JSON.stringify({
          error: `Too many submissions. Please wait ${Math.ceil(rateLimit.retryAfterSec / 60)} minute(s) before trying again.`,
        }),
        {
          status: 429,
          headers: {
            'Content-Type': 'application/json',
            'Retry-After': String(rateLimit.retryAfterSec),
          },
        }
      );
    }

    // 2. Body parsing & Size check
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(JSON.stringify({ error: 'Invalid JSON payload' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const { name, email, projectType, budget, message, honeypot } = body;

    // 3. Honeypot check (Silently absorb bot submissions)
    if (honeypot && String(honeypot).trim().length > 0) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 4. Strict Input Validation & Length Bounds
    const trimmedName = typeof name === 'string' ? name.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim() : '';
    const trimmedProjectType = typeof projectType === 'string' ? projectType.trim() : 'Unspecified';
    const trimmedBudget = typeof budget === 'string' && budget.trim().length > 0 ? budget.trim().slice(0, 50) : 'Flexible / Undecided';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      return new Response(JSON.stringify({ error: 'Name, email, and message are required.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (trimmedName.length < 2 || trimmedName.length > 100) {
      return new Response(JSON.stringify({ error: 'Name must be between 2 and 100 characters.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (trimmedEmail.length > 150 || !EMAIL_REGEX.test(trimmedEmail)) {
      return new Response(JSON.stringify({ error: 'Please provide a valid email address.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (trimmedMessage.length < 10 || trimmedMessage.length > 3000) {
      return new Response(JSON.stringify({ error: 'Message must be between 10 and 3,000 characters.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (trimmedProjectType.length > 50) {
      return new Response(JSON.stringify({ error: 'Invalid project type.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // 5. Check API Key
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is missing');
      return new Response(JSON.stringify({ error: 'Server configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 6. Sanitized HTML and Plain Text
    const safeName = escapeHtml(trimmedName);
    const safeEmail = escapeHtml(trimmedEmail);
    const safeProjectType = escapeHtml(trimmedProjectType);
    const safeBudget = escapeHtml(trimmedBudget);
    const safeMessage = escapeHtml(trimmedMessage).replace(/\n/g, '<br/>');

    const { data, error } = await resend.emails.send({
      from: 'Developer Chowk <contact@developerchowk.com>',
      to: ['sanjay@developerchowk.com'],
      subject: `New Inquiry from ${safeName}`,
      reply_to: trimmedEmail,
      text: `New Project Inquiry\n\nName: ${trimmedName}\nEmail: ${trimmedEmail}\nProject Type: ${trimmedProjectType}\nTarget Budget: ${trimmedBudget}\n\nMessage:\n${trimmedMessage}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px;">
          <h2 style="color: #0f172a; margin-top: 0; border-bottom: 2px solid #3b82f6; padding-bottom: 8px;">New Agency Inquiry</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> <a href="mailto:${safeEmail}" style="color: #2563eb;">${safeEmail}</a></p>
          <p><strong>Project Type:</strong> ${safeProjectType}</p>
          <p><strong>Target Budget:</strong> ${safeBudget}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <div style="background-color: #f8fafc; padding: 16px; border-radius: 6px; border-left: 4px solid #3b82f6; font-size: 14px; line-height: 1.6; color: #1e293b;">
            ${safeMessage}
          </div>
          <p style="font-size: 11px; color: #64748b; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 12px;">
            Submitted from developerchowk.com · Client IP: ${escapeHtml(clientIp)}
          </p>
        </div>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message || 'Failed to send email' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message || 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
