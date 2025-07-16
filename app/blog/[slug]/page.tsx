import { ArrowLeft, Calendar, Clock, Eye, User, Share2, Bookmark, Heart, MessageCircle, Twitter, Facebook, Linkedin, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

const blogPost = {
  id: 1,
  title: "The Future of Remote Work: How Companies Are Adapting in 2024",
  content: `
    <p>The landscape of work has fundamentally shifted over the past few years, with remote work transitioning from a temporary pandemic response to a permanent fixture in the modern workplace. As we navigate through 2024, companies worldwide are not just adapting to remote work—they're reimagining what work itself can be.</p>

    <h2>The Evolution of Remote Work Culture</h2>
    <p>What started as an emergency measure has evolved into a sophisticated ecosystem of digital collaboration tools, flexible work arrangements, and new management philosophies. Companies that initially resisted remote work are now embracing it as a competitive advantage for talent acquisition and retention.</p>

    <p>The statistics speak volumes: according to recent studies, 42% of the U.S. workforce now works remotely full-time, while 82% work in a hybrid model. This represents a seismic shift from pre-2020 levels when only 5% of the workforce was fully remote.</p>

    <h2>Technology as the Great Enabler</h2>
    <p>The rapid advancement of collaboration technologies has been crucial to this transformation. From video conferencing platforms that now feel as natural as in-person meetings to project management tools that keep distributed teams aligned, technology has bridged the physical gap between colleagues.</p>

    <blockquote>
      "The future of work isn't about where you work—it's about how you work. Companies that understand this will thrive in the new economy." - Sarah Johnson, Workplace Innovation Expert
    </blockquote>

    <p>Artificial intelligence and automation are further enhancing remote work capabilities, with AI-powered scheduling assistants, automated workflow management, and intelligent document collaboration becoming standard tools in the remote worker's arsenal.</p>

    <h2>The Hybrid Model: Best of Both Worlds</h2>
    <p>While fully remote work has its advantages, many companies are finding success with hybrid models that combine the flexibility of remote work with the collaboration benefits of in-person interaction. This approach allows employees to choose their optimal work environment based on the task at hand.</p>

    <p>Companies like Microsoft, Google, and Apple have implemented sophisticated hybrid policies that give employees autonomy while maintaining team cohesion. These policies often include:</p>

    <ul>
      <li>Flexible core hours when all team members are available</li>
      <li>Designated collaboration days for in-person meetings</li>
      <li>Home office stipends and equipment support</li>
      <li>Mental health and wellness programs adapted for remote workers</li>
    </ul>

    <h2>Challenges and Solutions</h2>
    <p>Despite its benefits, remote work isn't without challenges. Issues like digital fatigue, isolation, and difficulty maintaining work-life boundaries have emerged as significant concerns. Progressive companies are addressing these through:</p>

    <p><strong>Digital Wellness Programs:</strong> Implementing policies around meeting-free hours, encouraging regular breaks, and providing mental health resources.</p>

    <p><strong>Virtual Team Building:</strong> Creating opportunities for informal interaction through virtual coffee chats, online team games, and digital social events.</p>

    <p><strong>Results-Oriented Management:</strong> Shifting focus from hours worked to outcomes achieved, giving employees more autonomy over their schedules.</p>

    <h2>The Global Talent Pool</h2>
    <p>One of the most significant advantages of remote work is access to global talent. Companies are no longer limited by geographic boundaries when hiring, leading to more diverse teams and access to specialized skills regardless of location.</p>

    <p>This global approach has also led to the rise of "digital nomadism," where employees work from different locations around the world. Countries like Portugal, Estonia, and Barbados have introduced digital nomad visas to attract this new class of workers.</p>

    <h2>Looking Ahead: The Future Workplace</h2>
    <p>As we look toward the future, several trends are shaping the evolution of remote work:</p>

    <p><strong>Virtual Reality Meetings:</strong> VR technology is beginning to offer more immersive collaboration experiences that could replace traditional video calls.</p>

    <p><strong>AI-Powered Productivity:</strong> Artificial intelligence will continue to automate routine tasks, allowing remote workers to focus on higher-value activities.</p>

    <p><strong>Sustainable Work Practices:</strong> Remote work's environmental benefits are driving companies to adopt more sustainable business practices overall.</p>

    <h2>Conclusion</h2>
    <p>The future of remote work is not just about working from home—it's about creating a more flexible, inclusive, and productive work environment that benefits both employees and employers. Companies that embrace this transformation and invest in the right tools, policies, and culture will be best positioned to succeed in the evolving workplace landscape.</p>

    <p>As we continue to navigate this new world of work, one thing is clear: the changes we've seen are not temporary adjustments but permanent shifts that will define how we work for generations to come.</p>
  `,
  author: "Sarah Johnson",
  authorBio: "Sarah is a workplace innovation expert and consultant who has helped over 100 companies transition to remote and hybrid work models. She holds an MBA from Stanford and has been featured in Harvard Business Review and Forbes.",
  authorImage: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
  date: "Dec 15, 2024",
  readTime: "8 min read",
  views: "24.3k",
  category: "Business",
  image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1200",
  tags: ["Remote Work", "Business", "Future of Work", "Technology", "Productivity"],
  likes: 342,
  comments: 28,
  shares: 156
};

const relatedPosts = [
  {
    id: 2,
    title: "Building Effective Remote Teams: A Manager's Guide",
    excerpt: "Essential strategies for managing distributed teams and maintaining productivity in remote work environments.",
    author: "Michael Chen",
    date: "Dec 12, 2024",
    readTime: "6 min read",
    category: "Business",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 3,
    title: "Digital Nomad Lifestyle: Working from Anywhere",
    excerpt: "How to successfully work remotely while traveling the world and maintaining professional productivity.",
    author: "Emma Rodriguez",
    date: "Dec 10, 2024",
    readTime: "7 min read",
    category: "Lifestyle",
    image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  {
    id: 4,
    title: "The Psychology of Remote Work: Mental Health Considerations",
    excerpt: "Understanding the psychological impacts of remote work and strategies for maintaining mental wellness.",
    author: "Dr. Lisa Martinez",
    date: "Dec 8, 2024",
    readTime: "9 min read",
    category: "Health",
    image: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

export default function BlogPostPage() {
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
              <Link href="/categories" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Categories</Link>
              <Link href="/about" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</Link>
            </nav>

            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Article Header */}
        <article className="mb-12">
          <div className="mb-6">
            <Badge className="mb-4 bg-blue-600 text-white">{blogPost.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {blogPost.title}
            </h1>
            
            {/* Author and Meta Info */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-4">
                <img 
                  src={blogPost.authorImage} 
                  alt={blogPost.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{blogPost.author}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{blogPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{blogPost.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{blogPost.views}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Actions */}
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span>{blogPost.likes}</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center space-x-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>{blogPost.comments}</span>
                </Button>
                <Button variant="outline" size="sm">
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="mb-8">
            <img 
              src={blogPost.image} 
              alt={blogPost.title}
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-strong:text-gray-900 prose-blockquote:border-l-blue-600 prose-blockquote:bg-blue-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-ul:text-gray-700 prose-li:text-gray-700"
            dangerouslySetInnerHTML={{ __html: blogPost.content }}
          />

          {/* Tags */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              {blogPost.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-gray-200 transition-colors">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share this article</h3>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <Link2 className="w-4 h-4" />
                <span>Copy Link</span>
              </Button>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <img 
                src={blogPost.authorImage} 
                alt={blogPost.author}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">About {blogPost.author}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{blogPost.authorBio}</p>
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group">
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
                    <div className="flex items-center space-x-1 text-xs text-gray-500">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
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