import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    details: "hello@infohub.com",
    description: "Send us an email and we'll respond within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    details: "+1 (555) 123-4567",
    description: "Available Monday to Friday, 9 AM to 6 PM EST"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: "123 Content Street, New York, NY 10001",
    description: "Our office is open for scheduled meetings"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 9 AM - 6 PM EST",
    description: "We're here to help during business hours"
  }
];

const faqs = [
  {
    question: "How can I contribute to InfoHub?",
    answer: "We welcome guest contributors! Please send us your article pitch along with writing samples to our editorial team. We review all submissions and will get back to you within a week."
  },
  {
    question: "Can I republish InfoHub articles?",
    answer: "You may share excerpts with proper attribution and a link back to the original article. For full republication rights, please contact us directly."
  },
  {
    question: "How do I report an error in an article?",
    answer: "We take accuracy seriously. Please email us with the article link and details about the error. We'll investigate and make corrections promptly."
  },
  {
    question: "Do you offer advertising opportunities?",
    answer: "Yes, we offer various advertising and sponsorship opportunities. Contact our business development team for media kit and pricing information."
  }
];

export default function ContactPage() {
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
              <Link href="/contact" className="text-blue-600 font-medium">Contact</Link>
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
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Have a question, suggestion, or want to contribute? We'd love to hear from you. Reach out and let's start a conversation.
            </p>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <info.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-blue-600 font-medium mb-2">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible. We typically respond within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="What's this about?"
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      placeholder="Tell us more about your inquiry..."
                      className="border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>

                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* FAQ */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="p-6">
                      <CardContent className="p-0">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-8 p-6 bg-blue-50 border-blue-200">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Still have questions?</h3>
                    <p className="text-gray-600 mb-4">
                      Can't find what you're looking for? Our team is here to help with any questions or concerns you might have.
                    </p>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                      Contact Support
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Stay Connected
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Subscribe to our newsletter for the latest articles, insights, and updates delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white border-white text-gray-900 placeholder-gray-500"
              />
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Subscribe
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