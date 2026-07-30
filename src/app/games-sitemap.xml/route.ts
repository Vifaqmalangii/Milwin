export const dynamic = "force-static";

export async function GET() {
  const baseUrl = 'https://milwingames.pk';
  const lastModified = new Date().toISOString();

  const games = [
    { url: '/games/teen-patti', priority: 0.9 },
    { url: '/games/slots', priority: 0.9 },
    { url: '/games/roulette', priority: 0.9 },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${games
  .map(
    (game) => `  <url>
    <loc>${baseUrl}${game.url}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${game.priority}</priority>
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
