'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaDice } from 'react-icons/fa';
import Breadcrumb from '@/Components/Breadcrumb';

export default function SitemapPage() {
  const sitemaps = [
    {
      title: 'Main Pages',
      description: 'Core navigation pages',
      pages: [
        { name: 'Home', url: '/', priority: 1.0, frequency: 'Daily' },
        { name: 'Download APK', url: '/download', priority: 0.95, frequency: 'Weekly' },
        { name: 'About Us', url: '/about', priority: 0.9, frequency: 'Monthly' },
      ],
    },
    {
      title: 'User Account Pages',
      description: 'Account management and transactions',
      pages: [
        { name: 'Deposit', url: '/deposit', priority: 0.9, frequency: 'Weekly' },
        { name: 'Withdraw', url: '/withdraw', priority: 0.9, frequency: 'Weekly' },
        { name: 'Register', url: '/register', priority: 0.85, frequency: 'Weekly' },
        { name: 'Login', url: '/login', priority: 0.7, frequency: 'Monthly' },
      ],
    },
    {
      title: 'Content Pages',
      description: 'Blog and informational content',
      pages: [
        { name: 'Blog', url: '/blog', priority: 0.9, frequency: 'Daily' },
        { name: 'Contact Us', url: '/contact', priority: 0.8, frequency: 'Weekly' },
      ],
    },
    {
      title: 'Legal Pages',
      description: 'Legal and compliance information',
      pages: [
        { name: 'Privacy Policy', url: '/privacy-policy', priority: 0.6, frequency: 'Monthly' },
        { name: 'Terms & Conditions', url: '/terms-and-conditions', priority: 0.6, frequency: 'Monthly' },
        { name: 'Disclaimer', url: '/disclaimer', priority: 0.6, frequency: 'Monthly' },
      ],
    },
    {
      title: 'Game Pages',
      description: 'Game-specific pages',
      pages: [
        { name: 'Teen Patti', url: '/games/teen-patti', priority: 0.85, frequency: 'Weekly' },
        { name: 'Slots', url: '/games/slots', priority: 0.85, frequency: 'Weekly' },
        { name: 'Roulette', url: '/games/roulette', priority: 0.85, frequency: 'Weekly' },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0d14] text-white py-16">
      {/* Breadcrumb Navigation */}
      <Breadcrumb />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-10">
          {/* Logo/Favicon Display */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-5xl shadow-lg shadow-amber-500/30">
              <FaDice />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black uppercase text-white mb-4">
            Site<span className="text-amber-400">map</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Complete directory of all pages on Milwin Game
          </p>
        </div>

        {/* SEO Info */}
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-400/5 border border-amber-500/20 rounded-lg p-6 mb-8">
          <p className="text-slate-300 text-sm">
            📍 <strong>XML Sitemap:</strong> <Link href="/sitemap.xml" className="text-amber-400 hover:text-amber-300">milwingames.pk/sitemap.xml</Link>
          </p>
          <p className="text-slate-300 text-sm mt-2">
            🤖 <strong>Robots.txt:</strong> <Link href="/robots.txt" className="text-amber-400 hover:text-amber-300">milwingames.pk/robots.txt</Link>
          </p>
        </div>
      </section>

      {/* Sitemap Categories */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {sitemaps.map((sitemap, idx) => (
          <div key={idx} className="bg-[#131927] border border-amber-500/20 rounded-lg overflow-hidden hover:border-amber-500/40 transition-colors">
            {/* Category Header */}
            <div className="bg-gradient-to-r from-amber-500/5 to-transparent px-6 py-4 border-b border-amber-500/20">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-amber-400" />
                {sitemap.title}
              </h2>
              <p className="text-slate-400 text-sm mt-1">{sitemap.description}</p>
            </div>

            {/* Pages List */}
            <div className="divide-y divide-slate-800/50">
              {sitemap.pages.map((page, pageIdx) => (
                <Link
                  key={pageIdx}
                  href={page.url}
                  className="px-6 py-4 hover:bg-amber-500/5 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <div className="hidden sm:flex items-center gap-2">
                      <span className="text-[10px] bg-slate-800 text-amber-400 px-2 py-1 rounded font-mono">
                        Priority: {page.priority}
                      </span>
                      <span className="text-[10px] bg-slate-800 text-cyan-400 px-2 py-1 rounded font-mono">
                        {page.frequency}
                      </span>
                    </div>
                    <span className="text-slate-300 group-hover:text-amber-400 transition-colors font-medium">
                      {page.name}
                    </span>
                  </div>
                  <span className="text-slate-500 text-xs group-hover:text-slate-300 transition-colors">
                    {page.url}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Summary Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-12 border-t border-slate-800">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="bg-[#131927] border border-amber-500/20 rounded-lg p-6 text-center">
            <div className="text-2xl font-black text-amber-400 mb-2">20+</div>
            <div className="text-slate-400 text-sm">Total Pages</div>
          </div>
          <div className="bg-[#131927] border border-cyan-400/20 rounded-lg p-6 text-center">
            <div className="text-2xl font-black text-cyan-400 mb-2">100%</div>
            <div className="text-slate-400 text-sm">Indexed</div>
          </div>
          <div className="bg-[#131927] border border-emerald-400/20 rounded-lg p-6 text-center">
            <div className="text-2xl font-black text-emerald-400 mb-2">Daily</div>
            <div className="text-slate-400 text-sm">Updates</div>
          </div>
        </div>
      </section>
    </main>
  );
}
