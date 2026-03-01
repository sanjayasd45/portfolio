const testimonials = [
    {
        quote: "Sanjay delivered our booking system in 6 weeks — on time, on budget, and exactly what we needed. Appointment cancellations dropped by 40% in the first month.",
        name: "Priya Sharma",
        role: "Owner, Glow Beauty Studio",
        initial: "P",
        color: "from-pink-500 to-rose-500",
    },
    {
        quote: "We needed a gym management dashboard with billing and attendance. Sanjay built it from scratch and trained our whole team. It's been running without a single issue.",
        name: "Rahul Verma",
        role: "Director, FitZone Gym",
        initial: "R",
        color: "from-blue-500 to-indigo-500",
    },
    {
        quote: "Our website went from a generic template to a fully custom site. Page speed went from 45 to 98 on Lighthouse. We rank on page 1 now for our key services.",
        name: "Ankit Gupta",
        role: "CEO, Gupta Enterprises",
        initial: "A",
        color: "from-emerald-500 to-teal-500",
    },
];

export default function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 rounded-full blur-[80px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <p className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-3">Client Results</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">What Clients Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="relative flex flex-col bg-slate-900 rounded-2xl p-7 border border-white/5 hover:border-blue-500/20 transition-all duration-300 shadow-xl group"
                        >
                            {/* Quote mark */}
                            <span className="text-5xl font-serif text-blue-500/20 leading-none mb-4 select-none">&ldquo;</span>

                            <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                                {t.quote}
                            </p>

                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}>
                                    {t.initial}
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm">{t.name}</div>
                                    <div className="text-slate-500 text-xs">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
