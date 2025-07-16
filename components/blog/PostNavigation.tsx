import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BlogPost } from '@/lib/data/mockData';

interface PostNavigationProps {
  prevPost?: BlogPost;
  nextPost?: BlogPost;
}

export default function PostNavigation({ prevPost, nextPost }: PostNavigationProps) {
  if (!prevPost && !nextPost) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
      {prevPost && (
        <Card className="group hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <ChevronLeft className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-medium">Previous Post</span>
            </div>
            <Link href={`/blog/${prevPost.slug}`} className="block">
              <div className="flex gap-4">
                <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={prevPost.coverImage}
                    alt={prevPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {prevPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {prevPost.author.name}
                  </p>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      )}

      {nextPost && (
        <Card className="group hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex items-center justify-end gap-2 mb-3">
              <span className="text-sm text-muted-foreground font-medium">Next Post</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>
            <Link href={`/blog/${nextPost.slug}`} className="block">
              <div className="flex gap-4">
                <div className="flex-1 text-right">
                  <h3 className="font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                    {nextPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {nextPost.author.name}
                  </p>
                </div>
                <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                  <Image
                    src={nextPost.coverImage}
                    alt={nextPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}