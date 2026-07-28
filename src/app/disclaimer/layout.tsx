import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milwin Game Disclaimer - Important Legal Notice",
  description: "Read Milwin Game disclaimer. Important legal notice about gaming risks and responsible gaming practices.",
  keywords: "disclaimer, legal notice, gaming disclaimer, responsible gaming",
  openGraph: {
    title: "Milwin Game Disclaimer",
    description: "Important disclaimer and legal notice for Milwin Game players.",
    url: "https://milwin.com/disclaimer",
    type: "website",
  },
};

export default function DisclaimerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
