import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { getPublicPostBySlug } from '@/utils/api';
import '@/styles/blog.css'; // Isolated blog styling sheet

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPublicPostBySlug(slug);

  if (!post || !(post.tags || []).some(t => t.toLowerCase() === 'portfolio')) {
    return {
      title: 'Post Not Found - Developer Chowk',
    };
  }

  return {
    title: `${post.metaTitle || post.title} | Developer Chowk`,
    description: post.metaDescription || post.summary,
    keywords: post.focusKeywords || undefined,
    alternates: {
      canonical: post.canonicalUrl || `https://developerchowk.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.summary,
      images: post.featuredImage ? [post.featuredImage] : [],
      type: 'article',
      publishedTime: post.publishedAt || post.createdAt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPublicPostBySlug(slug);

  if (!post || !(post.tags || []).some(t => t.toLowerCase() === 'portfolio')) {
    notFound();
  }

  const publishDate = new Date(post.publishedAt || post.createdAt).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const authorName = post.author?.name || post.author?.gymName || 'Sanjay';

  // Extract FAQ items dynamically for FAQPage schema markup
  const qaRegex = /(?:\*\*Question:\*\*\s*([\s\S]+?)\r?\n\*\*Answer:\*\*\s*([\s\S]+?)(?=\r?\n\r?\n|\r?\n\*\*Question:|\r?\n#|$)|<p><strong>Question:<\/strong>\s*([\s\S]+?)<\/p>\s*<p><strong>Answer:<\/strong>\s*([\s\S]+?)<\/p>)/g;
  const faqItems = [];
  let match;
  while ((match = qaRegex.exec(post.content || '')) !== null) {
    const question = (match[1] || match[3] || '').trim();
    const answer = (match[2] || match[4] || '').trim();
    if (question && answer) {
      faqItems.push({
        question: question.replace(/<[^>]*>/g, '').trim(),
        answer: answer.replace(/<[^>]*>/g, '').trim()
      });
    }
  }

  // Schema bindings
  const blogPostSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription || post.summary,
    image: post.featuredImage ? [post.featuredImage] : [],
    datePublished: post.publishedAt || post.createdAt,
    dateModified: post.updatedAt || post.createdAt,
    author: {
      '@type': 'Person',
      name: authorName,
      description: post.authorBio || undefined,
      image: post.authorImage || undefined,
      sameAs: [
        post.authorLinkedIn,
        post.authorTwitter
      ].filter(Boolean)
    },
    publisher: {
      '@type': 'Organization',
      name: 'Developer Chowk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://developerchowk.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://developerchowk.com/blog/${post.slug}`,
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://developerchowk.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: 'https://developerchowk.com/blog'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.category || 'General',
        item: `https://developerchowk.com/blog?category=${encodeURIComponent((post.category || 'OTHERS').toLowerCase())}`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: `https://developerchowk.com/blog/${post.slug}`
      }
    ]
  };

  const faqPageSchema = faqItems.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  } : null;

  return (
    <>
      {/* Dynamic SEO structured schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqPageSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
      )}
      {post.customJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: (() => {
              let clean = post.customJsonLd;
              if (clean.includes('<script')) {
                clean = clean.replace(/<script[^>]*>/gi, '').replace(/<\/script>/gi, '');
              }
              return clean.trim();
            })()
          }}
        />
      )}

      <Navbar />

      <article className="min-h-screen bg-[#030712] text-slate-200 font-sans antialiased blog-details-bg pt-24 pb-20 relative overflow-hidden">
        {/* Background Mesh Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-500/5 via-indigo-500/5 to-transparent blur-[120px] pointer-events-none z-0" />
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none z-0" />
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none z-0" />
        
        {/* Premium Dot Matrix Overlay */}
        <div className="absolute inset-0 blog-dot-pattern pointer-events-none z-0" />

        <main className="max-w-3xl mx-auto px-4 relative z-10">
          
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-400 font-bold text-xs uppercase tracking-widest hover:text-blue-300 transition-colors mb-12 group"
          >
            <span className="mr-2 transition-transform group-hover:-translate-x-1">←</span> Back to Insights
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              {(post.tags || []).map(tag => (
                <span key={tag} className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-[10px] font-black text-blue-400 uppercase tracking-[0.15em]">
                  {tag}
                </span>
              ))}
              <span className="text-sm font-semibold text-slate-500">
                {publishDate} &bull; {Math.ceil((post.content || '').split(' ').length / 200) || 3} min read
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight mb-8 text-white">
              {post.title}
            </h1>

            {post.author && (
              <div className="flex items-center gap-4 w-fit">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-500 flex items-center justify-center text-sm font-bold text-white shadow-lg ring-2 ring-white/10 overflow-hidden shrink-0">
                  {post.authorImage ? (
                    <Image 
                      src={post.authorImage} 
                      alt={authorName} 
                      width={48} 
                      height={48} 
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    authorName.substring(0, 2).toUpperCase()
                  )}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{authorName}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-0.5">Author</div>
                </div>
              </div>
            )}
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative w-full aspect-video rounded-[1.75rem] overflow-hidden border border-white/5 shadow-2xl mb-12">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
          )}

          {/* Rich Content Render Panel */}
          <div 
            className="blog-content"
            dangerouslySetInnerHTML={{
              __html: (() => {
                let formatted = (post.content || '').replace(/\\n/g, '\n');

                // Helper to style cells inside tables
                const styleCellContent = (content) => {
                  let clean = content
                    .replace(/&nbsp;/g, ' ')
                    .replace(/<p(?:\s+[^>]*?)?>/gi, '')
                    .replace(/<\/p>/gi, '');
                  
                  // Strip style, class, and color declarations that override readability
                  clean = clean
                    .replace(/style\s*=\s*(['"])([\s\S]*?)\1/gi, '')
                    .replace(/class\s*=\s*(['"])([\s\S]*?)\1/gi, '')
                    .replace(/color\s*=\s*(['"])([\s\S]*?)\1/gi, '');

                  const trimmed = clean.trim();
                  const lower = trimmed.toLowerCase();
                  
                  if (lower === 'delivered' || lower === 'low' || lower === 'very high' || lower === 'immediate' || trimmed.startsWith('+') || /^greater than/.test(lower) || /^72%/.test(lower)) {
                    return `<span class="inline-flex items-center px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full text-xs font-bold shadow-[0_0_10px_rgba(16,185,129,0.05)]">${trimmed}</span>`;
                  }
                  if (lower === 'pending' || lower === 'medium' || lower === 'high' || lower === 'moderate') {
                    return `<span class="inline-flex items-center px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded-full text-xs font-bold shadow-[0_0_10px_rgba(245,158,11,0.05)]">${trimmed}</span>`;
                  }
                  if (lower === 'cancelled' || /^less than/.test(lower) || /^under/.test(lower)) {
                    return `<span class="inline-flex items-center px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 rounded-full text-xs font-bold shadow-[0_0_10px_rgba(244,63,94,0.05)]">${trimmed}</span>`;
                  }
                  if (lower === 'shipped') {
                    return `<span class="inline-flex items-center px-3 py-1 bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 rounded-full text-xs font-bold shadow-[0_0_10px_rgba(6,182,212,0.05)]">${trimmed}</span>`;
                  }
                  
                  // Style financial amounts, ratios, and number strings
                  if (trimmed.startsWith('$') || /^\d/.test(trimmed)) {
                    return `<span class="text-white font-bold">${trimmed}</span>`;
                  }
                  
                  return trimmed;
                };

                const parseMarkdownTable = (markdownTable) => {
                  const lines = markdownTable.trim().split('\n');
                  if (lines.length < 2) return markdownTable;

                  let html = '<div class="blog-content-table-wrapper"><table class="blog-content-table">';

                  // Parse header cells (discard outer border-pipes)
                  const headers = lines[0]
                    .split('|')
                    .map(x => x.trim())
                    .filter((x, idx, arr) => idx > 0 && idx < arr.length - 1);

                  html += '<thead><tr>';
                  headers.forEach(h => {
                    html += `<th>${h}</th>`;
                  });
                  html += '</tr></thead>';

                  // Parse body cells
                  html += '<tbody>';
                  for (let i = 2; i < lines.length; i++) {
                    const cells = lines[i]
                      .split('|')
                      .map(x => x.trim())
                      .filter((x, idx, arr) => idx > 0 && idx < arr.length - 1);

                    if (cells.length > 0) {
                      html += '<tr>';
                      cells.forEach(c => {
                        html += `<td>${styleCellContent(c)}</td>`;
                      });
                      html += '</tr>';
                    }
                  }
                  html += '</tbody></table></div>';
                  return html;
                };

                // Remove overriding inline styles
                formatted = formatted.replace(/style="[^"]*"/gi, '');

                // Image Alt Tags fallbacks
                formatted = formatted.replace(/<img\s+([^>]*?)>/gi, (match, attrs) => {
                  const hasAlt = /alt\s*=\s*(['"])(.*?)\1/gi.test(attrs);
                  if (!hasAlt) {
                    return `<img ${attrs.trim()} alt="${post.title.replace(/"/g, '&quot;')} - Developer Chowk Insights">`;
                  }
                  return match;
                });

                // Markdown tables format
                formatted = formatted.replace(/(?:<p>)?\s*(\|[\s\S]+?\|)\s*(?:<\/p>)?/g, (match, tableContent) => {
                  const cleanTable = tableContent.replace(/<br\s*\/?>/gi, '\n');
                  return parseMarkdownTable(cleanTable);
                });

                // HTML tables custom wrap
                formatted = formatted.replace(/<table(?:\s+[^>]*?)?>/gi, '<div class="blog-content-table-wrapper"><table class="blog-content-table">');
                formatted = formatted.replace(/<\/table>/gi, '</table></div>');
                
                formatted = formatted.replace(/<(td|th)(?:\s+([^>]*?))?>([\s\S]*?)<\/\1>/gi, (match, tag, attrs = '', cellContent) => {
                  const cleanAttrs = attrs
                    .replace(/style\s*=\s*(['"])([\s\S]*?)\1/gi, '')
                    .replace(/class\s*=\s*(['"])([\s\S]*?)\1/gi, '')
                    .replace(/color\s*=\s*(['"])([\s\S]*?)\1/gi, '');
                  return `<${tag} ${cleanAttrs.trim()}>${styleCellContent(cellContent)}</${tag}>`;
                });

                // MD list items in paragraphs format
                formatted = formatted.replace(/<p>\s*([\*\-])\s+([\s\S]+?)\s*<\/p>/g, '<li>$2</li>');
                
                // Wrap list items
                formatted = formatted.replace(/(?:<li>[\s\S]+?<\/li>\s*)+/g, (match) => {
                  return `<ul class="list-disc pl-5 my-4 text-slate-300">${match}</ul>`;
                });

                // MD Headings format
                formatted = formatted.replace(/(?:^|\n|<p>)#\s+([^<\n\r]+)(?:<\/p>|\r?\n|$)/g, '<h2 class="text-white font-black text-xl sm:text-2xl my-8">$1</h2>');
                formatted = formatted.replace(/(?:^|\n|<p>)##\s+([^<\n\r]+)(?:<\/p>|\r?\n|$)/g, '<h2 class="text-white font-black text-xl sm:text-2xl my-8">$1</h2>');
                formatted = formatted.replace(/(?:^|\n|<p>)###\s+([^<\n\r]+)(?:<\/p>|\r?\n|$)/g, '<h3 class="text-white font-bold text-lg sm:text-xl my-6">$1</h3>');

                // BLUF highlight cards
                const blufRegex = /(?:<p>)?(?:\*\*Bottom Line Up Front \(BLUF\):\*\*|<strong>Bottom Line Up Front \(BLUF\):<\/strong>)\s*([\s\S]+?)(?:<\/p>|(?=\r?\n\r?\n|\r?\n#|<p>|$))/g;
                formatted = formatted.replace(blufRegex, (match, blufText) => {
                  return `<div class="blog-bluf-card">
                    <span class="text-[9px] font-black uppercase tracking-[0.15em] text-blue-400 mb-2 block">
                      Bottom Line Up Front (BLUF)
                    </span>
                    <p class="text-slate-200 text-sm leading-relaxed m-0">
                      ${blufText.trim()}
                    </p>
                  </div>`;
                });

                // Q&A cards
                const qaCardRegex = /(?:\*\*Question:\*\*\s*([\s\S]+?)\r?\n\*\*Answer:\*\*\s*([\s\S]+?)(?=\r?\n\r?\n|\r?\n\*\*Question:|\r?\n#|$)|<p><strong>Question:<\/strong>\s*([\s\S]+?)<\/p>\s*<p><strong>Answer:<\/strong>\s*([\s\S]+?)<\/p>)/g;
                formatted = formatted.replace(qaCardRegex, (match, mQuestion, mAnswer, hQuestion, hAnswer) => {
                  const question = mQuestion || hQuestion;
                  const answer = mAnswer || hAnswer;
                  return `<div class="blog-qa-card">
                    <div class="flex gap-4 items-start">
                      <div className="w-8 h-8 bg-blue-500/10 text-blue-400 rounded-lg flex items-center justify-center shrink-0 font-bold text-base mt-0.5 border border-blue-500/20">
                        ?
                      </div>
                      <div class="flex-1 flex flex-col gap-2">
                        <div class="text-white font-bold text-base leading-snug">
                          Question: ${question.trim()}
                        </div>
                        <div class="text-slate-400 text-sm leading-relaxed">
                          ${answer.trim()}
                        </div>
                      </div>
                    </div>
                  </div>`;
                });

                // Pull quotes
                const quoteRegex = /(?:According to ([^:\n]+):\s*"([\s\S]+?)"|<p>According to ([^:<]+):\s*"([\s\S]+?)"<\/p>)/g;
                formatted = formatted.replace(quoteRegex, (match, mAuthor, mQuote, hAuthor, hQuote) => {
                  const author = mAuthor || hAuthor;
                  const quoteText = mQuote || hQuote;
                  return `<div class="blog-pullquote">
                    <span class="text-[9px] font-black uppercase tracking-[0.15em] text-pink-400 mb-2 block">
                      ${author.trim().toUpperCase()}
                    </span>
                    <p class="text-slate-200 text-sm sm:text-base leading-relaxed m-0 italic">
                      "${quoteText.trim()}"
                    </p>
                  </div>`;
                });

                return formatted;
              })()
            }}
          />


        </main>
      </article>

      <Footer />
    </>
  );
}
