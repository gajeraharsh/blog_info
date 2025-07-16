import { Users, Target, Award, Heart, Mail, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const team = [
  {
    name: "Sarah Johnson",
    role: "Editor-in-Chief",
    bio: "Former journalist with 15+ years covering business and technology trends. Passionate about making complex topics accessible to everyone.",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Michael Chen",
    role: "Senior Writer",
    bio: "Business strategist turned writer, specializing in entrepreneurship, finance, and workplace culture. MBA from Wharton.",
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Dr. Lisa Martinez",
    role: "Health & Wellness Editor",
    bio: "Licensed physician and wellness advocate. Dedicated to sharing evidence-based health information and mental wellness strategies.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Emma Rodriguez",
    role: "Lifestyle Writer",
    bio: "Travel enthusiast and lifestyle blogger with expertise in sustainable living, food culture, and personal development.",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const values = [
  {
    icon: Target,
    title: "Accuracy First",
    description: "We prioritize factual, well-researched content that our readers can trust and rely on for important decisions."
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "Building a community of informed readers who engage with content that matters to their daily lives."
  },
  {
    icon: Heart,
    title: "Human-Centered",
    description: "Every article is written with real people in mind, addressing genuine needs and interests."
  },
  {
    icon: Award,
    title: "Excellence",
    description: "Maintaining high editorial standards and continuously improving our content quality and user experience."
  }
];

const stats = [
  { number: "1.2M+", label: "Monthly Readers" },
  { number: "500+", label: "Articles Published" },
  { number: "24", label: "Expert Contributors" },
  { number: "9", label: "Content Categories" }
];

export default function AboutPage() {
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
              <Link href="/about" className="text-blue-600 font-medium">About</Link>
              <Link href="/contact" className="text-gray-700 hover:text-gray-900 font-medium transition-colors">Contact</Link>
            </nav>

            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About InfoHub
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We're passionate about creating content that informs, inspires, and empowers people to make better decisions in their personal and professional lives.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  At InfoHub, we believe that access to quality information is fundamental to making informed decisions. Our mission is to bridge the gap between complex topics and everyday understanding, making valuable insights accessible to everyone.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  We cover a diverse range of topics—from business and health to lifestyle and culture—because we understand that our readers' interests are multifaceted. Our goal is to be your trusted source for reliable, engaging, and actionable content.
                </p>
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Read Our Latest Articles
                </Button>
              </div>
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Team collaboration"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These core principles guide everything we do, from content creation to community engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-xl text-gray-600">
                Numbers that reflect our commitment to quality content and community building.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our diverse team of writers, editors, and subject matter experts brings decades of combined experience to every article we publish.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                    <div className="flex space-x-3">
                      <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={member.social.twitter} className="text-gray-400 hover:text-blue-600 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Join Our Community
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Stay updated with our latest articles, insights, and exclusive content. Join thousands of readers who trust InfoHub for quality information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe to Newsletter
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
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