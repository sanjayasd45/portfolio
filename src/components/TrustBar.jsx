const stats = [
    { value: "15+", label: "Client Launches" },
    { value: "100%", label: "On-Time Delivery" },
    { value: "<1hr", label: "Response SLA" },
    { value: "1–2wk", label: "Sprint Delivery" },
];

export default function TrustBar() {
    return (
        <div className="relative z-10 bg-white dark:bg-slate-950 border-y border-slate-200 dark:border-white/5 transition-colors duration-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/5">
                    {stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center justify-center py-3 md:py-4 px-4 text-center">
                            <span className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                                {s.value}
                            </span>
                            <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold mt-1">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
