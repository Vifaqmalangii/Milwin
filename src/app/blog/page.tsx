"use client";

import Navbar from "@/Components/casinous/Navbar";
import Footer from "@/Components/casinous/Footer";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaUser, FaArrowRight, FaBlog } from "react-icons/fa";
import Breadcrumb from "@/Components/Breadcrumb";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  altText?: string;
  category: string;
  date: string;
  author: string;
}

const blogPosts: BlogPost[] = [
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0a0d14] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Hero */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto relative z-10 space-y-4">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 text-2xl shadow-lg shadow-amber-500/10">
            <FaBlog />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">News & Guides</span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white leading-tight">
            Milwin <span className="text-gold-gradient">Blog</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Stay updated with the latest news, game guides, strategies, and bonus tips for Milwin Game APK.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 px-4 pb-24">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl bg-[#0d121d] border border-amber-500/20 overflow-hidden flex flex-col justify-between hover:border-amber-500/50 transition-all group shadow-xl"
            >
              <div>
                {/* Image */}
                <div className="relative w-full aspect-[16/9] bg-[#131927]">
                  <Image
                    src={post.image}
                    alt={post.altText || post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] font-bold text-amber-400 border border-amber-500/30 uppercase">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <FaCalendarAlt className="text-amber-400" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FaUser className="text-amber-400" /> {post.author}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-amber-300 transition-colors"
                >
                  Read More <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Related Resources Section */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d121d] to-[#0a0d14] border border-amber-500/20 space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-black uppercase text-white tracking-wide">
              Want to Start <span className="text-gold-gradient">Playing?</span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Use these resources to get started earning real money on Milwin today.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/download"
              className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold uppercase text-sm transition-colors text-center"
            >
              Download APK
            </Link>
            <Link
              href="/register"
              className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold uppercase text-sm transition-colors text-center"
            >
              Create Account
            </Link>
            <Link
              href="/deposit"
              className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-sm transition-colors text-center"
            >
              Deposit Money
            </Link>
            <Link
              href="/withdraw"
              className="px-5 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-bold uppercase text-sm transition-colors text-center"
            >
              Fast Withdrawal
            </Link>
          </div>
        </div>

        {/* Back to Home Button */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 text-black font-black uppercase text-sm tracking-wider shadow-lg shadow-amber-500/30 hover:scale-105 transition-transform"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
