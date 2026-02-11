"use client";

import { useState } from "react";
import { 
  MdMenu, 
  MdClose, 
  MdArrowForward,
  MdMail,
  MdLocationOn,
  MdSend
} from "react-icons/md";
import {
  MdArchitecture,
  MdCode,
  MdRocketLaunch,
  MdDomain,
  MdApi,
  MdDashboard,
  MdSpeed,
  MdVerifiedUser,
  MdLock,
  MdSecurity,
  MdArrowOutward,
  MdFiberManualRecord
} from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

import InteractiveTechBg from "@/components/InteractiveTechBg";
import SectionGridBg from "@/components/SectionGridBg";

export default function EnterprisePortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    toast.success("Inquiry sent successfully! We typically respond within 24 hours.");
  };

  return (
    <div className="bg-slate-900 font-[family-name:var(--font-plus-jakarta-sans)] text-slate-100 antialiased selection:bg-primary selection:text-white overflow-x-hidden min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center text-white font-extrabold text-2xl shadow-lg shadow-primary/30">
                DC
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white leading-none">Developer Chowk</span>
                <span className="text-xs text-slate-400 font-medium tracking-widest uppercase mt-0.5">Enterprise Solutions</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-10">
              <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors uppercase tracking-wide" href="#process">Process</a>
              <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors uppercase tracking-wide" href="#services">Services</a>
              <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors uppercase tracking-wide" href="#portfolio">Work</a>
              <Link className="inline-flex items-center justify-center px-6 py-2.5 border border-white/10 text-sm font-bold rounded-lg text-white bg-white/5 hover:bg-primary transition-all backdrop-blur-sm" href="#contact">
                Hire For Project
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white focus:outline-none" 
                type="button"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <MdClose className="text-3xl" /> : <MdMenu className="text-3xl" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-slate-900 border-b border-white/10 overflow-hidden"
            >
              <div className="px-4 py-8 space-y-4">
                <a onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-slate-300" href="#process">Process</a>
                <a onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-slate-300" href="#services">Services</a>
                <a onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-slate-300" href="#portfolio">Work</a>
                <Link onClick={() => setIsMenuOpen(false)} className="block w-full py-4 text-center bg-primary rounded-xl font-bold" href="#contact">Hire For Project</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
            <InteractiveTechBg />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent z-10"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20 w-full py-12 lg:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-left"
              >
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8 backdrop-blur-md">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Full-Stack Web Developer
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
                  Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-indigo-500">Websites & Software</span><br/>
                  to Grow Your Business.
                </h1>
                <p className="text-lg sm:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
                  Hi, I&apos;m Sanjay, a web developer based in Lucknow. I build fast, reliable websites and custom booking systems for local businesses and growing startups.
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                  <a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-primary hover:bg-blue-600 transition-all shadow-lg shadow-primary/25" href="#contact">
                    Start Your Project
                    <MdArrowForward className="ml-2 text-xl" />
                  </a>
                  <a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-slate-300 border border-white/10 hover:bg-white/5 hover:text-white transition-all backdrop-blur-sm" href="#process">
                    Our Process
                  </a>
                </div>
                <div className="mt-12 flex flex-wrap items-center gap-6 text-slate-500 text-sm font-semibold">
                  <div className="flex items-center gap-2">
                    <MdVerifiedUser className="text-green-500 text-xl" />
                    SOC2 Compliant
                  </div>
                  <div className="flex items-center gap-2">
                    <MdLock className="text-blue-500 text-xl" />
                    End-to-End Encryption
                  </div>
                  <div className="flex items-center gap-2">
                    <MdSpeed className="text-purple-500 text-xl" />
                    99.9% Uptime
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="hidden lg:block relative h-[600px]"
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                
                {/* Status Card */}
                <div className="absolute right-0 top-10 w-80 glass-panel rounded-2xl p-6 transform rotate-6 hover:rotate-0 transition-transform duration-500 z-10 shadow-2xl">
                  <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">Status: Deployed</span>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="space-y-3 font-mono text-xs text-slate-300">
                    <div className="flex justify-between"><span className="text-blue-400">Total Users</span> <span>142,893</span></div>
                    <div className="flex justify-between"><span className="text-green-400">Active Sessions</span> <span>8,234</span></div>
                    <div className="flex justify-between"><span className="text-purple-400">Server Load</span> <span>24%</span></div>
                    <div className="mt-4 h-32 bg-slate-800/50 rounded-lg flex items-end justify-between px-2 pb-2 gap-1">
                      <motion.div initial={{ height: 0 }} animate={{ height: "40%" }} className="w-full bg-primary/30 rounded-sm"></motion.div>
                      <motion.div initial={{ height: 0 }} animate={{ height: "60%" }} className="w-full bg-primary/40 rounded-sm"></motion.div>
                      <motion.div initial={{ height: 0 }} animate={{ height: "30%" }} className="w-full bg-primary/50 rounded-sm"></motion.div>
                      <motion.div initial={{ height: 0 }} animate={{ height: "80%" }} className="w-full bg-primary/60 rounded-sm"></motion.div>
                      <motion.div initial={{ height: 0 }} animate={{ height: "50%" }} className="w-full bg-primary/80 rounded-sm"></motion.div>
                      <motion.div initial={{ height: 0 }} animate={{ height: "75%" }} className="w-full bg-primary rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.5)]"></motion.div>
                    </div>
                  </div>
                </div>

                {/* Audit Card */}
                <div className="absolute left-10 top-40 w-72 glass-panel rounded-2xl p-5 transform -rotate-3 hover:rotate-0 transition-transform duration-500 z-20 shadow-xl border-l-4 border-l-green-500">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded bg-green-500/10 text-green-400">
                      <MdSecurity className="text-xl" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white">Security Audit</div>
                      <div className="text-xs text-slate-400">Passed Successfully</div>
                    </div>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-1.5 mb-2">
                    <div className="bg-green-500 h-1.5 rounded-full w-full"></div>
                  </div>
                </div>

                {/* Tech Badge */}
                <div className="absolute right-20 bottom-20 w-64 glass-panel rounded-2xl p-4 transform rotate-2 hover:rotate-0 transition-transform duration-500 z-30 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-bold border border-white/20 uppercase">JS</div>
                  <div>
                    <div className="text-xs font-bold text-white">Latest Tech Stack</div>
                    <div className="text-[10px] text-slate-400 font-mono">Next.js 15 + Node + MongoDB</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 relative bg-slate-900 border-t border-white/5" id="process">
          <SectionGridBg />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Workflow</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">How I Work</h3>
              <p className="text-base md:text-lg text-slate-400 px-4">A transparent, agile process designed to deliver professional results on time.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
              <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0"></div>
              
              {[
                { step: "1", icon: MdArchitecture, title: "Planning & Design", desc: "I analyze your business requirements, define technical specifications, and design a scalable solution before writing code." },
                { step: "2", icon: MdCode, title: "Development", desc: "Iterative development cycles with weekly updates. I build the logic and interface simultaneously, ensuring quality through testing." },
                { step: "3", icon: MdRocketLaunch, title: "Launch & Support", desc: "Deployment to professional servers with security and performance monitoring. I provide ongoing support to help you scale." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="relative z-10 group"
                >
                  <div className="bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-slate-800/60 transition-all duration-300 h-full">
                    <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full border border-primary/20 flex items-center justify-center mb-8 relative shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-300">
                      <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg">{item.step}</span>
                      <item.icon className="text-4xl text-blue-400" />
                    </div>
                    <h4 className="text-xl font-bold text-white text-center mb-4">{item.title}</h4>
                    <p className="text-slate-400 text-center text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 relative bg-slate-950" id="services">
          <SectionGridBg />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
              <div className="max-w-2xl">
                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">My Expertise</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-white">Digital Solutions</h3>
              </div>
              <a className="text-primary hover:text-white font-semibold flex items-center gap-2 transition-colors group" href="#contact">
                Discuss your project <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                { icon: MdDomain, title: "Custom Web Development", desc: "Full-cycle development of custom websites and platforms from scratch. I handle the design, logic, and database to match your unique brand.", tags: ["Modern Tech", "Custom Design"] },
                { icon: MdApi, title: "Booking & E-commerce Systems", desc: "Specialized systems for appointments and online sales. I build seamless booking flows for services like beauty salons, clinics, or retail shops.", tags: ["Secure Payments", "Easy Scheduling"] },
                { icon: MdDashboard, title: "Business Dashboards", desc: "Helpful tools to track your sales, members, or business expenses. I build clear, easy-to-use panels that turn your data into insights.", tags: ["Sales Tracking", "Member Management"] },
                { icon: MdSpeed, title: "Site Optimization", desc: "Improving existing websites for better speed and search ranking. I help your local business get found by more customers online.", tags: ["Fast Loading", "SEO Optimized"] }
              ].map((service, idx) => (
                <div key={idx} className="group relative p-6 sm:p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300">
                      <service.icon className="text-2xl sm:text-3xl" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">
                        {service.desc}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2">
                        {service.tags.map((tag, tIdx) => (
                          <li key={tIdx} className="flex items-center text-xs text-slate-500 font-mono uppercase tracking-tight">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>{tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 md:py-24 relative bg-slate-900" id="portfolio">
          <SectionGridBg />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-center text-center mb-16">
              <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-3">Portfolio</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Recent Client Work</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  title: "Local Beauty Booking", 
                  category: "Booking System", 
                  desc: "Custom appointment platform for a beauty studio with automated scheduling and reminders.", 
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAbreRqoDR3T2VIrbr-rqxoMYJLiSu2wTdU-R7sIhE9eNJnKE7grBQfQzeFXRwtiv6w7f1Q9EGvpn0fb56eALy1zDSokU8vmvcSIU5-nshK5VmEb1j8ObWRjAfFZ_4fqLCwZLxzroZxdHoMyss-PoueFH7JViDsJ2V_bVydja8haLrqMiZSkinqzxVfJ-Bmc_VPI790cHW9lDNAqH0qkH6dsuFFKcs89Hq6WWaPuRQgPFe93pLTrHkJoqSXUv4aNctPwRUc81ogc0Y",
                  link: "#",
                  tech: ["React", "Firebase", "Tailwind"]
                },
                { 
                  title: "FitTrack Enterprise", 
                  category: "FinTech", 
                  desc: "Gym management ERP handling billing, staff scheduling, and member analytics.", 
                  img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYK9Wo4ja9F4frW69U2Ngz2U8TWGqEXpOWrys8Z8i9DyNHbZ3NowzGtMG7PhNaBPPb_VpXZX4Oimd2fQKPascWkez7J0TTnedkc9zm3UMbUGH7znkc9r8-8oj46OLZB9hfPFzK6ss3C21TnE9y6sVG_aaXtKAkmUfgENSiadkY5pu7imeZztz7j1rKYQp-CPeU-3yAdyTkqxmGE3G1cV3IktzSZ74oGxXnVQq2-2w8BEud6Ca-KNNsawddfGB-WHCeuNE7CbycC3A",
                  link: "#",
                  tech: ["React", "Stripe", "Express"]
                },
                { 
                  title: "Infrastructure SSR", 
                  category: "Cloud", 
                  desc: "Custom SSR portfolio on Oracle Linux with Nginx, PM2, and Cloudflare Zero-Trust.", 
                  img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2074&auto=format&fit=crop",
                  repo: "https://github.com/sanjayasd45/portfolio",
                  link: "#",
                  tech: ["Next.js", "Nginx", "Linux"]
                }
              ].map((project, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -8 }}
                  className="group relative flex flex-col bg-slate-900/40 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden shadow-xl"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Image Container */}
                  <div className="aspect-[16/10] w-full relative overflow-hidden">
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 z-20 flex gap-2">
                      {project.repo && (
                        <a 
                          href={project.repo} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="size-8 rounded-lg bg-slate-900/80 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300" 
                          aria-label="Github"
                        >
                          <FaGithub className="text-lg" />
                        </a>
                      )}
                      <a 
                        href={project.link} 
                        className="size-8 rounded-lg bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:bg-blue-600 transition-all duration-300" 
                        aria-label="View Live"
                      >
                        <MdArrowOutward className="text-lg" />
                      </a>
                    </div>
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-5 flex flex-col flex-1 relative z-10">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                        {project.category}
                      </span>
                      <div className="flex gap-1 overflow-hidden">
                        {project.tech.map((t, i) => (
                          <span key={i} className="text-[8px] font-mono text-slate-500 uppercase truncate">{t}{i < project.tech.length - 1 && " •"}</span>
                        ))}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
                      {project.desc}
                    </p>
                    
                    <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                      <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Active System</span>
                      <div className="flex gap-1">
                        <div className="size-1 rounded-full bg-primary" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-24 relative bg-slate-950 border-t border-slate-800 overflow-hidden" id="contact">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-primary text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                  Accepting New Projects
                </div>
                <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
                  Ready to grow your <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">business?</span>
                </h2>
                <p className="text-lg text-slate-400 mb-12 leading-relaxed font-light">
                  Discuss your project directly with me. Get a technical consultation and a roadmap for your next digital product.
                </p>
                <div className="space-y-8">
                  <div className="flex group">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shadow-lg">
                        <MdMail className="text-2xl" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                      <a className="text-slate-400 hover:text-primary transition-colors" href="mailto:sanjay@developerchowk.com">sanjay@developerchowk.com</a>
                    </div>
                  </div>
                  <div className="flex group">
                    <div className="flex-shrink-0 mr-6">
                      <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-primary group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shadow-lg">
                        <MdLocationOn className="text-2xl" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-1">HQ Location</h4>
                      <p className="text-slate-400">Lucknow, India</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-indigo-600 rounded-2xl blur opacity-30"></div>
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl">
                  <form onSubmit={handleInquirySubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300" htmlFor="name">Name</label>
                        <input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-inner" id="name" placeholder="John Doe" type="text" required />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-300" htmlFor="email">Email</label>
                        <input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-inner" id="email" placeholder="john@company.com" type="email" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300" htmlFor="project-type">Project Type</label>
                      <select 
                        className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-inner cursor-pointer" 
                        id="project-type" 
                        required
                        defaultValue=""
                      >
                        <option value="" disabled>Select Engagement Model</option>
                        <option value="saas">SaaS Platform Development</option>
                        <option value="webapp">Enterprise Web Application</option>
                        <option value="api">API & Microservices</option>
                        <option value="consulting">Technical Consultancy</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-300" htmlFor="message">Message</label>
                      <textarea className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all shadow-inner resize-none" id="message" placeholder="Describe your project requirements, timeline, and goals..." rows="4" required></textarea>
                    </div>
                    <button className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 group mt-2" type="submit">
                      Send Inquiry
                      <MdSend className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="text-xs text-center text-slate-500 mt-2">
                      By sending this form, you agree to our privacy policy. We typically respond within 24 hours.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 border-t border-white/5 pt-8 md:pt-12 pb-6 md:pb-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-10">
            <div className="space-y-4 md:space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg">
                  DC
                </div>
                <span className="font-bold text-xl tracking-tight text-white leading-none">Developer Chowk</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                Custom MERN stack solutions for ambitious startups and local businesses. I build scalable, secure, and performant digital ecosystems.
              </p>
              <div className="flex items-center gap-4 text-slate-500">
                <MdLock className="text-sm" />
                <span className="text-[10px] font-mono uppercase tracking-widest">Trust Verified Vendor</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 md:mb-6">Solutions</h4>
              <ul className="space-y-2 md:space-y-3">
                {["SaaS Product Engineering", "API & Microservices", "Enterprise Dashboards", "Legacy Modernization"].map((item, i) => (
                  <li key={i}>
                    <a className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group" href="#services">
                      <MdFiberManualRecord className="text-[6px] mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 md:mb-6">Resources</h4>
              <ul className="space-y-2 md:space-y-3">
                {["Methodology", "Case Studies", "Privacy Policy", "Terms of Service"].map((item, i) => (
                  <li key={i}>
                    <a className="text-slate-400 hover:text-primary transition-colors text-sm flex items-center group" href={i < 2 ? (i === 0 ? "#process" : "#portfolio") : "#"}>
                      <MdFiberManualRecord className="text-[6px] mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-4 md:mb-6">Headquarters</h4>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-start gap-4">
                  <MdLocationOn className="text-primary text-xl mt-1" />
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Lucknow, Uttar Pradesh<br/>
                    India — 226010
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <MdMail className="text-primary text-xl" />
                  <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="mailto:sanjay@developerchowk.com">sanjay@developerchowk.com</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <p className="text-slate-500 text-xs font-medium">
              © {new Date().getFullYear()} Developer Chowk. All rights reserved. Managed by Sanjay.
            </p>
            <div className="flex items-center gap-6">
              <a className="text-slate-500 hover:text-primary transition-all duration-300" href="#" aria-label="LinkedIn">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a className="text-slate-500 hover:text-primary transition-all duration-300" href="#" aria-label="GitHub">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
              </a>
              <a className="text-slate-500 hover:text-primary transition-all duration-300" href="#" aria-label="Twitter">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-[40%] h-[30%] bg-primary/5 blur-[100px] pointer-events-none"></div>
      </footer>
    </div>
  );
}
