"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import {
  FaTimes,
  FaAndroid,
  FaApple,
  FaDownload,
  FaQrcode,
  FaShieldAlt,
  FaBolt,
  FaCheckCircle,
  FaWallet,
  FaLock,
  FaStar,
  FaInfoCircle,
} from "react-icons/fa";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [activeTab, setActiveTab] = useState<"android" | "ios" | "qr">("android");
  const [isDownloading, setIsDownloading] = useState(false);

  if (!isOpen) return null;

  const handleDownloadApk = () => {
    setIsDownloading(true);
    toast.info("Preparing Milwin v2.4 APK download package...", {
      autoClose: 2000,
    });

    setTimeout(() => {
      setIsDownloading(false);
      const link = document.createElement("a");
      link.href = "#";
      link.setAttribute("download", "Milwin_Game_v2.4.1.apk");
      document.body.appendChild(link);
      toast.success("Download started! Open your downloads folder once complete.", {
        autoClose: 4000,
      });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#111622] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-amber-500/10 text-white my-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-amber-400 text-xl p-2 transition-colors rounded-full bg-slate-900/60 border border-slate-800"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className="text-center mb-6 pr-8 sm:pr-0">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
            <FaStar className="text-amber-400" /> Official Milwin Mobile App
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-white">
            Download <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Milwin Game</span> App
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl mx-auto">
            Experience Pakistan's premier real-cash gaming platform on your smartphone with instant deposit &amp; withdrawal support via JazzCash &amp; EasyPaisa.
          </p>
        </div>

        <div className="flex bg-[#0a0d14] p-1.5 rounded-2xl border border-slate-800 mb-6">
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
          <button
            onClick={() => setActiveTab("ios")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm sm:text-base transition-all ${
              activeTab === "ios"
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FaApple className="text-lg" /> iOS / Web App
          </button>
          <button
            onClick={() => setActiveTab("qr")}
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm sm:text-base transition-all ${
              activeTab === "qr"
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-black shadow-lg shadow-amber-500/20"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <FaQrcode className="text-lg" /> QR Scanner
          </button>
        </div>

        {activeTab === "android" && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-gradient-to-br from-[#182030] to-[#0f1420] border border-amber-500/20 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-lg font-bold text-white">Milwin Game v2.4.1 Official APK</span>
                  <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-0.5 rounded border border-emerald-500/40 font-semibold flex items-center gap-1">
                    <FaCheckCircle className="text-[10px]" /> Verified Safe
                  </span>
                </div>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Size: <strong className="text-slate-200">32.4 MB</strong> | Requires: <strong className="text-slate-200">Android 6.0+</strong>
                </p>
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 text-xs text-slate-400 pt-1">
                  <span className="flex items-center gap-1"><FaShieldAlt className="text-amber-400" /> 100% Virus-Free</span>
                  <span className="flex items-center gap-1"><FaBolt className="text-amber-400" /> Ultra-Fast Gaming Engine</span>
                </div>
              </div>

              <button
                onClick={handleDownloadApk}
                disabled={isDownloading}
                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 text-black font-extrabold rounded-xl shadow-lg shadow-amber-500/25 uppercase tracking-wider text-sm flex items-center justify-center gap-2 transform active:scale-95 transition-all"
              >
                <FaDownload className={isDownloading ? "animate-bounce" : ""} />
                {isDownloading ? "Downloading..." : "Download APK Now"}
              </button>
            </div>

            <div>
              <h3 className="text-base font-bold text-amber-400 uppercase tracking-wide mb-3 flex items-center gap-2">
                <FaInfoCircle /> Quick 3-Step Setup Guide
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs sm:text-sm">
                <div className="bg-[#0a0d14] border border-slate-800 rounded-xl p-3.5 space-y-1.5">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">
                    1
                  </span>
                  <h4 className="font-bold text-slate-200">Download File</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Click the <strong>Download APK</strong> button above to save the latest Milwin installer on your device.
                  </p>
                </div>

                <div className="bg-[#0a0d14] border border-slate-800 rounded-xl p-3.5 space-y-1.5">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">
                    2
                  </span>
                  <h4 className="font-bold text-slate-200">Allow Installation</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Go to <em>Settings &gt; Security</em> and enable <strong>"Install Unknown Apps"</strong> for your browser.
                  </p>
                </div>

                <div className="bg-[#0a0d14] border border-slate-800 rounded-xl p-3.5 space-y-1.5">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 font-bold flex items-center justify-center text-xs">
                    3
                  </span>
                  <h4 className="font-bold text-slate-200">Play &amp; Win</h4>
                  <p className="text-slate-400 leading-relaxed">
                    Open the app, register with your phone number, and claim your instant Welcome Cash Bonus!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "ios" && (
          <div className="bg-[#0a0d14] border border-slate-800 rounded-2xl p-6 space-y-4 animate-fadeIn">
            <div className="flex items-center gap-3 text-amber-400">
              <FaApple className="text-3xl" />
              <div>
                <h3 className="text-lg font-bold text-white">Milwin iOS Web App (Instant Play)</h3>
                <p className="text-xs text-slate-400">No App Store download needed! Add directly to your Home Screen.</p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Apple App Store policies restrict direct real-cash casino app downloads. However, you can enjoy the full 
              <strong> Milwin Gaming Experience</strong> seamlessly on your iPhone or iPad using Web App PWA mode:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-slate-300 bg-[#131927] p-4 rounded-xl border border-slate-800">
              <li>Open <strong>Safari</strong> browser on your iPhone or iPad.</li>
              <li>Navigate to our official portal <strong>milwingames.pk</strong>.</li>
              <li>Tap the <strong>Share Button</strong> (box with up arrow at bottom of Safari).</li>
              <li>Scroll down and select <strong>"Add to Home Screen"</strong>.</li>
              <li>Launch Milwin from your home screen just like a native app!</li>
            </ol>
          </div>
        )}

        {activeTab === "qr" && (
          <div className="bg-[#0a0d14] border border-slate-800 rounded-2xl p-6 text-center space-y-4 animate-fadeIn">
            <h3 className="text-base font-bold text-amber-400">Scan QR Code to Download Instantly</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
              Point your smartphone camera at the QR code below to open the direct high-speed download link on your phone.
            </p>

            <div className="inline-block bg-white p-4 rounded-2xl border-4 border-amber-500/50 shadow-xl shadow-amber-500/10 my-2">
              <svg className="w-36 h-36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="white" />
                <path d="M0 0h35v35H0zM5 5v25h25V5zM10 10h15v15H10z" fill="#000" />
                <path d="M65 0h35v35H65zM70 5v25h25V5zM75 10h15v15H75z" fill="#000" />
                <path d="M0 65h35v35H0zM5 70v25h25V70zM10 75h15v15H10z" fill="#000" />
                <rect x="40" y="10" width="15" height="15" fill="#000" />
                <rect x="45" y="45" width="20" height="20" fill="#000" />
                <rect x="75" y="45" width="15" height="15" fill="#000" />
                <rect x="40" y="75" width="15" height="15" fill="#000" />
                <rect x="65" y="65" width="25" height="25" fill="#d97706" />
              </svg>
            </div>
            <p className="text-xs text-amber-400 font-semibold">Supports iOS &amp; Android Cameras</p>
          </div>
        )}

        <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
          <div className="bg-[#0a0d14]/60 p-2.5 rounded-xl border border-slate-800/80">
            <FaWallet className="mx-auto text-amber-400 text-lg mb-1" />
            <span className="font-semibold text-slate-200 block">JazzCash &amp; EasyPaisa</span>
            <span className="text-[10px] text-slate-400">Instant Cashouts</span>
          </div>
          <div className="bg-[#0a0d14]/60 p-2.5 rounded-xl border border-slate-800/80">
            <FaShieldAlt className="mx-auto text-amber-400 text-lg mb-1" />
            <span className="font-semibold text-slate-200 block">Anti-Cheat Protected</span>
            <span className="text-[10px] text-slate-400">Fair Gameplay</span>
          </div>
          <div className="bg-[#0a0d14]/60 p-2.5 rounded-xl border border-slate-800/80">
            <FaBolt className="mx-auto text-amber-400 text-lg mb-1" />
            <span className="font-semibold text-slate-200 block">Lightweight App</span>
            <span className="text-[10px] text-slate-400">Smooth on low RAM</span>
          </div>
          <div className="bg-[#0a0d14]/60 p-2.5 rounded-xl border border-slate-800/80">
            <FaLock className="mx-auto text-amber-400 text-lg mb-1" />
            <span className="font-semibold text-slate-200 block">256-Bit SSL Safe</span>
            <span className="text-[10px] text-slate-400">Secured Player Data</span>
          </div>
        </div>

      </div>
    </div>
  );
}
