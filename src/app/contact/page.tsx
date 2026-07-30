"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaDice, FaEnvelope, FaClock, FaPaperPlane, FaBars, FaTimes } from "react-icons/fa";
import Breadcrumb from "@/Components/Breadcrumb";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
      <section className="py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Get In Touch</span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-white leading-tight">
            Contact <span className="text-gold-gradient">Us</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Have a question or need help? Our support team is available 24/7 to assist you.
            Reach out to us anytime and we will get back to you as soon as possible.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 px-4 pb-24">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="p-8 rounded-2xl bg-[#0d121d] border border-amber-500/20 space-y-6">
              <h2 className="text-xl font-black uppercase text-white">
                Reach <span className="text-amber-400">Us</span>
              </h2>
              {[
                { icon: <FaEnvelope />, color: "text-amber-400", bg: "bg-amber-500/10", label: "Email", value: "support@milwingames.pk" },
                { icon: <FaClock />, color: "text-cyan-400", bg: "bg-cyan-500/10", label: "Support Hours", value: "24/7 — Always Available" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`w-10 h-10 rounded-lg ${item.bg} flex items-center justify-center ${item.color} text-lg shrink-0 mt-0.5`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                    <p className="text-sm font-semibold text-white mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 rounded-2xl bg-[#0d121d] border border-amber-500/20">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 space-y-4 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 text-3xl">
                  <FaPaperPlane />
                </div>
                <h3 className="text-xl font-black uppercase text-white">Message Sent!</h3>
                <p className="text-slate-300 text-sm">Thank you for contacting us. We will reply within 24 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-xl bg-amber-500 text-black font-bold text-xs uppercase hover:bg-amber-400 transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h2 className="text-xl font-black uppercase text-white mb-6">
                  Send a <span className="text-amber-400">Message</span>
                </h2>
                {[
                  { id: "name", label: "Your Name", type: "text", placeholder: "Enter your name" },
                  { id: "email", label: "Email Address", type: "email", placeholder: "Enter your email" },
                  { id: "subject", label: "Subject", type: "text", placeholder: "What is this about?" },
                ].map((field) => (
                  <div key={field.id} className="space-y-1.5">
                    <label htmlFor={field.id} className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full bg-[#131927] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 transition-colors"
                    />
                  </div>
                ))}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-400">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Write your message here..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#131927] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-black uppercase text-sm tracking-wider shadow-lg shadow-amber-500/30 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                >
                  <FaPaperPlane /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Related Resources Section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#131927] to-[#0a0d14] border border-cyan-500/20 space-y-6 mt-12">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black uppercase text-white tracking-wide">
              Explore <span className="text-gold-gradient">More</span>
            </h3>
            <p className="text-slate-300 text-sm sm:text-base">
              Download the app, join our community, and start playing games.
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

        {/* Back to Home */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-xl bg-[#131927] border border-slate-700 text-white font-bold uppercase text-sm tracking-wider hover:border-amber-500/60 hover:text-amber-400 transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
