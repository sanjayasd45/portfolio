"use client";

import { 
  MdBakeryDining, 
  MdShoppingBasket, 
  MdRestaurantMenu, 
  MdArrowForward,
  MdLocationOn,
  MdCall,
  MdFacebook,
  MdCameraAlt
} from "react-icons/md";
import { FadeIn, StaggerContainer } from "@/components/ui/Motion";
import Link from "next/link";
import { toast } from "sonner";
import { motion } from "framer-motion";

export default function SweetCorner() {
  const handleAddToCart = (item) => {
    toast.success(`${item} added to your basket! 🥐`);
  };

  return (
    <div className="bg-[#fffbf0] dark:bg-[#2c1810] font-serif text-[#451a03] dark:text-[#f8e7d5] transition-colors duration-300 min-h-screen flex flex-col selection:bg-[#d97706]/30">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[#451a03]/10 bg-[#fffbf0]/90 dark:bg-[#2c1810]/90 backdrop-blur-md px-6 md:px-10 py-4">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-[#d97706] rounded-full flex items-center justify-center text-white shadow-lg">
              <MdBakeryDining className="text-2xl" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight">The Sweet Corner</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-sans font-medium text-sm tracking-wide">
            <Link className="hover:text-[#d97706] transition-colors" href="/">Home</Link>
            <a className="hover:text-[#d97706] transition-colors" href="#menu">Menu</a>
            <a className="hover:text-[#d97706] transition-colors" href="#about">Our Story</a>
            <a className="hover:text-[#d97706] transition-colors" href="#visit">Visit Us</a>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => toast.info("Your basket is empty!")}
              className="relative p-2 hover:bg-[#d97706]/10 rounded-full transition-colors"
            >
              <MdShoppingBasket className="text-2xl" />
              <span className="absolute top-0 right-0 size-4 bg-[#d97706] text-white text-[10px] font-bold rounded-full flex items-center justify-center">0</span>
            </button>
            <button 
              onClick={() => toast.error("Online ordering is currently at capacity. Please try again in 10 mins.")}
              className="hidden sm:block bg-[#451a03] dark:bg-[#f8e7d5] dark:text-[#451a03] text-white px-6 py-2 rounded-full font-sans font-bold text-sm hover:bg-[#d97706] hover:scale-105 transition-all"
            >
              Order Online
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-6 py-16 md:py-24 overflow-hidden">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 space-y-8 z-10">
              <FadeIn>
                <span className="inline-block px-4 py-1 rounded-full bg-[#d97706]/10 text-[#d97706] font-sans font-bold text-xs uppercase tracking-widest">
                  Freshly Baked Daily
                </span>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  Taste the <span className="text-[#d97706] italic">Magic</span> in Every Bite
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-lg md:text-xl text-[#451a03]/70 dark:text-[#f8e7d5]/70 font-sans max-w-md leading-relaxed">
                  Artisanal sourdough, flaky croissants, and decadent cakes baked with organic, locally sourced ingredients.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="flex flex-wrap gap-4 font-sans">
                  <button 
                    onClick={() => toast.info("Menu loading...")}
                    className="bg-[#d97706] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-[#d97706]/40 hover:-translate-y-1 transition-all"
                  >
                    View Menu
                  </button>
                  <button className="bg-white dark:bg-[#451a03] border-2 border-[#d97706]/20 px-8 py-4 rounded-full font-bold hover:border-[#d97706] transition-all">
                    Our Story
                  </button>
                </div>
              </FadeIn>
            </div>
            <div className="order-1 md:order-2 relative">
              <FadeIn direction="left" delay={0.2}>
                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl rotate-3 border-8 border-white dark:border-[#451a03]">
                  <div className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-700" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPV6sqG3Wf0gbrlf5yl1OqtiooVt-lDswdiTKT8HQ-OHZX_6RoP5uYlWJ7KY8oLyvtOjgoT4iGdQmrzESrR7LqZ2XVlsB5Mezf9iI47RDXafd4xJLVsiMqzRUytmYY1WoGZj1DTgQ5TWbqPdkr5jRg7Pk-50rIJB_IMQVAqdJhyAYjwVQ06TQXyHeP4iM7S0Q35nLUgmMR7MqTH9lJS8Hhrmzs-Pg_9CncIlqTdeiRSPXDyskIfvPsa6AqQ4K3_r_l7Ipm0RynQVY')" }}></div>
                </div>
              </FadeIn>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 size-64 bg-[#d97706]/10 rounded-full blur-[80px] -z-10"></div>
              <div className="absolute -bottom-5 -left-5 size-40 bg-[#d97706] text-white rounded-full flex flex-col items-center justify-center shadow-xl font-bold p-4 text-center rotate-[-12deg] z-20">
                <span className="text-3xl font-black">100%</span>
                <span className="text-xs uppercase tracking-wide font-sans">Organic Flour</span>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-6 bg-white dark:bg-[#3d2218]" id="menu">
          <div className="max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
              <FadeIn>
                <div className="space-y-2">
                  <h3 className="text-[#d97706] font-sans font-bold uppercase tracking-widest text-sm">From the Oven</h3>
                  <h2 className="text-4xl md:text-5xl font-bold">Customer Favorites</h2>
                </div>
              </FadeIn>
              <button className="font-sans font-bold text-[#d97706] flex items-center gap-2 hover:gap-3 transition-all">
                See Full Menu <MdArrowForward className="text-xl" />
              </button>
            </div>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Classic Croissant", price: "$4.50", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9NIhf72oG5HF9DV5vakJvVn8hfl5jOLgzzSdZ7Mj_8HIoG6Cw_UzZhJNWXTQjzhdrfFcm7xBGBO-q50o9PQ95Cu812U-KpW-AJMTrIyCYBMAFBGRpCbk34unN2dzZaUhfe8pEQ5m2WfdxuFBywSc3BK2pi5ZFG5ttZvvr1bhimYd1Z_Qf-mob8zEs_-29FkrCqQYePZy4bFsfDeuanDEBU778BOFeJWCBB4gd0eivhpA_6x3aNzDgMnPbeZWISSUfMLv2dbKxJB0", tag: "Best Seller" },
                { name: "Sourdough Loaf", price: "$8.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuArnH7kHWVH8QpWebi_6eEkbdlFuDT9_9d2Tf6sGANbQUmdLOB_95msGotFgTsEVVBklLFS6JYb5gu5JwUE-biEdBwSEe7nV0Q7XqWns849RfD95rXOXpLXpzewqzRnMJJM-Nyged-HmnzaAzR3Vo-OFhKSmyLhp4mfBbyh1VKA8aJKmpg9wpkNcgjigYvkcuge3gKEQIIXDpwWIO54ClaOrKdmfIZ90T2nCagmwqmH9xDKwOGrY9aq2g8urVaUtiXd1mmmUr3WLDI", tag: "Vegan" },
                { name: "Berry Tart", price: "$6.50", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDORUVBVdj8h2MXnP6QzlL3SAA7ouzU1uwtSgLrEP1-slh54lzhPBAjNkE6eXGe4DVSZtDpe-i3eGnMhvCjNPClz29kSMz9Hi9Yc7ONePi1v7yd0xqvLRieC0MxxlU8IdU1WmOEmSm7_-3SB9Now8cOJ8syJb3SRasZe7NXJY9nAMt9nb8aFhmQYgrywhx9aLu3tGvWfgWoW1gMdiMbWrZGNWqhKBOMz4qLuabjxN-ZW2mn3xY1vB1jA6mYBIeMy82WFnfeKyK9MYo", tag: "Seasonal" },
                { name: "Pain au Chocolat", price: "$5.00", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPV6sqG3Wf0gbrlf5yl1OqtiooVt-lDswdiTKT8HQ-OHZX_6RoP5uYlWJ7KY8oLyvtOjgoT4iGdQmrzESrR7LqZ2XVlsB5Mezf9iI47RDXafd4xJLVsiMqzRUytmYY1WoGZj1DTgQ5TWbqPdkr5jRg7Pk-50rIJB_IMQVAqdJhyAYjwVQ06TQXyHeP4iM7S0Q35nLUgmMR7MqTH9lJS8Hhrmzs-Pg_9CncIlqTdeiRSPXDyskIfvPsa6AqQ4K3_r_l7Ipm0RynQVY", tag: null },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                  className="group"
                >
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                    <div className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500" style={{ backgroundImage: `url('${item.img}')` }}></div>
                    {item.tag && (
                      <span className="absolute top-3 left-3 bg-white/90 text-[#451a03] px-3 py-1 rounded-full text-xs font-sans font-bold uppercase tracking-wider shadow-sm">
                        {item.tag}
                      </span>
                    )}
                    <button 
                      onClick={() => handleAddToCart(item.name)}
                      className="absolute bottom-4 right-4 size-10 bg-[#d97706] text-white rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <MdRestaurantMenu className="text-xl" />
                    </button>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{item.name}</h3>
                  <p className="text-[#d97706] font-sans font-bold">{item.price}</p>
                </motion.div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-24 px-6 relative overflow-hidden" id="about">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#d97706] rounded-[2rem] rotate-6 opacity-20"></div>
              <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden">
                <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBNXY7vsmLucwC1R9MIzunLfmAcBj8SasjYsUDGmUYoqqwEc4WlTxnUC3nKQCdhrydj2XPvY3PFFC97N-R4O8az9LD8pc9g22HK-pqdIAxlfx65Mbhl2bDwcvf5cO3F44x_8PxBgNLW_BVZbm4L-QXaE3nSmYZjayj-2kMCzPtuLasg_fdVauHCiEcZhIuQiTTkpzGqnq8kmoTtCJPwYTN-tyrlijVVUDjf4STWmqOwhGY-C3OlWjfZVCFZryHz_RzwlFFFEVTnsmQ')" }}></div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Tradition Meets Passion</h2>
              <p className="text-lg text-[#451a03]/80 dark:text-[#f8e7d5]/80 font-sans leading-relaxed">
                Founded in 2018, The Sweet Corner started as a small home kitchen project. Today, we are a beloved community staple, known for our 48-hour fermented sourdough and hand-laminated pastries.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="text-3xl font-bold text-[#d97706]">5k+</h4>
                  <p className="font-sans text-sm uppercase tracking-wider opacity-70">Happy Customers</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-[#d97706]">50+</h4>
                  <p className="font-sans text-sm uppercase tracking-wider opacity-70">Daily Varieties</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#451a03] text-[#f8e7d5] py-16 px-6" id="visit">
          <div className="max-w-[1280px] mx-auto grid md:grid-cols-3 gap-12">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <MdBakeryDining className="text-4xl text-[#d97706]" />
                <h2 className="text-2xl font-bold">The Sweet Corner</h2>
              </div>
              <p className="font-sans text-white/60 max-w-sm">
                Baking the world a better place, one pastry at a time. Come visit us for the smell of fresh bread and the taste of home.
              </p>
              <div className="flex gap-4">
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#d97706] transition-colors"><MdFacebook /></a>
                <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-[#d97706] transition-colors"><MdCameraAlt /></a>
              </div>
            </div>
            <div>
              <h4 className="font-sans font-bold uppercase tracking-widest text-[#d97706] mb-6">Visit Us</h4>
              <ul className="space-y-4 font-sans text-white/80">
                <li className="flex items-start gap-3">
                  <MdLocationOn className="text-xl shrink-0 mt-1" />
                  <span>123 Baker Street,<br/>Pastry Town, PT 54321</span>
                </li>
                <li className="flex items-center gap-3">
                  <MdCall className="text-xl shrink-0" />
                  <span>(555) 987-6543</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-sans font-bold uppercase tracking-widest text-[#d97706] mb-6">Opening Hours</h4>
              <ul className="space-y-2 font-sans text-white/80">
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Mon - Fri</span>
                  <span>7:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-2">
                  <span>Saturday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-white/10 text-center font-sans text-white/40 text-sm">
            <p>© {new Date().getFullYear()} The Sweet Corner. Baked with love.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}