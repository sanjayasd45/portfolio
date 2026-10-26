"use client";

import { MdMail, MdLocationOn, MdSend, MdWhatsapp, MdCheckCircle } from "react-icons/md";
import { toast } from "sonner";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [messageLength, setMessageLength] = useState(0);

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("project-type"),
      budget: formData.get("budget"),
      message: formData.get("message"),
      honeypot: formData.get("company_website"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Inquiry received! Our team will respond within 24 hours.");
        setSubmittedName(typeof data.name === "string" ? data.name : "there");
        setIsSubmitted(true);
        e.target.reset();
        setMessageLength(0);
      } else {
        toast.error(result.error || "Failed to send. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-200" id="contact">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Context & trust */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-950 dark:text-white mb-4 leading-tight">
              Let&apos;s Build Something<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-400">That Grows Your Business.</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed font-light">
              Share your project requirements or product vision. Our engineering leads will review your specs and provide a tailored technical proposal and roadmap — with zero commitment.
            </p>

            <div className="space-y-6">
              <div className="flex group">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-blue-500 group-hover:border-blue-500/40 transition-all duration-300 shadow-sm">
                    <MdMail className="text-xl" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">Email</h4>
                  <a className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm" href="mailto:sanjay@developerchowk.com">
                    sanjay@developerchowk.com
                  </a>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-emerald-500 group-hover:border-emerald-500/40 transition-all duration-300 shadow-sm">
                    <MdWhatsapp className="text-xl" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">WhatsApp</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">Reply within 1 hour</p>
                </div>
              </div>

              <div className="flex group">
                <div className="flex-shrink-0 mr-5">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-400 group-hover:text-blue-500 group-hover:border-blue-500/40 transition-all duration-300 shadow-sm">
                    <MdLocationOn className="text-xl" aria-hidden="true" />
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-0.5">Location</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">India · Remote-Friendly · GMT+5:30</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-25"></div>
            <div className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-10 shadow-xl dark:shadow-2xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6">Request Agency Proposal</h3>

              {isSubmitted ? (
                <div className="py-8 px-4 text-center space-y-5 animate-hero-in">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-3xl shadow-sm">
                    <MdCheckCircle aria-hidden="true" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">Inquiry Received</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-slate-900 dark:text-white">{submittedName}</strong>! Our engineering team will review your specifications and email a proposal within 24 hours.
                    </p>
                  </div>
                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5 transition-all cursor-pointer shadow-sm"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-4 md:space-y-5">
                  {/* Honeypot field for bot spam prevention — hidden from human users */}
                  <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                    <label htmlFor="company_website">Leave empty</label>
                    <input
                      type="text"
                      name="company_website"
                      id="company_website"
                      autoComplete="off"
                      tabIndex={-1}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider" htmlFor="name">Your Name</label>
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                        id="name" name="name" placeholder="John Doe" type="text" maxLength={100} required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider" htmlFor="email">Email Address</label>
                      <input
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                        id="email" name="email" placeholder="john@company.com" type="email" maxLength={150} required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider" htmlFor="project-type">Project Type</label>
                      <select
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer text-sm"
                        id="project-type" name="project-type" required defaultValue=""
                      >
                        <option value="" disabled>Select project type</option>
                        <option value="website">New Business Website</option>
                        <option value="booking">Booking / Scheduling System</option>
                        <option value="saas">SaaS / Web Application</option>
                        <option value="dashboard">Dashboard / Admin Panel</option>
                        <option value="seo">Speed &amp; SEO Optimization</option>
                        <option value="consulting">Technical Consultation</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider" htmlFor="budget">Target Budget (Optional)</label>
                      <select
                        className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all cursor-pointer text-sm"
                        id="budget" name="budget" defaultValue=""
                      >
                        <option value="">Flexible / Undecided</option>
                        <option value="Under $1,000">&lt; $1,000 (MVP / Sprint)</option>
                        <option value="$1,000 - $3,000">$1,000 – $3,000</option>
                        <option value="$3,000 - $7,500">$3,000 – $7,500</option>
                        <option value="$7,500+">$7,500+ (Full Platform)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-400 uppercase tracking-wider" htmlFor="message">Project Scope &amp; Requirements</label>
                      <span className={`text-[11px] font-mono ${messageLength > 2800 ? "text-amber-500 font-bold" : "text-slate-400"}`}>
                        {messageLength} / 3,000
                      </span>
                    </div>
                    <textarea
                      className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none text-sm"
                      id="message" name="message"
                      placeholder="What problem is your business solving? What are your expected features, desired timeline, and budget range? The more context you provide, the better our team can advise."
                      rows="4" maxLength={3000} required
                      onChange={(e) => setMessageLength(e.target.value.length)}
                    ></textarea>
                  </div>

                  <button
                    className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-xl text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 group disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Proposal Request...
                      </span>
                    ) : (
                      <>
                        Request Agency Proposal
                        <MdSend className="ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </>
                    )}
                  </button>

                  {/* Trust copy */}
                  <div className="pt-2 text-center space-y-1">
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                      🔒 No commitment required &nbsp;·&nbsp; Sub-1hr response SLA &nbsp;·&nbsp; Free technical consultation
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
