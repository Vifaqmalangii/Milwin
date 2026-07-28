import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Deposit Money on Milwin Game - Quick & Secure Payment",
  description: "Deposit money securely on Milwin Game. Multiple payment methods available. Fast processing with bonus rewards on every deposit.",
  keywords: "milwin deposit, deposit method, payment gateway, gaming balance, quick deposit, safe payment",
  openGraph: {
    title: "Deposit on Milwin Game - Instant & Secure",
    description: "Deposit money quickly and securely on Milwin Game. Get bonuses on every deposit!",
    url: "https://milwin.com/deposit",
    type: "website",
  },
};

export default function DepositLayout({ children }: { children: React.ReactNode }) {
  return children;
}
