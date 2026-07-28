"use client";

import Navbar from "@/Components/casinous/Navbar";
import Footer from "@/Components/casinous/Footer";
import AuthModal from "@/Components/casinous/AuthModal";
import ToastContainers from "@/Components/ToastContainer";
import Breadcrumb from "@/Components/Breadcrumb";
import { useState } from "react";
import {
  FaMobileAlt,
  FaUniversity,
  FaCheckCircle,
  FaShieldAlt,
  FaGift,
  FaClock,
  FaArrowRight,
  FaQuestionCircle,
  FaStar,
  FaBolt,
  FaLock,
} from "react-icons/fa";

export default function DepositPage() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  const handleOpenAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  const methods = [
    {
      icon: <FaMobileAlt className="text-red-500 text-3xl" />,
      name: "JazzCash",
      color: "border-red-500/30 hover:border-red-500/60",
      badge: "Most Popular",
      badgeColor: "bg-red-500/20 text-red-400 border-red-500/40",
      limit: "Min: Rs. 100 | Max: Rs. 50,000",
      time: "Instant – Under 2 Minutes",
      steps: [
        "Open your JazzCash mobile app or dial *786# on your phone.",
        "Navigate to Payments → Bill Payments from the main menu.",
        "Search for \"Milwin\" in the biller list and select it.",
        "Enter your registered Milwin User ID and the deposit amount.",
        "Review the payment details carefully, then confirm with your JazzCash PIN.",
        "Take a screenshot of the confirmation screen and save your Transaction ID.",
        "Your Milwin wallet balance will be updated automatically within 2 minutes.",
      ],
    },
    {
      icon: <FaMobileAlt className="text-emerald-400 text-3xl" />,
      name: "EasyPaisa",
      color: "border-emerald-500/30 hover:border-emerald-500/60",
      badge: "Widely Used",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/40",
      limit: "Min: Rs. 200 | Max: Rs. 25,000",
      time: "Instant – Under 3 Minutes",
      steps: [
        "Open the EasyPaisa app on your phone or visit the nearest EasyPaisa retailer.",
        "Select Send Money or Mobile Account Transfer from the menu.",
        "Enter Milwin's registered EasyPaisa account number as the recipient.",
        "Type in the exact deposit amount you wish to add to your wallet.",
        "Verify all details and confirm the transaction using your account PIN.",
        "Save the confirmation SMS or screenshot — it includes your Transaction ID.",
        "Your Milwin balance will be credited within 3 minutes automatically.",
      ],
    },
    {
      icon: <FaUniversity className="text-cyan-400 text-3xl" />,
      name: "Bank Transfer (HBL, MCB, UBL, Meezan & More)",
      color: "border-cyan-500/30 hover:border-cyan-500/60",
      badge: "High Limit",
      badgeColor: "bg-cyan-500/20 text-cyan-400 border-cyan-500/40",
      limit: "Min: Rs. 1,000 | Max: Rs. 5,00,000",
      time: "15 Minutes to 2 Hours",
      steps: [
        "Log in to your Internet Banking portal or visit your nearest bank branch.",
        "Select Fund Transfer → IBFT (Inter-Bank Funds Transfer).",
        "Enter Milwin's official bank account number and IBAN provided on the website.",
        "In the payment remarks or narration field, write your Milwin User ID.",
        "Enter the exact amount, review the details, and authorize the transfer.",
        "Save the bank receipt or take a screenshot of the confirmation.",
        "Send the payment proof via Milwin WhatsApp Support. Your balance will be updated after manual verification.",
      ],
    },
  ];

  const tips = [
    "Always include your Milwin User ID in the payment remarks so your deposit is matched instantly.",
    "Save a screenshot of every transaction for your own records in case of disputes.",
    "Deposits via JazzCash and EasyPaisa are processed automatically — no manual approval needed.",
    "The system runs 24/7, so you can deposit anytime — even on weekends and public holidays.",
    "Only use Milwin's official account numbers listed on this website to avoid fraud.",
    "If your balance doesn't update within 10 minutes, contact WhatsApp Support immediately with your transaction proof.",
  ];

  const faqs = [
    {
      q: "What is the minimum deposit amount?",
      a: "The minimum deposit is Rs. 100 via JazzCash, Rs. 200 via EasyPaisa, and Rs. 1,000 via Bank Transfer.",
    },
    {
      q: "How long does it take for the deposit to appear?",
      a: "JazzCash and EasyPaisa deposits are instant — usually within 2-3 minutes. Bank Transfers may take between 15 minutes and 2 hours depending on your bank.",
    },
    {
      q: "Are there any deposit fees?",
      a: "Milwin charges zero deposit fees. Your payment app or bank may apply their standard transfer charges.",
    },
    {
      q: "What should I do if my deposit doesn't arrive?",
      a: "Send your transaction screenshot and Transaction ID to Milwin's WhatsApp Support team. They're available 24/7 and typically resolve issues within 15 minutes.",
    },
    {
      q: "How do I claim the First Deposit Bonus?",
      a: "Simply make your first deposit of Rs. 1,000 or more. The 100% bonus will be automatically credited to your wallet — no coupon code needed.",
    },
    {
      q: "Can I deposit using multiple payment methods?",
      a: "Yes! You can use any combination of JazzCash, EasyPaisa, or Bank Transfer for different deposits. There's no restriction on switching methods.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0d14] text-white">
      <ToastContainers />
      <Navbar onOpenAuth={handleOpenAuth} />
      
      <Breadcrumb />

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-4">
          <span className="px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider inline-block">
            Complete Step-by-Step Guide
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-tight">
            How To <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Deposit</span> in Milwin
          </h1>
          <p className="text-slate-400 text-sm sm:text-lg max-w-2xl mx-auto">
            Funding your Milwin wallet is quick, safe, and completely free. Follow the step-by-step instructions below for JazzCash, EasyPaisa, or Bank Transfer.
          </p>

          {/* Quick Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <div className="flex items-center gap-2 bg-[#111622] border border-slate-800 rounded-full px-4 py-1.5 text-xs text-slate-300">
              <FaBolt className="text-amber-400" /> Instant Processing
            </div>
            <div className="flex items-center gap-2 bg-[#111622] border border-slate-800 rounded-full px-4 py-1.5 text-xs text-slate-300">
              <FaLock className="text-emerald-400" /> 256-Bit SSL Secure
            </div>
            <div className="flex items-center gap-2 bg-[#111622] border border-slate-800 rounded-full px-4 py-1.5 text-xs text-slate-300">
              <FaShieldAlt className="text-cyan-400" /> Zero Deposit Fee
            </div>
            <div className="flex items-center gap-2 bg-[#111622] border border-slate-800 rounded-full px-4 py-1.5 text-xs text-slate-300">
              <FaGift className="text-amber-400" /> 100% First Deposit Bonus
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Bonus Banner */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-12">
        <div className="bg-gradient-to-r from-amber-500/20 via-emerald-500/15 to-amber-500/20 border border-amber-500/40 rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/20 flex items-center justify-center text-3xl shrink-0">
            <FaGift className="text-amber-400" />
          </div>
          <div className="text-center sm:text-left flex-1">
            <h2 className="text-lg sm:text-xl font-extrabold text-amber-300 uppercase tracking-wide">
              100% First Deposit Bonus — Exclusive for New Players!
            </h2>
            <p className="text-slate-300 text-sm mt-1 max-w-xl">
              Make your <strong>first deposit of Rs. 1,000 or more</strong> and instantly receive an extra <strong>Rs. 1,000 bonus</strong> in your wallet. Start playing with double the balance!
            </p>
          </div>
        </div>
      </section>

      {/* Payment Methods Guide */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16 space-y-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-wide text-center">
          Choose Your Preferred Payment Method
        </h2>

        {methods.map((method, idx) => (
          <div
            key={idx}
            className={`bg-[#111622] border-2 ${method.color} rounded-3xl p-6 sm:p-8 transition-colors`}
          >
            {/* Method Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/60 flex items-center justify-center">
                  {method.icon}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white">{method.name}</h3>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span className={`text-[10px] px-2 py-0.5 rounded border font-bold uppercase tracking-wider ${method.badgeColor}`}>
                      {method.badge}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <FaClock className="text-[10px]" /> {method.time}
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-xs text-slate-400 bg-[#0a0d14] border border-slate-800 rounded-xl px-3 py-1.5 whitespace-nowrap">
                {method.limit}
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-3">
              {method.steps.map((step, stepIdx) => (
                <div key={stepIdx} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                    {stepIdx + 1}
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Important Tips */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
        <div className="bg-[#111622] border border-amber-500/20 rounded-3xl p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-extrabold text-amber-400 uppercase tracking-wide mb-5 flex items-center gap-2">
            <FaStar /> Important Tips Before You Deposit
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2.5 bg-[#0a0d14] border border-slate-800 rounded-xl p-4">
                <FaCheckCircle className="text-emerald-400 text-base shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300 leading-relaxed">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-16">
        <h2 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-wide text-center mb-6 flex items-center justify-center gap-2">
          <FaQuestionCircle className="text-amber-400" /> Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#111622] border border-slate-800 rounded-2xl p-5">
              <h3 className="font-bold text-amber-300 text-sm sm:text-base mb-2 flex items-start gap-2">
                <FaArrowRight className="text-amber-400 shrink-0 mt-1 text-xs" />
                {faq.q}
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed pl-4">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 bg-[#0d121d]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#131927] to-[#0a0d14] border border-emerald-500/20 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-black uppercase text-white tracking-wide">
                Explore More <span className="text-gold-gradient">Services</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base">
                Learn about withdrawals, games, and how to maximize your earnings.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="/withdraw"
                className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Withdraw Money
              </a>
              <a
                href="/blog"
                className="px-5 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                Game Guides
              </a>
              <a
                href="/about"
                className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold uppercase text-sm transition-colors text-center"
              >
                About Milwin
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
