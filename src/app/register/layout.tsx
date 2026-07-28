import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Milwin Game Account - Free Signup",
  description: "Create your free Milwin Game account today. Quick registration, instant welcome bonus, and start playing casino games.",
  keywords: "milwin register, free account, signup bonus, create account, new player",
  openGraph: {
    title: "Register Milwin Game Account - Free Signup",
    description: "Join Milwin Game today! Quick registration and instant welcome bonus waiting for you.",
    url: "https://milwin.com/register",
    type: "website",
  },
};

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
