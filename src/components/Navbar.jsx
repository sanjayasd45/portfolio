"use client";

import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl transition-colors duration-200" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
            <Image
              src="/logo1.png"
              alt="Developer Chowk Logo"
              width={44}
              height={44}
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-xl shadow-sm group-hover:scale-105 transition-transform duration-200"
              priority
              quality={95}
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white leading-none">Developer Chowk</span>
            </div>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-sm font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors uppercase tracking-wide" href="/#process">Process</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors uppercase tracking-wide" href="/#services">Services</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors uppercase tracking-wide" href="/#portfolio">Work</Link>
            <Link className="text-sm font-semibold text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white transition-colors uppercase tracking-wide" href="/blog">Blog</Link>
            
            <ThemeToggle />

            <Link className="inline-flex items-center justify-center px-6 py-2.5 border border-slate-200 dark:border-white/10 text-sm font-bold rounded-lg text-slate-800 dark:text-white bg-slate-100/80 dark:bg-white/5 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 transition-all backdrop-blur-sm shadow-sm" href="/#contact">
              Start a Project
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-100 dark:focus:ring-offset-slate-900 rounded-lg p-1.5"
              type="button"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <MdClose className="text-3xl" aria-hidden="true" /> : <MdMenu className="text-3xl" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — CSS animated, no framer-motion */}
      <div
        className={`md:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isMenuOpen}
      >
        <div className="px-4 py-8 space-y-4">
          <Link onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors" href="/#process">Process</Link>
          <Link onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors" href="/#services">Services</Link>
          <Link onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors" href="/#portfolio">Work</Link>
          <Link onClick={() => setIsMenuOpen(false)} className="block text-lg font-bold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors" href="/blog">Blog</Link>
          <Link onClick={() => setIsMenuOpen(false)} className="block w-full py-4 text-center bg-blue-500 rounded-xl font-bold text-white hover:bg-blue-600 transition-colors shadow-md" href="/#contact">Start a Project</Link>
        </div>
      </div>
    </nav>
  );
}
