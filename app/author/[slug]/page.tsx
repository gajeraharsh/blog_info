import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Twitter, Linkedin, Github, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BlogGrid from '@/components/blog/BlogGrid';
import { authors, blogPosts } from '@/lib/data/mockData';
import { generateAuthorSEO } from '@/lib/utils/seo';

interface AuthorPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return authors.map((author) => ({
    slug: author.slug,
  }));
}

export async function generateMetadata({ params }: AuthorPageProps) {
  const author = authors.find((a) => a.slug === params.slug);
  
  if (!author) {
    return {
      title: 'Author Not Found',
    };
  }

  const seoData = generateAuthorSEO(author);
  return {
    title: seoData.title,
    description: seoData.description,
    openGraph: seoData.openGraph,
    twitter: seoData.twitter,
  };
}

export default function AuthorPage({ params }: AuthorPageProps) {
  const author = authors.find((a) => a.slug === params.slug);
  
  if (!author) {
    notFound();
  }

  const authorPosts = blogPosts.filter(
    (post) => post.author.id === author.id && post.published
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/authors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Authors
          </Link>
        </Button>

        {/* Author Header */}
        <div className="text-center mb-12">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src={author.avatar}
              alt={author.name}
              fill
              className="object-cover rounded-full"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {author.name}
          </h1>
          <Badge variant="secondary" className="mb-4">
            {author.postsCount} articles published
          </Badge>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            {author.bio}
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {author.social.twitter && (
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a href={`https://twitter.com/${author.social.twitter}`} target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </a>
              </Button>
            )}
            {author.social.linkedin && (
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a href={`https://linkedin.com/in/${author.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            )}
            {author.social.github && (
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a href={`https://github.com/${author.social.github}`} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
            )}
            {author.social.website && (
              <Button
                variant="outline"
                size="sm"
                asChild
              >
                <a href={author.social.website} target="_blank" rel="noopener noreferrer">
                  <Globe className="h-4 w-4 mr-2" />
                  Website
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Articles */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Articles by {author.name}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {authorPosts.length} articles published
          </p>
        </div>

        {authorPosts.length > 0 ? (
          <BlogGrid posts={authorPosts} />
        ) : (
          <div className="text-center py-12">
            <div className="relative w-16 h-16 mx-auto mb-4 opacity-20">
              <Image
                src={author.avatar}
                alt={author.name}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No published articles yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {author.name} hasn't published any articles yet. Check back soon!
            </p>
            <Button asChild variant="outline">
              <Link href="/blog">Browse All Articles</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}