"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { FaTimes, FaUser, FaLock, FaEnvelope, FaGoogle, FaDiscord } from "react-icons/fa";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "signin" | "signup";
}

export default function AuthModal({ isOpen, onClose, initialMode = "signin" }: AuthModalProps) {
  const [mode, setMode] = useState<"signin" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "signin") {
      toast.success("Successfully logged in to Milwin!");
    } else {
      toast.success("Account created successfully! Welcome to Milwin.");
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#131927] border border-amber-500/30 rounded-2xl p-6 md:p-8 shadow-2xl shadow-amber-500/10 text-white">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl transition-colors"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {/* Modal Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold uppercase text-gold-gradient tracking-wider">
            {mode === "signin" ? "Sign In to Milwin" : "Create Account"}
          </h2>
          <p className="text-slate-400 text-sm mt-1">
            {mode === "signin"
              ? "Enter your details to access your account"
              : "Join millions of players & start winning"}
          </p>
        </div>

        {/* Auth Mode Toggle Tabs */}
        <div className="flex bg-[#0b0e14] p-1 rounded-xl mb-6 border border-slate-800">
          <button
            onClick={() => setMode("signin")}
            className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-all ${
              mode === "signin"
                ? "bg-amber-500 text-black shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setMode("signup")}
            className={`flex-1 py-2 rounded-lg font-semibold text-sm transition-all ${
              mode === "signup"
                ? "bg-amber-500 text-black shadow-md"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "signup" && (
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
                Username
              </label>
              <div className="relative">
                <FaUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  type="text"
                  required
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-[#0b0e14] border border-slate-700 focus:border-amber-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0b0e14] border border-slate-700 focus:border-amber-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0b0e14] border border-slate-700 focus:border-amber-500 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl btn-gold text-center uppercase tracking-wider text-sm font-bold"
          >
            {mode === "signin" ? "Sign In" : "Create Free Account"}
          </button>
        </form>

        {/* Social logins */}
        <div className="mt-6 text-center">
          <div className="relative flex items-center justify-center my-4">
            <div className="border-t border-slate-800 w-full"></div>
            <span className="bg-[#131927] px-3 text-xs text-slate-500 uppercase">Or continue with</span>
            <div className="border-t border-slate-800 w-full"></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => {
                toast.info("Google Sign In initialized");
                onClose();
              }}
              className="flex items-center justify-center gap-2 py-2.5 bg-[#0b0e14] border border-slate-800 hover:border-slate-600 rounded-xl text-xs font-semibold transition-colors"
            >
              <FaGoogle className="text-red-500" /> Google
            </button>
            <button
              onClick={() => {
                toast.info("Discord Sign In initialized");
                onClose();
              }}
              className="flex items-center justify-center gap-2 py-2.5 bg-[#0b0e14] border border-slate-800 hover:border-slate-600 rounded-xl text-xs font-semibold transition-colors"
            >
              <FaDiscord className="text-indigo-400" /> Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
