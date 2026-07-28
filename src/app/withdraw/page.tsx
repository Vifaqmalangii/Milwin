"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/Components/casinous/Navbar";
import Footer from "@/Components/casinous/Footer";
import AuthModal from "@/Components/casinous/AuthModal";
import ToastContainers from "@/Components/ToastContainer";
import Breadcrumb from "@/Components/Breadcrumb";
import { FaShieldAlt, FaLock, FaWallet, FaArrowRight, FaMobileAlt, FaUniversity, FaClock, FaCheckCircle } from "react-icons/fa";

export default function WithdrawPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  const handleOpenAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0d14] text-white">
      <ToastContainers />
      <Navbar onOpenAuth={handleOpenAuth} />
      
      <Breadcrumb />

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider inline-block">
            Fast Cashout System
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            How to Withdraw from <span className="text-cyan-400">Milwin</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Follow this guide to withdraw your winnings safely and securely. Learn about withdrawal methods, limits, and processing times.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="bg-[#111622] border border-cyan-500/20 rounded-[32px] p-8 shadow-2xl space-y-6">
            <div className="rounded-3xl border border-slate-800/70 bg-[#0f1724] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center text-xl">
                  <FaWallet />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Important Note</p>
                  <h2 className="text-lg font-bold text-white">Withdraw Your Winnings Instantly</h2>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-7">
                Milwin offers fast and reliable withdrawal processing. All requests are processed within 5-15 minutes to your registered JazzCash, EasyPaisa, or bank account. There are zero withdrawal fees.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-cyan-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 1</p>
                  <h3 className="text-xl font-semibold text-white">Login to Your Account</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Open the Milwin app or website and login with your registered email and password. Make sure you are logged into the correct account where your winnings are stored.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-cyan-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 2</p>
                  <h3 className="text-xl font-semibold text-white">Navigate to Withdrawal Section</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    From your dashboard, find the Wallet or Account Settings section. Click on "Withdraw" or "Request Withdrawal" to open the withdrawal form.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-cyan-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 3</p>
                  <h3 className="text-xl font-semibold text-white">Choose Withdrawal Method</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Select your preferred payment method: JazzCash, EasyPaisa, or Bank Transfer. Each method is fast and secure. Choose the one that is most convenient for you.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-cyan-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 4</p>
                  <h3 className="text-xl font-semibold text-white">Enter Withdrawal Amount</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Enter the amount you wish to withdraw. The minimum withdrawal is Rs. 300 and maximum depends on your available balance. You can see your current balance displayed at the top.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-cyan-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 5</p>
                  <h3 className="text-xl font-semibold text-white">Provide Payment Details</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Enter your account number, IBAN (for bank transfer), or mobile number (for JazzCash/EasyPaisa). Also provide the account holder's name as registered with your bank or mobile provider.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-cyan-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 6</p>
                  <h3 className="text-xl font-semibold text-white">Review and Confirm</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Double-check all the details you entered. Make sure the account number and holder's name are correct. Click "Confirm Withdrawal" to submit your request.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-cyan-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 7</p>
                  <h3 className="text-xl font-semibold text-white">Wait for Processing</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Your withdrawal request is now submitted. Most withdrawals are completed within 5-15 minutes. You will receive a confirmation message on the app and via email.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-cyan-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 8</p>
                  <h3 className="text-xl font-semibold text-white">Money Received</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Once processed, the money will be sent to your account. For JazzCash and EasyPaisa, you can pick it up at any agent. For bank transfers, it will be deposited directly into your account.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="bg-[#111622] border border-slate-800/80 rounded-3xl p-6 space-y-5">
            <div className="rounded-3xl border border-cyan-500/20 bg-[#0a1726] p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 text-cyan-300 flex items-center justify-center text-xl">
                  <FaClock />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Processing Time</p>
                  <h3 className="text-lg font-bold text-white">5-15 Minutes</h3>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-7">
                Most withdrawal requests are processed automatically within minutes of submission.
              </p>
            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-[#0a1726] p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-xl">
                  <FaCheckCircle />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Withdrawal Methods</p>
                  <h3 className="text-lg font-bold text-white">3 Options</h3>
                </div>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-center gap-2"><FaMobileAlt className="text-red-500 text-sm" /> JazzCash</li>
                <li className="flex items-center gap-2"><FaMobileAlt className="text-emerald-400 text-sm" /> EasyPaisa</li>
                <li className="flex items-center gap-2"><FaUniversity className="text-cyan-400 text-sm" /> Bank Transfer</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800/70 bg-[#0f1724] p-5">
              <p className="text-xs uppercase tracking-wider text-amber-300 font-bold">Withdrawal Limits</p>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm leading-7">
                <li><strong>Minimum:</strong> Rs. 300</li>
                <li><strong>Maximum:</strong> Your full balance</li>
                <li><strong>Fee:</strong> 0% (Free)</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-800/70 bg-[#0f1724] p-5">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Security Tips</p>
              <ul className="mt-3 space-y-2 text-slate-300 text-sm leading-7 list-disc list-inside">
                <li>Always verify account details</li>
                <li>Use the official Milwin app only</li>
                <li>Never share your PIN or password</li>
                <li>Keep withdrawal confirmations</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 bg-[#0d121d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#131927] to-[#0a0d14] border border-cyan-500/20 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-black uppercase text-white tracking-wide">
                Need More <span className="text-gold-gradient">Help?</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Explore deposits, game guides, and contact our support team.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="/deposit"
                className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Deposit Money
              </a>
              <a
                href="/blog"
                className="px-5 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Game Guides
              </a>
              <a
                href="/contact"
                className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Contact Support
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
