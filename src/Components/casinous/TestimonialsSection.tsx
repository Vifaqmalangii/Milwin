"use client";

import Image from "next/image";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Suraiya Nesa",
    role: "Top Poker Player",
    comment: "Milwin is hands down the smoothest crypto casino I've used. I withdrew my $14,000 roulette winnings in under 45 seconds!",
    avatar: "/images/card.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Munna Ahmed",
    role: "High Roller VIP",
    comment: "The provably fair system gives me total peace of mind. Great bonus cashback and 24/7 account managers always ready to help.",
    avatar: "/images/dice.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "Rafuj Raihan",
    role: "Slots Master",
    comment: "The 3D slots and multiplier wheel games are super fun and rewarding. Got 500x multiplier on my very first week!",
    avatar: "/images/slot.webp",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#0d121d] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Real Reviews
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-wide">
            What Casino <span className="text-gold-gradient">Players Say</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Read authentic feedback from our global community of crypto winners.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="casino-card p-8 flex flex-col justify-between space-y-6 border border-slate-800"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <FaQuoteLeft className="text-3xl text-amber-400/40" />
                  <div className="flex gap-1 text-amber-400 text-xs">
                    {[...Array(item.rating)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="text-slate-300 text-xs sm:text-base leading-relaxed italic">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-500/40">
                  <Image src={item.avatar} alt={item.name} width={80} height={80} sizes="80px" quality={75} className="h-full w-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">{item.name}</h4>
                  <span className="text-xs text-amber-400 font-medium">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
