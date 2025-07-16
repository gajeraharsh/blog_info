'use client';

import { useState } from 'react';
import { Search, Menu, X, Calendar, User, ArrowRight, Clock, Eye, Bookmark, Share2, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const featuredPost = {
  id: 1,
  title: "The Future of Remote Work: How Companies Are Adapting in 2024",
  excerpt: "Explore how businesses worldwide are reshaping their work culture, embracing hybrid models, and creating new opportunities for global talent collaboration.",
  author: "Sarah Johnson",
  date: "Dec 15, 2024",
  readTime: "8 min read",
  views: "24.3k",
  category: "Business",
  image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200",
  featured: true,
  trending: true
};

const secondaryFeatured = [
  {
    id: 2,
    title: "Sustainable Living: 10 Simple Changes That Make a Big Impact",
    excerpt: "Discover practical ways to reduce your environmental footprint and live more sustainably without compromising your lifestyle.",
    author: "Emma Green",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    views: "18.7k",
    category: "Lifestyle",
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Global Economic Trends: What to Expect in 2024",
    excerpt: "Analysis of current market conditions, inflation trends, and economic forecasts from leading financial experts.",
    author: "Michael Chen",
    date: "Dec 10, 2024",
    readTime: "12 min read",
    views: "31.2k",
    category: "Finance",
    image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];

const blogPosts = [
  {
    id: 4,
    title: "Mental Health in the Digital Age: Finding Balance",
    excerpt: "Understanding the impact of social media and digital devices on our mental wellbeing, plus strategies for maintaining healthy boundaries.",
    author: "Dr. Lisa Martinez",
    date: "Dec 8, 2024",
    readTime: "9 min read",
    views: "15.4k",
    category: "Health",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 5,
    title: "Travel Photography: Capturing Authentic Moments",
    excerpt: "Professional tips for documenting your travels, from composition techniques to storytelling through images.",
    author: "James Rodriguez",
    date: "Dec 6, 2024",
    readTime: "7 min read",
    views: "12.8k",
    category: "Travel",
    image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 6,
    title: "The Rise of Plant-Based Cuisine: A Culinary Revolution",
    excerpt: "How plant-based cooking is transforming restaurants and home kitchens worldwide, with recipes and chef insights.",
    author: "Chef Maria Santos",
    date: "Dec 4, 2024",
    readTime: "10 min read",
    views: "19.6k",
    category: "Food",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 7,
    title: "Climate Change Solutions: Innovation and Hope",
    excerpt: "Exploring breakthrough technologies and community initiatives that are making a real difference in fighting climate change.",
    author: "Dr. Robert Kim",
    date: "Dec 2, 2024",
    readTime: "11 min read",
    views: "22.1k",
    category: "Environment",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 8,
    title: "The Art of Minimalism: Living with Less, Enjoying More",
    excerpt: "Discover how minimalist principles can transform your living space, reduce stress, and increase life satisfaction.",
    author: "Anna Thompson",
    date: "Nov 30, 2024",
    readTime: "8 min read",
    views: "16.3k",
    category: "Lifestyle",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 9,
    title: "Education Revolution: Learning in the 21st Century",
    excerpt: "How educational institutions are adapting to new learning styles, technology integration, and preparing students for future careers.",
    author: "Prof. David Wilson",
    date: "Nov 28, 2024",
    readTime: "9 min read",
    views: "13.7k",
    category: "Education",
    image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 10,
    title: "Cultural Festivals Around the World: A Celebration Guide",
    excerpt: "Journey through the most vibrant cultural celebrations globally, from traditional ceremonies to modern artistic expressions.",
    author: "Isabella Garcia",
    date: "Nov 26, 2024",
    readTime: "6 min read",
    views: "20.9k",
    category: "Culture",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 11,
    title: "Personal Finance: Building Wealth in Your 20s and 30s",
    excerpt: "Essential financial strategies for young adults, including budgeting, investing, and planning for major life milestones.",
    author: "Financial Advisor Tom Lee",
    date: "Nov 24, 2024",
    readTime: "12 min read",
    views: "28.4k",
    category: "Finance",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 12,
    title: "Fitness Trends 2024: What's Actually Worth Your Time",
    excerpt: "Cut through the fitness fads to discover evidence-based workout trends that deliver real results for your health goals.",
    author: "Fitness Expert Rachel Adams",
    date: "Nov 22, 2024",
    readTime: "7 min read",
    views: "17.2k",
    category: "Health",
    image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const categories = ["All", "Business", "Lifestyle", "Finance", "Health", "Travel", "Food", "Environment", "Education", "Culture"];

const trendingTopics = ["Remote Work", "Sustainability", "Mental Health", "Travel 2024", "Plant-Based Living"];

export default function BlogHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IH</span>
                </div>
                <h1 className="text-xl font-bold text-gray-900">InfoHub</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Categories</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">About</a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</a>
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center space-x-4">
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10 w-64 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                Subscribe
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Categories</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">About</a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900 font-medium">Contact</a>
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trending Topics Bar */}
        <div className="py-4 border-b border-gray-100">
          <div className="flex items-center space-x-4 overflow-x-auto">
            <div className="flex items-center space-x-2 text-sm text-gray-600 whitespace-nowrap">
              <TrendingUp className="w-4 h-4" />
              <span className="font-medium">Trending:</span>
            </div>
            <div className="flex space-x-3">
              {trendingTopics.map((topic) => (
                <Badge key={topic} variant="secondary" className="whitespace-nowrap cursor-pointer hover:bg-gray-200 transition-colors">
                  {topic}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section - Featured Content */}
        <section className="py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Featured Post */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group border-0 shadow-sm">
                <div className="relative overflow-hidden">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-6 left-6">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-600 text-white border-0">
                        {featuredPost.category}
                      </Badge>
                      {featuredPost.trending && (
                        <Badge className="bg-orange-500 text-white border-0">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          Trending
                        </Badge>
                      )}
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                      {featuredPost.title}
                    </h2>
                    <p className="text-gray-200 mb-4 text-lg leading-relaxed line-clamp-2">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4" />
                        </div>
                        <span>{featuredPost.author}</span>
                      </div>
                      <span>•</span>
                      <span>{featuredPost.date}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Secondary Featured Posts */}
            <div className="space-y-6">
              {secondaryFeatured.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-md transition-all duration-300 cursor-pointer group border-0 shadow-sm">
                  <div className="flex">
                    <div className="w-32 h-24 flex-shrink-0">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="flex-1 p-4">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {post.category}
                      </Badge>
                      <h3 className="font-semibold text-sm mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <span>{post.author}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 border-t border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Latest Articles</h2>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>{filteredPosts.length} articles</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-200 ${
                  selectedCategory === category 
                    ? "bg-blue-600 text-white border-blue-600" 
                    : "border-gray-300 text-gray-700 hover:border-gray-400"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Articles Grid */}
        <section className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group border-0 shadow-sm">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {post.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="w-8 h-8 p-0 bg-white/90 hover:bg-white">
                        <Share2 className="w-4 h-4" />
                      </Button>
                    </div>
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
        <div className="text-center pb-16">
          <Button size="lg" variant="outline" className="border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50">
            Load More Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">IH</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">InfoHub</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 max-w-md">
                Your trusted source for insightful articles on lifestyle, business, health, travel, and everything that matters in today's world.
              </p>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="max-w-xs border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Business & Career</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Health & Wellness</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Travel & Culture</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Lifestyle & Food</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Finance & Education</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Write for Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">© 2024 InfoHub. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}