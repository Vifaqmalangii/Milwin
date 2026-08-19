"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const DownloadModal = dynamic(() => import("./DownloadModal"), { ssr: false });
const DepositModal = dynamic(() => import("./DepositModal"), { ssr: false });
const WithdrawModal = dynamic(() => import("./WithdrawModal"), { ssr: false });

interface NavbarProps {
  onOpenAuth?: (mode: "signin" | "signup") => void;
}

export default function Navbar({ onOpenAuth }: NavbarProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0d14]/95 backdrop-blur-lg border-b border-amber-500/20 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center group shrink-0">
          <Image
            src="/milwinlogo.webp"
            alt="Milwin Logo"
            width={160}
            height={48}
            className="h-10 sm:h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            priority
          />
        </Link>

        {/* Desktop Navigation Links List */}
        <nav className="hidden lg:flex flex-1 items-center justify-evenly text-xs xl:text-sm font-semibold tracking-wide ml-4 xl:ml-8">
          <Link
            href="/"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 hover:border hover:border-amber-500/30 border border-transparent transition-all duration-300 ease-in-out whitespace-nowrap shadow-sm hover:shadow-amber-500/10"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 hover:border hover:border-amber-500/30 border border-transparent transition-all duration-300 ease-in-out whitespace-nowrap shadow-sm hover:shadow-amber-500/10"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 hover:border hover:border-amber-500/30 border border-transparent transition-all duration-300 ease-in-out whitespace-nowrap shadow-sm hover:shadow-amber-500/10"
          >
            Contact Us
          </Link>
          <Link
            href="/blog"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 hover:border hover:border-amber-500/30 border border-transparent transition-all duration-300 ease-in-out whitespace-nowrap shadow-sm hover:shadow-amber-500/10"
          >
            Blog
          </Link>
          <Link
            href="/download"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 hover:border hover:border-amber-500/30 border border-transparent transition-all duration-300 ease-in-out whitespace-nowrap shadow-sm hover:shadow-amber-500/10"
          >
            Download
          </Link>
          <Link
            href="/deposit"
            className="px-3 py-1.5 rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 hover:border hover:border-emerald-500/30 border border-transparent transition-all duration-300 ease-in-out font-bold whitespace-nowrap shadow-sm hover:shadow-emerald-500/10"
          >
            Deposit
          </Link>
          <Link
            href="/withdraw"
            className="px-3 py-1.5 rounded-lg text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 hover:border hover:border-cyan-500/30 border border-transparent transition-all duration-300 ease-in-out font-bold whitespace-nowrap shadow-sm hover:shadow-cyan-500/10"
          >
            Withdraw
          </Link>
          <Link
            href="/register"
            className="px-3 py-1.5 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-amber-500/10 hover:border hover:border-amber-500/30 border border-transparent transition-all duration-300 ease-in-out whitespace-nowrap shadow-sm hover:shadow-amber-500/10"
          >
            Register
          </Link>
        </nav>

        {/* Right Action Buttons */}

        {/* Mobile Navbar Buttons */}
        <div className="flex items-center gap-1.5 sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-xl text-slate-300 hover:text-amber-400 p-1.5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#131927] border-b border-amber-500/20 px-5 py-5 space-y-4 animate-fadeIn">
          <nav className="flex flex-col space-y-2 font-semibold text-slate-300 text-sm">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-200">
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-200">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-200">
              Contact Us
            </Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-200">
              Blog
            </Link>
            <Link href="/download" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-200">
              Download
            </Link>
            <Link href="/deposit" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-emerald-400 hover:bg-emerald-500/10 font-bold transition-all duration-200">
              Deposit
            </Link>
            <Link href="/withdraw" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg text-cyan-400 hover:bg-cyan-500/10 font-bold transition-all duration-200">
              Withdraw
            </Link>
            <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-amber-500/10 hover:text-amber-400 transition-all duration-200">
              Register
            </Link>
          </nav>
        </div>
      )}

      {/* Modals */}
      <DownloadModal
        isOpen={downloadModalOpen}
        onClose={() => setDownloadModalOpen(false)}
      />
      <DepositModal
        isOpen={depositModalOpen}
        onClose={() => setDepositModalOpen(false)}
      />
      <WithdrawModal
        isOpen={withdrawModalOpen}
        onClose={() => setWithdrawModalOpen(false)}
      />
    </header>
  );
}
