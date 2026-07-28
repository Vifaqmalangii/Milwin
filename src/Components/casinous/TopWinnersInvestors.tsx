"use client";

import Image from "next/image";
import { FaTrophy, FaMedal, FaPlay } from "react-icons/fa";

interface WinnerItem {
  id: number;
  name: string;
  amount: string;
  game: string;
  avatar: string;
}

const latestWinners: WinnerItem[] = [
  { id: 1, name: "Munna Ahmed", amount: "$150 USD", game: "Roulette", avatar: "/images/dice.png" },
  { id: 2, name: "Fahad Bin", amount: "$270 USD", game: "Dice 3D", avatar: "/images/card.png" },
  { id: 3, name: "Rafuj Raiha", amount: "$52,000 USD", game: "Slots 777", avatar: "/images/slot.png" },
  { id: 4, name: "Suraiya Nesa", amount: "$1,450 USD", game: "Blackjack", avatar: "/images/roulette.png" },
  { id: 5, name: "Tariq Malik", amount: "$3,800 USD", game: "Poker", avatar: "/images/card.png" },
];

const topInvestors: WinnerItem[] = [
  { id: 1, name: "Alexander K.", amount: "$120,500", game: "VIP Platinum", avatar: "/images/card.png" },
  { id: 2, name: "Elena Rostova", amount: "$98,400", game: "VIP Gold", avatar: "/images/dice.png" },
  { id: 3, name: "Chen Wei", amount: "$85,000", game: "VIP Diamond", avatar: "/images/roulette.png" },
  { id: 4, name: "Marcus Vance", amount: "$64,200", game: "VIP Silver", avatar: "/images/slot.png" },
  { id: 5, name: "Sara Connor", amount: "$42,900", game: "VIP Bronze", avatar: "/images/card.png" },
];

export default function TopWinnersInvestors() {
  return (
    <section id="winners" className="py-20 bg-[#0a0d14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Column 1: Latest Winners */}
          <div className="casino-card p-6 border border-amber-500/20 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-lg bg-amber-500/20 text-amber-400 text-lg">
                <FaTrophy />
              </div>
              <h3 className="text-xl font-bold uppercase text-white tracking-wide">
                Latest Winners
              </h3>
            </div>

            <div className="space-y-3">
              {latestWinners.map((winner) => (
                <div
                  key={winner.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0b0e14] border border-slate-800 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-amber-500/30">
                      <Image src={winner.avatar} alt={winner.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{winner.name}</h4>
                      <p className="text-[10px] text-slate-400">{winner.game}</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md">
                    {winner.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Center Jackpot CTA Banner */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-amber-600/20 via-[#131927] to-[#0a0d14] border-2 border-amber-500/40 p-8 text-center space-y-6 shadow-2xl shadow-amber-500/20">
            <div className="inline-flex p-4 rounded-full bg-amber-500/20 text-amber-400 text-4xl mb-2 animate-bounce">
              <FaTrophy />
            </div>

            <h3 className="text-3xl sm:text-4xl font-black uppercase text-white leading-tight">
              WIN !!! & <br />
              <span className="text-gold-gradient">GET MILLIONS</span>
            </h3>

            <p className="text-xs text-slate-300 max-w-xs mx-auto">
              Our progressive jackpot resets every week. Enter any table or slot game to qualify automatically!
            </p>

            <a
              href="#games"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl btn-gold text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/30"
            >
              <FaPlay className="text-[10px]" /> Play & Win Now
            </a>
          </div>

          {/* Column 3: Top Investors */}
          <div className="casino-card p-6 border border-cyan-500/20 space-y-4">
            <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
              <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 text-lg">
                <FaMedal />
              </div>
              <h3 className="text-xl font-bold uppercase text-white tracking-wide">
                Top Investors
              </h3>
            </div>

            <div className="space-y-3">
              {topInvestors.map((investor) => (
                <div
                  key={investor.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0b0e14] border border-slate-800 hover:border-cyan-500/40 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="relative w-9 h-9 rounded-lg overflow-hidden border border-cyan-500/30">
                      <Image src={investor.avatar} alt={investor.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{investor.name}</h4>
                      <p className="text-[10px] text-slate-400">{investor.game}</p>
                    </div>
                  </div>
                  <span className="text-xs font-black text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md">
                    {investor.amount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
