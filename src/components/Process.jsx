import { MdArchitecture, MdCode, MdRocketLaunch } from "react-icons/md";
import SectionGridBg from "@/components/SectionGridBg";

export default function Process() {
  const steps = [
    {
      step: "1",
      week: "Phase 1",
      icon: MdArchitecture,
      title: "Technical Discovery & Scope",
      desc: "We align on your product requirements, user flows, and tech architecture. You receive a comprehensive fixed-price statement of work before any development begins.",
      badge: "Fixed Proposal",
    },
    {
      step: "2",
      week: "Phase 2",
      icon: MdCode,
      title: "Sprint Execution & Demos",
      desc: "Our engineering team builds in rapid, transparent sprints with live staging builds. You test features and guide iterations with zero black boxes.",
      badge: "Continuous Demos",
    },
    {
      step: "3",
      week: "Phase 3",
      icon: MdRocketLaunch,
      title: "Deployment & Scale",
      desc: "We manage complete deployment — cloud hosting, SSL, domain, CDN, and performance caching, backed by 30 days of dedicated agency support.",
      badge: "30-Day Warranty",
    },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-white/5 transition-colors duration-200" id="process">
      <SectionGridBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <p className="text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">Our Methodology</p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white mb-6">How Our Team Delivers</h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 px-4">
            From technical discovery to global deployment — here&apos;s how our agency turns your specifications into production reality.
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
              <div className="bg-white dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200 dark:border-white/5 rounded-2xl p-8 hover:bg-slate-50 dark:hover:bg-slate-800/60 shadow-lg dark:shadow-none hover:shadow-xl transition-all duration-300 h-full">
                <div className="w-24 h-24 mx-auto bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-blue-500/20 flex items-center justify-center mb-6 relative shadow-[0_0_30px_rgba(59,130,246,0.15)] group-hover:scale-110 transition-transform duration-300">
                  <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">{item.step}</span>
                  <item.icon className="text-4xl text-blue-600 dark:text-blue-400" aria-hidden="true" />
                </div>
                {/* Week label */}
                <div className="text-center mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest">
                    {item.week}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white text-center mb-3">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-center text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="text-center">
                  <span className="text-xs font-bold text-emerald-700 dark:text-green-400 bg-emerald-500/10 dark:bg-green-500/10 border border-emerald-500/20 px-3 py-1 rounded-full">
                    ✓ {item.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee line */}
        <p className="text-center text-slate-500 dark:text-slate-500 text-sm mt-10">
          <span className="text-slate-800 dark:text-slate-300 font-semibold">Quality Guaranteed: </span>
          We include iterative review rounds at every milestone until your team is 100% satisfied.
        </p>
      </div>
    </section>
  );
}
