import { MdDomain, MdApi, MdDashboard, MdSpeed, MdArrowForward } from "react-icons/md";
import SectionGridBg from "@/components/SectionGridBg";

export default function Services() {
  const services = [
    { icon: MdDomain, title: "Custom Web Development", desc: "Full-cycle development of custom websites and platforms from scratch. I handle the design, logic, and database to match your unique brand.", tags: ["Modern Tech", "Custom Design"] },
    { icon: MdApi, title: "Booking & E-commerce Systems", desc: "Specialized systems for appointments and online sales. I build seamless booking flows for services like beauty salons, clinics, or retail shops.", tags: ["Secure Payments", "Easy Scheduling"] },
    { icon: MdDashboard, title: "Business Dashboards", desc: "Helpful tools to track your sales, members, or business expenses. I build clear, easy-to-use panels that turn your data into insights.", tags: ["Sales Tracking", "Member Management"] },
    { icon: MdSpeed, title: "Site Optimization", desc: "Improving existing websites for better speed and search ranking. I help your local business get found by more customers online.", tags: ["Fast Loading", "SEO Optimized"] }
  ];

  return (
    <section className="py-16 md:py-24 relative bg-slate-950" id="services">
      <SectionGridBg />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-3">My Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">Digital Solutions</h3>
          </div>
          <a className="text-blue-500 hover:text-white font-semibold flex items-center gap-2 transition-colors group" href="#contact">
            Discuss your project <MdArrowForward className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group relative p-6 sm:p-8 rounded-2xl bg-slate-900 border border-white/5 hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-slate-800 border border-white/10 flex items-center justify-center text-blue-500 group-hover:text-white group-hover:bg-blue-500 transition-colors duration-300">
                  <service.icon className="text-2xl sm:text-3xl" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-2">
                    {service.tags.map((tag, tIdx) => (
                      <li key={tIdx} className="flex items-center text-xs text-slate-500 font-mono uppercase tracking-tight">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>{tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
