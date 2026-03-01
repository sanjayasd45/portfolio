"use client";

import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const faqs = [
    {
        q: "How much does a custom website cost?",
        a: "Most projects fall between ₹15,000–₹80,000 depending on scope. A simple business website starts around ₹15,000. A booking system or SaaS platform typically starts at ₹40,000. I give a fixed quote before any work starts — no surprises.",
    },
    {
        q: "How long does it take to build?",
        a: "Most projects are done in 1–2 weeks. A simple business website can be live in 5–7 days. A booking system or full web app typically takes 10–14 days. I share a day-by-day plan upfront so you know exactly when to expect things.",
    },
    {
        q: "I already have a website. Can you improve it?",
        a: "Yes — this is one of the most common projects I take on. I can improve speed, SEO, design, or add new features to an existing site. I do a free audit first so you know exactly what to fix.",
    },
    {
        q: "Do I need to be technical to work with you?",
        a: "Not at all. I translate everything into plain language. You describe the business problem and I handle all the technical decisions. Most clients have zero technical background.",
    },
    {
        q: "What happens after launch? Do you offer support?",
        a: "Every project comes with 30 days of free post-launch support. After that, I offer affordable monthly maintenance packages. I stay reachable on WhatsApp — you're never left stranded.",
    },
    {
        q: "How quickly do you reply to messages?",
        a: "Within 1 hour during working hours (9am–9pm IST, Mon–Sat). For urgent post-launch issues, I'm on WhatsApp and typically respond even faster. You'll never be left waiting.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section className="py-16 md:py-24 bg-slate-900 border-t border-white/5" id="faq">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <p className="text-sm font-bold tracking-[0.2em] text-blue-500 uppercase mb-3">Common Questions</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">FAQ</h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-slate-800/40 border border-white/5 rounded-2xl overflow-hidden transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-800/60 transition-colors"
                                aria-expanded={open === i}
                            >
                                <span className="text-white font-semibold text-sm leading-snug pr-4">{faq.q}</span>
                                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-slate-300">
                                    {open === i
                                        ? <MdRemove className="text-base" aria-hidden="true" />
                                        : <MdAdd className="text-base" aria-hidden="true" />
                                    }
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-60' : 'max-h-0'}`}
                            >
                                <p className="px-5 pb-5 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-slate-500 text-sm mt-10">
                    Still have questions?{" "}
                    <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                        Ask me directly →
                    </a>
                </p>
            </div>
        </section>
    );
}
