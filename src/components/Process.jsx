"use client";

import { motion } from "framer-motion";
import { MdArchitecture, MdCode, MdRocketLaunch } from "react-icons/md";
import SectionGridBg from "@/components/SectionGridBg";

export default function Process() {
  const steps = [
    { step: "1", icon: MdArchitecture, title: "Planning & Design", desc: "I analyze your business requirements, define technical specifications, and design a scalable solution before writing code." },
    { step: "2", icon: MdCode, title: "Development", desc: "Iterative development cycles with weekly updates. I build the logic and interface simultaneously, ensuring quality through testing." },
    { step: "3", icon: MdRocketLaunch, title: "Launch & Support", desc: "Deployment to professional servers with security and performance monitoring. I provide ongoing support to help you scale." }
  ];

  return (
    <section className="py-16 md:py-24 relative bg-slate-900 border-t border-white/5" id="process">
      <SectionGridBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-3">Workflow</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">How I Work</h3>
          <p className="text-base md:text-lg text-slate-400 px-4">A transparent, agile process designed to deliver professional results on time.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-0"></div>
          
          {steps.map((item, idx) => (
            <motion.div 
              key={idx}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="relative z-10 group"
            >
              <div className="bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-slate-800/60 transition-all duration-300 h-full">
                <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full border border-blue-500/20 flex items-center justify-center mb-8 relative shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-300">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">{item.step}</span>
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
  );
}
