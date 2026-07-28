"use client";

import { useState } from "react";
import Navbar from "@/Components/casinous/Navbar";
import HeroBanner from "@/Components/casinous/HeroBanner";
import AboutSection from "@/Components/casinous/AboutSection";
import GamesSection from "@/Components/casinous/GamesSection";
import WhyChooseUs from "@/Components/casinous/WhyChooseUs";
import HowToPlay from "@/Components/casinous/HowToPlay";
import FaqSection from "@/Components/casinous/FaqSection";


import Footer from "@/Components/casinous/Footer";
import AuthModal from "@/Components/casinous/AuthModal";
import ToastContainers from "@/Components/ToastContainer";

export default function Home() {
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  const handleOpenAuth = (mode: "signin" | "signup") => {
    setAuthMode(mode);
    setAuthModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#0a0d14] text-white selection:bg-amber-500 selection:text-black">
      <ToastContainers />

      {/* Navigation */}
      <Navbar onOpenAuth={handleOpenAuth} />

      {/* Main Page Sections */}
      <HeroBanner onOpenAuth={handleOpenAuth} />
      <AboutSection />
      <GamesSection />
      <WhyChooseUs />
      <HowToPlay onOpenAuth={handleOpenAuth} />
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Auth Modal (Sign In / Sign Up) */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        initialMode={authMode}
      />
    </main>
  );
}
