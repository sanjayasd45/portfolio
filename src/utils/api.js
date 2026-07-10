const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

/**
 * Fetches all published blog posts from MERN backend
 * @returns {Promise<Array>}
 */
export async function getPublicPosts() {
  try {
    const res = await fetch(`${API_URL}/blog/public`, {
      next: { revalidate: 60 }, // ISR: Revalidate cache every 60 seconds
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error('Fetch error in getPublicPosts:', error);
    return [];
  }
}

/**
 * Fetches a single published blog post by its slug from MERN backend
 * @param {string} slug 
 * @returns {Promise<Object|null>}
 */
export async function getPublicPostBySlug(slug) {
  try {
    const res = await fetch(`${API_URL}/blog/public/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch (error) {
    console.error('Fetch error in getPublicPostBySlug:', error);
    return null;
  }
}
