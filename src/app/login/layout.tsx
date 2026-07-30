import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login to Milwin Game Account - Secure Access",
  description: "Login to your Milwin Game account securely. Play casino games, check your balance, and manage withdrawals.",
  keywords: "milwin login, game account, secure login, player account",
  openGraph: {
    title: "Milwin Game Login",
    description: "Secure login to your Milwin Game account. Access your gaming profile and earnings.",
    url: "https://milwingames.pk/login",
    type: "website",
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return children;
}
