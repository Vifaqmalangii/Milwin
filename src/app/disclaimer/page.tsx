"use client";

import Link from "next/link";
import { FaDice, FaExclamationTriangle, FaShieldAlt } from "react-icons/fa";
import Breadcrumb from "@/Components/Breadcrumb";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#0a0d14] text-white">
      {/* Header / Navbar */}
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
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold tracking-wide text-slate-300">
            <Link href="/" className="hover:text-amber-400 transition-colors py-2">Home</Link>
            <Link href="/about" className="hover:text-amber-400 transition-colors py-2">About Us</Link>
            <Link href="/contact" className="hover:text-amber-400 transition-colors py-2">Contact Us</Link>
            <Link href="/blog" className="hover:text-amber-400 transition-colors py-2">Blog</Link>
          </nav>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl shadow-lg shadow-amber-500/10">
            <FaExclamationTriangle />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Legal Notice</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white leading-tight">
            Disclaimer For <span className="text-gold-gradient">Milwin</span>
          </h1>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-8 px-4 pb-24">
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl bg-[#0d121d] border border-amber-500/20 shadow-xl space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div className="p-4 rounded-xl bg-[#131927] border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center gap-3">
            <FaShieldAlt className="text-amber-400 text-xl shrink-0" />
            <span>Please read this disclaimer carefully before using the Milwin App website and services.</span>
          </div>

          <p>
            All information on Milwin App is published in good faith and for general information purposes only. We do not guarantee completeness, reliability, or accuracy.
          </p>

          <p>
            Any action you take based on information from this website is strictly at your own risk. Milwin App is not liable for any losses or damages related to website use.
          </p>

          <p>
            Our website may include links to external websites. We do not control their content, privacy policies, or terms, and these may change without notice.
          </p>

          <p>
            By using this website, you agree to this disclaimer and its terms. Updates to this disclaimer will be posted on this page.
          </p>

          {/* Back to Home Button */}
          <div className="text-center pt-8 border-t border-slate-800">
            <Link
              href="/"
              className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-black uppercase text-sm tracking-wider shadow-lg shadow-amber-500/30 hover:scale-105 transition-transform"
            >
              ← Back to Home
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}
