'use client';

import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import BlogGrid from '@/components/blog/BlogGrid';
import SearchFilters, { SearchFilters as SearchFiltersType } from '@/components/search/SearchFilters';
import { blogPosts, categories } from '@/lib/data/mockData';
import { searchPosts } from '@/lib/utils/blog';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState<SearchFiltersType>({
    categories: [],
    tags: [],
    authors: [],
    sortBy: 'recent',
    dateRange: 'all',
  });

  const filteredPosts = useMemo(() => {
    let posts = blogPosts.filter(post => post.published);

    // Apply search query
    if (searchQuery.trim()) {
      posts = searchPosts(posts, searchQuery);
    }

    // Apply category filters
    if (filters.categories.length > 0) {
      posts = posts.filter(post => filters.categories.includes(post.category.id));
    }

    // Apply tag filters
    if (filters.tags.length > 0) {
      posts = posts.filter(post => 
        post.tags.some(tag => filters.tags.includes(tag.id))
      );
    }

    // Apply author filters
    if (filters.authors.length > 0) {
      posts = posts.filter(post => filters.authors.includes(post.author.id));
    }

    // Apply date range filter
    if (filters.dateRange !== 'all') {
      const now = new Date();
      const cutoff = new Date();
      
      switch (filters.dateRange) {
        case 'week':
          cutoff.setDate(now.getDate() - 7);
          break;
        case 'month':
          cutoff.setMonth(now.getMonth() - 1);
          break;
        case 'year':
          cutoff.setFullYear(now.getFullYear() - 1);
          break;
      }
      
      posts = posts.filter(post => new Date(post.publishedAt) >= cutoff);
    }

    // Apply sorting
    switch (filters.sortBy) {
      case 'recent':
        posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case 'popular':
        posts.sort((a, b) => b.views - a.views);
        break;
      case 'oldest':
        posts.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
        break;
    }

    return posts;
  }, [searchQuery, filters]);

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            All Articles
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Explore our collection of {blogPosts.filter(p => p.published).length} articles on web development
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              type="search"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <SearchFilters
            filters={filters}
            onFiltersChange={setFilters}
          />
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {filteredPosts.length} articles found
              {searchQuery && ` for "${searchQuery}"`}
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <Select value={viewMode} onValueChange={(value) => setViewMode(value as 'grid' | 'list')}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="grid">Grid View</SelectItem>
                <SelectItem value="list">List View</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        {filteredPosts.length > 0 ? (
          <BlogGrid posts={filteredPosts} variant={viewMode === 'list' ? 'featured' : 'default'} />
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No articles found
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search terms or filters
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setFilters({
                  categories: [],
                  tags: [],
                  authors: [],
                  sortBy: 'recent',
                  dateRange: 'all',
                });
              }}
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}