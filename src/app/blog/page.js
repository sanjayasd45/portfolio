import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogListing from "@/components/BlogListing";
import { getPublicPosts } from "@/utils/api";

export const metadata = {
  title: "Insights & Coding Blueprints | Developer Chowk Blog",
  description: "Read the latest engineering articles, SaaS blueprints, and web development case studies from Sanjay at Developer Chowk.",
};

export default async function BlogPage() {
  let posts = [];
  try {
    posts = await getPublicPosts();
    if (!Array.isArray(posts)) {
      posts = [];
    } else {
      posts = posts.filter(post => (post.tags || []).some(t => t.toLowerCase() === 'portfolio'));
    }
  } catch (error) {
    console.error("Error loading blog posts in BlogPage:", error);
  }

  return (
    <div className="bg-[#07070a] font-[family-name:var(--font-plus-jakarta-sans)] min-h-screen text-slate-100 antialiased overflow-x-hidden">
      <Navbar />
      <main>
        <BlogListing posts={posts} />
      </main>
      <Footer />
    </div>
  );
}
