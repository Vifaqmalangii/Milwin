"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaDice, FaShieldAlt, FaUsers, FaTrophy, FaMobileAlt, FaHeadset, FaBars, FaTimes } from "react-icons/fa";
import Breadcrumb from "@/Components/Breadcrumb";

export default function AboutPage() {
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
              <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
                Register
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Hero */}
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Who We Are</span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white leading-tight">
            About <span className="text-gold-gradient">Milwin</span> Game
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Milwin is Pakistan's most trusted online gaming platform where players enjoy exciting games
            and earn real money. We provide a safe, fair, and fun environment for everyone.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-8 rounded-2xl bg-[#0d121d] border border-amber-500/20 space-y-4">
            <h2 className="text-2xl font-black uppercase text-white">
              Our <span className="text-amber-400">Mission</span>
            </h2>
            <p className="text-slate-300 leading-relaxed">
              Our mission is to provide the best online gaming experience for players in Pakistan and beyond.
              We believe in fair play, quick withdrawals, and outstanding customer support. Every player
              deserves a platform they can trust — and that is exactly what Milwin offers.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Milwin was created to bring entertainment and earning opportunities together in one app.
              From slots to card games, we have something for every type of player. Our platform is
              constantly updated with new games and features to keep the experience fresh and exciting.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <FaShieldAlt />, color: "text-amber-400", bg: "bg-amber-500/10", title: "100% Safe & Secure", desc: "Your data and money are fully protected with advanced security systems." },
              { icon: <FaUsers />, color: "text-cyan-400", bg: "bg-cyan-500/10", title: "Trusted by Thousands", desc: "Over thousands of active players enjoy Milwin every day across Pakistan." },
              { icon: <FaTrophy />, color: "text-purple-400", bg: "bg-purple-500/10", title: "Real Money Rewards", desc: "Win real cash by playing your favorite games and withdraw instantly." },
              { icon: <FaMobileAlt />, color: "text-emerald-400", bg: "bg-emerald-500/10", title: "Works on All Phones", desc: "Milwin runs smoothly on Android and all mobile devices." },
              { icon: <FaHeadset />, color: "text-rose-400", bg: "bg-rose-500/10", title: "24/7 Support", desc: "Our support team is always available to help you anytime, any day." },
              { icon: <FaDice />, color: "text-amber-400", bg: "bg-amber-500/10", title: "100+ Games", desc: "Enjoy a huge variety of games including slots, cards, roulette, and more." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-xl bg-[#131927] border border-slate-800 space-y-3">
                <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center ${item.color} text-lg`}>
                  {item.icon}
                </div>
                <h3 className="text-sm font-bold text-white uppercase">{item.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Related Resources Section */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#131927] to-[#0a0d14] border border-amber-500/20 space-y-6 mt-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-black uppercase text-white tracking-wide">
                Explore <span className="text-gold-gradient">Milwin</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base">
                Download the app, create an account, and start earning real money.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="/download"
                className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Download APK
              </a>
              <a
                href="/register"
                className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Create Account
              </a>
              <a
                href="/blog"
                className="px-5 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Game Guides
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-6">
            <Link
              href="/"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-black uppercase text-sm tracking-wider shadow-lg shadow-amber-500/30 hover:scale-105 transition-transform"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
