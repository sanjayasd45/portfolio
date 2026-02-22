"use client";

import { motion } from "framer-motion";
import { MdArrowForward, MdVerifiedUser, MdLock, MdSpeed, MdSecurity } from "react-icons/md";
import dynamic from "next/dynamic";

const InteractiveTechBg = dynamic(() => import("@/components/InteractiveTechBg"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-slate-900/80 z-10"></div>
        <InteractiveTechBg />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent z-10"></div>
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Full-Stack Web Developer
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
              Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-indigo-500">Websites & Software</span><br/>
              to Grow Your Business.
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-xl mb-10 leading-relaxed font-light">
              Hi, I&apos;m Sanjay, a web developer based in Lucknow. I build fast, reliable websites and custom booking systems for local businesses and growing startups.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25" href="#contact">
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none"></div>
            
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
                  <motion.div initial={{ height: 0 }} animate={{ height: "40%" }} className="w-full bg-blue-500/30 rounded-sm"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: "60%" }} className="w-full bg-blue-500/40 rounded-sm"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: "30%" }} className="w-full bg-blue-500/50 rounded-sm"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: "80%" }} className="w-full bg-blue-500/60 rounded-sm"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: "50%" }} className="w-full bg-blue-500/80 rounded-sm"></motion.div>
                  <motion.div initial={{ height: 0 }} animate={{ height: "75%" }} className="w-full bg-blue-500 rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.5)]"></motion.div>
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
                <div className="text-[10px] text-slate-400 font-mono">Next.js 16 + Node + MongoDB</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
