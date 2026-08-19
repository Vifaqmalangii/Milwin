"use client";

import Navbar from "@/Components/casinous/Navbar";
import Footer from "@/Components/casinous/Footer";
import Link from "next/link";
import { FaFileContract, FaShieldAlt } from "react-icons/fa";
import Breadcrumb from "@/Components/Breadcrumb";

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-[#0a0d14] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl shadow-lg shadow-amber-500/10">
            <FaFileContract />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Legal Agreement</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white leading-tight">
            Terms And <span className="text-gold-gradient">Conditions</span>
          </h1>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-8 px-4 pb-24">
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl bg-[#0d121d] border border-amber-500/20 shadow-xl space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">
          
          <div className="p-4 rounded-xl bg-[#131927] border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center gap-3">
            <FaShieldAlt className="text-amber-400 text-xl shrink-0" />
            <span>Please read these terms carefully before using the Milwin website and platform.</span>
          </div>

          <p>
            Welcome to <strong className="text-white">Milwin</strong>. These Terms and Conditions govern your use of our website and related content.
          </p>

          <p>
            By accessing this website, you accept these terms in full. If you do not agree with any part of these terms, please do not continue using Milwin.
          </p>

          <div className="border-t border-slate-800 pt-5 space-y-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              1. Intellectual Property Rights
            </h2>
            <p>
              Unless otherwise stated, Milwin and/or its licensors own the intellectual property rights for all material on this website. You may access content for personal use only, subject to the restrictions in these terms.
            </p>
            <p>
              You must not republish, sell, rent, sub-license, reproduce, duplicate, copy, or redistribute material from Milwin without prior written permission.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              2. User Content & Submissions
            </h2>
            <p>
              Some areas of the site may allow user comments or feedback. We do not pre-screen all submissions and reserve the right to remove any content that is inappropriate, offensive, misleading, or in violation of these terms.
            </p>
            <p>
              You are responsible for any content you post and confirm that your content does not violate third-party rights, privacy, or applicable law.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-4">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              3. External Links & Updates
            </h2>
            <p>
              Our website may contain links to third-party websites. We try to link only useful resources, but we have no control over external site content, policies, or availability.
            </p>
            <p>
              We may request removal of links to our site at any time and may update these terms whenever needed. Continued use of the site means you accept the latest version.
            </p>
          </div>

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

      {/* Footer */}
      <Footer />
    </main>
  );
}
