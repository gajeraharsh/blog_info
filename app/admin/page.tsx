'use client';

import { BarChart3, Users, FileText, Eye, TrendingUp, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import AdminLayout from '@/components/admin/AdminLayout';
import { blogPosts, authors, categories } from '@/lib/data/mockData';

export default function AdminDashboard() {
  const totalPosts = blogPosts.length;
  const publishedPosts = blogPosts.filter(p => p.published).length;
  const draftPosts = blogPosts.filter(p => !p.published).length;
  const totalViews = blogPosts.reduce((sum, post) => sum + post.views, 0);
  const totalAuthors = authors.length;
  const totalCategories = categories.length;

  const recentPosts = blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, 5);

  const popularPosts = blogPosts
    .sort((a, b) => b.views - a.views)
    .slice(0, 5);

  const stats = [
    {
      title: 'Total Posts',
      value: totalPosts,
      icon: FileText,
      color: 'text-blue-600',
    },
    {
      title: 'Published',
      value: publishedPosts,
      icon: Eye,
      color: 'text-green-600',
    },
    {
      title: 'Drafts',
      value: draftPosts,
      icon: Clock,
      color: 'text-yellow-600',
    },
    {
      title: 'Total Views',
      value: totalViews.toLocaleString(),
      icon: TrendingUp,
      color: 'text-purple-600',
    },
    {
      title: 'Authors',
      value: totalAuthors,
      icon: Users,
      color: 'text-indigo-600',
    },
    {
      title: 'Categories',
      value: totalCategories,
      icon: BarChart3,
      color: 'text-pink-600',
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Overview of your blog's performance and content
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent and Popular Posts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white line-clamp-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {post.author.name} • {new Date(post.publishedAt).toLocaleDateString()}
                      </p>
                    </div>
                    <Badge variant={post.published ? 'default' : 'secondary'}>
                      {post.published ? 'Published' : 'Draft'}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Popular Posts */}
          <Card>
            <CardHeader>
              <CardTitle>Popular Posts</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {popularPosts.map((post) => (
                  <div key={post.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 dark:text-white line-clamp-1">
                        {post.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {post.views.toLocaleString()} views • {post.likes} likes
                      </p>
                    </div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      {post.views.toLocaleString()}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Category Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Category Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <div key={category.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                    <Badge variant="secondary">
                      {category.postsCount} posts
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}