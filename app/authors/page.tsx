import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { authors } from '@/lib/data/mockData';
import { generateSEO } from '@/lib/utils/seo';
import { Twitter, Linkedin, Github, Globe } from 'lucide-react';

export const metadata = generateSEO({
  title: 'Authors | TechBlog',
  description: 'Meet the talented writers and developers behind TechBlog. Learn about their expertise and read their articles.',
  canonical: '/authors',
  openGraph: {
    title: 'Authors | TechBlog',
    description: 'Meet the talented writers and developers behind TechBlog. Learn about their expertise and read their articles.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Authors | TechBlog',
    description: 'Meet the talented writers and developers behind TechBlog. Learn about their expertise and read their articles.',
  },
});

export default function AuthorsPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Authors
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get to know the talented writers and developers who create the content you love. 
            Each brings unique expertise and insights to the table.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <Card key={author.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={author.avatar}
                    alt={author.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <CardTitle className="text-xl mb-2">{author.name}</CardTitle>
                <Badge variant="secondary">
                  {author.postsCount} articles
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 text-center">
                  {author.bio}
                </p>
                
                {/* Social Links */}
                <div className="flex justify-center gap-2 mb-6">
                  {author.social.twitter && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      asChild
                    >
                      <a href={`https://twitter.com/${author.social.twitter}`} target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {author.social.linkedin && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      asChild
                    >
                      <a href={`https://linkedin.com/in/${author.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {author.social.github && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      asChild
                    >
                      <a href={`https://github.com/${author.social.github}`} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {author.social.website && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      asChild
                    >
                      <a href={author.social.website} target="_blank" rel="noopener noreferrer">
                        <Globe className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                
                <Button asChild className="w-full">
                  <Link href={`/author/${author.slug}`}>
                    View Articles
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Author Network
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {authors.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Expert Authors
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {authors.reduce((total, author) => total + author.postsCount, 0)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Articles Published
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {Math.round(authors.reduce((total, author) => total + author.postsCount, 0) / authors.length)}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Articles per Author
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}