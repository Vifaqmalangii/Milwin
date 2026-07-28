"use client";

import Link from "next/link";
import { FaDice, FaUserShield, FaLock } from "react-icons/fa";
import Breadcrumb from "@/Components/Breadcrumb";

export default function PrivacyPolicyPage() {
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
            <FaUserShield />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Data Protection</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white leading-tight">
            Privacy <span className="text-gold-gradient">Policy</span>
          </h1>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-8 px-4 pb-24">
        <div className="max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl bg-[#0d121d] border border-amber-500/20 shadow-xl space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed">

          <div className="p-4 rounded-xl bg-[#131927] border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-center gap-3">
            <FaLock className="text-amber-400 text-xl shrink-0" />
            <span>At Milwin, one of our main priorities is the privacy of our visitors. This Privacy Policy explains what information we collect, how we use it, and how we protect it.</span>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              Scope
            </h2>
            <p>
              This Privacy Policy applies only to our online activities and is valid for visitors to our website regarding information they share and/or we collect through the website. It does not apply to information collected offline or through channels other than this website.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              Consent
            </h2>
            <p>
              By using our website, you consent to this Privacy Policy and agree to its terms.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              Information We Collect
            </h2>
            <p>
              The personal information you are asked to provide, and why you are asked to provide it, will be made clear at the point of collection.
            </p>
            <p>
              If you contact us directly, we may receive additional information such as your name, email address, phone number, message content, attachments, and any other details you choose to provide.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              How We Use Your Information
            </h2>
            <p>
              We use collected information to operate and maintain the website, improve user experience, personalize content, analyze usage trends, communicate updates, provide support, send emails, and prevent fraud or misuse.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              Log Files
            </h2>
            <p>
              Like most websites, we use standard log files. These may include IP address, browser type, ISP, date/time stamp, referring/exit pages, and click data. This data is used for analytics, site administration, and performance monitoring and is not directly linked to personally identifiable information.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              Cookies and Web Beacons
            </h2>
            <p>
              Milwin uses cookies to store visitor preferences and improve website performance and user experience. You can control cookie settings through your browser preferences.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              Google Advertising and DART Cookies
            </h2>
            <p>
              Third-party services such as Google may use cookies (including DART cookies) to serve ads based on user visits to this and other websites. Users may opt out through Google Ad Settings and Google advertising policy pages.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              Third-Party Privacy Policies
            </h2>
            <p>
              Our Privacy Policy does not apply to other websites or advertisers. We recommend reviewing their privacy policies for more details on data practices and opt-out options.
            </p>
          </div>

          <div className="border-t border-slate-800 pt-5 space-y-3">
            <h2 className="text-lg font-bold text-white uppercase tracking-wider text-amber-400">
              Children's Privacy
            </h2>
            <p>
              We do not knowingly collect personally identifiable information from children under 13. If you believe a child has provided such data, contact us and we will promptly remove it where required.
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
    </main>
  );
}
