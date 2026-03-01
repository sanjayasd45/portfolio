import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Process from "@/components/Process";
import Services from "@/components/Services";
import CtaBanner from "@/components/CtaBanner";

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

export default function EnterprisePortfolio() {
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
        {/* 9. FAQ — kill objections before contact form */}
        <FAQ />
        {/* 10. Contact — final conversion */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
