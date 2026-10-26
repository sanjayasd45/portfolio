import { MdDomain, MdApi, MdDashboard, MdSpeed, MdArrowForward, MdCheckCircle } from "react-icons/md";
import SectionGridBg from "@/components/SectionGridBg";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      icon: MdDomain,
      problem: "Need a high-converting digital storefront or web presence?",
      title: "Custom Web Application & Website Engineering",
      desc: "We engineer fast, bespoke web applications and digital platforms tailored to your brand, user experience, and revenue goals. No templates or page builders — enterprise-grade architecture.",
      outcomes: ["Loads in under 1 second", "Engineered for SEO & conversions", "Flawless across all devices"],
    },
    {
      icon: MdApi,
      problem: "Losing customers to manual scheduling and friction?",
      title: "Booking Platforms & SaaS Systems",
      desc: "Custom booking engines and web portals that automate appointment scheduling and payments 24/7. Built with calendar synchronization, automated notifications, and secure payment gateways.",
      outcomes: ["Reduce drop-offs by 40%", "Automated global payments", "Real-time workflow integration"],
    },
    {
      icon: MdDashboard,
      problem: "Lacking unified visibility across your operations?",
      title: "Custom Dashboards & Internal Admin Portals",
      desc: "Centralize your business operations with bespoke management dashboards — sales pipelines, billing, attendance, and analytics in real time without messy spreadsheets.",
      outcomes: ["Real-time data feeds", "Role-based access control", "Instant reporting & exports"],
    },
    {
      icon: MdSpeed,
      problem: "Slow loading times hurting Google rankings & leads?",
      title: "Core Web Vitals & SEO Architecture",
      desc: "Our engineers audit existing codebases, eliminate technical bottlenecks, optimize Core Web Vitals, and achieve 90+ Lighthouse scores for maximum search visibility.",
      outcomes: ["90+ Lighthouse performance", "First-page technical SEO", "Higher organic conversion"],
    },
  ];

  return (
    <section className="py-16 md:py-24 relative bg-white dark:bg-slate-950 transition-colors duration-200" id="services">
      <SectionGridBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">Agency Capabilities</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white">Engineering Digital Solutions,<br />Not Just &ldquo;Building Sites&rdquo;</h2>
          </div>
          <Link className="text-blue-600 hover:text-slate-900 dark:text-blue-500 dark:hover:text-white font-semibold flex items-center gap-2 transition-colors group flex-shrink-0 cursor-pointer" href="/#contact">
            Discuss your project <MdArrowForward className="group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group relative p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 hover:border-blue-500/30 shadow-md dark:shadow-none hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                {/* Pain point label */}
                <p className="text-xs text-amber-700 dark:text-amber-400/80 font-semibold italic mb-4 border-l-2 border-amber-500/50 pl-3">
                  &ldquo;{service.problem}&rdquo;
                </p>
                <div className="flex gap-5 mb-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-500 group-hover:text-white group-hover:bg-blue-600 dark:group-hover:bg-blue-500 transition-colors duration-300 shadow-sm">
                    <service.icon className="text-2xl" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug self-center">{service.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">{service.desc}</p>
                <ul className="space-y-2">
                  {service.outcomes.map((o, oi) => (
                    <li key={oi} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-400 font-medium">
                      <MdCheckCircle className="text-emerald-500 text-base flex-shrink-0" aria-hidden="true" />
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
