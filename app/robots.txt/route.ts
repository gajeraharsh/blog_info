export async function GET() {
  const baseUrl = 'https://techblog.com';

  const robots = `User-agent: *
Allow: /

# Disallow admin pages
Disallow: /admin/

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl delay
Crawl-delay: 1`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}