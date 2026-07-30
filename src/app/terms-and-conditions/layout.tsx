import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milwin Game Terms & Conditions - User Agreement",
  description: "Read Milwin Game terms and conditions. Important legal information and user agreements for playing on our platform.",
  keywords: "terms and conditions, user agreement, legal terms, gaming rules",
  openGraph: {
    title: "Milwin Game Terms & Conditions",
    description: "Review Milwin Game terms and conditions for safe and fair gaming.",
    url: "https://milwingames.pk/terms-and-conditions",
    type: "website",
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
