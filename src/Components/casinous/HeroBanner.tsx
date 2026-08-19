"use client";

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";

interface HeroBannerProps {
  onOpenAuth: (mode: "signin" | "signup") => void;
}

export default function HeroBanner({ onOpenAuth }: HeroBannerProps) {
  return (
    <section id="home" className="relative flex items-center justify-center py-10 sm:py-12 lg:py-16 overflow-hidden">
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/herobg.webp"
          alt="Milwin Hero Background"
          fill
          priority
          sizes="100vw"
          quality={75}
          className="object-cover object-center"
        />
        {/* Gradient overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14]/90 via-[#0a0d14]/75 to-[#0a0d14]"></div>
        <div className="absolute inset-0 bg-[#0a0d14]/40"></div>
      </div>

      {/* Glow Effects Backdrop */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="space-y-6">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight text-white drop-shadow-lg">
            Milwin <span className="text-gold-gradient">Game Download</span> Official App Latest V 1.1.17 For Android
          </h1>

          {/* Subheading */}
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-medium drop-shadow">
            Download Milwin APK latest version for Android. Play games, earn real cash, and enjoy fast withdrawals with easy use.
          </p>

          {/* Download CTA Button */}
          <div className="flex justify-center pt-4">
            <a
              href="https://milapp.win/?dl=4kz455"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 px-8 sm:px-14 lg:px-20 py-3.5 sm:py-4 rounded-full btn-gold text-base sm:text-lg font-extrabold uppercase tracking-wider shadow-2xl shadow-amber-500/40 transition-all hover:scale-105 active:scale-95 min-h-[48px]"
            >
              <FaArrowDown className="text-lg sm:text-xl" /> DOWNLOAD APK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
