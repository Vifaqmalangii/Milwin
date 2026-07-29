"use client";

import { useState } from "react";
import Image from "next/image";
import { type GameDetails } from "./GameModal";
import GameSlideshow from "./GameSlideshow";
import { FaGamepad, FaRocket, FaDesktop, FaBolt, FaCoins, FaCheckCircle } from "react-icons/fa";

const gamesData: GameDetails[] = [
  {
    id: "teen-patti",
    title: "Teen Patti",
    category: "Cards",
    investLimit: "$5.00 - $500",
    image: "/images/card.png",
  },
  {
    id: "poker",
    title: "Poker",
    category: "Cards",
    investLimit: "$5.00 - $500",
    image: "/images/card.png",
  },
  {
    id: "slots",
    title: "Slots",
    category: "Slots",
    investLimit: "$5.00 - $500",
    image: "/images/slot.png",
  },
  {
    id: "roulette",
    title: "Roulette",
    category: "Roulette",
    investLimit: "$5.00 - $500",
    image: "/images/roulette.png",
  },
  {
    id: "aviator",
    title: "Aviator",
    category: "Crash",
    investLimit: "$5.00 - $500",
    image: "/images/dice.png",
  },
  {
    id: "dragon-tiger",
    title: "Dragon Tiger",
    category: "Cards",
    investLimit: "$5.00 - $500",
    image: "/images/card.png",
  },
  {
    id: "crash-game",
    title: "Crash Game",
    category: "Crash",
    investLimit: "$5.00 - $500",
    image: "/images/dice.png",
  },
  {
    id: "fishing-game",
    title: "Fishing Game",
    category: "Arcade",
    investLimit: "$5.00 - $500",
    image: "/images/card.png",
  },
  {
    id: "lucky-wheel",
    title: "Lucky Wheel",
    category: "Roulette",
    investLimit: "$5.00 - $500",
    image: "/images/roulette.png",
  },
  {
    id: "color-prediction",
    title: "Color Prediction",
    category: "Number",
    investLimit: "$5.00 - $500",
    image: "/images/dice.png",
  },
];

