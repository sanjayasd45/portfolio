const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Fetches all published blog posts from MERN backend
 * @returns {Promise<Array>}
 */
export async function getPublicPosts() {
  if (!API_URL) return [];
  try {
    const res = await fetch(`${API_URL}/blog/public`, {
      next: { revalidate: 60 }, // ISR: Revalidate cache every 60 seconds
      signal: AbortSignal.timeout(1500),
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

/**
 * Fetches a single published blog post by its slug from MERN backend
 * @param {string} slug 
 * @returns {Promise<Object|null>}
 */
export async function getPublicPostBySlug(slug) {
  if (!API_URL) return null;
  try {
    const res = await fetch(`${API_URL}/blog/public/${slug}`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(1500),
    });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}
