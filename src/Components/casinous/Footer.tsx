"use client";

import Link from "next/link";
import Image from "next/image";
import { FaShieldAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#07090e] border-t border-amber-500/20 text-slate-400 text-xs py-8 sm:py-10 lg:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        {/* Top Footer Wrapper */}
        <div className="flex flex-col sm:flex-row items-start justify-between gap-8 pb-8 border-b border-slate-800/80">
          {/* Logo & Description */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center group">
              <Image
                src="/milwinlogo.webp"
                alt="Milwin Logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain group-hover:scale-105 transition-transform"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-amber-400 transition-colors">About Us</Link>
              <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
              <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
            </nav>
          </div>

          {/* Games */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm">Games</h3>
            <nav className="flex flex-col gap-2">
              <a href="#games" className="hover:text-amber-400 transition-colors">Teen Patti</a>
              <a href="#games" className="hover:text-amber-400 transition-colors">Slots</a>
              <a href="#games" className="hover:text-amber-400 transition-colors">Roulette</a>
              <a href="#games" className="hover:text-amber-400 transition-colors">All Games</a>
            </nav>
          </div>

          {/* Account */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm">Account</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/download" className="hover:text-amber-400 transition-colors">Download APK</Link>
              <Link href="/register" className="hover:text-amber-400 transition-colors">Sign Up</Link>
              <Link href="/login" className="hover:text-amber-400 transition-colors">Login</Link>
              <Link href="/deposit" className="hover:text-amber-400 transition-colors">Deposit</Link>
            </nav>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-bold text-sm">Legal</h3>
            <nav className="flex flex-col gap-2">
              <Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <Link href="/terms-and-conditions" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
              <Link href="/disclaimer" className="hover:text-amber-400 transition-colors">Disclaimer</Link>
              <Link href="/sitemap-page" className="hover:text-amber-400 transition-colors">Sitemap</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-center text-slate-400 text-xs font-medium">
          Copyrights &copy; 2026 All Rights Reserved by{" "}
          <span className="text-amber-400 font-semibold">
            Milwin
          </span>
        </div>
      </div>
    </footer>
  );
}
