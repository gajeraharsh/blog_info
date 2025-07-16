import { Metadata } from 'next';
import { BlogPost, Author, Category } from '../data/mockData';

export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  openGraph?: {
    title: string;
    description: string;
    image?: string;
    url?: string;
    type?: 'website' | 'article';
  };
  twitter?: {
    card: 'summary' | 'summary_large_image';
    title: string;
    description: string;
    image?: string;
  };
  jsonLd?: any;
}

export function generateSEO(data: SEOData): Metadata {
  const metadata: Metadata = {
    title: data.title,
    description: data.description,
    ...(data.canonical && { alternates: { canonical: data.canonical } }),
  };

  if (data.openGraph) {
    metadata.openGraph = {
      title: data.openGraph.title,
      description: data.openGraph.description,
      ...(data.openGraph.image && { images: [data.openGraph.image] }),
      ...(data.openGraph.url && { url: data.openGraph.url }),
      type: data.openGraph.type || 'website',
    };
  }

  if (data.twitter) {
    metadata.twitter = {
      card: data.twitter.card,
      title: data.twitter.title,
      description: data.twitter.description,
      ...(data.twitter.image && { images: [data.twitter.image] }),
    };
  }

  return metadata;
}

export function generateBlogPostSEO(post: BlogPost, baseUrl: string = ''): SEOData {
  const url = `${baseUrl}/blog/${post.slug}`;
  const title = `${post.title} | TechBlog`;
  const description = post.excerpt;

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      title,
      description,
      image: post.coverImage,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: post.coverImage,
    },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      author: {
        '@type': 'Person',
        name: post.author.name,
        url: `${baseUrl}/author/${post.author.slug}`,
      },
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      publisher: {
        '@type': 'Organization',
        name: 'TechBlog',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
        },
      },
      image: post.coverImage,
      url,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': url,
      },
    },
  };
}

export function generateCategorySEO(category: Category, baseUrl: string = ''): SEOData {
  const url = `${baseUrl}/category/${category.slug}`;
  const title = `${category.name} Articles | TechBlog`;
  const description = `${category.description} Browse ${category.postsCount} articles in the ${category.name} category.`;

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      title,
      description,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export function generateAuthorSEO(author: Author, baseUrl: string = ''): SEOData {
  const url = `${baseUrl}/author/${author.slug}`;
  const title = `${author.name} | TechBlog`;
  const description = `${author.bio} Read all ${author.postsCount} articles by ${author.name}.`;

  return {
    title,
    description,
    canonical: url,
    openGraph: {
      title,
      description,
      image: author.avatar,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
      image: author.avatar,
    },
  };
}