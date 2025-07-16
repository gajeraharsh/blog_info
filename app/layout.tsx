import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TechBlog - Modern Web Development Insights',
  description: 'Discover the latest insights on React, Next.js, TypeScript, and modern web development practices.',
  keywords: ['web development', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'programming', 'tutorials'],
  authors: [{ name: 'TechBlog Team' }],
  creator: 'TechBlog',
  publisher: 'TechBlog',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://techblog.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techblog.com',
    title: 'TechBlog - Modern Web Development Insights',
    description: 'Discover the latest insights on React, Next.js, TypeScript, and modern web development practices.',
    siteName: 'TechBlog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechBlog - Modern Web Development Insights',
    description: 'Discover the latest insights on React, Next.js, TypeScript, and modern web development practices.',
    creator: '@techblog',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token_here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}