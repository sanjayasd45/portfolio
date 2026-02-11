"use client";

export default function SectionGridBg() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Moving Beams using pure CSS for performance */}
      <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-beam-x"></div>
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent animate-beam-y"></div>

      <style jsx>{`
        @keyframes beamX {
          0% { transform: translateX(-100%); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateX(200%); opacity: 0; }
        }
        @keyframes beamY {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 0.2; }
          100% { transform: translateY(200%); opacity: 0; }
        }
        .animate-beam-x {
          animation: beamX 12s linear infinite;
          animation-delay: 2s;
        }
        .animate-beam-y {
          animation: beamY 18s linear infinite;
          animation-delay: 5s;
        }
      `}</style>
    </div>
  );
}
