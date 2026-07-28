"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import {
  FaTimes,
  FaPlusCircle,
  FaCheckCircle,
  FaShieldAlt,
  FaGift,
  FaMobileAlt,
  FaUniversity,
} from "react-icons/fa";

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DepositModal({ isOpen, onClose }: DepositModalProps) {
  const [method, setMethod] = useState<"jazzcash" | "easypaisa" | "bank">("jazzcash");
  const [amount, setAmount] = useState<string>("1000");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountTitle, setAccountTitle] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const quickAmounts = ["500", "1000", "2500", "5000", "10000"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(`Deposit request of Rs. ${amount} via ${method.toUpperCase()} submitted successfully! Balance will update in 2-5 minutes.`);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#111622] border border-emerald-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-500/10 text-white my-8">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-emerald-400 text-xl p-2 transition-colors rounded-full bg-slate-900/60 border border-slate-800"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
            <FaPlusCircle className="text-emerald-400" /> Instant Wallet Deposit
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            Deposit Funds to <span className="text-emerald-400">Milwin</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Fast &amp; secure payment processing via JazzCash, EasyPaisa, or Pakistani Local Banks.
          </p>
        </div>

        <div className="bg-gradient-to-r from-amber-500/20 via-emerald-500/20 to-amber-500/20 border border-emerald-500/30 rounded-2xl p-3.5 mb-5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xl shrink-0">
            <FaGift />
          </div>
          <div>
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider block">100% Welcome Deposit Bonus</span>
            <p className="text-[11px] text-slate-300">Deposit Rs. 1,000 or more to get extra +Rs. 1,000 instant play bonus!</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-6">
          <button
            type="button"
            onClick={() => setMethod("jazzcash")}
            className={`flex flex-col items-center justify-center p-3 rounded-2xl border text-xs font-bold transition-all ${
              method === "jazzcash"
                ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-md"
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
                ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-md"
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
                ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-md"
                : "bg-[#0a0d14] border-slate-800 text-slate-400 hover:border-slate-700"
            }`}
          >
            <FaUniversity className="text-lg mb-1 text-cyan-400" />
            <span>Bank Transfer</span>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Select or Enter Deposit Amount (PKR)
            </label>
            <div className="grid grid-cols-5 gap-2 mb-2">
              {quickAmounts.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  className={`py-2 rounded-xl text-xs font-extrabold border transition-all ${
                    amount === val
                      ? "bg-emerald-500 text-black border-emerald-400 shadow"
                      : "bg-[#0a0d14] text-slate-300 border-slate-800 hover:border-slate-600"
                  }`}
                >
                  Rs. {val}
                </button>
              ))}
            </div>
            <input
              type="number"
              required
              min="100"
              placeholder="Custom Amount (e.g. 1500)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-[#0a0d14] border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Your {method === "bank" ? "Bank Account / IBAN" : `${method === "jazzcash" ? "JazzCash" : "EasyPaisa"} Number`}
            </label>
            <input
              type="text"
              required
              placeholder="03001234567"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full bg-[#0a0d14] border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
              Sender Account Title / Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter account holder name"
              value={accountTitle}
              onChange={(e) => setAccountTitle(e.target.value)}
              className="w-full bg-[#0a0d14] border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3.5 mt-2 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-black font-black uppercase tracking-wider text-sm shadow-lg shadow-emerald-500/25 transition-all transform active:scale-95 flex items-center justify-center gap-2"
          >
            <FaCheckCircle /> {isSubmitting ? "Processing Deposit..." : `Confirm Deposit of Rs. ${amount}`}
          </button>
        </form>

        <div className="mt-4 text-center text-slate-400 text-xs flex items-center justify-center gap-1">
          <FaShieldAlt className="text-emerald-400" />
          <span>Encrypted 256-Bit Financial Gateway | 24/7 Automated Approval</span>
        </div>

      </div>
    </div>
  );
}
