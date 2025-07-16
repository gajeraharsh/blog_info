'use client';

import { useState } from 'react';
import { Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { categories, tags, authors } from '@/lib/data/mockData';

export interface SearchFilters {
  categories: string[];
  tags: string[];
  authors: string[];
  sortBy: 'recent' | 'popular' | 'oldest';
  dateRange: 'all' | 'week' | 'month' | 'year';
}

interface SearchFiltersProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
}

export default function SearchFilters({ filters, onFiltersChange }: SearchFiltersProps) {
  const [isOpen, setIsOpen] = useState(false);

  const updateFilters = (key: keyof SearchFilters, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const toggleCategory = (categoryId: string) => {
    const newCategories = filters.categories.includes(categoryId)
      ? filters.categories.filter(id => id !== categoryId)
      : [...filters.categories, categoryId];
    updateFilters('categories', newCategories);
  };

  const toggleTag = (tagId: string) => {
    const newTags = filters.tags.includes(tagId)
      ? filters.tags.filter(id => id !== tagId)
      : [...filters.tags, tagId];
    updateFilters('tags', newTags);
  };

  const toggleAuthor = (authorId: string) => {
    const newAuthors = filters.authors.includes(authorId)
      ? filters.authors.filter(id => id !== authorId)
      : [...filters.authors, authorId];
    updateFilters('authors', newAuthors);
  };

  const clearFilters = () => {
    onFiltersChange({
      categories: [],
      tags: [],
      authors: [],
      sortBy: 'recent',
      dateRange: 'all',
    });
  };

  const getActiveFiltersCount = () => {
    return filters.categories.length + filters.tags.length + filters.authors.length;
  };

  return (
    <div className="space-y-4">
      {/* Filter Toggle and Active Filters */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filters
          {getActiveFiltersCount() > 0 && (
            <Badge variant="secondary">{getActiveFiltersCount()}</Badge>
          )}
        </Button>
        
        {getActiveFiltersCount() > 0 && (
          <Button variant="ghost" onClick={clearFilters} className="text-sm">
            <X className="h-4 w-4 mr-1" />
            Clear all
          </Button>
        )}
      </div>

      {/* Active Filters Display */}
      {getActiveFiltersCount() > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.categories.map(categoryId => {
            const category = categories.find(c => c.id === categoryId);
            return category ? (
              <Badge key={categoryId} variant="secondary" className="cursor-pointer">
                {category.name}
                <X
                  className="h-3 w-3 ml-1"
                  onClick={() => toggleCategory(categoryId)}
                />
              </Badge>
            ) : null;
          })}
          {filters.tags.map(tagId => {
            const tag = tags.find(t => t.id === tagId);
            return tag ? (
              <Badge key={tagId} variant="secondary" className="cursor-pointer">
                {tag.name}
                <X
                  className="h-3 w-3 ml-1"
                  onClick={() => toggleTag(tagId)}
                />
              </Badge>
            ) : null;
          })}
          {filters.authors.map(authorId => {
            const author = authors.find(a => a.id === authorId);
            return author ? (
              <Badge key={authorId} variant="secondary" className="cursor-pointer">
                {author.name}
                <X
                  className="h-3 w-3 ml-1"
                  onClick={() => toggleAuthor(authorId)}
                />
              </Badge>
            ) : null;
          })}
        </div>
      )}

      {/* Sort and Date Range */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Select value={filters.sortBy} onValueChange={(value) => updateFilters('sortBy', value)}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="popular">Most Popular</SelectItem>
            <SelectItem value="oldest">Oldest First</SelectItem>
          </SelectContent>
        </Select>

        <Select value={filters.dateRange} onValueChange={(value) => updateFilters('dateRange', value)}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Date range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Time</SelectItem>
            <SelectItem value="week">Past Week</SelectItem>
            <SelectItem value="month">Past Month</SelectItem>
            <SelectItem value="year">Past Year</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Detailed Filters */}
      {isOpen && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Categories */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Categories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {categories.map(category => (
                <div key={category.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category.id}`}
                    checked={filters.categories.includes(category.id)}
                    onCheckedChange={() => toggleCategory(category.id)}
                  />
                  <label
                    htmlFor={`category-${category.id}`}
                    className="text-sm cursor-pointer flex-1"
                  >
                    {category.name}
                    <span className="text-muted-foreground ml-1">
                      ({category.postsCount})
                    </span>
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {tags.map(tag => (
                <div key={tag.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`tag-${tag.id}`}
                    checked={filters.tags.includes(tag.id)}
                    onCheckedChange={() => toggleTag(tag.id)}
                  />
                  <label
                    htmlFor={`tag-${tag.id}`}
                    className="text-sm cursor-pointer flex-1"
                  >
                    {tag.name}
                    <span className="text-muted-foreground ml-1">
                      ({tag.postsCount})
                    </span>
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Authors */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Authors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {authors.map(author => (
                <div key={author.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={`author-${author.id}`}
                    checked={filters.authors.includes(author.id)}
                    onCheckedChange={() => toggleAuthor(author.id)}
                  />
                  <label
                    htmlFor={`author-${author.id}`}
                    className="text-sm cursor-pointer flex-1"
                  >
                    {author.name}
                    <span className="text-muted-foreground ml-1">
                      ({author.postsCount})
                    </span>
                  </label>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}

export { SearchFilters }