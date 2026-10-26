"use client";

import { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";
import Link from "next/link";

const faqs = [
    {
        q: "How much does custom web or software development cost?",
        a: "Projects typically range from ₹25,000 to ₹1,50,000+ depending on architectural scope, integrations, and feature complexity. We provide a detailed fixed-price statement of work before kick-off with zero hidden costs.",
    },
    {
        q: "What is your typical project turnaround?",
        a: "Most agency projects deploy within 1–3 weeks. Fast marketing sites and MVPs launch in 7–10 days, while custom SaaS platforms and booking engines follow structured 2–4 week sprint milestones.",
    },
    {
        q: "Can your team audit or improve an existing application?",
        a: "Yes — legacy modernization and performance optimization are core agency offerings. We audit codebase bottlenecks, Core Web Vitals, and UI/UX, followed by a prioritized refactoring roadmap.",
    },
    {
        q: "Do we need an internal technical team to work with you?",
        a: "Not at all. We serve as your dedicated product engineering department. You share your business objectives, and our team handles system architecture, UX, database design, and deployment.",
    },
    {
        q: "What ongoing support and maintenance do you offer?",
        a: "Every build includes 30 days of complimentary agency warranty and support. After launch, we provide ongoing SLA retainers covering proactive monitoring, security updates, and iterative enhancements.",
    },
    {
        q: "How do we communicate and track progress during development?",
        a: "We set up dedicated communication channels (Slack/WhatsApp), share live staging environments, and run sprint demos. Our team responds within 1 hour during business hours (9am–9pm IST, Mon–Sat).",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState(null);

    return (
        <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-white/5 transition-colors duration-200" id="faq">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-14">
                    <p className="text-sm font-bold tracking-[0.2em] text-blue-600 dark:text-blue-500 uppercase mb-3">Common Questions</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-950 dark:text-white">FAQ</h2>
                </div>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className="bg-white dark:bg-slate-800/40 border border-slate-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm dark:shadow-none transition-all duration-300"
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-colors cursor-pointer"
                                aria-expanded={open === i}
                            >
                                <span className="text-slate-900 dark:text-white font-semibold text-sm leading-snug pr-4">{faq.q}</span>
                                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-300">
                                    {open === i
                                        ? <MdRemove className="text-base" aria-hidden="true" />
                                        : <MdAdd className="text-base" aria-hidden="true" />
                                    }
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${open === i ? 'max-h-60' : 'max-h-0'}`}
                            >
                                <p className="px-5 pb-5 text-slate-600 dark:text-slate-400 text-sm leading-relaxed border-t border-slate-100 dark:border-white/5 pt-4">
                                    {faq.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="text-center text-slate-500 dark:text-slate-500 text-sm mt-10">
                    Still have questions?{" "}
                    <Link href="/#contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors">
                        Speak with our team →
                    </Link>
                </p>
            </div>
        </section>
    );
}
