"use client";

import { MdMail, MdLocationOn, MdSend } from "react-icons/md";
import { toast } from "sonner";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      projectType: formData.get("project-type"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Inquiry sent successfully! We typically respond within 24 hours.");
        e.target.reset();
      } else {
        toast.error(result.error || "Failed to send inquiry. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative bg-slate-950 border-t border-slate-800 overflow-hidden" id="contact">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-blue-500 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Accepting New Projects
            </div>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to grow your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-400">business?</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12 leading-relaxed font-light">
              Discuss your project directly with me. Get a technical consultation and a roadmap for your next digital product.
            </p>
            <div className="space-y-8">
              <div className="flex group">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-500 group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all duration-300 shadow-lg">
                    <MdMail className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">Email Us</h4>
                  <a className="text-slate-400 hover:text-blue-500 transition-colors" href="mailto:sanjay@developerchowk.com">sanjay@developerchowk.com</a>
                </div>
              </div>
              <div className="flex group">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-500 group-hover:border-blue-500/50 group-hover:bg-blue-500/5 transition-all duration-300 shadow-lg">
                    <MdLocationOn className="text-2xl" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">HQ Location</h4>
                  <p className="text-slate-400">Lucknow, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl blur opacity-30"></div>
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-2xl">
              <form onSubmit={handleInquirySubmit} className="space-y-4 md:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300" htmlFor="name">Name</label>
                    <input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-inner" id="name" name="name" placeholder="John Doe" type="text" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-300" htmlFor="email">Email</label>
                    <input className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-inner" id="email" name="email" placeholder="john@company.com" type="email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300" htmlFor="project-type">Project Type</label>
                  <select 
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-inner cursor-pointer" 
                    id="project-type" 
                    name="project-type"
                    required
                    defaultValue=""
                  >
                    <option value="" disabled>Select Engagement Model</option>
                    <option value="saas">SaaS Platform Development</option>
                    <option value="webapp">Enterprise Web Application</option>
                    <option value="api">API & Microservices</option>
                    <option value="consulting">Technical Consultancy</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-300" htmlFor="message">Message</label>
                  <textarea className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all shadow-inner resize-none" id="message" name="message" placeholder="Describe your project requirements, timeline, and goals..." rows="4" required></textarea>
                </div>
                <button 
                  className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-lg text-white bg-blue-500 hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 group mt-2 disabled:opacity-50 disabled:cursor-not-allowed" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Inquiry"}
                  <MdSend className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-xs text-center text-slate-500 mt-2">
                  By sending this form, you agree to our privacy policy. We typically respond within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
