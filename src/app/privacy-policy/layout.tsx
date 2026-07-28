import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Milwin Game Privacy Policy - Data Protection",
  description: "Read Milwin Game privacy policy. We protect your data with highest security standards. Your privacy is our priority.",
  keywords: "privacy policy, data protection, user privacy, security",
  openGraph: {
    title: "Milwin Game Privacy Policy",
    description: "Learn how Milwin Game protects your personal data and privacy.",
    url: "https://milwin.com/privacy-policy",
    type: "website",
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
