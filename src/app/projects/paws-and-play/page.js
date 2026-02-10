"use client";

import { 
  MdPets,
  MdWaterDrop,
  MdContentCut,
  MdSpa,
  MdFormatQuote,
  MdArrowForward,
  MdLocationOn,
  MdCall,
  MdMail,
  MdSocialDistance,
  MdPhotoCamera,
  MdChevronLeft,
  MdChevronRight
} from "react-icons/md";
import Link from "next/link";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "@/components/ui/Motion";
import { toast } from "sonner";

export default function PawsAndPlay() {
  const handleBooking = (e) => {
    e.preventDefault();
    toast.success("Booking request received! We'll confirm your pet's appointment via email.");
  };

  return (
    <div className="bg-[#f6f7f8] dark:bg-[#111921] font-[family-name:var(--font-plus-jakarta-sans)] text-[#0e141b] transition-colors duration-300 min-h-screen flex flex-col selection:bg-[#4799eb]/30">
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full border-b border-solid border-b-slate-200 dark:border-b-slate-800 bg-white/80 dark:bg-[#111921]/80 backdrop-blur-md sticky top-0 z-50"
      >
        <div className="max-w-[1280px] mx-auto flex items-center justify-between whitespace-nowrap px-6 md:px-10 py-4 w-full">
          <div className="flex items-center gap-3 text-[#4799eb]">
            <motion.div 
              whileHover={{ rotate: 20 }}
              className="size-8"
            >
              <MdPets className="text-4xl" />
            </motion.div>
            <h2 className="text-[#0e141b] dark:text-white text-xl font-extrabold leading-tight tracking-[-0.015em]">Paws & Play</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8 items-center">
            <nav className="hidden md:flex items-center gap-9">
              <Link className="text-[#0e141b] dark:text-slate-300 text-sm font-semibold hover:text-[#4799eb] transition-colors" href="/">Home</Link>
              <a className="text-[#0e141b] dark:text-slate-300 text-sm font-semibold hover:text-[#4799eb] transition-colors" href="#services">Services</a>
              <a className="text-[#0e141b] dark:text-slate-300 text-sm font-semibold hover:text-[#4799eb] transition-colors" href="#gallery">Gallery</a>
              <a className="text-[#0e141b] dark:text-slate-300 text-sm font-semibold hover:text-[#4799eb] transition-colors" href="#booking">Booking</a>
            </nav>
            <motion.button 
              onClick={() => toast.info("Booking calendar loaded below!")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-11 px-5 bg-[#4799eb] text-white text-sm font-bold shadow-lg shadow-[#4799eb]/20 transition-all"
            >
              <span>Book Now</span>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <main className="flex-1 overflow-x-hidden">
        <section className="max-w-[1280px] mx-auto px-6 py-12 md:py-20 relative">
          {/* Decorative blobs */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-0 w-96 h-96 bg-[#fef3c7]/40 rounded-full blur-[100px] -z-10"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 left-0 w-80 h-80 bg-[#4799eb]/10 rounded-full blur-[100px] -z-10"
          />

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex flex-col gap-8 w-full md:w-1/2">
              <div className="flex flex-col gap-4">
                <FadeIn delay={0.1}>
                  <span className="bg-[#fef3c7] text-amber-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider w-fit">Now Accepting New Furry Friends</span>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <h1 className="text-[#0e141b] dark:text-white text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                    Pampered Paws, <span className="text-[#4799eb]">Happy Hearts</span>
                  </h1>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-[500px]">
                    Professional pet grooming services that make your furry friends feel like royalty. Experience the softest fur and the happiest tails in town.
                  </p>
                </FadeIn>
              </div>
              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <motion.button 
                    onClick={() => toast.success("Opening grooming schedule...")}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-[#4799eb] text-white text-base font-bold shadow-xl shadow-[#4799eb]/30 hover:bg-[#4799eb]/90 transition-all"
                  >
                    <span>Book Appointment</span>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-white dark:bg-slate-800 text-[#0e141b] dark:text-white border-2 border-slate-100 dark:border-slate-700 text-base font-bold hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
                  >
                    <span>Our Services</span>
                  </motion.button>
                </div>
              </FadeIn>
              <FadeIn delay={0.5}>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuAnGM-J2RzbPgsRpN0xgxgQ0B9oU0at0eu7HD8BISFlfBzJwJBDLm9_A79rzLa62pL9NKMtuNYCTGWwmhomR25HiNTj2vt_mVqK3MjBl6y8PLPZAtx4eRHaER5gFT2dvN3PGk9lym3XgKVU0b80-BjQo37k9dE3oDpXF56QwbXXeRgQnLM2cXGbg6hQHuy48gEGrlnQo0NSiXxlhteSOWqT2nb27CnloyIL7dpJy_b0-lt7zRGgMywflHU9TtjVKVmKyzaU_XY1M7s",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuChGIstYuj_t9mb4yk_Zh4JM3uvGQqqyJdSAuUqmbay5VOdElg7aQbNJizFHgoxtS_ry6uhRXczTBPpDc3X0QRdQ52CtP7eJ_nJG9mNTcG5yQX04zan1I7dCDgjENDKCATPfbT17yrnNRXtkbbB7_bta6zxhm3fDd2lGbEQO2wr98pPnswx_gClYZr_GmeBliWT2d1CXASxkGp9cNkfJDniCmGaFBIMMOaNPeTsvXyWjpZ_KTlIMvHJSVQwpMUyUHEWH55jr4PGHX4",
                      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPi1hq1R9j4Ib8d7x_yvYUeyBSkHKKCBYSm465wFCgtrCxOC9Or7r3v0pXvaFzW3sfl43CN4BZNyn7-T29zz7jg3PwFSyw-Q_NS8OZq7co9pus3JdQRz-n6WDbdJXSP_iMczlinwmf3NnhJjjiPbc6VSYck4uAmUDxu8yAh1DmAuiyv1hWC8ZMOXmBViZQ56lEea-7IsQHOcBRHBr2fhxiK4SuNYWd2JSaUXPjohSzNfyXTjGKQL9iEV5orvFitaivVSJlA0q_dBM"
                    ].map((src, i) => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden" style={{ backgroundImage: `url("${src}")`, backgroundSize: 'cover' }}></div>
                    ))}
                  </div>
                  <p className="text-sm font-medium text-slate-500">Joined by <span className="text-[#4799eb] font-bold">500+</span> local pets</p>
                </div>
              </FadeIn>
            </div>
            <FadeIn direction="left" delay={0.3} className="w-full md:w-1/2 relative">
              <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                className="aspect-[4/5] rounded-[4rem] bg-slate-200 shadow-2xl overflow-hidden border-[12px] border-white dark:border-slate-800" 
                style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjK8ejHTTTFsyt05-4xVzp3SaREJfDnC-vJn_WJXc9Xeah1z6xESOLv9ulTYmJYTvfZs3ETk2XLQbKAOPGjxQmgBJKpeMIWyfbSjPEbam8WAEVbAOn-mzgrlyQ_y-BaRfGmsmy1MgvWwgZOSO_Smn60uHI2KZpZ_6f1Ukwf7hhnsK68KCbEwujJvtssGc10JTsxoo5WRXghNp0FpyVjFnulh1YS-iSfapQ5nAM0ZL7hArCFysvjJxnMmnBTithhG_JYYEvYJAQtew")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
              </motion.div>
            </FadeIn>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white dark:bg-slate-900 py-20" id="services">
          <div className="max-w-[1280px] mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-black text-[#0e141b] dark:text-white mb-4">Professional Grooming Services</h2>
                <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto">From quick trims to full spa days, we provide the care your pet deserves with our specialized grooming packages.</p>
              </div>
            </FadeIn>
            <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <th className="p-6 text-[#0e141b] dark:text-white font-bold text-sm uppercase tracking-wider">Service Package</th>
                    <th className="p-6 text-[#0e141b] dark:text-white font-bold text-sm uppercase tracking-wider hidden md:table-cell">Details</th>
                    <th className="p-6 text-[#0e141b] dark:text-white font-bold text-sm uppercase tracking-wider text-right">Investment</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {[
                    { title: "The Basic Bath", icon: MdWaterDrop, color: "text-[#4799eb] bg-blue-100 dark:bg-blue-900/40", desc: "Deep cleaning shampoo, blow dry, brush out, and gentle ear cleaning", price: "$45+" },
                    { title: "The Full Spa", icon: MdContentCut, color: "text-purple-600 bg-purple-100 dark:bg-purple-900/40", desc: "Everything in Basic, plus full body haircut, nail grinding, and sanitary trim", price: "$75+", primary: true },
                    { title: "Puppy's First Cut", icon: MdSpa, color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-900/40", desc: "Extra-gentle introductory grooming for puppies under 6 months", price: "$55" }
                  ].map((service, i) => (
                    <motion.tr 
                      key={i} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="group hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="p-6">
                        <div className="flex items-center gap-4">
                          <motion.div whileHover={{ scale: 1.1, rotate: 10 }} className={`p-3 rounded-full ${service.color}`}>
                            <service.icon className="text-xl" />
                          </motion.div>
                          <div>
                            <p className="font-bold text-[#0e141b] dark:text-white">{service.title}</p>
                            <p className="text-xs text-slate-400 md:hidden">Tap for details</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-6 text-slate-600 dark:text-slate-400 hidden md:table-cell">{service.desc}</td>
                      <td className="p-6 text-right">
                        <motion.button 
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`min-w-[100px] h-10 px-4 rounded-full font-bold text-sm transition-all ${service.primary ? 'bg-[#4799eb] text-white shadow-lg shadow-[#4799eb]/20' : 'bg-slate-100 dark:bg-slate-800 text-[#0e141b] dark:text-white hover:bg-[#4799eb] hover:text-white'}`}
                        >
                          {service.price}
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 max-w-[1280px] mx-auto px-6" id="gallery">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <FadeIn>
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black text-[#0e141b] dark:text-white mb-4">Happy Clients Gallery</h2>
                <p className="text-slate-500 dark:text-slate-400">See some of our favorite transformations from this past week. Each pet leaves with a wagging tail!</p>
              </div>
            </FadeIn>
            <motion.button 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-[#4799eb] font-bold transition-all"
            >
              View Full Gallery <MdArrowForward />
            </motion.button>
          </div>
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "https://lh3.googleusercontent.com/aida-public/AB6AXuArnH7kHWVH8QpWebi_6eEkbdlFuDT9_9d2Tf6sGANbQUmdLOB_95msGotFgTsEVVBklLFS6JYb5gu5JwUE-biEdBwSEe7nV0Q7XqWns849RfD95rXOXpLXpzewqzRnMJJM-Nyged-HmnzaAzR3Vo-OFhKSmyLhp4mfBbyh1VKA8aJKmpg9wpkNcgjigYvkcuge3gKEQIIXDpwWIO54ClaOrKdmfIZ90T2nCagmwqmH9xDKwOGrY9aq2g8urVaUtiXd1mmmUr3WLDI",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuBZZ9uNS1j1o8pjBYXXDHvkTQ3h2a7ktAVFy9_AFRrHEsIFK5MA0R8HAm2OIIqdiZ28KO9hBiqxtyetBT4996iwyfKR9bQldNXmCVNR1z5H3mNTJIEaTd7FJNRFImwLozkbIsH-t-M_-KCM-LTLTMuO5Rjyxi_DsvtDEWDvRVuaFkuMuJu5SLjpQHQK1GrETB0eDJ3gLQWBoVJKBQuY1Mt5AoATRU92JrELhpbgk8x40Mb06ow-B-Nejm4PXlk48JPQI3LxfOaP5-M",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCigw7p5GTzbxqA3kZs-8Q1F3od-jKt05oS24j8stcKUDC1PUVVXOhAbkkICyPjENF0I1WUgxCla9sCS5vVtdrcodZ-PnqsrcYGaFemCu9Nh4baJS_7HsRpjsI9yqELI_7nm6r-ePh_0wtQj1FvVHlKHaa4vxmpkA4Xs1ckDhE3E0xJm_AfQD6Gj-G2WZBM5IRiY6WcF5hw-hM-mAu_CWLE8OTpv7_Z13zhjo56Bv2CkkNLqx5UZDkrTMg7vq8w5JSql9cFIdJqeFA",
              "https://lh3.googleusercontent.com/aida-public/AB6AXuCOBvNMfs17onuThSZIztwt1dO76Cl5PZyFbdgpRzpT7IbKrXTpmukJnqQc8ykzylm3mAdghCpgqonxh4FHcp6cqVqT4ldMo2VjVD-hBaHUiTJkqgoDBGiferYQmXBOLg-FXdAZQau81xY5T0LxaK1sdZs99hD_UGjrF4enYHmhdII8t_F-qayzzyNOSl3yeiZZmfksR0mIvNJvgesF7w0BeTW_j0my2Zur3F3IODGZBbj9sNTEHcq4X_0Ze2pxOrCzUGbyFWZtTkI"
            ].map((src, i) => (
              <motion.div 
                key={i} 
                variants={{ hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } }}
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? 2 : -2 }}
                className={`aspect-square rounded-xl bg-slate-200 overflow-hidden shadow-lg transition-transform ${i % 2 !== 0 ? 'md:translate-y-8' : ''}`} 
                style={{ backgroundImage: `url("${src}")`, backgroundSize: 'cover' }}
              ></motion.div>
            ))}
          </StaggerContainer>
        </section>

        {/* Booking Section */}
        <section className="bg-[#fef3c7]/30 dark:bg-slate-900/40 py-20 transition-colors duration-300" id="booking">
          <div className="max-w-[1280px] mx-auto px-6">
            <FadeIn>
              <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-12">
                  <h2 className="text-3xl font-black text-[#0e141b] dark:text-white mb-6">Schedule a Session</h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">Choose your preferred date and time. We&apos;ll send a confirmation email with all the details within 15 minutes.</p>
                  <form onSubmit={handleBooking} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Your Pet&apos;s Name</label>
                        <input className="w-full h-12 px-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-[#4799eb] focus:border-[#4799eb]" placeholder="Buddy" type="text" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Pet Breed</label>
                        <input className="w-full h-12 px-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-[#4799eb] focus:border-[#4799eb]" placeholder="Beagle" type="text" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700 dark:text-slate-300">Select Service</label>
                      <select className="w-full h-12 px-4 rounded-xl border-slate-200 dark:border-slate-700 dark:bg-slate-900 focus:ring-[#4799eb] focus:border-[#4799eb]">
                        <option>The Basic Bath ($45+)</option>
                        <option>The Full Spa ($75+)</option>
                        <option>Puppy&apos;s First Cut ($55)</option>
                      </select>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full h-14 bg-[#4799eb] text-white font-black rounded-xl shadow-xl shadow-[#4799eb]/30 transition-all" 
                      type="submit"
                    >
                      Check Available Times
                    </motion.button>
                  </form>
                </div>
                {/* ... Calendar ... */}
                <div className="md:w-1/2 bg-slate-50 dark:bg-slate-900/50 p-8 md:p-12 border-t md:border-t-0 md:border-l border-slate-100 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="font-bold text-lg dark:text-white">October 2024</h3>
                    <div className="flex gap-2">
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"><MdChevronLeft /></motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"><MdChevronRight /></motion.button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm mb-4 text-slate-400">
                    <div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {[...Array(31)].map((_, i) => (
                      <motion.button 
                        key={i} 
                        whileHover={{ scale: 1.1 }}
                        className={`h-10 rounded-lg transition-colors ${i === 3 ? 'bg-[#4799eb] text-white font-bold' : i === 8 ? 'hover:bg-slate-200 dark:hover:bg-slate-700 font-bold text-[#4799eb]' : 'hover:bg-slate-200 dark:hover:bg-slate-700'}`}
                      >
                        {i + 1}
                      </motion.button>
                    ))}
                  </div>
                  <div className="mt-8">
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Available Slots</h4>
                    <div className="grid grid-cols-2 gap-3">
                      <button onClick={() => toast.info("Slot selected: 09:30 AM")} className="h-11 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-bold dark:text-white hover:border-[#4799eb] hover:text-[#4799eb] transition-all">09:30 AM</button>
                      <button onClick={() => toast.info("Slot selected: 11:00 AM")} className="h-11 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-bold dark:text-white hover:border-[#4799eb] hover:text-[#4799eb] transition-all">11:00 AM</button>
                      <button onClick={() => toast.info("Slot selected: 02:30 PM")} className="h-11 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-bold dark:text-white hover:border-[#4799eb] hover:text-[#4799eb] transition-all">02:30 PM</button>
                      <button className="h-11 rounded-full border border-[#4799eb] bg-[#4799eb]/10 text-[#4799eb] text-sm font-bold">04:00 PM</button>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 max-w-[1280px] mx-auto px-6">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Jenkins", role: "Luna's Mom", quote: "Luna came back smelling like a flower garden and her coat has never been softer. Best groomer in the city!", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBkxbx9JPezQe9_WrSWyyrNfjEU4CxnkvD4xiq2ATG3y-w7xsjTc7RtnvSbhiCJe8iFzHbyz8kXpvyXfKrIR6oPvykPCcJS00Kg84DW9udZ_wkTTE_wxoGq71z5NqC-af_kUBMCwdvTp2DngI5QrhCHvf1i6PhtUlhLKS_yDb7KdKQgbl70GkvIP1VYl7txR3U_pIPYloppjbJVupjxcClrDJO1Xr7qX23Bq5CO-JlDWiQXQLZ5eNqkXbEnVZHXUKdlswXN0HXBhPI" },
              { name: "Mike Roberts", role: "Cooper's Dad", quote: "Extremely professional and patient with my nervous golden retriever. They really know how to handle big dogs!", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD-afxz8CfN7d9LdL42N5LN6_ccv4kV7UvblplPIO-LlMGwkngccKPqYhlrfrnpTMaj1O1Mjgj1Kck8rvxrWX_4v2ZQth0OCZqYH426Kst9Np785-y1WwLo1w0zkdjlvY07LLnYzikwM8A5wmFBMxNvnce3Yuhv28PYbbFmTr0k6TuDvVUYc4CrYO40ehEnlZEFnM6yzr4SqSuAwlX4Czz7ReuSqEFN4EdiyG0gYgSYnyLrZgX9RTCJtUe3aEnuuiyRFwr2ycXrNKQ" },
              { name: "Emily Chen", role: "Mochi's Mom", quote: "The attention to detail is amazing. The sanitary trim was perfect and she looks ready for a dog show!", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9NIhf72oG5HF9DV5vakJvVn8hfl5jOLgzzSdZ7Mj_8HIoG6Cw_UzZhJNWXTQjzhdrfFcm7xBGBO-q50o9PQ95Cu812U-KpW-AJMTrIyCYBMAFBGRpCbk34unN2dzZaUhfe8pEQ5m2WfdxuFBywSc3BK2pi5ZFG5ttZvvr1bhimYd1Z_Qf-mob8zEs_-29FkrCqQYePZy4bFsfDeuanDEBU778BOFeJWCBB4gd0eivhpA_6x3aNzDgMnPbeZWISSUfMLv2dbKxJB0" }
            ].map((testimonial, i) => (
              <motion.div 
                key={i} 
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                whileHover={{ y: -5 }}
                className={`p-8 rounded-xl bg-white dark:bg-slate-800 shadow-xl relative ${i > 0 ? 'mt-4 md:mt-0' : ''}`}
              >
                <div className="absolute -top-4 -left-4 text-[#4799eb] opacity-20"><MdFormatQuote className="text-6xl" /></div>
                <p className="text-slate-600 dark:text-slate-300 italic mb-6">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden" style={{ backgroundImage: `url("${testimonial.img}")`, backgroundSize: 'cover' }}></div>
                  <div>
                    <p className="font-bold dark:text-white">{testimonial.name}</p>
                    <p className="text-xs text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </StaggerContainer>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16 px-10">
          <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 flex flex-col gap-6">
              <div className="flex items-center gap-3 text-[#4799eb]">
                <MdPets className="text-4xl" />
                <h2 className="text-2xl font-black text-white">Paws & Play</h2>
              </div>
              <p className="text-slate-400 max-w-sm">We provide high-quality grooming services for dogs and cats of all breeds and sizes. Our mission is to make every pet feel loved and comfortable.</p>
              <div className="flex gap-4">
                <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4799eb] transition-colors" href="#"><MdSocialDistance className="text-sm" /></a>
                <a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#4799eb] transition-colors" href="#"><MdPhotoCamera className="text-sm" /></a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-4 text-slate-400">
                <li><Link className="hover:text-[#4799eb]" href="/">Home Portfolio</Link></li>
                <li><a className="hover:text-[#4799eb]" href="#services">Services</a></li>
                <li><a className="hover:text-[#4799eb]" href="#gallery">Gallery</a></li>
                <li><a className="hover:text-[#4799eb]" href="#booking">Book Now</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-2"><MdLocationOn className="text-sm" /> 123 Bark Avenue, Pet City</li>
                <li className="flex items-center gap-2"><MdCall className="text-sm" /> (555) 012-3456</li>
                <li className="flex items-center gap-2"><MdMail className="text-sm" /> hello@pawsplay.com</li>
              </ul>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            <p>© 2024 Paws & Play Pet Grooming. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
