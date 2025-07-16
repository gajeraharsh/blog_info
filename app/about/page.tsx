import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, BookOpen, Award, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { generateSEO } from '@/lib/utils/seo';

export const metadata = generateSEO({
  title: 'About TechBlog | Modern Web Development Insights',
  description: 'Learn about TechBlog\'s mission to provide high-quality web development content, tutorials, and insights for modern developers.',
  canonical: '/about',
  openGraph: {
    title: 'About TechBlog | Modern Web Development Insights',
    description: 'Learn about TechBlog\'s mission to provide high-quality web development content, tutorials, and insights for modern developers.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'About TechBlog | Modern Web Development Insights',
    description: 'Learn about TechBlog\'s mission to provide high-quality web development content, tutorials, and insights for modern developers.',
  },
});

export default function AboutPage() {
  const values = [
    {
      icon: BookOpen,
      title: 'Educational Excellence',
      description: 'We believe in creating comprehensive, well-researched content that helps developers grow their skills and stay current with industry trends.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a supportive community where developers can learn, share, and grow together is at the heart of everything we do.',
    },
    {
      icon: Award,
      title: 'Quality Content',
      description: 'Every article is carefully crafted, reviewed, and tested to ensure it meets our high standards for accuracy and usefulness.',
    },
    {
      icon: Target,
      title: 'Practical Focus',
      description: 'We prioritize practical, actionable content that developers can immediately apply to their projects and daily work.',
    },
  ];

  const stats = [
    { label: 'Articles Published', value: '50+' },
    { label: 'Expert Authors', value: '10+' },
    { label: 'Monthly Readers', value: '25K+' },
    { label: 'Years of Experience', value: '5+' },
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About TechBlog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We're passionate about sharing knowledge and helping developers build better web applications. 
            Our mission is to provide high-quality, practical content that makes a real difference in your development journey.
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative h-96 rounded-lg overflow-hidden mb-16">
          <Image
            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Team working on web development"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-purple-600/80 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-3xl font-bold mb-4">
                Empowering Developers Worldwide
              </h2>
              <p className="text-xl opacity-90">
                Join thousands of developers who trust TechBlog for their learning journey
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Mission */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Our Mission
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                In the rapidly evolving world of web development, staying current with best practices, 
                new frameworks, and emerging technologies can be challenging. TechBlog exists to bridge 
                this gap by providing clear, practical, and up-to-date content that empowers developers 
                to build better applications.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                We believe that great developers are made through continuous learning, practical application, 
                and community support. Our content is designed to not just teach concepts, but to provide 
                real-world examples and actionable insights that you can immediately apply to your projects.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* What We Cover */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              What We Cover
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Our content spans the entire spectrum of modern web development
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Frontend Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• React and Next.js</li>
                  <li>• TypeScript best practices</li>
                  <li>• CSS and Tailwind CSS</li>
                  <li>• Performance optimization</li>
                  <li>• Modern JavaScript</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Development Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Build tools and bundlers</li>
                  <li>• Testing frameworks</li>
                  <li>• Development workflows</li>
                  <li>• Code quality tools</li>
                  <li>• Deployment strategies</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Code architecture</li>
                  <li>• Security considerations</li>
                  <li>• Accessibility standards</li>
                  <li>• SEO optimization</li>
                  <li>• Team collaboration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Level Up Your Development Skills?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of developers who are already learning with TechBlog
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link href="/blog">
                  Start Reading
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}