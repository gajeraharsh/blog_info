import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Eye, Calendar, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { blogPosts } from '@/lib/data/mockData';
import { formatDate, generateTableOfContents, getRelatedPosts } from '@/lib/utils/blog';
import { generateBlogPostSEO } from '@/lib/utils/seo';
import TableOfContents from '@/components/blog/TableOfContents';
import SocialShare from '@/components/blog/SocialShare';
import PostNavigation from '@/components/blog/PostNavigation';
import CommentSection from '@/components/blog/CommentSection';
import BlogGrid from '@/components/blog/BlogGrid';
import { cn } from '@/lib/utils';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const seoData = generateBlogPostSEO(post);
  return {
    title: seoData.title,
    description: seoData.description,
    openGraph: seoData.openGraph,
    twitter: seoData.twitter,
  };
}

// Process markdown content to add IDs to headings
function processContent(content: string): string {
  return content.replace(/^(#{1,6})\s+(.+)$/gm, (match, hashes, text) => {
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    return `${hashes} ${text} {#${id}}`;
  });
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  
  if (!post || !post.published) {
    notFound();
  }

  const processedContent = processContent(post.content);
  const tableOfContents = generateTableOfContents(post.content);
  const relatedPosts = getRelatedPosts(post, blogPosts);
  
  // Find adjacent posts for navigation
  const currentIndex = blogPosts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : undefined;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : undefined;

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    image: post.coverImage,
    publisher: {
      '@type': 'Organization',
      name: 'TechBlog',
    },
  };

  return (
    <div className="min-h-screen">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Article Header */}
      <article className="pb-16">
        <header className="mb-8">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Category and Tags */}
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <Badge className={cn(post.category.color, 'text-white')}>
                  {post.category.name}
                </Badge>
                {post.tags.map((tag) => (
                  <Badge key={tag.id} variant="secondary">
                    {tag.name}
                  </Badge>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                {post.excerpt}
              </p>

              {/* Author and Meta */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <div className="flex items-center gap-4">
                  <Link href={`/author/${post.author.slug}`}>
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      width={48}
                      height={48}
                      className="rounded-full"
                    />
                  </Link>
                  <div>
                    <Link
                      href={`/author/${post.author.slug}`}
                      className="font-medium text-gray-900 dark:text-white hover:text-primary transition-colors"
                    >
                      {post.author.name}
                    </Link>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readingTime} min read
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {post.views.toLocaleString()} views
                      </div>
                    </div>
                  </div>
                </div>
                
                <SocialShare
                  title={post.title}
                  url={`/blog/${post.slug}`}
                  description={post.excerpt}
                />
              </div>
            </div>
          </div>

          {/* Cover Image */}
          <div className="relative h-96 sm:h-[500px] mb-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </header>

        {/* Article Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: processedContent
                        .split('\n')
                        .map(line => {
                          if (line.startsWith('# ')) {
                            const text = line.substring(2);
                            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                            return `<h1 id="${id}">${text}</h1>`;
                          }
                          if (line.startsWith('## ')) {
                            const text = line.substring(3);
                            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                            return `<h2 id="${id}">${text}</h2>`;
                          }
                          if (line.startsWith('### ')) {
                            const text = line.substring(4);
                            const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                            return `<h3 id="${id}">${text}</h3>`;
                          }
                          if (line.startsWith('```')) {
                            return '<pre><code>';
                          }
                          if (line === '```') {
                            return '</code></pre>';
                          }
                          return line;
                        })
                        .join('<br>')
                    }}
                  />
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-6">
                  {/* Table of Contents */}
                  {tableOfContents.length > 0 && (
                    <TableOfContents items={tableOfContents} />
                  )}

                  {/* Author Card */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          width={48}
                          height={48}
                          className="rounded-full"
                        />
                        <div>
                          <h3 className="font-medium">{post.author.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {post.author.postsCount} articles
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        {post.author.bio}
                      </p>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={`/author/${post.author.slug}`}>
                          View Profile
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Post Navigation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="max-w-4xl mx-auto">
            <PostNavigation prevPost={prevPost} nextPost={nextPost} />
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 py-16 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                  Related Articles
                </h2>
                <BlogGrid posts={relatedPosts} />
              </div>
            </div>
          </section>
        )}

        {/* Comments */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-4xl mx-auto">
            <CommentSection />
          </div>
        </div>
      </article>
    </div>
  );
}