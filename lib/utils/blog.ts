import { BlogPost } from '../data/mockData';

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return minutes;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

export function generateTableOfContents(content: string): Array<{ id: string; text: string; level: number }> {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const toc: Array<{ id: string; text: string; level: number }> = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    
    toc.push({
      id,
      text,
      level,
    });
  }

  return toc;
}

export function getRelatedPosts(currentPost: BlogPost, allPosts: BlogPost[], limit = 3): BlogPost[] {
  const relatedPosts = allPosts
    .filter(post => post.id !== currentPost.id && post.published)
    .map(post => {
      let score = 0;
      
      // Same category gets high score
      if (post.category.id === currentPost.category.id) {
        score += 10;
      }
      
      // Shared tags get points
      const sharedTags = post.tags.filter(tag => 
        currentPost.tags.some(currentTag => currentTag.id === tag.id)
      ).length;
      score += sharedTags * 5;
      
      // Same author gets points
      if (post.author.id === currentPost.author.id) {
        score += 3;
      }
      
      return { post, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);

  return relatedPosts;
}

export function searchPosts(posts: BlogPost[], query: string): BlogPost[] {
  if (!query.trim()) return posts;
  
  const searchQuery = query.toLowerCase();
  
  return posts.filter(post => {
    const titleMatch = post.title.toLowerCase().includes(searchQuery);
    const excerptMatch = post.excerpt.toLowerCase().includes(searchQuery);
    const contentMatch = post.content.toLowerCase().includes(searchQuery);
    const authorMatch = post.author.name.toLowerCase().includes(searchQuery);
    const categoryMatch = post.category.name.toLowerCase().includes(searchQuery);
    const tagMatch = post.tags.some(tag => tag.name.toLowerCase().includes(searchQuery));
    
    return titleMatch || excerptMatch || contentMatch || authorMatch || categoryMatch || tagMatch;
  });
}

export function getPopularPosts(posts: BlogPost[], limit = 5): BlogPost[] {
  return posts
    .filter(post => post.published)
    .sort((a, b) => b.views - a.views)
    .slice(0, limit);
}

export function getRecentPosts(posts: BlogPost[], limit = 5): BlogPost[] {
  return posts
    .filter(post => post.published)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}