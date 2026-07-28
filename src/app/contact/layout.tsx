import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Milwin Game Support - 24/7 Customer Service",
  description: "Get in touch with Milwin Game support team. Available 24/7 for all your gaming questions, technical issues, and withdrawal assistance.",
  keywords: "milwin contact, casino support, customer service, gaming help, withdrawal support",
  openGraph: {
    title: "Contact Milwin Game - 24/7 Support",
    description: "Reach out to Milwin Game support team available 24/7 for instant help.",
    url: "https://milwin.com/contact",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
