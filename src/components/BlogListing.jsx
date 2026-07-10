'use client';

import { useState } from 'react';
import BlogCard from './BlogCard';
import '@/styles/blog.css'; // Isolated blog stylesheet import

export default function BlogListing({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract all categories dynamically
  const categories = ['All', ...new Set(posts.map((p) => p.category).filter(Boolean))];

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      (post.category || '').toUpperCase() === selectedCategory.toUpperCase();
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (post.summary || '').toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#030712] text-slate-200 font-sans antialiased blog-details-bg relative pt-20 overflow-hidden">
      {/* Background Mesh Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-500/5 via-indigo-500/5 to-transparent blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-purple-500/5 blur-[100px] rounded-full pointer-events-none z-0" />
      
      {/* Premium Dot Matrix Overlay */}
      <div className="absolute inset-0 blog-dot-pattern pointer-events-none z-0" />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 border-b border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-black text-blue-400 uppercase tracking-widest">
            Engineering Logs
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase italic tracking-tight">
            Insights & <span className="blog-gradient-text">Coding Blueprints</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base leading-relaxed font-medium">
            Deep dives into software architecture, full-stack systems engineering, and scalable web solutions built to turn traffic into conversions.
          </p>
        </div>
      </section>

      {/* Filters & Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Search & Category Tabs Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-8 border-b border-white/5">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all border cursor-pointer ${
                  selectedCategory === cat
                    ? 'border-blue-500/30 bg-blue-500/10 text-blue-400'
                    : 'border-white/5 bg-slate-900/30 text-slate-400 hover:text-white hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="w-full md:max-w-xs relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights..."
              className="w-full px-5 py-3.5 bg-slate-900/40 border border-white/5 rounded-xl text-xs font-bold text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/30 transition-all"
            />
          </div>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/20 border border-white/5 rounded-3xl">
            <p className="text-slate-400 text-lg">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
            {filteredPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}

      </section>

    </div>
  );
}
