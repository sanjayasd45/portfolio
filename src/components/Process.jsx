import { MdArchitecture, MdCode, MdRocketLaunch } from "react-icons/md";
import SectionGridBg from "@/components/SectionGridBg";

export default function Process() {
  const steps = [
    {
      step: "1",
      week: "Day 1",
      icon: MdArchitecture,
      title: "Discovery & Quote",
      desc: "We have a free call — you explain the problem, I ask questions and map out the solution. You get a fixed-price quote with a clear scope before any work starts.",
      badge: "Free",
    },
    {
      step: "2",
      week: "Days 2–10",
      icon: MdCode,
      title: "Build & Review",
      desc: "I build fast and share progress every few days. You review, give feedback, I refine. No black boxes — you always know exactly where things stand.",
      badge: "Daily Updates",
    },
    {
      step: "3",
      week: "Week 1–2",
      icon: MdRocketLaunch,
      title: "Launch & Support",
      desc: "I handle the full deployment — server, domain, SSL, caching. Your site goes live fast and secure. Then I stay on call for 30 days of free post-launch support.",
      badge: "30-Day Support",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-slate-900 border-t border-white/5" id="process">
      <SectionGridBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-3">No Surprises</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
          <p className="text-base md:text-lg text-slate-400 px-4">
            From first conversation to live website — here&apos;s exactly what working with me looks like.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-14 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-0"></div>

          {steps.map((item, idx) => (
            <div
              key={idx}
              className="relative z-10 group animate-fade-in-up"
              style={{ animationDelay: `${idx * 150}ms`, animationFillMode: "both" }}
            >
              <div className="bg-slate-800/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:bg-slate-800/60 transition-all duration-300 h-full">
                <div className="w-24 h-24 mx-auto bg-slate-900 rounded-full border border-blue-500/20 flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-300">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">{item.step}</span>
                  <item.icon className="text-4xl text-blue-400" aria-hidden="true" />
                </div>
                {/* Week label */}
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
                    {item.week}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">{item.title}</h3>
                <p className="text-slate-400 text-center text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="text-center">
                  <span className="text-xs font-bold text-green-400 bg-green-500/10 px-3 py-1 rounded-full">
                    ✓ {item.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee line */}
        <p className="text-center text-slate-500 text-sm mt-10">
          <span className="text-slate-300 font-semibold">Not happy? </span>
          I offer a free revision round at every stage until you&apos;re satisfied.
        </p>
      </div>
    </section>
  );
}
