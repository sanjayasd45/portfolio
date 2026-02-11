"use client";

import { useState } from "react";
import { 
  MdRocketLaunch, 
  MdGridView, 
  MdHandyman, 
  MdFace, 
  MdAutoAwesome, 
  MdLocalCafe, 
  MdBrush, 
  MdCode, 
  MdShoppingBag, 
  MdTrendingUp, 
  MdArrowBack, 
  MdArrowForward, 
  MdArrowOutward, 
  MdDevices, 
  MdShoppingCart, 
  MdShareLocation, 
  MdFormatQuote, 
  MdAlternateEmail, 
  MdMap, 
  MdPerson,
  MdMenu,
  MdClose,
  MdCheck
} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const testimonials = [
  // ... existing testimonials
  {
    quote: "My bakery sales jumped by 40% after the redesign. Developer Chowk really listens and understands local community vibes.",
    name: "Sarah Johnson",
    role: "Founder, Sweet Corner",
    color: "text-[#ff7e47]",
    bgColor: "bg-[#ff7e47]",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBNXY7vsmLucwC1R9MIzunLfmAcBj8SasjYsUDGmUYoqqwEc4WlTxnUC3nKQCdhrydj2XPvY3PFFC97N-R4O8az9LD8pc9g22HK-pqdIAxlfx65Mbhl2bDwcvf5cO3F44x_8PxBgNLW_BVZbm4L-QXaE3nSmYZjayj-2kMCzPtuLasg_fdVauHCiEcZhIuQiTTkpzGqnq8kmoTtCJPwYTN-tyrlijVVUDjf4STWmqOwhGY-C3OlWjfZVCFZryHz_RzwlFFFEVTnsmQ"
  },
  {
    quote: "The process was so simple. No tech jargon, just great design and a partner who cares about our town's growth.",
    name: "Marcus Chen",
    role: "Riverside Yoga",
    color: "text-[#4facfe]",
    bgColor: "bg-[#4facfe]",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXZYnSjaYMAsszIdMpJuxxhhhiyz1_HcXITnt_fdXDkCsqgOuZ630aGiYCpFimqA2qHkefk4KMBKqDXwe6fsJP49d4gET1MpdST41HzFwvNBNBhIijt0titOUZmfej_r7t0i2LyU62xam9rxt_qpQaMDkkXLbAIM46mUrpD9N2xXwIuNekelYs7_NewON51ZP0Evq-npwfpPbbE9LaTtkjkj210DsqB8wgfVQ2eiqTGL2-S-2uv3wUT8pNJYZl3PTD05Ei2SJh79s"
  },
  {
    quote: "Finally, a website that captures the scent of our flowers. Orders for weddings have doubled since launch!",
    name: "Lisa Miller",
    role: "Owner, Bloom & Petal",
    color: "text-[#f9d423]",
    bgColor: "bg-[#f9d423]",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9NIhf72oG5HF9DV5vakJvVn8hfl5jOLgzzSdZ7Mj_8HIoG6Cw_UzZhJNWXTQjzhdrfFcm7xBGBO-q50o9PQ95Cu812U-KpW-AJMTrIyCYBMAFBGRpCbk34unN2dzZaUhfe8pEQ5m2WfdxuFBywSc3BK2pi5ZFG5ttZvvr1bhimYd1Z_Qf-mob8zEs_-29FkrCqQYePZy4bFsfDeuanDEBU778BOFeJWCBB4gd0eivhpA_6x3aNzDgMnPbeZWISSUfMLv2dbKxJB0"
  },
  {
    quote: "We needed a platform for booking appointments that didn't feel robotic. This is perfect.",
    name: "David Kim",
    role: "Tech Startup CEO",
    color: "text-green-400",
    bgColor: "bg-green-400",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-afxz8CfN7d9LdL42N5LN6_ccv4kV7UvblplPIO-LlMGwkngccKPqYhlrfrnpTMaj1O1Mjgj1Kck8rvxrWX_4v2ZQth0OCZqYH426Kst9Np785-y1WwLo1w0zkdjlvY07LLnYzikwM8A5wmFBMxNvnce3Yuhv28PYbbFmTr0k6TuDvVUYc4CrYO40ehEnlZEFnM6yzr4SqSuAwlX4Czz7ReuSqEFN4EdiyG0gYgSYnyLrZgX9RTCJtUe3aEnuuiyRFwr2ycXrNKQ"
  },
  {
    quote: "A cozy digital space for our book lovers. The community events calendar is a lifesaver.",
    name: "Olivia Peterson",
    role: "The Book Nook",
    color: "text-purple-400",
    bgColor: "bg-purple-400",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkxbx9JPezQe9_WrSWyyrNfjEU4CxnkvD4xiq2ATG3y-w7xsjTc7RtnvSbhiCJe8iFzHbyz8kXpvyXfKrIR6oPvykPCcJS00Kg84DW9udZ_wkTTE_wxoGq71z5NqC-af_kUBMCwdvTp2DngI5QrhCHvf1i6PhtUlhLKS_yDb7KdKQgbl70GkvIP1VYl7txR3U_pIPYloppjbJVupjxcClrDJO1Xr7qX23Bq5CO-JlDWiQXQLZ5eNqkXbEnVZHXUKdlswXN0HXBhPI"
  },
  {
    quote: "Our coffee subscription service is running smoother than ever. The design makes people want to stay.",
    name: "James Thompson",
    role: "Morning Brew Co.",
    color: "text-[#ff7e47]",
    bgColor: "bg-[#ff7e47]",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPi1hq1R9j4Ib8d7x_yvYUeyBSkHKKCBYSm465wFCgtrCxOC9Or7r3v0pXvaFzW3sfl43CN4BZNyn7-T29zz7jg3PwFSyw-Q_NS8OZq7co9pus3JdQRz-n6WDbdJXSP_iMczlinwmf3NnhJjjiPbc6VSYck4uAmUDxu8yAh1DmAuiyv1hWC8ZMOXmBViZQ56lEea-7IsQHOcBRHBr2fhxiK4SuNYWd2JSaUXPjohSzNfyXTjGKQL9iEV5orvFitaivVSJlA0q_dBM"
  },
  {
    quote: "Incredible attention to detail. Every pixel feels like it was placed with care.",
    name: "Emily Rodriguez",
    role: "Artisan Crafts",
    color: "text-[#4facfe]",
    bgColor: "bg-[#4facfe]",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArnH7kHWVH8QpWebi_6eEkbdlFuDT9_9d2Tf6sGANbQUmdLOB_95msGotFgTsEVVBklLFS6JYb5gu5JwUE-biEdBwSEe7nV0Q7XqWns849RfD95rXOXpLXpzewqzRnMJJM-Nyged-HmnzaAzR3Vo-OFhKSmyLhp4mfBbyh1VKA8aJKmpg9wpkNcgjigYvkcuge3gKEQIIXDpwWIO54ClaOrKdmfIZ90T2nCagmwqmH9xDKwOGrY9aq2g8urVaUtiXd1mmmUr3WLDI"
  }
];

