"use client";

import { 
  MdConstruction, 
  MdCall, 
  MdVerified, 
  MdUnfoldMore, 
  MdRestaurant, 
  MdBathtub, 
  MdHome, 
  MdDeck, 
  MdStar, 
  MdCheckCircle, 
  MdArrowForward, 
  MdSchedule, 
  MdAssignmentTurnedIn, 
  MdPublic, 
  MdMail, 
  MdThumbUp, 
  MdLocationOn, 
  MdPhoneIphone
} from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function SturdyRenovations() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Quote request sent! We'll call you within 24 hours.");
  };

  return (
    <div className="bg-background-light dark:bg-background-dark font-[family-name:var(--font-public-sans)] text-slate-900 dark:text-slate-100 selection:bg-primary/30 min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-solid border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1173d4] text-white">
              <MdConstruction className="text-2xl" />
            </div>
            <h2 className="text-xl font-black leading-tight tracking-tight text-slate-900 dark:text-white uppercase">
              Sturdy <span className="text-[#1173d4]">Renovations</span>
            </h2>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            <Link className="text-sm font-semibold hover:text-[#1173d4] transition-colors" href="/">Home</Link>
            <a className="text-sm font-semibold hover:text-[#1173d4] transition-colors" href="#services">Services</a>
            <a className="text-sm font-semibold hover:text-[#1173d4] transition-colors" href="#portfolio">Portfolio</a>
            <a className="text-sm font-semibold hover:text-[#1173d4] transition-colors" href="#reviews">Reviews</a>
          </nav>
          <div className="flex items-center gap-4">
            <a className="hidden sm:flex items-center gap-2 text-[#1173d4] font-bold" href="tel:5550123">
              <MdCall className="text-xl" /> (555) 123-4567
            </a>
            <button 
              onClick={() => toast.info("Direct call line: (555) 123-4567")}
              className="rounded-lg bg-[#1173d4] px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-[#1173d4]/90 shadow-md"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1200px] overflow-x-hidden px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="py-8 md:py-12">
          <div className="flex min-h-[560px] flex-col gap-8 rounded-2xl items-start justify-end p-8 md:p-16 relative overflow-hidden group shadow-2xl">
            <Image 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC33hgALqg1qVREe7dRghMOLOWSxBj6pd4kIcz9DPXOTAOoQy1NaZ-ro6e_T87KL__J7KxqoFESNCFm4KsyLoC1yiAW3PbV2q4zpLEcwrf6XIMg_uPN7MVgg4ObQOd7Ylo9mHlH6VdC2PXm-TRjlz64QXsyUX_8cSe9l3K8DjQKF7mBZsUEvoElU4-FZXWQQQ7bBgZHyj3mfHtWJSkYH3x5DlpVwVzAgjInncsNSd2J1MCu3PC4v-JbzUbMWhVyBipVxleETVTnNfk"
              alt="Luxury home renovation"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#101922]/90 via-[#101922]/20 to-transparent"></div>
            <div className="flex flex-col gap-4 max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f97316] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                <MdVerified className="text-sm" /> Licensed & Insured
              </div>
              <h1 className="text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Transforming Houses into <span className="text-[#1173d4] text-shadow-sm">Dream Homes</span>
              </h1>
              <p className="text-slate-200 text-lg md:text-xl font-medium leading-relaxed max-w-xl">
                Professional renovation services with over 15 years of experience. We bring elite craftsmanship to every corner of your home.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 relative z-10">
              <button 
                onClick={() => toast.success("Consultation form opened!")}
                className="flex h-12 items-center justify-center rounded-lg bg-[#1173d4] px-8 text-base font-bold text-white hover:bg-[#1173d4]/90 transition-all shadow-lg hover:translate-y-[-2px]"
              >
                Start Your Project
              </button>
              <button className="flex h-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-md border border-white/20 px-8 text-base font-bold text-white hover:bg-white/20 transition-all">
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Before & After Transformation */}
        <section className="py-12" id="portfolio">
          <div className="flex flex-col md:flex-row items-end justify-between mb-8 px-4">
            <div className="flex flex-col gap-2">
              <span className="text-[#1173d4] font-bold uppercase tracking-widest text-sm">Case Study</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white">The Transformation</h2>
            </div>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-[400px] lg:h-full min-h-[400px]">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCD5vNMrBiqoXXdU6BinhGMVcjHQ64lo085-CzlkxqPXWHSSzgE0z5LZUnsBFtQBHMsLVbmcykeqg4AoxmqwQbaU3PNHzubjoQeJg3TTeh_tTkpMaaegNLsmq2HBY9jXXrxjyOljgcm1jktPLmIS7KxdXRp8LqZFLiwZsjCunfpAm5vLmEM0c5ZIqiccCmHEhLU7wznI2skHXLUfqI_1YF8enhcVb_XrgJXCVGlFobIoEdCuLJp7TvwHm7_dpG9ZMClpsGrPJn685s")` }}></div>
                <div className="absolute inset-0 bg-cover bg-center" style={{ 
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAj53MDkmsPbeOAYjQZu0XVqeW9itU_y1HuX8l5KDBq4yFRh7l46zyL326alXZ_JBEUVAs0p8EB1-NpH5V-PkxRJDz5BrIHM2YO0YNcAUnOB90e-QHgj1LOiYF9Nszx1WPEKe0oC5apB92wIKgBaplPthTHXlAaGpv0ybx0Ih14bPpyExOPYB9061pTm09S1fafgyIwJvTpNhAlSTsxePQ4uTzwTxnRkvJ7z_EwLTU_9Q9SHYuWXdg7qnjtgSQ_b8gTtpGV7_tfrRM")`,
                  clipPath: 'inset(0 0 0 50%)' 
                }}></div>
                <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-white shadow-lg cursor-ew-resize">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-10 rounded-full bg-[#1173d4] flex items-center justify-center text-white shadow-xl border-4 border-white">
                    <MdUnfoldMore className="text-2xl" />
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center gap-6">
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">The Vision vs. Reality</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our client wanted to convert their 1980s galley kitchen into an open-concept gourmet space. We removed load-bearing walls, installed custom cabinetry, and premium quartz countertops.
                  </p>
                </div>
                <div className="space-y-4 pt-4">
                  <div className="flex items-center gap-4">
                    <div className="size-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <div className="size-2 rounded-full bg-slate-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase">Before</p>
                      <p className="text-slate-700 dark:text-slate-200 font-medium">Outdated layout, poor lighting, limited storage.</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="size-8 rounded-full bg-[#1173d4]/20 flex items-center justify-center">
                      <MdCheckCircle className="text-[#1173d4] text-lg" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1173d4] uppercase">After</p>
                      <p className="text-slate-700 dark:text-slate-200 font-medium">Smart storage, high-end appliances, and 40% more space.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12" id="services">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#1173d4] font-bold uppercase tracking-widest text-sm">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mt-2">Built to Last: Our Expertise</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">From concept to completion, we handle every detail of your home's transformation with surgical precision.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Kitchens", icon: MdRestaurant, desc: "Complete gourmet remodels with custom cabinetry and premium finishes." },
              { title: "Bathrooms", icon: MdBathtub, desc: "Spa-like master retreats featuring walk-in showers and smart fixtures." },
              { title: "Basements", icon: MdHome, desc: "Finished spaces for home theaters, gyms, or additional guest suites." },
              { title: "Decks & Patios", icon: MdDeck, desc: "Custom outdoor living spaces designed for entertainment and longevity." }
            ].map((service, i) => (
              <div key={i} className="group bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all hover:border-[#1173d4]/50">
                <div className="size-14 rounded-xl bg-[#1173d4]/10 flex items-center justify-center text-[#1173d4] mb-6 group-hover:bg-[#1173d4] group-hover:text-white transition-colors">
                  <service.icon className="text-3xl" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{service.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                <a className="inline-flex items-center text-[#1173d4] text-sm font-bold hover:gap-2 transition-all" href="#">
                  Learn more <MdArrowForward className="text-sm" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Reviews */}
        <section className="py-12 bg-slate-50 dark:bg-slate-800/50 rounded-3xl px-8 my-8" id="reviews">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Loved by Local Homeowners</h2>
              <p className="text-slate-600 dark:text-slate-400">See why your neighbors trust Sturdy Renovations for their home improvements.</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-[#f97316]">
                {[...Array(5)].map((_, i) => <MdStar key={i} />)}
              </div>
              <span className="font-black text-slate-900 dark:text-white text-xl">4.9/5.0</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Thompson", loc: "Seattle", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDz-slgeqknPdEbw2M71FPhPzZwfCAbHKVDwWG0j2_fsaEpDZodB7FSTQTKHGtsqzZSlBCOzmWeoYkzDfZCXcxnirPwKRJUHZdfo7uGNXRIOPlvKiwV0ceFd8yNyjex2frRf08hrgCwvF8H3eQ2InI3LWaQXG_eE-X5j_uMEHQd2KFeBPRdqqeL3Wg_xNnHvr-mUtKYe3yfHcfjv0vXvtSYAuG47Op8crnPYYwD_funwS1CoOfOhlKZCI5pZk79D1iREfuOIr0lhrI", quote: "The level of detail Sturdy Renovations put into our kitchen remodel was astounding. They finished ahead of schedule and under budget.", bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDtFoIsorvowfU0du7Q7b-nJof1Ugyt-MaO9r-z6KnNf0E0yvEsqrY2THqiPXNbB4VaY4qpLwmVrR8Jzeca5w0ijaVct0tNRAXUx6qxuZap_ubh2n4yG0nRlVzCSKe6QkWtitLXYsiwf5AOyhZh42ZT4nAAODhwb-OH3tj1xqnDzzV1YZsmop5z5nJzr9B7J4fOLWURhnvVcCmObf7SiRLttHpi1-BCOTzb_dWpUr-6o8X_Ij_AoYjzMvm3dieOntWB1oPA17HwItI" },
              { name: "Marcus Chen", loc: "Bellevue", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBAABO-slMsiVujre_2TDBs6tgTIzi715ehMVCNdKuvhuHPgF81Hy6ywhRpFoxTjD1lpIHZYtplzFo6_Xl81OVi8Bn385dUqLu-M8gVQlnfQK9fTEmNT7dR6PulPRlaWGFGFK9s1f5j9sAjJ2UQKeQ-I7MvaxMQ4FmqBqSpWzIOcrdlxmavoVZp12Bb8TtCrNxldFC6ASN6pI6DDaYG86r3P6znLLJAntUYD7dDGsuoKwZjedZOiSe-4OFuclkDBW2Ya5U2eng3930", quote: "We had a basement that was just storage space. Now it's the heart of our home with a theater and wet bar. Professional crew and clean job site.", bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYb0shiOSTfKsG3htlF8fb_HCTHuEfKX96bylseY5JyOIUO_ODyd9YoVXwEGcCsLuwAmFRtnY-uon1W3VVjQMDO08stVk0urfsfNjp6UWE7DUNVP1S_WRZ3dU5J6dOTHMNDowd6BgYP6M66I2QX_GlJukYuzOJReMWCLFYDOEA-5wF91WqsCMiP4PUF-Yp8dEl_KiIqoStbhlWDnQ_OVyQqVYticgqf0oIAmGkEgu1aBQrc6qfZLkozlpAZwa6G1VlBvnxts5W4MY" },
              { name: "Elena Rodriguez", loc: "Renton", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBuG7FUzLudvREWCPXmiWhTcs9PuWyQ-nl9-cUvyiBdeJqiwfA8PcKQ9jyBQAd6YxFVySfkWeGXNINVNtTt8agruCbZeGcKksz4XXgoKSJva_5arg_9744Hm-mvzBBA5OMlz6_QtUfyhA_k_jkMuIexeJrn5KBH7frl7s3MLdGgYKa20mHsB64pq7pSLeDG1sOQUgX0cUwsxSfrvyZUgW3S9ca8UumhvlkcJlia7Gqd3jx-KA0iGxPdIw086_z0bVYOUzG1prL3WVo", quote: "The communication was excellent. I never felt in the dark about our project. Their design suggestions really made our bathroom pop!", bg: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKraw1eDfExEcOeBQYttn56cP2Jkv-bVqfWgvAMaqYQVTLaRmsbeE5wjags68jETMWv-x4V0Am-N_1UKkZ3_PaxIWMjLstqUeSPtxgxFTARZlMhu3Uo1giQRXr7DMV_qBW7B71u9jgUFfjXp2OEz9DlH-zSbvKU6vQPUOYGeR25lQ5JcSht6qDtwyw7nOYO8856HsZXddkG5CIpixCsqQIh6Hay6Nni5KR1PuRHL24f-5Axcewpm0R1Y2FayuEX67fdx_-Lm37QtQ" }
            ].map((review, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="relative rounded-2xl overflow-hidden h-48 group shadow-lg">
                  <img src={review.bg} alt="Finished project" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <blockquote className="text-slate-700 dark:text-slate-300 italic leading-relaxed">
                  &quot;{review.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-full bg-slate-200">
                    <img src={review.img} alt={review.name} className="h-full w-full rounded-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">{review.name}</p>
                    <p className="text-xs text-slate-500 font-medium">Homeowner in {review.loc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-16" id="contact">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                  Ready to start your <span className="text-[#1173d4]">transformation?</span>
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400">
                  Fill out the form to schedule a free on-site consultation and get a professional estimate within 48 hours.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-[#1173d4]/10 flex items-center justify-center text-[#1173d4] shrink-0">
                    <MdSchedule className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Quick Response</h4>
                    <p className="text-slate-500 text-sm">We respond to all inquiries within 1 business day.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-full bg-[#1173d4]/10 flex items-center justify-center text-[#1173d4] shrink-0">
                    <MdAssignmentTurnedIn className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">Free Consultation</h4>
                    <p className="text-slate-500 text-sm">In-person walk-through with a master contractor.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-800">
              <form 
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Full Name</label>
                  <input className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 outline-none focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="John Doe" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input className="rounded-lg border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-3 outline-none focus:border-[#1173d4] focus:ring-1 focus:ring-[#1173d4]" placeholder="john@example.com" type="email" />
                </div>
                <div className="md:col-span-2 pt-2">
                  <button type="submit" className="w-full h-12 bg-[#1173d4] text-white font-black text-lg rounded-lg hover:bg-[#1173d4]/90 transition-all shadow-lg uppercase tracking-wider">
                    Get My Free Quote
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background-dark text-white py-16 px-6">
        <div className="mx-auto max-w-[1200px] grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1173d4] text-white">
                <MdConstruction className="text-xl" />
              </div>
              <h2 className="text-lg font-black uppercase">Sturdy <span className="text-[#1173d4]">Renovations</span></h2>
            </div>
            <div className="flex gap-4">
              <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1173d4] transition-colors" href="#"><MdPublic /></a>
              <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1173d4] transition-colors" href="#"><MdMail /></a>
              <a className="size-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#1173d4] transition-colors" href="#"><MdThumbUp /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li><Link href="/" className="hover:text-[#1173d4]">Developer Chowk Portfolio</Link></li>
              <li><a className="hover:text-[#1173d4]" href="#">Our Process</a></li>
              <li><a className="hover:text-[#1173d4]" href="#">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
            <div className="space-y-4 text-slate-400 text-sm">
              <div className="flex items-start gap-3"><MdLocationOn className="text-[#1173d4] text-xl" /> <span>123 Construction Way, Seattle, WA</span></div>
              <div className="flex items-center gap-3"><MdPhoneIphone className="text-[#1173d4] text-xl" /> <span>(555) 123-4567</span></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}