"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import SectionGridBg from "@/components/SectionGridBg";

export default function Portfolio() {
  const projects = [
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
  ];

  return (
    <section className="py-16 md:py-24 relative bg-slate-900" id="portfolio">
      <SectionGridBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-3">Portfolio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Recent Client Work</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col bg-slate-900/40 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-500 overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="aspect-[16/10] w-full relative overflow-hidden">
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill
                  priority={idx === 0}
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-transparent transition-colors duration-500" />
                
                <div className="absolute top-3 right-3 z-20 flex gap-2">
                  {project.repo && (
                    <a 
                      href={project.repo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="size-8 rounded-lg bg-slate-900/80 backdrop-blur-md text-white border border-white/10 flex items-center justify-center hover:bg-blue-500 hover:border-blue-500 transition-all duration-300" 
                      aria-label="Github"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  )}
                  <a 
                    href={project.link} 
                    className="size-8 rounded-lg bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition-all duration-300" 
                    aria-label="View Live"
                  >
                    <MdArrowOutward className="text-lg" />
                  </a>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-1 relative z-10">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-blue-500 bg-blue-500/10 px-2 py-0.5 rounded">
                    {project.category}
                  </span>
                  <div className="flex gap-1 overflow-hidden">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-[8px] font-mono text-slate-500 uppercase truncate">{t}{i < project.tech.length - 1 && " •"}</span>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 text-xs leading-relaxed mb-4 line-clamp-2">
                  {project.desc}
                </p>
                
                <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">Active System</span>
                  <div className="flex gap-1">
                    <div className="size-1 rounded-full bg-blue-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
