import { BlogPost } from '@/lib/data/mockData';
import BlogCard from './BlogCard';

interface BlogGridProps {
  posts: BlogPost[];
  variant?: 'default' | 'featured' | 'minimal';
}

export default function BlogGrid({ posts, variant = 'default' }: BlogGridProps) {
  if (variant === 'featured') {
    return (
      <div className="space-y-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} variant="featured" />
        ))}
      </div>
    );
  }

  if (variant === 'minimal') {
    return (
      <div className="space-y-6">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} variant="minimal" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </div>
  );
}