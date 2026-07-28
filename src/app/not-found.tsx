"use client";

import Link from "next/link";
import { FaDice, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0d14] flex flex-col items-center justify-center p-6 text-center text-white">
      <div className="w-20 h-20 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 text-4xl mb-6 shadow-2xl shadow-amber-500/20 animate-bounce">
        <FaDice />
      </div>

      <h1 className="text-6xl font-black uppercase text-gold-gradient mb-2">404</h1>
      <h2 className="text-2xl font-bold uppercase text-white mb-4">Page Not Found</h2>
      <p className="text-slate-400 text-sm max-w-md mb-8">
        The casino page you are looking for might have been moved, renamed, or is temporarily unavailable.
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl btn-gold text-xs uppercase font-bold tracking-wider"
      >
        <FaHome /> Return To Home
      </Link>
    </div>
  );
}
