import type { Metadata } from "next";
import Providers from "@/Components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Milwin Game Download Official App - Play & Earn Real Cash",
    template: "%s | Milwin Game",
  },
  description: "Download Milwin APK latest version for Android. Play casino games like Teen Patti, Slots, Roulette and earn real money with fast withdrawals. Pakistan's #1 trusted online casino platform.",
  keywords: "milwin game, milwin apk, online casino pakistan, teen patti game, slots game, casino app android, real money games, fast withdrawal casino",
  authors: [{ name: "Milwin Gaming Team" }],
  creator: "Milwin Game",
  publisher: "Milwin Game",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://milwin.com",
    siteName: "Milwin Game",
    title: "Milwin Game Download Official App - Play & Earn Real Cash",
    description: "Download Milwin APK and earn real money playing casino games. Teen Patti, Slots, Roulette with instant withdrawals.",
    images: [
      {
        url: "https://milwin.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Milwin Game Official App",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milwin Game - Online Casino App",
    description: "Play casino games and earn real cash on Milwin. Download APK now!",
    images: ["https://milwin.com/twitter-image.png"],
    creator: "@milwingame",
  },
  alternates: {
    canonical: "https://milwin.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Milwin Game",
    "url": "https://milwin.com",
    "logo": "https://milwin.com/logo.png",
    "description": "Pakistan's #1 trusted online casino platform with instant withdrawals",
    "sameAs": [
      "https://facebook.com/milwingame",
      "https://twitter.com/milwingame",
      "https://instagram.com/milwingame"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "telephone": "+92-XXX-XXXX",
      "areaServed": "PK",
      "availableLanguage": ["en"]
    }
  };

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Milwin Game APK",
    "description": "Online casino game app for Android with real money earning",
    "applicationCategory": "GamesApp",
    "operatingSystem": "Android",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "5000"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href="https://milwin.com" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        
        {/* Software Application Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="bg-[#0a0d14] text-white antialiased font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
