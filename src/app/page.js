import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";
import Link from "next/link";
import { getPublicPosts } from "@/utils/api";
import BlogCard from "@/components/BlogCard";

const Portfolio = dynamic(() => import("@/components/Portfolio"), {
  loading: () => <div className="py-24 bg-slate-900" />,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <div className="py-24 bg-slate-950" />,
});
const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="py-24 bg-slate-900" />,
});
const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="py-24 bg-slate-950" />,
});
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="py-12 bg-slate-950" />,
});

export const metadata = {
  title: "Developer Chowk | Custom Web Development & Software Solutions",
  description:
    "Specialized in MERN stack development, custom business websites, SaaS platforms, and booking systems. Helping startups and businesses grow with modern technology.",
};

export default async function EnterprisePortfolio() {
  let latestPosts = [];
  try {
    const posts = await getPublicPosts();
    if (Array.isArray(posts)) {
      latestPosts = posts
        .filter(post => (post.tags || []).some(t => t.toLowerCase() === 'portfolio'))
        .slice(0, 3);
    }
  } catch (err) {
    console.error("Error loading homepage blog posts:", err);
  }

  return (
    <div className="bg-slate-900 font-[family-name:var(--font-plus-jakarta-sans)] text-slate-100 antialiased selection:bg-blue-500 selection:text-white overflow-x-hidden min-h-screen">
      <Navbar />
      <main>
        {/* 1. Hero — problem-led headline + scarcity */}
        <Hero />
        {/* 2. TrustBar — instant social proof numbers */}
        <TrustBar />
        {/* 3. Process — reduce anxiety, show how it works */}
        <Process />
        {/* 4. CTA intercept — catch scrollers before Services */}
        <CtaBanner
          heading="Not sure where to start? Let's figure it out together."
          sub="Free 30-minute consultation — no commitment, no sales pitch."
          cta="Book a Free Call"
        />
        {/* 5. Services — pain-point framing */}
        <Services />
        {/* 6. Portfolio — proof of results */}
        <Portfolio />
        {/* 7. CTA intercept — after proof, highest conversion point */}
        <CtaBanner
          heading="Seen enough? Let's build something great."
          sub="Only 2 project slots remaining this month."
          cta="Get My Free Quote"
        />
        {/* 8. Testimonials — social proof */}
        <Testimonials />

        {/* Latest Insights Section */}
        {latestPosts.length > 0 && (
          <section className="py-24 bg-slate-950 border-y border-white/5 relative overflow-hidden" id="blog">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full" />
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
              <div className="text-center space-y-4">
                <span className="px-4 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/10 text-xs font-black text-blue-400 uppercase tracking-widest">
                  Knowledge Base
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase italic tracking-tight">
                  Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Insights</span>
                </h2>
                <p className="max-w-xl mx-auto text-slate-400 text-sm font-medium">
                  Read our latest guides on web engineering, product design, and software growth blueprints.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {latestPosts.map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>

              <div className="text-center pt-4">
                <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 rounded-xl text-xs font-black uppercase tracking-wider text-slate-300 hover:text-white hover:border-white/20 bg-white/[0.01] hover:bg-white/[0.03] transition-all cursor-pointer">
                  Browse All Articles &rarr;
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* 9. FAQ — kill objections before contact form */}
        <FAQ />
        {/* 10. Contact — final conversion */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
