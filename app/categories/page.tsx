import { Search, Filter, Grid, List, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const categories = [
  {
    name: "Business",
    count: 45,
    description: "Career advice, entrepreneurship, and business trends",
    color: "bg-blue-500",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Health",
    count: 38,
    description: "Wellness, fitness, mental health, and medical insights",
    color: "bg-green-500",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Lifestyle",
    count: 52,
    description: "Home, fashion, relationships, and personal development",
    color: "bg-purple-500",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Travel",
    count: 29,
    description: "Destinations, travel tips, and cultural experiences",
    color: "bg-orange-500",
    image: "https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Food",
    count: 34,
    description: "Recipes, restaurant reviews, and culinary trends",
    color: "bg-red-500",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Finance",
    count: 26,
    description: "Personal finance, investing, and economic insights",
    color: "bg-yellow-500",
    image: "https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Environment",
    count: 22,
    description: "Sustainability, climate change, and eco-friendly living",
    color: "bg-emerald-500",
    image: "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Education",
    count: 31,
    description: "Learning, skills development, and educational trends",
    color: "bg-indigo-500",
    image: "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    name: "Culture",
    count: 19,
    description: "Arts, entertainment, traditions, and social trends",
    color: "bg-pink-500",
    image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const trendingCategories = ["Business", "Health", "Lifestyle", "Travel"];

export default function CategoriesPage() {
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Categories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover articles across various topics that matter to you. From business insights to lifestyle tips, find content that inspires and informs.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search categories..."
              className="pl-12 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="h-12 px-6">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" className="h-12 px-4">
              <Grid className="w-4 h-4" />
            </Button>
            <Button variant="outline" className="h-12 px-4">
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Trending Categories */}
        <div className="mb-12">
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Trending Categories:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {trendingCategories.map((category) => (
                <Badge key={category} className="bg-orange-100 text-orange-800 hover:bg-orange-200 cursor-pointer transition-colors">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link key={category.name} href={`/categories/${category.name.toLowerCase()}`}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-2xl font-bold">{category.name}</h3>
                      <Badge className="bg-white/20 text-white border-0">
                        {category.count} articles
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 leading-relaxed">
                    {category.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-gray-500">{category.count} articles</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                      Explore →
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Content Statistics</h2>
            <p className="text-gray-600">Our growing library of quality content</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">356</div>
              <div className="text-gray-600">Total Articles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">9</div>
              <div className="text-gray-600">Categories</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24</div>
              <div className="text-gray-600">Expert Authors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">1.2M</div>
              <div className="text-gray-600">Monthly Readers</div>
            </div>
          </div>
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