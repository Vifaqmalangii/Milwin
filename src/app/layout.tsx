import type { Metadata } from "next";
import Providers from "@/Components/Providers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://milwingames.pk"),
  title: {
    default: "Milwin Game Download Official App - Play & Earn Real Cash",
    template: "%s | Milwin Game",
  },
  description: "Download the latest Milwin APK for Android and enjoy Teen Patti, Slots, Roulette, and more. Play casino games, win real money, and get fast withdrawals.",
  keywords: "milwin game, milwin apk, online casino pakistan, teen patti game, slots game, casino app android, real money games, fast withdrawal casino",
  authors: [{ name: "Milwin Gaming Team" }],
  creator: "Milwin Game",
  publisher: "Milwin Game",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://milwingames.pk",
    siteName: "Milwin Game",
    title: "Milwin Game Download Official App - Play & Earn Real Cash",
    description: "Download Milwin APK and earn real money playing casino games. Teen Patti, Slots, Roulette with instant withdrawals.",
    images: [
      {
        url: "https://milwingames.pk/og-image.png",
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
    images: ["https://milwingames.pk/twitter-image.png"],
    creator: "@milwingame",
  },
  alternates: {
    canonical: "./",
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
    "url": "https://milwingames.pk",
    "logo": "https://milwingames.pk/logo.png",
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
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
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

        {/* Critical LCP Preload */}
        <link
          rel="preload"
          as="image"
          href="/herobg.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          href="/milwinlogo.webp"
          type="image/webp"
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
