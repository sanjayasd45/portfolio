import { MdArrowForward } from "react-icons/md";

export default function CtaBanner({ heading, sub, cta = "Start Your Project", href = "#contact" }) {
    return (
        <div className="relative bg-slate-950 border-y border-white/5 py-12 overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[150px] bg-blue-500/10 rounded-full blur-[60px]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                <div>
                    <p className="text-white text-xl md:text-2xl font-bold leading-snug">{heading}</p>
                    {sub && <p className="text-slate-400 text-sm mt-1">{sub}</p>}
                </div>
                <a
                    href={href}
                    className="flex-shrink-0 inline-flex items-center gap-2 px-8 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 hover:shadow-blue-500/40 text-sm"
                >
                    {cta}
                    <MdArrowForward className="text-lg" aria-hidden="true" />
                </a>
            </div>
        </div>
    );
}
