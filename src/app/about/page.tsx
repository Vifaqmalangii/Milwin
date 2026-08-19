"use client";

import Navbar from "@/Components/casinous/Navbar";
import Footer from "@/Components/casinous/Footer";
import Link from "next/link";
import { FaShieldAlt, FaUsers, FaTrophy, FaMobileAlt, FaHeadset, FaDice } from "react-icons/fa";
import Breadcrumb from "@/Components/Breadcrumb";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0a0d14] text-white">
      {/* Navbar */}
      <Navbar />

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

      {/* Footer */}
      <Footer />
    </main>
  );
}
