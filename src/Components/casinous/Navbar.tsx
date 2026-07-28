"use client";

import { useState } from "react";
import Link from "next/link";
import { FaDice, FaBars, FaTimes, FaAndroid, FaPlusCircle, FaWallet } from "react-icons/fa";
import DownloadModal from "./DownloadModal";
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";

interface NavbarProps {
  onOpenAuth: (mode: "signin" | "signup") => void;
}

export default function Navbar({ onOpenAuth }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [depositModalOpen, setDepositModalOpen] = useState(false);
  const [withdrawModalOpen, setWithdrawModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0a0d14]/95 backdrop-blur-lg border-b border-amber-500/20 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-2 sm:gap-4">

        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-black text-xl sm:text-2xl shadow-lg shadow-amber-500/30 group-hover:scale-105 transition-transform">
            <FaDice />
          </div>
          <span className="text-xl sm:text-2xl font-black tracking-wider uppercase text-white">
            MIL<span className="text-amber-400">WIN</span>
          </span>
        </Link>

        {/* Desktop Navigation Links List */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs xl:text-sm font-semibold tracking-wide text-slate-300 flex-wrap">
          <Link href="/" className="hover:text-amber-400 transition-colors py-2">
            Home
          </Link>
          <Link href="/about" className="hover:text-amber-400 transition-colors py-2">
            About Us
          </Link>
          <Link href="/contact" className="hover:text-amber-400 transition-colors py-2">
            Contact Us
          </Link>
          <Link href="/blog" className="hover:text-amber-400 transition-colors py-2">
            Blog
          </Link>
          <Link href="/download" className="hover:text-amber-400 transition-colors py-2">
            Download
          </Link>
          <Link href="/deposit" className="text-emerald-400 hover:text-emerald-300 transition-colors py-2 font-bold">
            Deposit
          </Link>
          <Link href="/withdraw" className="text-cyan-400 hover:text-cyan-300 transition-colors py-2 font-bold">
            Withdraw
          </Link>
          <Link href="/register" className="hover:text-amber-400 transition-colors py-2">
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
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
              Home
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
              Contact Us
            </Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
              Blog
            </Link>
            <Link href="/download" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
              Download
            </Link>
            <Link href="/deposit" onClick={() => setMobileMenuOpen(false)} className="text-emerald-400 font-bold py-1">
              Deposit
            </Link>
            <Link href="/withdraw" onClick={() => setMobileMenuOpen(false)} className="text-cyan-400 font-bold py-1">
              Withdraw
            </Link>
            <Link href="/register" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
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
