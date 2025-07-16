'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Eye, Heart, Bookmark, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { BlogPost } from '@/lib/data/mockData';
import { formatDateShort } from '@/lib/utils/blog';
import { cn } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
  variant?: 'default' | 'featured' | 'minimal';
}

export default function BlogCard({ post, variant = 'default' }: BlogCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `/blog/${post.slug}`,
      });
    } else {
      // Fallback to copy to clipboard
      navigator.clipboard.writeText(`${window.location.origin}/blog/${post.slug}`);
    }
  };

  if (variant === 'featured') {
    return (
      <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-full">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <Badge className={cn(post.category.color, 'text-white')}>
                {post.category.name}
              </Badge>
              {post.trending && (
                <Badge variant="destructive">Trending</Badge>
              )}
            </div>
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <Link
                  href={`/author/${post.author.slug}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {post.author.name}
                </Link>
              </div>
              <span className="text-sm text-muted-foreground">
                {formatDateShort(post.publishedAt)}
              </span>
            </div>
            
            <Link href={`/blog/${post.slug}`} className="block group">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>
            </Link>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {post.readingTime} min read
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {post.views.toLocaleString()}
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className={cn(
                    'h-8 w-8 p-0',
                    isLiked && 'text-red-500 hover:text-red-600'
                  )}
                >
                  <Heart className={cn('h-4 w-4', isLiked && 'fill-current')} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBookmark}
                  className={cn(
                    'h-8 w-8 p-0',
                    isBookmarked && 'text-blue-500 hover:text-blue-600'
                  )}
                >
                  <Bookmark className={cn('h-4 w-4', isBookmarked && 'fill-current')} />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="h-8 w-8 p-0"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className="group">
        <Link href={`/blog/${post.slug}`} className="block">
          <div className="flex gap-4">
            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex-1">
              <Badge className={cn(post.category.color, 'text-white mb-2')}>
                {post.category.name}
              </Badge>
              <h3 className="font-semibold mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{formatDateShort(post.publishedAt)}</span>
                <span>•</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  return (
    <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <Badge className={cn(post.category.color, 'text-white')}>
            {post.category.name}
          </Badge>
          {post.trending && (
            <Badge variant="destructive">Trending</Badge>
          )}
        </div>
      </div>
      
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          <Image
            src={post.author.avatar}
            alt={post.author.name}
            width={24}
            height={24}
            className="rounded-full"
          />
          <Link
            href={`/author/${post.author.slug}`}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            {post.author.name}
          </Link>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">
            {formatDateShort(post.publishedAt)}
          </span>
        </div>
        
        <Link href={`/blog/${post.slug}`} className="block group">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground line-clamp-3 mb-4">
          {post.excerpt}
        </p>
      </CardContent>
      
      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readingTime} min read
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {post.views.toLocaleString()}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={handleLike}
            className={cn(
              'h-8 w-8 p-0',
              isLiked && 'text-red-500 hover:text-red-600'
            )}
          >
            <Heart className={cn('h-4 w-4', isLiked && 'fill-current')} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleBookmark}
            className={cn(
              'h-8 w-8 p-0',
              isBookmarked && 'text-blue-500 hover:text-blue-600'
            )}
          >
            <Bookmark className={cn('h-4 w-4', isBookmarked && 'fill-current')} />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleShare}
            className="h-8 w-8 p-0"
          >
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}