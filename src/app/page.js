import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Developer Chowk | Custom Web Development & Software in Lucknow",
  description: "Specialized in MERN stack development, custom business websites, and booking systems in Lucknow. Growing local businesses with modern technology.",
};

export default function EnterprisePortfolio() {
  return (
    <div className="bg-slate-900 font-[family-name:var(--font-plus-jakarta-sans)] text-slate-100 antialiased selection:bg-blue-500 selection:text-white overflow-x-hidden min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
