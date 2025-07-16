import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BlogGrid from '@/components/blog/BlogGrid';
import { categories, blogPosts } from '@/lib/data/mockData';
import { generateCategorySEO } from '@/lib/utils/seo';
import { cn } from '@/lib/utils';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.slug);
  
  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  const seoData = generateCategorySEO(category);
  return {
    title: seoData.title,
    description: seoData.description,
    openGraph: seoData.openGraph,
    twitter: seoData.twitter,
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.slug === params.slug);
  
  if (!category) {
    notFound();
  }

  const categoryPosts = blogPosts.filter(
    (post) => post.category.id === category.id && post.published
  );

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/categories">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Categories
          </Link>
        </Button>

        {/* Category Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className={cn(
              'w-16 h-16 rounded-lg flex items-center justify-center',
              category.color
            )}>
              <span className="text-white font-bold text-xl">
                {category.name.charAt(0)}
              </span>
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                {category.name}
              </h1>
              <Badge variant="secondary" className="mt-2">
                {category.postsCount} articles
              </Badge>
            </div>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl">
            {category.description}
          </p>
        </div>

        {/* Articles */}
        {categoryPosts.length > 0 ? (
          <BlogGrid posts={categoryPosts} />
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <div className={cn(
                'w-16 h-16 rounded-lg flex items-center justify-center mx-auto',
                category.color,
                'opacity-20'
              )}>
                <span className="text-white font-bold text-xl">
                  {category.name.charAt(0)}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              We're working on adding more content to this category. Check back soon!
            </p>
            <Button asChild variant="outline">
              <Link href="/blog">Browse All Articles</Link>
            </Button>
          </div>
        )}

        {/* Related Categories */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Other Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories
              .filter(c => c.id !== category.id)
              .slice(0, 3)
              .map((relatedCategory) => (
                <Link key={relatedCategory.id} href={`/category/${relatedCategory.slug}`}>
                  <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow group">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        'w-10 h-10 rounded-lg flex items-center justify-center',
                        relatedCategory.color
                      )}>
                        <span className="text-white font-bold">
                          {relatedCategory.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-medium group-hover:text-primary transition-colors">
                          {relatedCategory.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {relatedCategory.postsCount} articles
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}