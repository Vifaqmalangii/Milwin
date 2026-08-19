"use client";

import Link from "next/link";

interface HowToPlayProps {
  onOpenAuth: (mode: "signin" | "signup") => void;
}

export default function HowToPlay({ onOpenAuth }: HowToPlayProps) {
  return (
    <section id="how-to-play" className="py-10 sm:py-12 lg:py-14 bg-[#0a0d14] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0d121d] border border-amber-500/20 shadow-xl shadow-amber-500/5 space-y-6">
          {/* Heading */}
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
              <span className="text-gold-gradient">Conclusion</span>
            </h2>
          </div>

          {/* Paragraph */}
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Milwin Game is a fun and popular app where players can enjoy many games like slots, cards, roulette, and color prediction. You can earn real money while having fun. The app gives free bonuses like welcome bonus, registration bonus, and daily login rewards, which help players start without spending too much money. It is safe and works on almost all phones. You can withdraw your money quickly using JazzCash or Easypaisa. Players can also invite friends and earn extra rewards. The app is regularly updated with new games and features. Overall, Mil win is easy, exciting, and a great choice for anyone who wants to play and earn money.
          </p>

          {/* Call-to-Action Links */}
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <Link
              href="/download"
              className="px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-extrabold uppercase text-sm transition-all shadow-md shadow-amber-500/20 text-center"
            >
              Download Milwin APK Now
            </Link>
            <Link
              href="/register"
              className="px-6 py-3 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold uppercase text-sm transition-all shadow-md shadow-emerald-500/20 text-center"
            >
              Create Free Account
            </Link>
            <Link
              href="/blog"
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-extrabold uppercase text-sm transition-all shadow-md shadow-purple-600/20 text-center"
            >
              Read Game Guides
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold uppercase text-sm transition-all shadow-md shadow-cyan-500/20 text-center"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