const packages = [
  {
    name: "Starter",
    price: "$1,500",
    description: "Perfect for local businesses needing a professional presence.",
    features: ["Custom Landing Page", "Mobile Optimized", "Contact Form", "1 Week Turnaround"],
    color: "bg-gray-100 dark:bg-white/5",
    btnColor: "bg-[#2d2a3d] dark:bg-white text-white dark:text-[#2d2a3d]"
  },
  {
    name: "Growth",
    price: "$3,500",
    description: "For businesses ready to expand their reach and SEO.",
    features: ["5 Page Website", "CMS Integration", "SEO Optimization", "Analytics Setup", "3 Week Turnaround"],
    color: "bg-[#ff7e47] text-white",
    btnColor: "bg-white text-[#ff7e47]",
    popular: true
  },
  {
    name: "E-Commerce",
    price: "$5,000+",
    description: "Sell your products online with a custom store.",
    features: ["Full Shop Setup", "Payment Integration", "Inventory Management", "User Accounts", "4+ Week Turnaround"],
    color: "bg-[#4facfe] text-white",
    btnColor: "bg-white text-[#4facfe]"
  }
];

export default function DeveloperChowk() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = [
    testimonials[currentTestimonial],
    testimonials[(currentTestimonial + 1) % testimonials.length]
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! I'll be in touch shortly.");
  };

  return (
    <div className="font-[family-name:var(--font-quicksand)] text-[#2d2a3d] dark:text-[#f8f9fa] selection:bg-[#ff7e47]/30 min-h-screen">
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-white dark:bg-[#1a1625] flex flex-col p-6 md:hidden"
          >
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-3">
                <div className="size-10 bg-[#ff7e47] rounded-xl flex items-center justify-center text-white shadow-lg">
                  <MdRocketLaunch className="text-2xl" />
                </div>
                <h2 className="text-xl font-bold tracking-tight">Developer Chowk</h2>
              </div>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="size-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center"
                aria-label="Close menu"
              >
                <MdClose className="text-2xl" />
              </button>
            </div>
            <nav className="flex flex-col gap-6 text-2xl font-bold">
              <a onClick={() => setIsMenuOpen(false)} href="#portfolio" className="hover:text-[#ff7e47]">Projects</a>
              <a onClick={() => setIsMenuOpen(false)} href="#services" className="hover:text-[#ff7e47]">Services</a>
              <a onClick={() => setIsMenuOpen(false)} href="#about" className="hover:text-[#ff7e47]">About Me</a>
              <a onClick={() => setIsMenuOpen(false)} href="#pricing" className="hover:text-[#ff7e47]">Pricing</a>
            </nav>
            <div className="mt-auto">
              <button className="w-full clay-button-primary py-4 rounded-2xl text-xl font-bold">Say Hi!</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1000px]">
        <header className="flex items-center justify-between bg-white/90 dark:bg-[#1a1625]/90 backdrop-blur-xl border-4 border-white/50 px-8 py-4 rounded-full shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-gradient-to-br from-[#ff7e47] to-orange-400 rounded-2xl flex items-center justify-center text-white shadow-lg rotate-3">
              <MdRocketLaunch className="text-2xl" />
            </div>
            <h2 className="text-xl font-bold tracking-tight bg-gradient-to-r from-[#ff7e47] to-orange-600 bg-clip-text text-transparent">Developer Chowk</h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <a className="text-sm font-bold hover:text-[#ff7e47] transition-colors flex items-center gap-1" href="#portfolio"><MdGridView className="text-lg" />Projects</a>
            <a className="text-sm font-bold hover:text-[#ff7e47] transition-colors flex items-center gap-1" href="#services"><MdHandyman className="text-lg" />Toolbox</a>
            <a className="text-sm font-bold hover:text-[#ff7e47] transition-colors flex items-center gap-1" href="#pricing"><MdShoppingBag className="text-lg" />Pricing</a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button className="hidden md:block bg-[#ff7e47] hover:bg-orange-500 text-white text-sm font-bold px-7 py-2.5 rounded-full shadow-[0_4px_0_rgb(234,88,12)] active:translate-y-1 active:shadow-none transition-all">
              Say Hi!
            </button>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden size-10 rounded-full bg-gray-100 dark:bg-white/10 flex items-center justify-center"
              aria-label="Open menu"
            >
              <MdMenu className="text-2xl" />
            </button>
          </div>
        </header>
      </div>

      {/* Hero Section ... (Existing content) */}
      <section className="pt-44 pb-24 px-6 relative overflow-hidden">
        {/* ... (Keep existing hero content but add toast to buttons if needed) */}
        <div className="absolute top-20 right-[-10%] size-96 bg-[#ff7e47]/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 left-[-5%] size-80 bg-[#4facfe]/20 rounded-full blur-[80px]"></div>
        <div className="max-w-[1280px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 bg-white dark:bg-white/5 px-6 py-2 rounded-full border-2 border-[#ff7e47]/20 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#ff7e47] animate-pulse"></span>
              <span className="text-sm font-bold text-[#ff7e47] uppercase tracking-widest">Available for Local Projects</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
              Crafting <span className="text-[#ff7e47] italic">squishy</span> web magic for local heroes.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I help small businesses pop off the screen with friendly 3D designs and websites that feel as good as they look.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
              <button onClick={() => document.getElementById('portfolio').scrollIntoView({behavior: 'smooth'})} className="clay-button-primary px-10 py-5 rounded-3xl text-xl font-bold flex items-center gap-3">
                See My Magic <MdAutoAwesome />
              </button>
              <button onClick={() => toast("Let's grab a virtual coffee! ☕")} className="clay-button-secondary px-10 py-5 rounded-3xl text-xl font-bold flex items-center gap-3">
                Let&apos;s Coffee <MdLocalCafe />
              </button>
            </div>
          </div>
          <div className="relative w-full max-w-[600px] mx-auto aspect-square">
            <div className="relative z-20 w-full h-full rounded-[3rem] border-8 border-white dark:border-white/10 clay-card overflow-hidden rotate-2">
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGb1SJZpKCM7mLluh_LSfZ6vHS0g_sDYhu-T_QBvSKuFHRwhUm_2app5ywmP1HicfSivoOrPj0Im6zfyB6XGOE6d1eSmnKKx8rH6NqjHBiNzxdNC5lSzPk2hJsR-tjiyFEt41uy4Wce9yiWl-Sm7qmrAmxwsxBwdI-Wb2YDJcHnWselTeHqpvU-F8-E235BSToj6T7gocVb1skCBbTlC5ZUVqfpR9OVDNH_PzR8TM04e4jSnn7oABfVohvrtAfcoHKDBD6jiBHDuQ"
                alt="Dynamic 3D clay character posing with a web layout"
                fill
                priority
                className="object-cover scale-105"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="floating-icon -top-8 -left-8 -rotate-12 z-30"
            >
              <MdBrush className="text-4xl text-[#ff7e47] font-bold" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="floating-icon top-1/4 -right-10 rotate-12 z-30"
            >
              <MdCode className="text-4xl text-[#4facfe] font-bold" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="floating-icon -bottom-6 right-1/4 -rotate-6 z-30"
            >
              <MdShoppingBag className="text-4xl text-[#f9d423] font-bold" />
            </motion.div>
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="floating-icon bottom-1/3 -left-12 rotate-6 z-30"
            >
              <MdTrendingUp className="text-4xl text-green-400 font-bold" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <div className="relative h-32 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-full fill-[#ff7e47]" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <section className="bg-[#ff7e47] py-24 px-6" id="portfolio">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <p className="text-white/80 font-bold uppercase tracking-[0.2em] text-sm">Community Favorites</p>
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">The Local Gallery</h2>
            </div>
            {/* ... arrow buttons can be functional or removed if not needed for grid */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project 1 - Sturdy Renovations */}
            <div className="group clay-card rounded-[2.5rem] p-5 bg-white dark:bg-[#1a1625] hover:-translate-y-3 transition-all duration-500">
              <div className="w-full aspect-[4/3] rounded-[1.8rem] overflow-hidden mb-8 relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC33hgALqg1qVREe7dRghMOLOWSxBj6pd4kIcz9DPXOTAOoQy1NaZ-ro6e_T87KL__J7KxqoFESNCFm4KsyLoC1yiAW3PbV2q4zpLEcwrf6XIMg_uPN7MVgg4ObQOd7Ylo9mHlH6VdC2PXm-TRjlz64QXsyUX_8cSe9l3K8DjQKF7mBZsUEvoElU4-FZXWQQQ7bBgZHyj3mfHtWJSkYH3x5DlpVwVzAgjInncsNSd2J1MCu3PC4v-JbzUbMWhVyBipVxleETVTnNfk"
                  alt="Sturdy Renovations project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-5 left-5 bg-white/95 px-4 py-2 rounded-full text-xs font-bold text-[#ff7e47] shadow-lg uppercase tracking-wider">Construction</div>
              </div>
              <div className="px-3 pb-4 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-[#ff7e47] transition-colors">Sturdy Renovations</h3>
                  <p className="text-gray-500 font-medium">High-Ticket Construction Sales Funnel. Built to build trust.</p>
                </div>
                <Link href="/projects/sturdy-renovations" className="w-full py-4 rounded-2xl bg-gray-50 dark:bg-white/5 font-bold text-sm hover:bg-[#ff7e47] hover:text-white transition-all border-2 border-transparent hover:border-white/20 shadow-inner flex items-center justify-center gap-2">
                  View Story <MdArrowOutward className="text-lg" />
                </Link>
              </div>
            </div>

            {/* Project 2 - Paws & Play */}
            <div className="group clay-card rounded-[2.5rem] p-5 bg-white dark:bg-[#1a1625] hover:-translate-y-3 transition-all duration-500">
              <div className="w-full aspect-[4/3] rounded-[1.8rem] overflow-hidden mb-8 relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjK8ejHTTTFsyt05-4xVzp3SaREJfDnC-vJn_WJXc9Xeah1z6xESOLv9ulTYmJYTvfZs3ETk2XLQbKAOPGjxQmgBJKpeMIWyfbSjPEbam8WAEVbAOn-mzgrlyQ_y-BaRfGmsmy1MgvWwgZOSO_Smn60uHI2KZpZ_6f1Ukwf7hhnsK68KCbEwujJvtssGc10JTsxoo5WRXghNp0FpyVjFnulh1YS-iSfapQ5nAM0ZL7hArCFysvjJxnMmnBTithhG_JYYEvYJAQtew"
                  alt="Paws & Play project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-5 left-5 bg-white/95 px-4 py-2 rounded-full text-xs font-bold text-[#ff7e47] shadow-lg uppercase tracking-wider">Pet Grooming</div>
              </div>
              <div className="px-3 pb-4 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-[#ff7e47] transition-colors">Paws & Play</h3>
                  <p className="text-gray-500 font-medium">Service Booking Platform. Friendly, fast, and mobile-first.</p>
                </div>
                <Link href="/projects/paws-and-play" className="w-full py-4 rounded-2xl bg-gray-50 dark:bg-white/5 font-bold text-sm hover:bg-[#ff7e47] hover:text-white transition-all border-2 border-transparent hover:border-white/20 shadow-inner flex items-center justify-center gap-2">
                  View Story <MdArrowOutward className="text-lg" />
                </Link>
              </div>
            </div>

            {/* Project 3 - The Sweet Corner */}
            <div className="group clay-card rounded-[2.5rem] p-5 bg-white dark:bg-[#1a1625] hover:-translate-y-3 transition-all duration-500">
              <div className="w-full aspect-[4/3] rounded-[1.8rem] overflow-hidden mb-8 relative">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPV6sqG3Wf0gbrlf5yl1OqtiooVt-lDswdiTKT8HQ-OHZX_6RoP5uYlWJ7KY8oLyvtOjgoT4iGdQmrzESrR7LqZ2XVlsB5Mezf9iI47RDXafd4xJLVsiMqzRUytmYY1WoGZj1DTgQ5TWbqPdkr5jRg7Pk-50rIJB_IMQVAqdJhyAYjwVQ06TQXyHeP4iM7S0Q35nLUgmMR7MqTH9lJS8Hhrmzs-Pg_9CncIlqTdeiRSPXDyskIfvPsa6AqQ4K3_r_l7Ipm0RynQVY"
                  alt="The Sweet Corner project"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-5 left-5 bg-white/95 px-4 py-2 rounded-full text-xs font-bold text-[#ff7e47] shadow-lg uppercase tracking-wider">Artisan Bakery</div>
              </div>
              <div className="px-3 pb-4 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold group-hover:text-[#ff7e47] transition-colors">The Sweet Corner</h3>
                  <p className="text-gray-500 font-medium">Visual-First E-commerce. Designed to drive foot traffic.</p>
                </div>
                <Link href="/projects/sweet-corner" className="w-full py-4 rounded-2xl bg-gray-50 dark:bg-white/5 font-bold text-sm hover:bg-[#ff7e47] hover:text-white transition-all border-2 border-transparent hover:border-white/20 shadow-inner flex items-center justify-center gap-2">
                  View Story <MdArrowOutward className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative h-32 w-full overflow-hidden leading-[0] bg-[#fffaf0] dark:bg-[#1a1625]">
        <svg className="relative block w-full h-full fill-[#ff7e47] rotate-180" data-name="Layer 1" preserveAspectRatio="none" viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <section className="py-32 px-6" id="services">
        <div className="max-w-[1200px] mx-auto">
          {/* ... existing services content */}
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <span className="bg-[#4facfe]/10 text-[#4facfe] px-6 py-2 rounded-full text-sm font-extrabold uppercase tracking-widest border border-[#4facfe]/20">How I help you grow</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">The Digital Toolbox</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">Professional results with a human touch. I use the latest tech to build tools that feel as friendly as a neighborhood shop.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="clay-card p-12 rounded-[3rem] flex flex-col items-center text-center gap-8 group hover:-translate-y-4 transition-all duration-500">
              <div className="size-24 rounded-[2rem] bg-[#ff7e47]/10 flex items-center justify-center text-[#ff7e47] group-hover:scale-110 transition-transform">
                <MdDevices className="text-5xl" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Web Craft</h3>
                <p className="text-gray-500 leading-relaxed font-medium">Bespoke websites designed to tell your unique local story across all screens.</p>
              </div>
            </div>
            <div className="clay-card p-12 rounded-[3rem] flex flex-col items-center text-center gap-8 group hover:-translate-y-4 transition-all duration-500">
              <div className="size-24 rounded-[2rem] bg-[#4facfe]/10 flex items-center justify-center text-[#4facfe] group-hover:scale-110 transition-transform">
                <MdShoppingCart className="text-5xl" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Shop Flow</h3>
                <p className="text-gray-500 leading-relaxed font-medium">Smooth e-commerce setups that make buying from you a delightful walk in the park.</p>
              </div>
            </div>
            <div className="clay-card p-12 rounded-[3rem] flex flex-col items-center text-center gap-8 group hover:-translate-y-4 transition-all duration-500">
              <div className="size-24 rounded-[2rem] bg-[#f9d423]/10 flex items-center justify-center text-[#f9d423] group-hover:scale-110 transition-transform">
                <MdShareLocation className="text-5xl" />
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold">Local SEO</h3>
                <p className="text-gray-500 leading-relaxed font-medium">Be the first name your neighbors see when they&apos;re searching for your services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section - NEW */}
      <section className="py-24 px-6 bg-[#fdf2e9] dark:bg-[#211c2e]" id="pricing">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">Pricing Packages</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Transparent pricing for every stage of your business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, i) => (
              <div key={i} className={`clay-card p-8 rounded-[2.5rem] flex flex-col gap-6 ${pkg.popular ? 'scale-105 border-[#ff7e47] border-4' : ''}`}>
                {pkg.popular && <span className="bg-[#ff7e47] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest w-fit mx-auto -mt-4">Most Popular</span>}
                <div className={`size-16 rounded-2xl flex items-center justify-center text-3xl shadow-md ${pkg.color}`}>
                  {i === 0 ? '🚀' : i === 1 ? '📈' : '💎'}
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-gray-500">/project</span>
                  </div>
                  <p className="text-gray-500 mt-4 text-sm font-medium">{pkg.description}</p>
                </div>
                <ul className="space-y-3">
                  {pkg.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-bold text-gray-600 dark:text-gray-300">
                      <div className="size-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                        <MdCheck className="text-xs" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-bold shadow-lg transition-transform active:scale-95 ${pkg.btnColor}`}>
                  Choose {pkg.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="relative">
            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-16 z-10">
              <button 
                onClick={prevTestimonial}
                className="size-12 rounded-full bg-white dark:bg-[#2d2a3d] shadow-lg flex items-center justify-center text-[#2d2a3d] dark:text-white hover:scale-110 active:scale-95 transition-all border-b-4 border-gray-200 dark:border-white/10"
                aria-label="Previous review"
              >
                <MdArrowBack className="text-xl" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-16 z-10">
              <button 
                onClick={nextTestimonial}
                className="size-12 rounded-full bg-white dark:bg-[#2d2a3d] shadow-lg flex items-center justify-center text-[#2d2a3d] dark:text-white hover:scale-110 active:scale-95 transition-all border-b-4 border-gray-200 dark:border-white/10"
                aria-label="Next review"
              >
                <MdArrowForward className="text-xl" />
              </button>
            </div>

            <div className="overflow-hidden">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                  {visibleTestimonials.map((testimonial, idx) => (
                    <div
                      key={`${currentTestimonial}-${idx}`}
                      className={`relative clay-card bg-white dark:bg-[#2d2a3d] p-10 rounded-[2.5rem] ${idx === 0 ? 'rounded-bl-none' : 'rounded-br-none md:mt-16'}`}
                    >
                      <MdFormatQuote className={`text-6xl opacity-20 absolute top-4 right-6 font-bold ${testimonial.color}`} />
                      <p className="text-xl font-bold leading-relaxed mb-8 italic min-h-[120px] flex items-center">&quot;{testimonial.quote}&quot;</p>
                      <div className="flex items-center gap-5">
                        <div className={`relative size-16 rounded-2xl shadow-lg overflow-hidden border-2 border-white ${testimonial.bgColor}`}>
                          <Image 
                            src={testimonial.img}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-lg">{testimonial.name}</p>
                          <p className={`text-sm font-bold uppercase tracking-widest ${testimonial.color}`}>{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 relative" id="about">
        <div className="max-w-[900px] mx-auto text-center space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">Ready to <span className="text-[#ff7e47] italic">wow</span> your customers?</h2>
          <p className="text-2xl font-medium text-gray-600 dark:text-gray-400">Let&apos;s build something beautiful together. First coffee is on me! ☕</p>
          <div className="clay-card p-10 md:p-16 rounded-[4rem] relative overflow-hidden">
            <div className="absolute -top-10 -right-10 size-40 bg-[#f9d423]/20 rounded-full blur-3xl"></div>
            <form onSubmit={handleContactSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <input className="bg-gray-100 dark:bg-[#1a1625] border-none rounded-2xl px-8 py-5 focus:ring-4 focus:ring-[#ff7e47]/30 font-bold placeholder:text-gray-400 outline-none" placeholder="Your Name" type="text" required />
              <input className="bg-gray-100 dark:bg-[#1a1625] border-none rounded-2xl px-8 py-5 focus:ring-4 focus:ring-[#ff7e47]/30 font-bold placeholder:text-gray-400 outline-none" placeholder="Business Email" type="email" required />
              <textarea className="md:col-span-2 bg-gray-100 dark:bg-[#1a1625] border-none rounded-[2rem] px-8 py-5 focus:ring-4 focus:ring-[#ff7e47]/30 font-bold placeholder:text-gray-400 h-40 outline-none" placeholder="Tell me about your big vision..." required></textarea>
              <button type="submit" className="md:col-span-2 clay-button-primary py-6 rounded-[2rem] text-2xl font-bold flex items-center justify-center gap-3">
                Send Invite <span>✉️</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="py-16 bg-white dark:bg-[#110e1a] border-t-8 border-[#ff7e47]/10">
        {/* ... existing footer content */}
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-3">
            <div className="size-8 bg-[#ff7e47] rounded-xl flex items-center justify-center text-white shadow-lg">
              <MdRocketLaunch className="text-lg" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">Developer Chowk</h2>
          </div>
          <p className="text-gray-400 font-bold">© {new Date().getFullYear()} Built with squishy magic in your neighborhood.</p>
          <div className="flex gap-4">
            <a className="size-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[#ff7e47] hover:bg-[#ff7e47] hover:text-white transition-all shadow-sm" href="#"><MdAlternateEmail /></a>
            <a className="size-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[#ff7e47] hover:bg-[#ff7e47] hover:text-white transition-all shadow-sm" href="#"><MdMap /></a>
            <a className="size-12 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-[#ff7e47] hover:bg-[#ff7e47] hover:text-white transition-all shadow-sm" href="#"><MdPerson /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

