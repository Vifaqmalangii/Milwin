"use client";

import Link from "next/link";
import { FaStar, FaGift } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-10 sm:py-12 lg:py-14 bg-[#0d121d] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 sm:space-y-8">

        {/* Block 1: Why Milwin is Popular */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0d14] border border-amber-500/20 shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 text-xl shrink-0">
              <FaStar />
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
              Why Milwin Game is <span className="text-gold-gradient">More Popular</span> than Other Casino Games?
            </h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Milwin Game is very popular because players can win real money and have fun at the same time. The app has many games like slots, card games, roulette, and color prediction, so players can play a lot of different games in one app. It is easy to use, safe, and fast to withdraw money. The app works well on all phones. Players also get daily rewards, exciting games, and can invite friends to earn more, which makes Mil win Game everyone&apos;s favorite.
          </p>
          <Link
            href="/about"
            className="inline-flex px-5 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-sm transition-all shadow-md shadow-amber-500/20"
          >
            Learn More About Us
          </Link>
        </div>

        {/* Block 2: Daily Login Bonus */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0d14] border border-amber-500/20 shadow-xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 text-xl shrink-0">
              <FaGift />
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
              Daily Login Bonus in <span className="text-gold-gradient">Milwin Game APK</span>
            </h2>
          </div>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Milwin Game app gives players many bonuses. When you join the game, you get a welcome bonus. If you make an account, you get a registration bonus. Open the app every day to get a daily login bonus. When you deposit money the first time, you get extra coins.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href="/register"
              className="inline-flex px-5 py-2 rounded-lg bg-emerald-400 hover:bg-emerald-300 text-black font-extrabold text-sm transition-all shadow-md shadow-emerald-500/20 text-center justify-center"
            >
              Register Now to Get Bonus
            </Link>
            <Link
              href="/deposit"
              className="inline-flex px-5 py-2 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold text-sm transition-all shadow-md shadow-cyan-500/20 text-center justify-center"
            >
              Deposit & Get Extra Coins
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
