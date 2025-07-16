import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Star, Users, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import BlogCard from '@/components/blog/BlogCard';
import BlogGrid from '@/components/blog/BlogGrid';
import { blogPosts, categories } from '@/lib/data/mockData';
import { generateSEO } from '@/lib/utils/seo';

export const metadata = generateSEO({
  title: 'TechBlog - Modern Web Development Insights',
  description: 'Discover the latest insights on React, Next.js, TypeScript, and modern web development practices. Expert tutorials, tips, and best practices.',
  canonical: '/',
  openGraph: {
    title: 'TechBlog - Modern Web Development Insights',
    description: 'Discover the latest insights on React, Next.js, TypeScript, and modern web development practices.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechBlog - Modern Web Development Insights',
    description: 'Discover the latest insights on React, Next.js, TypeScript, and modern web development practices.',
  },
});

export default function Home() {
  const featuredPosts = blogPosts.filter(post => post.featured && post.published);
  const trendingPosts = blogPosts.filter(post => post.trending && post.published);
  const recentPosts = blogPosts.filter(post => post.published).slice(0, 6);

  const stats = [
    { icon: FileText, label: 'Articles', value: '50+' },
    { icon: Users, label: 'Authors', value: '10+' },
    { icon: TrendingUp, label: 'Monthly Views', value: '25K+' },
    { icon: Star, label: 'Rating', value: '4.9' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Modern Web Development
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block mt-2">
                Insights & Tutorials
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover the latest insights on React, Next.js, TypeScript, and modern web development practices. 
              Expert tutorials, tips, and best practices for developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/blog">
                  Explore Articles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/categories">Browse Categories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Featured Articles
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Hand-picked articles that showcase the latest in web development
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/blog">View All</Link>
              </Button>
            </div>
            <BlogGrid posts={featuredPosts} variant="featured" />
          </div>
        </section>
      )}

      {/* Trending Posts */}
      {trendingPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Trending Now
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  The most popular articles this week
                </p>
              </div>
              <Button asChild variant="outline">
                <Link href="/blog?filter=trending">View All</Link>
              </Button>
            </div>
            <BlogGrid posts={trendingPosts} />
          </div>
        </section>
      )}

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore our comprehensive collection of articles organized by technology and topic
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={`/category/${category.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center`}>
                        <span className="text-white font-bold">
                          {category.name.charAt(0)}
                        </span>
                      </div>
                      <Badge variant="secondary">
                        {category.postsCount} articles
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                      {category.name}
                    </CardTitle>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Latest Articles
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Stay updated with our newest content
              </p>
            </div>
            <Button asChild variant="outline">
              <Link href="/blog">View All</Link>
            </Button>
          </div>
          <BlogGrid posts={recentPosts} />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter and get the latest web development insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg border-0 focus:ring-2 focus:ring-blue-300 outline-none"
              />
              <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}