export default function GamesSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Cards", "Slots", "Roulette", "Crash", "Arcade", "Number"];

  const filteredGames =
    activeCategory === "All"
      ? gamesData
      : gamesData.filter((g) => g.category === activeCategory);

  return (
    <section id="games" className="py-20 bg-[#0a0d14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* What is Milwin Game Section */}
        <div className="max-w-4xl mx-auto mb-16 text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-wide">
            What is <span className="text-gold-gradient">Milwin Game</span> in Pakistan?
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Milwin app is a digital platform where players can play many games and earn real cash. It is a platform made for people who want entertainment and income together. Players can enjoy games like slots, Teen Patti, Ludo Cash, fishing, and many more in one app. It also offers 24/7 support, so players can get help anytime if they face any problem.
          </p>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Nowadays, the game has become very popular because of its latest version. It gives players an excellent and exciting experience, with new features, smooth gameplay, and amazing rewards that make playing more fun and enjoyable. The game also offers an excellent platform where users can easily improve their gaming skills and start betting with friends worldwide.
          </p>
        </div>

        {/* Game Screenshots Slideshow */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="text-center mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Inside the App</span>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
              Game <span className="text-gold-gradient">Screenshots</span>
            </h3>
          </div>
          <GameSlideshow />
        </div>

        {/* Key Features Container */}
        <div className="max-w-5xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-[#0d121d] border border-amber-500/20 shadow-xl shadow-amber-500/5 space-y-8">
          <div className="text-center space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-wide">
              Key Features of <span className="text-gold-gradient">Milwin Game APK</span> Latest Version
            </h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl bg-[#131927] border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 text-lg">
                <FaRocket />
              </div>
              <h4 className="text-base font-bold text-white uppercase">Smooth Gameplay</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                It is very smooth to play, and the game does not stop or slow down. Players can enjoy it all the time. Spinning slots, playing cards, or placing bets is very easy, so everyone can have fun without getting upset. Both beginners and experienced players can enjoy the game. The smooth gameplay makes it exciting and fun for many hours.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#131927] border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-lg">
                <FaDesktop />
              </div>
              <h4 className="text-base font-bold text-white uppercase">High-Quality Graphics</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                The game has very good graphics. The pictures and colors look real and bright. Everything in the game is clear and easy to see. The game looks fun and exciting because of its graphics. Players enjoy the game more when it looks nice.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#131927] border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 text-lg">
                <FaGamepad />
              </div>
              <h4 className="text-base font-bold text-white uppercase">Variety of Different Games</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Milwin has many different games. Players can play slots, card games, and more. There is always something new to try. This keeps the game fun and interesting. Everyone can find a game they like.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#131927] border border-slate-800 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-lg">
                <FaBolt />
              </div>
              <h4 className="text-base font-bold text-white uppercase">Fast Withdrawal System</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                The game offers a fast and easy withdrawal system for players. Users can withdraw their earnings quickly through Jazz Cash or Easy Paisa. Most payments are processed within minutes, making it safe and reliable.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#131927] border border-slate-800 space-y-2 sm:col-span-2 lg:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 text-lg">
                <FaCoins />
              </div>
              <h4 className="text-base font-bold text-white uppercase">Real Money Earning</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Earning real money is the dream of every gamer. So, this app allows players to earn real money by playing different games and winning rounds. Users can easily convert their game rewards into real cash. This feature makes the game more exciting and rewarding for players.
              </p>
            </div>
          </div>

          {/* Additional Features List */}
          <div className="pt-6 border-t border-slate-800/80 space-y-4">
            <h4 className="text-lg font-bold text-white uppercase text-center sm:text-left">
              Additional Features of <span className="text-amber-400">Mil Win Game</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Free trial games",
                "Instant deposit system",
                "Special event bonuses",
                "Updated version",
                "Free for everyone",
                "Works on slow internet",
                "Online platform",
                "Safe and secure",
                "Ad-free",
              ].map((feat) => (
                <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-200 p-2.5 rounded-lg bg-[#131927]/60 border border-slate-800/60">
                  <FaCheckCircle className="text-amber-400 shrink-0 text-sm" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-wide">
            Top 10 Games in <span className="text-gold-gradient">Mil Win APK</span>
          </h2>
        </div>

        {/* Games Grid - 5 Cards per row (Left to Right 5, then 5 = 10 games) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 max-w-6xl mx-auto mb-16 sm:mb-24">
          {filteredGames.map((game) => (
            <div
              key={game.id}
              className="casino-card group overflow-hidden rounded-xl bg-[#131927] border border-slate-800 flex flex-col justify-between hover:border-amber-500/60 transition-all shadow-md"
            >
              {/* Card Thumbnail */}
              <div className="relative w-full aspect-[4/3] bg-[#0d121d] overflow-hidden">
                <Image
                  src={game.image}
                  alt={`${game.title} - Play ${game.title} game on Milwin and earn real cash with betting limits from ${game.investLimit}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131927] via-transparent to-transparent opacity-80"></div>
                <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[9px] font-bold text-amber-400 border border-amber-500/30 uppercase">
                  {game.category}
                </span>
              </div>

              {/* Card Body Content */}
              <div className="p-2 sm:p-3 text-center">
                <h3 className="text-[11px] sm:text-xs lg:text-sm font-bold text-white group-hover:text-amber-400 transition-colors truncate">
                  {game.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* How to Download & How to Use Sections */}
        <div className="max-w-4xl mx-auto pt-8 sm:pt-12 space-y-10">
          {/* How to Download Milwin APK */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0d14] border border-amber-500/20 shadow-xl space-y-4">
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
              How to Download <span className="text-gold-gradient">Milwin APK?</span>
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
              To get started with Milwin Game APK, you first need to download and install the app on your mobile phone. Visit the official website using your browser and tap on the Download APK button. After the file is downloaded, allow installation from unknown sources in your phone settings and complete the installation. Now open the app, register your account, and enjoy playing games to earn real money.
            </p>
          </div>

          {/* How to Use the Mil Win Game App to Earn Real Money */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0d14] border border-amber-500/20 shadow-xl space-y-6">
            <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide">
              How to Use the <span className="text-gold-gradient">Mil Win Game App</span> to Earn Real Money
            </h3>
            <div className="space-y-4">
              {[
                { title: "Download and Install", desc: "First, download Milwin Game APK from the official website and install it on your mobile." },
                { title: "Create Your Account", desc: "Open the app and register using your mobile number or email. Complete your profile to start playing." },
                { title: "Add Funds", desc: "You can deposit money in your account to play certain games, but some games also allow you to earn without deposit." },
                { title: "Choose a Game", desc: "The application offers multiple games like slots, card games, roulette, and color prediction. Select the one you like." },
                { title: "Play and Win", desc: "Participate in the games and try to win rounds. The better you play, the more you earn." },
                { title: "Collect Rewards", desc: "All your winnings are added to your in-app wallet automatically." },
                { title: "Withdraw Earnings", desc: "Use the fast withdrawal system to transfer your earnings to JazzCash or Easypaisa. Most withdrawals are completed within minutes." },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 items-start p-3.5 rounded-xl bg-[#131927]/60 border border-slate-800/80">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="space-y-0.5">
                    <h3 className="text-sm font-bold text-white uppercase">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Links Section - Internal Navigation */}
        <div className="max-w-4xl mx-auto mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d121d] to-[#0a0d14] border border-amber-500/20 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wide mb-6 text-center">
            Ready to Start <span className="text-gold-gradient">Playing?</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <a href="/download" className="px-5 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold uppercase text-sm transition-colors text-center">
              Download APK
            </a>
            <a href="/register" className="px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-bold uppercase text-sm transition-colors text-center">
              Create Account
            </a>
            <a href="/deposit" className="px-5 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 text-white font-bold uppercase text-sm transition-colors text-center">
              Deposit Money
            </a>
            <a href="/blog" className="px-5 py-3 rounded-lg bg-purple-500 hover:bg-purple-600 text-white font-bold uppercase text-sm transition-colors text-center">
              Game Guides
            </a>
          </div>
        </div>
      </div>


    </section>
  );
}
