"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaExclamationTriangle, FaRedo, FaHome } from "react-icons/fa";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0a0d14] flex flex-col items-center justify-center p-6 text-center text-white">
      <div className="w-20 h-20 rounded-2xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center text-rose-400 text-4xl mb-6 shadow-2xl shadow-rose-500/20">
        <FaExclamationTriangle />
      </div>

      <h1 className="text-4xl font-black uppercase text-white mb-2">Something Went Wrong!</h1>
      <p className="text-slate-400 text-sm max-w-md mb-8">
        An unexpected error occurred while loading this page.
      </p>

      <div className="flex items-center gap-4">
        <button
          onClick={reset}
          className="flex items-center gap-2 px-6 py-3 rounded-xl btn-gold text-xs font-bold uppercase tracking-wider"
        >
          <FaRedo /> Try Again
        </button>
        <Link
          href="/"
          className="flex items-center gap-2 px-6 py-3 rounded-xl btn-outline-gold text-xs font-bold uppercase tracking-wider"
        >
          <FaHome /> Go Home
        </Link>
      </div>
    </div>
  );
}
