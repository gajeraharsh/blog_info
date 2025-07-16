import { blogPosts } from '@/lib/data/mockData';

export async function GET() {
  const baseUrl = 'https://techblog.com';
  
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>TechBlog - Modern Web Development Insights</title>
    <description>Discover the latest insights on React, Next.js, TypeScript, and modern web development practices.</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Next.js</generator>
    
    ${blogPosts
      .filter(post => post.published)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .map(post => `
        <item>
          <title><![CDATA[${post.title}]]></title>
          <description><![CDATA[${post.excerpt}]]></description>
          <link>${baseUrl}/blog/${post.slug}</link>
          <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
          <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
          <author>noreply@techblog.com (${post.author.name})</author>
          <category><![CDATA[${post.category.name}]]></category>
          ${post.tags.map(tag => `<category><![CDATA[${tag.name}]]></category>`).join('')}
        </item>
      `).join('')}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}