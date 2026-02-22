"use client";

import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-slate-900/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-4">
            <Image 
              src="/logo1.png" 
              alt="Developer Chowk Logo" 
              width={48} 
              height={48} 
              className="rounded-xl shadow-lg shadow-blue-500/10"
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-white leading-none">Developer Chowk</span>
              <span className="text-xs text-slate-400 font-medium tracking-widest uppercase mt-0.5">Enterprise Solutions</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-10">
            <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors uppercase tracking-wide" href="#process">Process</a>
            <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors uppercase tracking-wide" href="#services">Services</a>
            <a className="text-sm font-semibold text-slate-300 hover:text-white transition-colors uppercase tracking-wide" href="#portfolio">Work</a>
            <Link className="inline-flex items-center justify-center px-6 py-2.5 border border-white/10 text-sm font-bold rounded-lg text-white bg-white/5 hover:bg-blue-500 transition-all backdrop-blur-sm" href="#contact">
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
              <Link onClick={() => setIsMenuOpen(false)} className="block w-full py-4 text-center bg-blue-500 rounded-xl font-bold text-white" href="#contact">Hire For Project</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
