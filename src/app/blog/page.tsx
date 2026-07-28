"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FaDice, FaCalendarAlt, FaUser, FaArrowRight, FaBlog, FaBars, FaTimes } from "react-icons/fa";
import Breadcrumb from "@/Components/Breadcrumb";

const blogPosts = [
  {
    id: "how-to-win-teen-patti-milwin",
    title: "Top 5 Winning Strategies for Teen Patti on Milwin Game APK",
    excerpt: "Learn the secrets and best tips to increase your win rate in Teen Patti on Milwin. Master bankroll management and hand reading.",
    date: "July 25, 2026",
    author: "Milwin Gaming Team",
    image: "/images/card.png",
    altText: "Teen Patti card game strategy guide - Learn winning tips and tricks to earn real money on Milwin APK",
    category: "Game Guide",
  },
  {
    id: "milwin-daily-bonus-guide",
    title: "How to Claim Maximum Daily Login Bonuses in Milwin App",
    excerpt: "Discover how to claim free daily coins, registration rewards, and referral bonuses without spending money.",
    date: "July 22, 2026",
    author: "Milwin Support",
    image: "/images/slot.png",
    altText: "Milwin slot machine game tutorial - Daily login bonus and free coins rewards guide",
    category: "Rewards & Bonuses",
  },
  {
    id: "fast-withdrawals-jazzcash-easypaisa",
    title: "Instant Withdrawal Guide: How to Withdraw Money via JazzCash & Easypaisa",
    excerpt: "Step-by-step tutorial on withdrawing your game earnings directly to your mobile wallet in under 5 minutes.",
    date: "July 18, 2026",
    author: "Payment Team",
    image: "/images/roulette.png",
    altText: "Milwin withdrawal guide - Fast money transfer to JazzCash and Easypaisa in Pakistan",
    category: "Withdrawal Guide",
  },
];

export default function BlogPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <main className="min-h-screen bg-[#0a0d14] text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full bg-[#0a0d14]/90 backdrop-blur-lg border-b border-amber-500/20 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black text-2xl shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform">
              <FaDice />
            </div>
            <span className="text-2xl font-black tracking-wider uppercase text-white">
              MIL<span className="text-amber-400">WIN</span>
            </span>
          </Link>
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-semibold tracking-wide text-slate-300 flex-wrap">
            <Link href="/" className={pathname === "/" ? "text-amber-400 py-2" : "hover:text-amber-400 transition-colors py-2"}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "text-amber-400 py-2" : "hover:text-amber-400 transition-colors py-2"}>About Us</Link>
            <Link href="/contact" className={pathname === "/contact" ? "text-amber-400 py-2" : "hover:text-amber-400 transition-colors py-2"}>Contact Us</Link>
            <Link href="/blog" className={pathname === "/blog" ? "text-amber-400 py-2" : "hover:text-amber-400 transition-colors py-2"}>Blog</Link>
            <Link href="/download" className={pathname === "/download" ? "text-amber-400 py-2" : "hover:text-amber-400 transition-colors py-2"}>Download</Link>
            <Link href="/deposit" className={pathname === "/deposit" ? "text-emerald-400 py-2" : "text-emerald-400 hover:text-emerald-300 transition-colors py-2 font-bold"}>Deposit</Link>
            <Link href="/withdraw" className={pathname === "/withdraw" ? "text-cyan-400 py-2" : "text-cyan-400 hover:text-cyan-300 transition-colors py-2 font-bold"}>Withdraw</Link>
            <Link href="/register" className={pathname === "/register" ? "text-amber-400 py-2" : "hover:text-amber-400 transition-colors py-2"}>Register</Link>
          </nav>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-xl text-slate-300 hover:text-amber-400 p-1.5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#131927] border-b border-amber-500/20 px-5 py-5 space-y-4 animate-fadeIn">
            <nav className="flex flex-col space-y-2 font-semibold text-slate-300 text-sm">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className={pathname === "/" ? "text-amber-400 py-1" : "hover:text-amber-400 py-1"}>
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className={pathname === "/about" ? "text-amber-400 py-1" : "hover:text-amber-400 py-1"}>
                About Us
              </Link>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className={pathname === "/contact" ? "text-amber-400 py-1" : "hover:text-amber-400 py-1"}>
                Contact Us
              </Link>
              <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className={pathname === "/blog" ? "text-amber-400 py-1" : "hover:text-amber-400 py-1"}>
                Blog
              </Link>
              <Link href="/download" onClick={() => setMobileMenuOpen(false)} className={pathname === "/download" ? "text-amber-400 py-1" : "hover:text-amber-400 py-1"}>
                Download
              </Link>
              <Link href="/deposit" onClick={() => setMobileMenuOpen(false)} className={pathname === "/deposit" ? "text-emerald-400 font-bold py-1" : "text-emerald-400 font-bold py-1"}>
                Deposit
              </Link>
              <Link href="/withdraw" onClick={() => setMobileMenuOpen(false)} className={pathname === "/withdraw" ? "text-cyan-400 font-bold py-1" : "text-cyan-400 font-bold py-1"}>
                Withdraw
              </Link>
              <Link href="/register" onClick={() => setMobileMenuOpen(false)} className={pathname === "/register" ? "text-amber-400 py-1" : "hover:text-amber-400 py-1"}>
                Register
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl shadow-lg shadow-amber-500/10">
            <FaBlog />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">News & Guides</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white leading-tight">
            Milwin <span className="text-gold-gradient">Blog</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Stay updated with the latest news, game guides, strategies, and bonus tips for Milwin Game APK.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 pb-24">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl bg-[#0d121d] border border-amber-500/20 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all group shadow-xl"
            >
              <div>
                {/* Image */}
                <div className="relative w-full aspect-[16/9] bg-[#131927]">
                  <Image
                    src={post.image}
                    alt={post.altText || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-bold text-amber-400 border border-amber-500/30 uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-amber-400" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaUser className="text-amber-400" /> {post.author}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors"
                >
                  Read More <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Related Resources Section */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d121d] to-[#0a0d14] border border-amber-500/20 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black uppercase text-white tracking-wide">
              Want to Start <span className="text-gold-gradient">Playing?</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Use these resources to get started earning real money on Milwin today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/download"
              className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold uppercase text-sm transition-colors text-center"
            >
              Download APK
            </Link>
            <Link
              href="/register"
              className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold uppercase text-sm transition-colors text-center"
            >
              Create Account
            </Link>
            <Link
              href="/deposit"
              className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-sm transition-colors text-center"
            >
              Deposit Money
            </Link>
            <Link
              href="/withdraw"
              className="px-5 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-bold uppercase text-sm transition-colors text-center"
            >
              Fast Withdrawal
            </Link>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-black uppercase text-sm tracking-wider shadow-lg shadow-amber-500/30 hover:scale-105 transition-transform"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
