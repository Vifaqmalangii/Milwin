import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://milwingames.pk';

  // Main Pages & User Pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/download`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/deposit`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/withdraw`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/register`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // Content & Blog Pages
  const contentPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  // Legal & Policy Pages
  const legalPages = [
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Game Category Pages
  const gamePages = [
    {
      url: `${baseUrl}/games/teen-patti`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/games/slots`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/games/roulette`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    },
  ];

  return [
    ...mainPages,
    ...contentPages,
    ...legalPages,
    ...gamePages,
  ];
}
