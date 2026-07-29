"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  { src: "/game-images/Milwin-Game-Lobby.webp", label: "Game Lobby" },
  { src: "/game-images/Milwin-Game-Hot-Games.webp", label: "Hot Games" },
  { src: "/game-images/Milwin-Game-Slots.webp", label: "Slots" },
  { src: "/game-images/Milwin-Game-Mini-Games.webp", label: "Mini Games" },
  { src: "/game-images/Milwin-Game-Promotion.webp", label: "Promotions" },
  { src: "/game-images/Milwin-Game-Missions.webp", label: "Missions" },
  { src: "/game-images/Milwin-Game-VIP.webp", label: "VIP" },
  { src: "/game-images/Milwin-Game-Rebate.webp", label: "Rebate" },
  { src: "/game-images/Milwin-Game-Invite.webp", label: "Invite Friends" },
  { src: "/game-images/Milwin-Game-Registration.webp", label: "Registration" },
  { src: "/game-images/Milwin-Game-Support.webp", label: "Support" },
];

export default function GameSlideshow() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback((index: number, dir: "left" | "right") => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const prev = () => {
    const idx = (current - 1 + slides.length) % slides.length;
    goTo(idx, "left");
  };

  const next = useCallback(() => {
    const idx = (current + 1) % slides.length;
    goTo(idx, "right");
  }, [current, goTo]);

  // Auto-play every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative w-full select-none">
      {/* Main Slide */}
      <div className="relative mx-auto overflow-hidden rounded-2xl border border-amber-500/20 shadow-2xl shadow-amber-500/10 bg-white max-w-[360px] aspect-[9/16]"
      >
        <Image
          src={slides[current].src}
          alt={slides[current].label}
          fill
          className={`object-contain bg-white transition-all duration-300 ${animating
              ? direction === "right"
                ? "opacity-0 translate-x-4"
                : "opacity-0 -translate-x-4"
              : "opacity-100 translate-x-0"
            }`}
          priority
        />

        {/* Gradient overlay bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none rounded-2xl" />

        {/* Label */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
          <span className="px-5 py-2 rounded-full bg-white border-2 border-amber-500 text-black text-xs font-extrabold uppercase tracking-widest shadow-2xl">
            {slides[current].label}
          </span>
        </div>

        {/* Slide counter */}
        <div className="absolute top-4 right-4 z-20">
          <span className="px-3 py-1.5 rounded-lg bg-white border border-amber-500/50 text-black text-xs font-black shadow-lg">
            {current + 1} / {slides.length}
          </span>
        </div>

        {/* Left Button */}
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-200 shadow-lg"
        >
          <FaChevronLeft className="text-sm" />
        </button>

        {/* Right Button */}
        <button
          onClick={next}
          aria-label="Next slide"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm border border-slate-700 flex items-center justify-center text-white hover:bg-amber-500 hover:border-amber-500 hover:text-black transition-all duration-200 shadow-lg"
        >
          <FaChevronRight className="text-sm" />
        </button>
      </div>

      {/* Dot Indicators */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "right" : "left")}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current
                ? "bg-amber-500 w-6 h-6"
                : "bg-slate-600 hover:bg-slate-400 w-8 h-8"
              }`}
          />
        ))}
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-2 mt-4 overflow-x-auto pb-1 scrollbar-hide">
        {slides.map((slide, i) => (
          <button
            key={i}
            onClick={() => goTo(i, i > current ? "right" : "left")}
            className={`relative shrink-0 w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 ${i === current
                ? "border-amber-500 shadow-lg shadow-amber-500/30"
                : "border-slate-700 opacity-60 hover:opacity-90 hover:border-slate-500"
              }`}
          >
            <Image
              src={slide.src}
              alt={slide.label}
              fill
              className="object-contain bg-white"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
