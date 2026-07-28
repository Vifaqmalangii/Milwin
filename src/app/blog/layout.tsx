import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milwin Game Blog - Tips, Guides & Casino Strategies",
  description: "Read latest articles about casino games, winning strategies, bonuses, withdrawal guides and gaming tips on Milwin Game blog.",
  keywords: "milwin blog, casino strategies, gaming tips, teen patti guide, slots strategy, withdrawal guide",
  openGraph: {
    title: "Milwin Game Blog - Gaming Strategies & Tips",
    description: "Discover winning strategies, game guides, bonus tips and more on Milwin Game blog.",
    url: "https://milwin.com/blog",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
