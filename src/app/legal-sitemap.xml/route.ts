export async function GET() {
  const baseUrl = 'https://milwin.com';
  const lastModified = new Date().toISOString();

  const legalPages = [
    { url: '/privacy-policy', priority: 0.7 },
    { url: '/terms-and-conditions', priority: 0.7 },
    { url: '/disclaimer', priority: 0.7 },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${legalPages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600',
    },
  });
}
