"use client";

import Navbar from "@/Components/casinous/Navbar";
import Footer from "@/Components/casinous/Footer";
import DownloadModal from "@/Components/casinous/DownloadModal";
import AuthModal from "@/Components/casinous/AuthModal";
import ToastContainers from "@/Components/ToastContainer";
import Breadcrumb from "@/Components/Breadcrumb";
import { useState } from "react";
import {
  FaAndroid,
  FaDownload,
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
  FaWallet,
  FaLock,
  FaInfoCircle,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function DownloadPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");
  const [activeTab, setActiveTab] = useState<"android">("android");
  const [isDownloading, setIsDownloading] = useState(false);

  const handleOpenAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const handleDownloadApk = () => {
    setIsDownloading(true);
    toast.info("Preparing Milwin v2.4 APK download package...", { autoClose: 2000 });

    setTimeout(() => {
      setIsDownloading(false);
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("download", "Milwin_Game_v2.4.1.apk");
      document.body.appendChild(link);
      toast.success("Download started! Check your browser downloads folder.", { autoClose: 4000 });
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#0a0d14] text-white">
      <ToastContainers />
      <Navbar onOpenAuth={handleOpenAuth} />
      
      <Breadcrumb />

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-10 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider inline-block">
            Official Mobile App
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Milwin Game</span> App
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Get the official Milwin Android APK or iOS Web App for fast real-cash gaming, instant JazzCash &amp; EasyPaisa withdrawals, and 100+ skill games.
          </p>
        </div>

        {/* Operating System Tabs */}
        <div className="flex bg-[#111622] p-1.5 rounded-2xl border border-slate-800 mb-8 max-w-xl mx-auto">
          <button
            onClick={() => setActiveTab("android")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm sm:text-base transition-all ${
              activeTab === "android"
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FaAndroid className="text-lg" /> Android APK
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "android" && (
          <div className="bg-[#111622] border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-8 shadow-2xl">
            <div className="bg-gradient-to-br from-[#182030] to-[#0f1420] border border-amber-500/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-xl font-extrabold text-white">Milwin Game v2.4.1 Official APK</span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2.5 py-1 rounded-md border border-emerald-500/40 font-semibold flex items-center gap-1">
                    <FaCheckCircle className="text-xs" /> Verified Safe
                  </span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Size: <strong className="text-slate-200">32.4 MB</strong> | Requirements: <strong className="text-slate-200">Android 6.0+</strong>
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1.5"><FaShieldAlt className="text-amber-400" /> 100% Virus-Free</span>
                  <span className="flex items-center gap-1.5"><FaBolt className="text-amber-400" /> High Performance Engine</span>
                </div>
              </div>

              <a
                href="https://milapp.win/?dl=4kz455"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-extrabold rounded-2xl shadow-xl shadow-amber-500/25 uppercase tracking-wider text-base flex items-center justify-center gap-2 transform active:scale-95 transition-all shrink-0"
              >
                <FaDownload />
                Download APK Now
              </a>
            </div>

            {/* Setup Steps */}
            <div>
              <h3 className="text-lg font-bold text-amber-400 uppercase tracking-wide mb-4 flex items-center gap-2">
                <FaInfoCircle /> Step-by-Step Installation Guide
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-[#0a0d14] border border-slate-800 rounded-2xl p-5 space-y-2">
                  <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm">
                    1
                  </span>
                  <h4 className="font-bold text-slate-200 text-base">Download File</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Click the <strong>Download APK</strong> button above to save the official installer file on your Android device.
                  </p>
                </div>

                <div className="bg-[#0a0d14] border border-slate-800 rounded-2xl p-5 space-y-2">
                  <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm">
                    2
                  </span>
                  <h4 className="font-bold text-slate-200 text-base">Allow Security Settings</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Navigate to <em>Settings &gt; Security</em> and enable <strong>"Install Unknown Apps"</strong> for your browser.
                  </p>
                </div>

                <div className="bg-[#0a0d14] border border-slate-800 rounded-2xl p-5 space-y-2">
                  <span className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-sm">
                    3
                  </span>
                  <h4 className="font-bold text-slate-200 text-base">Install &amp; Play</h4>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    Open the downloaded file, complete installation, register your account, and claim your instant Welcome Bonus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs mt-10">
          <div className="bg-[#111622] p-4 rounded-2xl border border-slate-800">
            <FaWallet className="mx-auto text-amber-400 text-xl mb-2" />
            <span className="font-bold text-slate-200 block">JazzCash &amp; EasyPaisa</span>
            <span className="text-[11px] text-slate-400">Fast 5-15 Min Payouts</span>
          </div>
          <div className="bg-[#111622] p-4 rounded-2xl border border-slate-800">
            <FaShieldAlt className="mx-auto text-amber-400 text-xl mb-2" />
            <span className="font-bold text-slate-200 block">Anti-Cheat Protected</span>
            <span className="text-[11px] text-slate-400">Verified Fair Gameplay</span>
          </div>
          <div className="bg-[#111622] p-4 rounded-2xl border border-slate-800">
            <FaBolt className="mx-auto text-amber-400 text-xl mb-2" />
            <span className="font-bold text-slate-200 block">Lightweight App</span>
            <span className="text-[11px] text-slate-400">Smooth performance</span>
          </div>
          <div className="bg-[#111622] p-4 rounded-2xl border border-slate-800">
            <FaLock className="mx-auto text-amber-400 text-xl mb-2" />
            <span className="font-bold text-slate-200 block">256-Bit SSL Safe</span>
            <span className="text-[11px] text-slate-400">Encrypted Transactions</span>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 bg-[#0d121d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#131927] to-[#0a0d14] border border-amber-500/20 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-black uppercase text-white tracking-wide">
                Ready to <span className="text-gold-gradient">Play?</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Register, deposit funds, and start earning real money today.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="/register"
                className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Create Account
              </a>
              <a
                href="/deposit"
                className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Deposit Money
              </a>
              <a
                href="/blog"
                className="px-5 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Game Guides
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </main>
  );
}
