const stats = [
    { value: "12+", label: "Projects Delivered" },
    { value: "100%", label: "Client Retention" },
    { value: "<1hr", label: "Reply Time" },
    { value: "1–2wk", label: "Avg. Delivery" },
];

export default function TrustBar() {
    return (
        <div className="relative z-10 bg-slate-950 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 divide-y-2 md:divide-y-0 md:divide-x divide-white/5">
                    {stats.map((s, i) => (
                        <div key={i} className="flex flex-col items-center justify-center py-3 md:py-4 px-4 text-center">
                            <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
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
