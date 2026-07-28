"use client";

import { useState } from "react";
import Navbar from "@/Components/casinous/Navbar";
import Footer from "@/Components/casinous/Footer";
import AuthModal from "@/Components/casinous/AuthModal";
import ToastContainers from "@/Components/ToastContainer";
import Breadcrumb from "@/Components/Breadcrumb";
import { FaShieldAlt, FaLock, FaUser, FaArrowRight } from "react-icons/fa";

export default function LoginPage() {
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
          <span className="px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider inline-block">
            Login Guide
          </span>
          <h1 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
            How to Login to <span className="text-amber-300">Milwin</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Follow this guide to sign in safely and securely. Learn what details you need, how to use your credentials, and what to do if you need help.
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
                  <h2 className="text-lg font-bold text-white">Use your registered email or user ID</h2>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-7">
                Make sure you enter the same credentials you used when you created your account. Incorrect details may prevent access to your wallet and account features.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 1</p>
                  <h3 className="text-xl font-semibold text-white">Open the Login Page</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Navigate to the login page from the main menu or the login button on the homepage.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 2</p>
                  <h3 className="text-xl font-semibold text-white">Enter Your Credentials</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Type your registered email address or user ID, and your password. Use the exact spelling and case used during registration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 3</p>
                  <h3 className="text-xl font-semibold text-white">Submit the Form</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Click the sign-in button. If your details are correct, you will be logged in and redirected to your account dashboard.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 4</p>
                  <h3 className="text-xl font-semibold text-white">Forgot Your Password?</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    If you cannot remember your password, use the password recovery link or contact support from the contact page.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1 text-amber-400 text-xl"><FaArrowRight /></div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Step 5</p>
                  <h3 className="text-xl font-semibold text-white">Secure Your Account</h3>
                  <p className="text-slate-300 text-sm leading-7">
                    Always keep your login credentials private. Do not share your password with anyone to protect your wallet and winnings.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <aside className="bg-[#111622] border border-slate-800/80 rounded-3xl p-6 space-y-5">
            <div className="rounded-3xl border border-amber-500/20 bg-[#0a1726] p-5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 text-amber-300 flex items-center justify-center text-xl">
                  <FaLock />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Login Tips</p>
                  <h3 className="text-lg font-bold text-white">Keep your credentials safe</h3>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-7">
                Use a strong password and do not save it in shared browsers. If you are using a public computer, log out after your session.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-800/70 bg-[#0f1724] p-5">
              <p className="text-xs uppercase tracking-wider text-amber-300 font-bold">Quick Notes</p>
              <ul className="mt-3 space-y-3 text-slate-300 text-sm leading-7 list-disc list-inside">
                <li>Use the exact email or user ID registered with Milwin.</li>
                <li>Passwords are case-sensitive.</li>
                <li>If login fails, try resetting your password.</li>
                <li>Contact support if you cannot access your account.</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 bg-[#0d121d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#131927] to-[#0a0d14] border border-amber-500/20 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-black uppercase text-white tracking-wide">
                New to <span className="text-gold-gradient">Milwin?</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Create an account, download the app, and start earning real money.
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
                href="/download"
                className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Download APK
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
