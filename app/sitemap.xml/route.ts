import { blogPosts, categories, authors } from '@/lib/data/mockData';

export async function GET() {
  const baseUrl = 'https://techblog.com';
  
  // Static pages
  const staticPages = [
    { url: '', changefreq: 'daily', priority: 1.0 },
    { url: '/blog', changefreq: 'daily', priority: 0.9 },
    { url: '/categories', changefreq: 'weekly', priority: 0.8 },
    { url: '/authors', changefreq: 'weekly', priority: 0.8 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  ];

  // Blog posts
  const blogPages = blogPosts
    .filter(post => post.published)
    .map(post => ({
      url: `/blog/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: post.publishedAt,
    }));

  // Categories
  const categoryPages = categories.map(category => ({
    url: `/category/${category.slug}`,
    changefreq: 'weekly',
    priority: 0.7,
  }));

  // Authors
  const authorPages = authors.map(author => ({
    url: `/author/${author.slug}`,
    changefreq: 'weekly',
    priority: 0.6,
  }));

  const allPages = [
    ...staticPages,
    ...blogPages,
    ...categoryPages,
    ...authorPages,
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
      ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
    </url>
  `).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}