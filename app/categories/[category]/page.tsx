import { Search, Filter, Calendar, Clock, Eye, User, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

// This would normally come from a database or API
const categoryData = {
  business: {
    name: "Business",
    description: "Stay ahead with the latest business trends, career advice, and entrepreneurship insights",
    color: "bg-blue-500",
    posts: [
      {
        id: 1,
        title: "The Future of Remote Work: How Companies Are Adapting in 2024",
        excerpt: "Explore how businesses worldwide are reshaping their work culture, embracing hybrid models, and creating new opportunities for global talent collaboration.",
        author: "Sarah Johnson",
        date: "Dec 15, 2024",
        readTime: "8 min read",
        views: "24.3k",
        image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=600",
        featured: true
      },
      {
        id: 2,
        title: "Building Effective Remote Teams: A Manager's Guide",
        excerpt: "Essential strategies for managing distributed teams and maintaining productivity in remote work environments.",
        author: "Michael Chen",
        date: "Dec 12, 2024",
        readTime: "6 min read",
        views: "18.7k",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 3,
        title: "Startup Funding in 2024: What Entrepreneurs Need to Know",
        excerpt: "Navigate the changing landscape of startup funding with insights from successful entrepreneurs and investors.",
        author: "Emma Rodriguez",
        date: "Dec 10, 2024",
        readTime: "10 min read",
        views: "31.2k",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 4,
        title: "Leadership in the Digital Age: Adapting Management Styles",
        excerpt: "How modern leaders are evolving their approach to manage digital-first teams and drive innovation.",
        author: "David Wilson",
        date: "Dec 8, 2024",
        readTime: "7 min read",
        views: "15.4k",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 5,
        title: "E-commerce Trends: The Future of Online Shopping",
        excerpt: "Discover the latest trends shaping e-commerce, from AI-powered personalization to sustainable shopping practices.",
        author: "Lisa Martinez",
        date: "Dec 6, 2024",
        readTime: "9 min read",
        views: "22.8k",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 6,
        title: "Corporate Sustainability: Beyond Greenwashing",
        excerpt: "How companies are implementing genuine sustainability practices and measuring their environmental impact.",
        author: "Robert Kim",
        date: "Dec 4, 2024",
        readTime: "11 min read",
        views: "19.6k",
        image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
      }
    ]
  }
};

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = categoryData[params.category as keyof typeof categoryData] || categoryData.business;
  const featuredPost = category.posts.find(post => post.featured) || category.posts[0];
  const regularPosts = category.posts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IH</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">InfoHub</h1>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Home</Link>
              <Link href="/categories" className="text-blue-600 font-medium">Categories</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</Link>
            </nav>

            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/categories" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Categories
          </Link>
        </div>

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className={`w-4 h-4 rounded-full ${category.color} mr-3`} />
            <Badge className="bg-blue-600 text-white text-lg px-4 py-2">
              {category.name}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {category.name} Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {category.description}
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder={`Search ${category.name.toLowerCase()} articles...`}
              className="pl-12 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <Button variant="outline" className="h-12 px-6">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-blue-600 text-white border-0">
                      Featured
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-blue-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-fit">
                    Read Article
                  </Button>
                </CardContent>
              </div>
            </Card>
          </section>
        )}

        {/* Regular Posts Grid */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">All {category.name} Articles</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>{regularPosts.length} articles</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {category.name}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{post.author}</p>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{post.views}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50">
            Load More Articles
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IH</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">InfoHub</h3>
              </Link>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                Your trusted source for insightful articles on lifestyle, business, health, travel, and everything that matters in today's world.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/categories/business" className="text-gray-600 hover:text-gray-900 transition-colors">Business & Career</Link></li>
                <li><Link href="/categories/health" className="text-gray-600 hover:text-gray-900 transition-colors">Health & Wellness</Link></li>
                <li><Link href="/categories/travel" className="text-gray-600 hover:text-gray-900 transition-colors">Travel & Culture</Link></li>
                <li><Link href="/categories/lifestyle" className="text-gray-600 hover:text-gray-900 transition-colors">Lifestyle & Food</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">© 2024 InfoHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}