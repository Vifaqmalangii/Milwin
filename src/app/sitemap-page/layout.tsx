import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sitemap - Milwin Game All Pages",
  description: "Complete sitemap of all pages on Milwin Game. Browse all games, account pages, and content. XML sitemap available for search engines.",
  keywords: "sitemap, milwin game pages, site directory, search engine submission",
  openGraph: {
    title: "Milwin Game Sitemap",
    description: "Browse all pages and content on Milwin Game platform.",
    url: "https://milwingames.pk/sitemap-page",
    type: "website",
  },
};

export default function SitemapLayout({ children }: { children: React.ReactNode }) {
  return children;
}
