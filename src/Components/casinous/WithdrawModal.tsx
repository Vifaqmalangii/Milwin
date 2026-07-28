"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import {
  FaTimes,
  FaWallet,
  FaCheckCircle,
  FaShieldAlt,
  FaArrowCircleUp,
  FaMobileAlt,
  FaUniversity,
  FaClock,
} from "react-icons/fa";

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WithdrawModal({ isOpen, onClose }: WithdrawModalProps) {
  const [method, setMethod] = useState<"jazzcash" | "easypaisa" | "bank">("jazzcash");
  const [amount, setAmount] = useState<string>("500");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountTitle, setAccountTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const currentBalance = 12450.00;

  const handlePercentageSelect = (percent: number) => {
    const calculated = Math.floor((currentBalance * percent) / 100);
    setAmount(calculated.toString());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const withdrawVal = parseFloat(amount);

    if (withdrawVal > currentBalance) {
      toast.error("Withdrawal amount cannot exceed your available balance!");
      return;
    }

    if (withdrawVal < 300) {
      toast.error("Minimum withdrawal amount is Rs. 300!");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Withdrawal request of Rs. ${amount} sent to your ${method.toUpperCase()} account! Processing time: 5-15 minutes.`);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#111622] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/10 text-white my-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-cyan-400 text-xl p-2 transition-colors rounded-full bg-slate-900/60 border border-slate-800"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2">
            <FaArrowCircleUp className="text-cyan-400" /> Instant Cash Withdrawal
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Withdraw Winnings from <span className="text-cyan-400">Milwin</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Fast payout directly to your mobile wallet or local bank account.
          </p>
        </div>

        <div className="bg-gradient-to-r from-cyan-950/40 via-[#131927] to-cyan-950/40 border border-cyan-500/20 rounded-2xl p-4 mb-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl">
              <FaWallet />
            </div>
            <div>
              <span className="text-xs text-slate-400 uppercase tracking-wider block">Available Balance</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400">Rs. {currentBalance.toLocaleString("en-PK")}.00</span>
            </div>
          </div>
          <div className="text-right text-[11px] text-emerald-400 font-semibold flex items-center gap-1">
            <FaClock className="text-xs" /> 5-15 Min Payout
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <button
            type="button"
            onClick={() => setMethod("jazzcash")}
            className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-xs font-bold transition-all ${
              method === "jazzcash"
                ? "bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-md"
                : "bg-[#0a0d14] border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <FaMobileAlt className="text-lg mb-1 text-red-500" />
            <span>JazzCash</span>
          </button>
          <button
            type="button"
            onClick={() => setMethod("easypaisa")}
            className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-xs font-bold transition-all ${
              method === "easypaisa"
                ? "bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-md"
                : "bg-[#0a0d14] border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <FaMobileAlt className="text-lg mb-1 text-emerald-400" />
            <span>EasyPaisa</span>
          </button>
          <button
            type="button"
            onClick={() => setMethod("bank")}
            className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-xs font-bold transition-all ${
              method === "bank"
                ? "bg-cyan-500/20 border-cyan-500 text-cyan-300 shadow-md"
                : "bg-[#0a0d14] border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <FaUniversity className="text-lg mb-1 text-cyan-400" />
            <span>Bank Transfer</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
                Withdrawal Amount (PKR)
              </label>
              <div className="flex items-center gap-1.5 text-[11px]">
                <button
                  type="button"
                  onClick={() => handlePercentageSelect(25)}
                  className="px-2 py-0.5 rounded bg-[#0a0d14] border border-slate-800 text-slate-400 hover:text-cyan-400"
                >
                  25%
                </button>
                <button
                  type="button"
                  onClick={() => handlePercentageSelect(50)}
                  className="px-2 py-0.5 rounded bg-[#0a0d14] border border-slate-800 text-slate-400 hover:text-cyan-400"
                >
                  50%
                </button>
                <button
                  type="button"
                  onClick={() => handlePercentageSelect(100)}
                  className="px-2 py-0.5 rounded bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold"
                >
                  MAX
                </button>
              </div>
            </div>
            <input
              type="number"
              required
              min="300"
              placeholder="Enter amount (Min. Rs. 300)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-[#0a0d14] border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Destination {method === "bank" ? "IBAN / Bank Account" : `${method === "jazzcash" ? "JazzCash" : "EasyPaisa"} Number`}
            </label>
            <input
              type="text"
              required
              placeholder="03001234567"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full bg-[#0a0d14] border border-slate-700 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Account Title / Holder Name
            </label>
            <input
              type="text"
              required
              placeholder="Full name registered on account"
              value={accountTitle}
              onChange={(e) => setAccountTitle(e.target.value)}
              className="w-full bg-[#0a0d14] border border-slate-700 focus:border-slate-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 text-black font-black uppercase tracking-wider text-sm shadow-lg shadow-cyan-500/25 transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <FaCheckCircle /> {isSubmitting ? "Processing Request..." : `Request Withdrawal of Rs. ${amount}`}
          </button>
        </form>

        <div className="mt-4 text-center text-slate-400 text-xs flex items-center justify-center gap-1">
          <FaShieldAlt className="text-cyan-400" />
          <span>Guaranteed 0% Withdrawal Fee | 24/7 Fast Cashout System</span>
        </div>

      </div>
    </div>
  );
}
