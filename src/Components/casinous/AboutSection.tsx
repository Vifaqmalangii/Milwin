"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-10 sm:py-12 lg:py-14 bg-[#0d121d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column Graphic */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden border border-amber-500/30 shadow-2xl shadow-amber-500/10">
              <Image
                src="/aboutmilwin.webp"
                alt="About Milwin Game - Explore Our Elite VIP Experience"
                width={1024}
                height={1024}
                sizes="(max-width: 1024px) 100vw, 560px"
                quality={85}
                className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d121d]/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-4xl font-black uppercase text-white tracking-wide">
              About <span className="text-gold-gradient">Milwin Game</span>
            </h2>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Milwin APK is an online game app that allows players to play games and earn real cash. The app is simple and easy to use, so beginners and experienced players can start quickly. The interface is user-friendly, and all options like games, wallet, deposit, and withdrawal are easy to find. Players can focus on the games because the design is clear and organized.
            </p>

            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              Furthermore, the game also has a fast withdrawal system. Users can get their money quickly using JazzCash, EasyPaisa, or bank transfer. The application gives bonuses and rewards, including daily login rewards, deposit bonuses, and referral rewards. These rewards help players earn more cash and enjoy extra chances to play. It works well even on slow internet, so gameplay is smooth. The Milwin Game is safe and secure, providing real earning opportunities for everyone.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-black font-extrabold uppercase text-sm transition-all shadow-md shadow-amber-500/20"
            >
              Learn More About Milwin →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
