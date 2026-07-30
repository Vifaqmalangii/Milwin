import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Milwin Game - Pakistan's #1 Trusted Online Casino",
  description: "Learn about Milwin Game - Pakistan's most trusted online casino platform. Safe, secure gaming with fast payouts. Trusted by thousands of players.",
  keywords: "about milwin game, milwin casino pakistan, online casino trusted, gaming platform",
  openGraph: {
    title: "About Milwin Game - Pakistan's #1 Trusted Online Casino",
    description: "Learn about Milwin Game with instant withdrawals and secure gaming.",
    url: "https://milwingames.pk/about",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
