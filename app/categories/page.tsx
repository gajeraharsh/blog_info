import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { categories } from '@/lib/data/mockData';
import { generateSEO } from '@/lib/utils/seo';
import { cn } from '@/lib/utils';

export const metadata = generateSEO({
  title: 'Categories | TechBlog',
  description: 'Browse all article categories on TechBlog. Find content organized by technology, framework, and topic.',
  canonical: '/categories',
  openGraph: {
    title: 'Categories | TechBlog',
    description: 'Browse all article categories on TechBlog. Find content organized by technology, framework, and topic.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Categories | TechBlog',
    description: 'Browse all article categories on TechBlog. Find content organized by technology, framework, and topic.',
  },
});

export default function CategoriesPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Browse Categories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive collection of articles organized by technology and topic. 
            Find exactly what you're looking for.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/category/${category.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={cn(
                      'w-12 h-12 rounded-lg flex items-center justify-center',
                      category.color
                    )}>
                      <span className="text-white font-bold text-lg">
                        {category.name.charAt(0)}
                      </span>
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {category.postsCount} articles
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>Read articles →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Knowledge Base Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {categories.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Categories
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {categories.reduce((total, cat) => total + cat.postsCount, 0)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Articles
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {Math.round(categories.reduce((total, cat) => total + cat.postsCount, 0) / categories.length)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Articles per Category
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}