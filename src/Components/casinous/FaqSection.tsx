"use client";

import Link from "next/link";
import { useState } from "react";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "Can I earn real money?",
    answer: "Yes, by playing games and winning, you can earn real cash.",
  },
  {
    id: 2,
    question: "Is it safe to use?",
    answer: "Of course, the app is secure and safe for transactions.",
  },
  {
    id: 3,
    question: "Can I invite my friends?",
    answer: "Yes, you can earn extra bonuses by referring friends.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-10 sm:py-12 lg:py-14 bg-[#0d121d] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2 sm:space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white tracking-wide">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Everything you need to know about playing, depositing, and winning on Milwin.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3 sm:space-y-4 max-w-3xl mx-auto mb-8 sm:mb-10">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? "bg-[#131927] border-amber-500/40 shadow-lg shadow-amber-500/10"
                    : "bg-[#0b0e14]/80 border-slate-800 hover:border-slate-700"
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-base text-white hover:text-amber-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <FaQuestionCircle className="text-amber-400 shrink-0" />
                    {faq.question}
                  </span>
                  <FaChevronDown
                    className={`text-slate-400 text-xs shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-amber-400" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need More Help Section */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#131927] to-[#0a0d14] border border-amber-500/20 text-center space-y-5">
          <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
            Didn&apos;t find your <span className="text-gold-gradient">answer?</span>
          </h3>
          <p className="text-slate-300 text-sm sm:text-base">
            Check out our detailed guides or contact our 24/7 support team for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-extrabold uppercase text-sm transition-all shadow-md shadow-purple-600/20 text-center"
            >
              Read Game Guides
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg bg-cyan-400 hover:bg-cyan-300 text-black font-extrabold uppercase text-sm transition-all shadow-md shadow-cyan-500/20 text-center"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
