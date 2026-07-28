"use client";

import { useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { FaTimes, FaCoins, FaRedo, FaTrophy } from "react-icons/fa";

export interface GameDetails {
  id: string;
  title: string;
  category: string;
  investLimit: string;
  image: string;
}

interface GameModalProps {
  game: GameDetails | null;
  onClose: () => void;
}

export default function GameModal({ game, onClose }: GameModalProps) {
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(25);
  const [spinning, setSpinning] = useState(false);
  const [lastResult, setLastResult] = useState<string | null>(null);
  const [winAmount, setWinAmount] = useState<number | null>(null);

  if (!game) return null;

  const handlePlayGame = () => {
    if (betAmount > balance) {
      toast.error("Insufficient balance! Resetting demo chips.");
      setBalance(1000);
      return;
    }

    setSpinning(true);
    setLastResult(null);
    setWinAmount(null);

    setTimeout(() => {
      setSpinning(false);
      const isWin = Math.random() > 0.45; // 55% win rate for demo fun

      if (isWin) {
        const winMult = Number((Math.random() * 2 + 1.5).toFixed(2));
        const won = Math.round(betAmount * winMult);
        setBalance((prev) => prev + won);
        setWinAmount(won);
        setLastResult(`WINNER! You multipliers ${winMult}x and won $${won}!`);
        toast.success(`Jackpot! You won $${won}!`);
      } else {
        setBalance((prev) => prev - betAmount);
        setLastResult(`Unlucky this time! You lost $${betAmount}. Try again!`);
        toast.warn(`Lost $${betAmount}. Keep spinning!`);
      }
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#131927] border border-amber-500/40 rounded-2xl p-6 shadow-2xl shadow-amber-500/20 text-white overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl transition-colors z-10"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-slate-800">
          <div className="relative w-16 h-16 rounded-xl overflow-hidden border border-amber-500/30">
            <Image src={game.image} alt={game.title} fill className="object-cover" />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">
              Live Demo Arena
            </span>
            <h3 className="text-2xl font-black text-white uppercase">{game.title}</h3>
            <p className="text-xs text-slate-400">Limit: {game.investLimit}</p>
          </div>
        </div>

        {/* Balance Display */}
        <div className="flex items-center justify-between bg-[#0b0e14] p-4 rounded-xl mb-6 border border-slate-800">
          <div className="flex items-center gap-2">
            <FaCoins className="text-amber-400 text-xl" />
            <div>
              <p className="text-[10px] text-slate-400 font-semibold uppercase">Demo Chip Balance</p>
              <p className="text-lg font-black text-amber-400">${balance.toLocaleString()}</p>
            </div>
          </div>
          <button
            onClick={() => {
              setBalance(1000);
              toast.info("Balance reset to $1,000 demo chips!");
            }}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 bg-slate-800/60 px-3 py-1.5 rounded-lg transition-colors"
          >
            <FaRedo /> Reset Chips
          </button>
        </div>

        {/* Game Stage Visualization */}
        <div className="relative h-44 bg-[#0a0d14] rounded-xl border border-slate-800 flex flex-col items-center justify-center p-4 mb-6 text-center overflow-hidden">
          {spinning ? (
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-bold text-amber-400 uppercase animate-pulse">
                Spinning & Calculating Outcome...
              </p>
            </div>
          ) : lastResult ? (
            <div className="space-y-2">
              <div className="inline-flex p-3 rounded-full bg-amber-500/20 text-amber-400 text-3xl">
                <FaTrophy className="animate-bounce" />
              </div>
              <p className={`text-base font-bold uppercase ${winAmount ? "text-emerald-400" : "text-rose-400"}`}>
                {lastResult}
              </p>
            </div>
          ) : (
            <div className="space-y-2">
              <p className="text-sm text-slate-400 font-medium">
                Select your bet amount below and click <span className="text-amber-400 font-bold">PLAY</span> to test your luck!
              </p>
            </div>
          )}
        </div>

        {/* Bet Selection */}
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Choose Bet Amount ($)
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[10, 25, 50, 100].map((amt) => (
                <button
                  key={amt}
                  onClick={() => setBetAmount(amt)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all ${
                    betAmount === amt
                      ? "bg-amber-500 text-black shadow-md shadow-amber-500/30"
                      : "bg-[#0b0e14] border border-slate-700 text-slate-300 hover:border-amber-500"
                  }`}
                >
                  ${amt}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handlePlayGame}
            disabled={spinning}
            className="w-full py-3.5 rounded-xl btn-gold text-center uppercase tracking-wider text-sm font-bold shadow-lg shadow-amber-500/20 disabled:opacity-50"
          >
            {spinning ? "Processing Bet..." : `Bet $${betAmount} & Play Now`}
          </button>
        </div>
      </div>
    </div>
  );
}
