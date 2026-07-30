import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Withdraw Money from Milwin Game - Fast & Safe",
  description: "Withdraw your earnings from Milwin Game securely and instantly. Multiple withdrawal methods, no hidden charges, money in your account within minutes.",
  keywords: "milwin withdraw, withdrawal method, instant withdrawal, gaming earnings, cash out, payment method",
  openGraph: {
    title: "Withdraw from Milwin Game - Instant Payouts",
    description: "Withdraw your winnings instantly from Milwin Game. Fast, secure, and hassle-free withdrawals!",
    url: "https://milwingames.pk/withdraw",
    type: "website",
  },
};

export default function WithdrawLayout({ children }: { children: React.ReactNode }) {
  return children;
}
