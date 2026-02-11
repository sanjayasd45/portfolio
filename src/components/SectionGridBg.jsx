"use client";

import { motion } from "framer-motion";

export default function SectionGridBg() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Moving Beams */}
      <motion.div 
        animate={{ 
          x: ["-100%", "200%"],
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear",
          delay: 2
        }}
        className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
      
      <motion.div 
        animate={{ 
          y: ["-100%", "200%"],
        }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "linear",
          delay: 5
        }}
        className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent"
      />
    </div>
  );
}
