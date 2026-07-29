"use client";

import { useState } from "react";
import Navbar from "@/Components/casinous/Navbar";
import Footer from "@/Components/casinous/Footer";
import AuthModal from "@/Components/casinous/AuthModal";
import ToastContainers from "@/Components/ToastContainer";
import Breadcrumb from "@/Components/Breadcrumb";
import { FaUser, FaLock, FaShieldAlt, FaArrowRight } from "react-icons/fa";

export default function RegisterPage() {
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

      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block">
            Registration Guide
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            How to Register on <span className="text-amber-300">Milwin</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Follow this guide to create your account safely and claim your welcome bonus. We explain each step, what information you need, and how to stay secure.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="bg-[#111622] border border-amber-500/20 rounded-[32px] p-8 shadow-2xl space-y-6">
            <div className="rounded-3xl border border-slate-800/70 bg-[#0f1724] p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-300 flex items-center justify-center text-xl">
                  <FaUser />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Important Note</p>
                  <h2 className="text-lg font-bold text-white">Use valid email and strong password</h2>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-7">
                Make sure your email address is correct and that you choose a strong password. This keeps your account and funds secure.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 1</p>
                  <h3 className="text-xl font-semibold text-white">Open the Registration Page</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Go to the register page from the main menu or the homepage. The page will guide you through the signup process.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 2</p>
                  <h3 className="text-xl font-semibold text-white">Choose a Username</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Pick a username or display name you like. This is how you will appear in your account and on leaderboards.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 3</p>
                  <h3 className="text-xl font-semibold text-white">Enter Your Email</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Use a valid email address you can access. You may need it to verify your account or recover your password later.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 4</p>
                  <h3 className="text-xl font-semibold text-white">Set a Strong Password</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Pick a password that is hard to guess. Use letters, numbers, and symbols if possible, and do not reuse passwords from other sites.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 5</p>
                  <h3 className="text-xl font-semibold text-white">Confirm and Finish</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Once you submit the form, check your email for any verification link or confirmation message. Then you can login and start using your account.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="bg-[#111622] border border-slate-800/80 rounded-3xl p-6 space-y-5">
            <div className="rounded-3xl border border-amber-500/20 bg-[#0a1726] p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-300 flex items-center justify-center text-xl">
                  <FaShieldAlt />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Security Tip</p>
                  <h3 className="text-lg font-bold text-white">Keep your account protected</h3>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-7">
                Do not share your password. If you receive any unexpected emails asking for login details, contact support immediately.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800/70 bg-[#0f1724] p-5">
              <p className="text-xs uppercase tracking-wider text-amber-300 font-bold">Quick Notes</p>
              <ul className="mt-3 space-y-3 text-slate-300 text-sm leading-7 list-disc list-inside">
                <li>Your email must be valid for account recovery.</li>
                <li>Select a username you can remember easily.</li>
                <li>A strong password keeps your wallet secure.</li>
                <li>Contact support if you have trouble registering.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 bg-[#0d121d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#131927] to-[#0a0d14] border border-emerald-500/20 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-black uppercase text-white tracking-wide">
                Next <span className="text-gold-gradient">Steps</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Download the app, deposit money, and start playing to earn real cash.
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
