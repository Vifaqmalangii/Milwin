"use client";

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

interface HeroBannerProps {
  onOpenAuth: (mode: "signin" | "signup") => void;
}

export default function HeroBanner({ onOpenAuth }: HeroBannerProps) {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center pt-8 pb-16 overflow-hidden bg-gradient-to-b from-[#0a0d14] via-[#0f1422] to-[#0a0d14]">
      {/* Glow Effects Backdrop */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight text-white">
              Milwin <span className="text-gold-gradient">Game Download</span> Official App Latest V 1.1.17 For Android
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-medium">
              Download Milwin APK latest version for Android. Play games, earn real cash, and enjoy fast withdrawals with easy use.
            </p>

            <div className="flex justify-center lg:justify-start pt-2">
              <a
                href="#games"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-12 lg:px-20 py-3 sm:py-4 rounded-full btn-gold text-sm sm:text-base lg:text-lg font-extrabold uppercase tracking-wider shadow-xl shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 min-h-[44px]"
              >
                <FaArrowDown className="text-base sm:text-lg lg:text-xl" /> DOWNLOAD APK
              </a>
            </div>
          </div>

          {/* Right Column Visual Artwork */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/20 border border-amber-500/30 group">
              <Image
                src="/images/hero_banner.png"
                alt="Milwin Game APK Android app with online casino games - Teen Patti, Slots, Roulette and instant withdrawals to JazzCash EasyPaisa"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
