import { MdDomain, MdApi, MdDashboard, MdSpeed, MdArrowForward, MdCheckCircle } from "react-icons/md";
import SectionGridBg from "@/components/SectionGridBg";

export default function Services() {
  const services = [
    {
      icon: MdDomain,
      problem: "No website — or embarrassed by the one you have?",
      title: "Custom Website Design & Development",
      desc: "I build fast, professional websites from scratch — tailored to your brand, your customers, and your goals. Not a template. Not a page-builder. A real, custom product.",
      outcomes: ["Loads in under 1 second", "Ranks on Google", "Looks great on all devices"],
    },
    {
      icon: MdApi,
      problem: "Losing bookings because there's no online scheduling?",
      title: "Booking & E-commerce Systems",
      desc: "A custom online booking system so your customers can schedule 24/7 — no phone calls, no back-and-forth. Integrated with payments, reminders, and your workflow.",
      outcomes: ["Reduce no-shows by 40%", "Accept bookings while you sleep", "Automated reminders"],
    },
    {
      icon: MdDashboard,
      problem: "No visibility into what's working in your business?",
      title: "Business Dashboards & Admin Panels",
      desc: "Turn your raw data into clear, visual dashboards — sales, attendance, billing, inventory. Know your numbers daily without digging through spreadsheets.",
      outcomes: ["Real-time data", "Staff management built-in", "Export reports instantly"],
    },
    {
      icon: MdSpeed,
      problem: "Your website is slow and nowhere to be found on Google?",
      title: "Speed & SEO Optimization",
      desc: "I audit your existing website, fix what's killing your rankings, and get your Lighthouse score to 90+. Faster sites rank higher and convert more.",
      outcomes: ["90+ Lighthouse score", "Rank for your key terms", "More organic leads"],
    },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-slate-950" id="services">
      <SectionGridBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-3">What I Build</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white">Solve Your Problem,<br />Not Just &ldquo;Build a Website&rdquo;</h2>
          </div>
          <a className="text-blue-500 hover:text-white font-semibold flex items-center gap-2 transition-colors group flex-shrink-0" href="#contact">
            Discuss your project <MdArrowForward className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group relative p-6 sm:p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                {/* Pain point label */}
                <p className="text-xs text-amber-400/80 font-semibold italic mb-4 border-l-2 border-amber-500/40 pl-3">
                  &ldquo;{service.problem}&rdquo;
                </p>
                <div className="flex gap-5 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-blue-500 group-hover:text-white group-hover:bg-blue-500 transition-colors duration-300">
                    <service.icon className="text-2xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-white leading-snug self-center">{service.title}</h3>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.outcomes.map((o, oi) => (
                    <li key={oi} className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                      <MdCheckCircle className="text-green-500 text-base flex-shrink-0" aria-hidden="true" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
