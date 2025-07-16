// Mock data for the blog system
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: Author;
  category: Category;
  tags: Tag[];
  publishedAt: string;
  readingTime: number;
  featured: boolean;
  trending: boolean;
  views: number;
  likes: number;
  published: boolean;
}

export interface Author {
  id: string;
  name: string;
  slug: string;
  bio: string;
  avatar: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  postsCount: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  postsCount: number;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  postsCount: number;
}

export const authors: Author[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    slug: 'sarah-johnson',
    bio: 'Full-stack developer passionate about modern web technologies and user experience design.',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      twitter: '@sarahj_dev',
      linkedin: 'sarah-johnson-dev',
      github: 'sarahj-dev',
      website: 'https://sarahjohnson.dev'
    },
    postsCount: 12
  },
  {
    id: '2',
    name: 'Michael Chen',
    slug: 'michael-chen',
    bio: 'Frontend architect with expertise in React, Next.js, and modern CSS frameworks.',
    avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      twitter: '@michaelchen_dev',
      linkedin: 'michael-chen-frontend',
      github: 'mchen-dev'
    },
    postsCount: 8
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    slug: 'emily-rodriguez',
    bio: 'UX designer turned developer, focusing on accessible and inclusive web experiences.',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
    social: {
      twitter: '@emily_ux_dev',
      linkedin: 'emily-rodriguez-ux',
      website: 'https://emilyrodriguez.design'
    },
    postsCount: 15
  }
];

export const categories: Category[] = [
  {
    id: '1',
    name: 'Web Development',
    slug: 'web-development',
    description: 'Modern web development techniques, frameworks, and best practices.',
    color: 'bg-blue-500',
    postsCount: 25
  },
  {
    id: '2',
    name: 'JavaScript',
    slug: 'javascript',
    description: 'JavaScript fundamentals, ES6+, and modern JavaScript frameworks.',
    color: 'bg-yellow-500',
    postsCount: 18
  },
  {
    id: '3',
    name: 'React',
    slug: 'react',
    description: 'React development, hooks, state management, and ecosystem.',
    color: 'bg-cyan-500',
    postsCount: 22
  },
  {
    id: '4',
    name: 'CSS & Design',
    slug: 'css-design',
    description: 'CSS techniques, design systems, and UI/UX best practices.',
    color: 'bg-purple-500',
    postsCount: 12
  },
  {
    id: '5',
    name: 'Performance',
    slug: 'performance',
    description: 'Web performance optimization, Core Web Vitals, and speed techniques.',
    color: 'bg-green-500',
    postsCount: 8
  },
  {
    id: '6',
    name: 'Tutorial',
    slug: 'tutorial',
    description: 'Step-by-step tutorials and hands-on learning resources.',
    color: 'bg-orange-500',
    postsCount: 30
  }
];

export const tags: Tag[] = [
  { id: '1', name: 'Next.js', slug: 'nextjs', postsCount: 15 },
  { id: '2', name: 'TypeScript', slug: 'typescript', postsCount: 12 },
  { id: '3', name: 'Tailwind CSS', slug: 'tailwindcss', postsCount: 18 },
  { id: '4', name: 'React Hooks', slug: 'react-hooks', postsCount: 10 },
  { id: '5', name: 'SEO', slug: 'seo', postsCount: 8 },
  { id: '6', name: 'Performance', slug: 'performance', postsCount: 6 },
  { id: '7', name: 'Testing', slug: 'testing', postsCount: 9 },
  { id: '8', name: 'Deployment', slug: 'deployment', postsCount: 7 },
  { id: '9', name: 'API', slug: 'api', postsCount: 11 },
  { id: '10', name: 'Database', slug: 'database', postsCount: 5 }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js 14 and App Router',
    slug: 'getting-started-nextjs-14-app-router',
    excerpt: 'Learn how to build modern web applications with Next.js 14 and the new App Router. This comprehensive guide covers everything from setup to deployment.',
    content: `# Getting Started with Next.js 14 and App Router

Next.js 14 introduces powerful new features that make building React applications faster and more efficient. In this comprehensive guide, we'll explore the App Router and how it revolutionizes the way we structure our applications.

## What's New in Next.js 14

The latest version of Next.js brings several exciting features:

- **App Router**: A new paradigm for organizing your application
- **Improved Performance**: Better server-side rendering capabilities
- **Enhanced Developer Experience**: More intuitive API design
- **Better TypeScript Support**: Improved type safety throughout

## Setting Up Your First Project

Let's start by creating a new Next.js project with the App Router:

\`\`\`bash
npx create-next-app@latest my-blog --typescript --tailwind --eslint
cd my-blog
npm run dev
\`\`\`

## Understanding the App Router

The App Router introduces a new way to organize your application using the \`app\` directory. Here's how it works:

- **Layout Components**: Shared UI that persists across routes
- **Page Components**: Unique UI for each route
- **Loading States**: Built-in loading UI
- **Error Boundaries**: Graceful error handling

## Building Your First Page

Create a simple blog page:

\`\`\`tsx
// app/blog/page.tsx
export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      <p>Welcome to our blog!</p>
    </div>
  );
}
\`\`\`

## Advanced Features

### Server Components

Next.js 14 makes Server Components the default, providing better performance and SEO:

\`\`\`tsx
// This component runs on the server
export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

### Dynamic Routes

Create dynamic routes for blog posts:

\`\`\`tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <div>Post: {params.slug}</div>;
}
\`\`\`

## Conclusion

Next.js 14 with App Router provides a powerful foundation for building modern web applications. The new routing system, combined with Server Components and improved performance, makes it an excellent choice for any project.

Start experimenting with these features today and see how they can improve your development workflow!`,
    coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: authors[0],
    category: categories[0],
    tags: [tags[0], tags[1], tags[2]],
    publishedAt: '2024-01-15T10:00:00Z',
    readingTime: 8,
    featured: true,
    trending: true,
    views: 2547,
    likes: 189,
    published: true
  },
  {
    id: '2',
    title: 'Mastering React Hooks: A Complete Guide',
    slug: 'mastering-react-hooks-complete-guide',
    excerpt: 'Dive deep into React Hooks and learn how to use them effectively in your applications. From useState to custom hooks, this guide covers it all.',
    content: `# Mastering React Hooks: A Complete Guide

React Hooks have revolutionized how we write React components. They allow us to use state and other React features in functional components, making our code more concise and reusable.

## Understanding the Basics

### useState Hook

The most commonly used hook for managing component state:

\`\`\`tsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

### useEffect Hook

For side effects and lifecycle-like behavior:

\`\`\`tsx
import { useEffect, useState } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
      setLoading(false);
    }
    
    fetchData();
  }, []); // Empty dependency array means this runs once
  
  if (loading) return <div>Loading...</div>;
  
  return <div>{JSON.stringify(data)}</div>;
}
\`\`\`

## Advanced Hooks

### useContext

For consuming context values:

\`\`\`tsx
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function ThemedButton() {
  const theme = useContext(ThemeContext);
  
  return (
    <button className={theme.buttonClass}>
      Themed Button
    </button>
  );
}
\`\`\`

### useReducer

For complex state logic:

\`\`\`tsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
    </div>
  );
}
\`\`\`

## Custom Hooks

Create reusable stateful logic:

\`\`\`tsx
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
function App() {
  const [name, setName] = useLocalStorage('name', 'Anonymous');
  
  return (
    <input
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
\`\`\`

## Best Practices

1. **Keep hooks at the top level** - Don't call hooks inside loops, conditions, or nested functions
2. **Use dependency arrays correctly** - Include all dependencies in useEffect
3. **Extract custom hooks** - Reuse stateful logic across components
4. **Use useCallback and useMemo** - Optimize performance when needed

## Conclusion

React Hooks provide a powerful way to manage state and side effects in functional components. By mastering these patterns, you'll write more maintainable and reusable React code.`,
    coverImage: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: authors[1],
    category: categories[2],
    tags: [tags[3], tags[1], tags[6]],
    publishedAt: '2024-01-12T14:30:00Z',
    readingTime: 12,
    featured: false,
    trending: true,
    views: 1834,
    likes: 142,
    published: true
  },
  {
    id: '3',
    title: 'Building Responsive Layouts with Tailwind CSS',
    slug: 'building-responsive-layouts-tailwind-css',
    excerpt: 'Learn how to create beautiful, responsive layouts using Tailwind CSS. This guide covers grid systems, flexbox, and mobile-first design principles.',
    content: `# Building Responsive Layouts with Tailwind CSS

Tailwind CSS makes it incredibly easy to build responsive layouts with its utility-first approach. In this guide, we'll explore how to create layouts that work perfectly across all device sizes.

## Mobile-First Approach

Tailwind CSS follows a mobile-first approach, meaning styles are applied to mobile devices first, then enhanced for larger screens:

\`\`\`html
<!-- This div is full width on mobile, half width on medium screens and up -->
<div class="w-full md:w-1/2">
  Content here
</div>
\`\`\`

## Responsive Breakpoints

Tailwind provides five default breakpoints:

- **sm**: 640px and up
- **md**: 768px and up
- **lg**: 1024px and up
- **xl**: 1280px and up
- **2xl**: 1536px and up

## Flexbox Layouts

### Basic Flex Container

\`\`\`html
<div class="flex flex-col md:flex-row gap-4">
  <div class="flex-1">Content 1</div>
  <div class="flex-1">Content 2</div>
  <div class="flex-1">Content 3</div>
</div>
\`\`\`

### Responsive Navigation

\`\`\`html
<nav class="flex flex-col md:flex-row items-center justify-between p-4">
  <div class="mb-4 md:mb-0">
    <img src="/logo.svg" alt="Logo" class="h-8">
  </div>
  <div class="flex flex-col md:flex-row gap-4">
    <a href="#" class="hover:text-blue-500">Home</a>
    <a href="#" class="hover:text-blue-500">About</a>
    <a href="#" class="hover:text-blue-500">Contact</a>
  </div>
</nav>
\`\`\`

## Grid Layouts

### Responsive Grid

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg shadow">Card 1</div>
  <div class="bg-white p-6 rounded-lg shadow">Card 2</div>
  <div class="bg-white p-6 rounded-lg shadow">Card 3</div>
</div>
\`\`\`

### Complex Grid Layout

\`\`\`html
<div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
  <!-- Main content -->
  <div class="lg:col-span-3">
    <article class="bg-white p-6 rounded-lg shadow">
      <h1 class="text-3xl font-bold mb-4">Article Title</h1>
      <p>Article content...</p>
    </article>
  </div>
  
  <!-- Sidebar -->
  <div class="lg:col-span-1">
    <aside class="bg-gray-100 p-6 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">Sidebar</h2>
      <p>Sidebar content...</p>
    </aside>
  </div>
</div>
\`\`\`

## Container and Spacing

### Container Classes

\`\`\`html
<!-- Responsive container with max-width -->
<div class="container mx-auto px-4 sm:px-6 lg:px-8">
  Content with responsive padding
</div>
\`\`\`

### Responsive Spacing

\`\`\`html
<div class="p-4 sm:p-6 lg:p-8">
  <!-- Padding increases on larger screens -->
</div>

<div class="space-y-4 sm:space-y-6 lg:space-y-8">
  <!-- Vertical spacing increases on larger screens -->
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
\`\`\`

## Typography Responsiveness

\`\`\`html
<h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>

<p class="text-sm sm:text-base lg:text-lg leading-relaxed">
  Responsive paragraph text that scales with screen size.
</p>
\`\`\`

## Responsive Images

\`\`\`html
<img 
  src="/image.jpg" 
  alt="Responsive image"
  class="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg"
>
\`\`\`

## Hide/Show Elements

\`\`\`html
<!-- Hide on mobile, show on desktop -->
<div class="hidden md:block">
  Desktop only content
</div>

<!-- Show on mobile, hide on desktop -->
<div class="block md:hidden">
  Mobile only content
</div>
\`\`\`

## Best Practices

1. **Start with mobile** - Design for mobile first, then enhance
2. **Use logical breakpoints** - Choose breakpoints that make sense for your content
3. **Test on real devices** - Simulators don't always show the full picture
4. **Optimize for touch** - Ensure buttons and links are large enough for touch
5. **Consider performance** - Use responsive images and lazy loading

## Conclusion

Tailwind CSS makes responsive design straightforward with its utility classes and mobile-first approach. By mastering these techniques, you can create layouts that work beautifully across all devices.`,
    coverImage: 'https://images.pexels.com/photos/11035540/pexels-photo-11035540.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: authors[2],
    category: categories[3],
    tags: [tags[2], tags[5], tags[1]],
    publishedAt: '2024-01-10T09:15:00Z',
    readingTime: 10,
    featured: true,
    trending: false,
    views: 3241,
    likes: 267,
    published: true
  },
  {
    id: '4',
    title: 'TypeScript Best Practices for React Development',
    slug: 'typescript-best-practices-react-development',
    excerpt: 'Discover essential TypeScript patterns and best practices for building robust React applications. Learn about type safety, interfaces, and more.',
    content: `# TypeScript Best Practices for React Development

TypeScript brings type safety to JavaScript, making your React applications more robust and maintainable. Let's explore the best practices for using TypeScript in React projects.

## Setting Up TypeScript with React

### Basic tsconfig.json

\`\`\`json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
\`\`\`

## Component Props and Types

### Interface vs Type

Use interfaces for component props:

\`\`\`tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

function Button({ children, onClick, variant = 'primary', disabled = false }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'}
    >
      {children}
    </button>
  );
}
\`\`\`

### Generic Components

Create reusable components with generics:

\`\`\`tsx
interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

// Usage
const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];

<List
  items={users}
  renderItem={(user) => <span>{user.name}</span>}
/>
\`\`\`

## Hooks with TypeScript

### useState with Types

\`\`\`tsx
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // TypeScript knows user can be null
  return (
    <div>
      {user ? (
        <h1>{user.name}</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
\`\`\`

### useEffect with Dependencies

\`\`\`tsx
function DataFetcher({ userId }: { userId: number }) {
  const [data, setData] = useState<any>(null);
  
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(\`/api/users/\${userId}\`);
      const userData = await response.json();
      setData(userData);
    }
    
    fetchData();
  }, [userId]); // TypeScript ensures all dependencies are listed
  
  return <div>{data?.name}</div>;
}
\`\`\`

### Custom Hooks

\`\`\`tsx
interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

function useApi<T>(url: string): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, [url]);
  
  return { data, loading, error };
}

// Usage
function UserList() {
  const { data: users, loading, error } = useApi<User[]>('/api/users');
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <ul>
      {users?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Event Handlers

### Typing Event Handlers

\`\`\`tsx
interface FormProps {
  onSubmit: (data: { name: string; email: string }) => void;
}

function ContactForm({ onSubmit }: FormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    };
    onSubmit(data);
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        onChange={handleInputChange}
        required
      />
      <input
        name="email"
        type="email"
        onChange={handleInputChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
\`\`\`

## Advanced Patterns

### Discriminated Unions

\`\`\`tsx
type ButtonVariant = 
  | { variant: 'primary'; color?: never }
  | { variant: 'custom'; color: string };

interface ButtonProps extends ButtonVariant {
  children: React.ReactNode;
  onClick: () => void;
}

function Button({ variant, color, children, onClick }: ButtonProps) {
  const buttonColor = variant === 'primary' ? 'blue' : color;
  
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: buttonColor }}
    >
      {children}
    </button>
  );
}

// Usage
<Button variant="primary" onClick={() => {}}>Primary</Button>
<Button variant="custom" color="red" onClick={() => {}}>Custom</Button>
\`\`\`

### Conditional Props

\`\`\`tsx
type ConditionalProps<T> = T extends true
  ? { showDetails: T; details: string }
  : { showDetails?: T; details?: never };

interface BaseProps {
  title: string;
}

type CardProps<T extends boolean = false> = BaseProps & ConditionalProps<T>;

function Card<T extends boolean = false>({ title, showDetails, details }: CardProps<T>) {
  return (
    <div>
      <h2>{title}</h2>
      {showDetails && <p>{details}</p>}
    </div>
  );
}

// Usage
<Card title="Basic Card" />
<Card title="Detailed Card" showDetails={true} details="Some details" />
\`\`\`

## Best Practices

1. **Use strict mode** - Enable all strict TypeScript options
2. **Prefer interfaces for props** - Use interfaces for component props
3. **Use union types** - Instead of any, use specific union types
4. **Leverage generics** - Create reusable components with generics
5. **Type your hooks** - Always type custom hooks properly
6. **Use discriminated unions** - For complex prop combinations
7. **Avoid any** - Use unknown or specific types instead

## Conclusion

TypeScript significantly improves the React development experience by catching errors early and providing better IDE support. By following these best practices, you'll write more maintainable and robust React applications.`,
    coverImage: 'https://images.pexels.com/photos/11035439/pexels-photo-11035439.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: authors[0],
    category: categories[1],
    tags: [tags[1], tags[3], tags[6]],
    publishedAt: '2024-01-08T16:45:00Z',
    readingTime: 15,
    featured: false,
    trending: true,
    views: 1923,
    likes: 156,
    published: true
  },
  {
    id: '5',
    title: 'Web Performance Optimization Techniques',
    slug: 'web-performance-optimization-techniques',
    excerpt: 'Learn essential techniques to optimize your web applications for better performance, including lazy loading, code splitting, and Core Web Vitals.',
    content: `# Web Performance Optimization Techniques

Web performance is crucial for user experience and SEO. In this comprehensive guide, we'll explore various techniques to optimize your web applications for better performance.

## Understanding Core Web Vitals

Core Web Vitals are a set of metrics that measure user experience:

### Largest Contentful Paint (LCP)
- **Target**: < 2.5 seconds
- **What it measures**: Loading performance
- **How to improve**: Optimize images, improve server response times

### First Input Delay (FID)
- **Target**: < 100 milliseconds
- **What it measures**: Interactivity
- **How to improve**: Reduce JavaScript execution time

### Cumulative Layout Shift (CLS)
- **Target**: < 0.1
- **What it measures**: Visual stability
- **How to improve**: Set dimensions for images and ads

## Image Optimization

### Modern Image Formats

\`\`\`html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.avif" type="image/avif">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
\`\`\`

### Responsive Images

\`\`\`html
<img
  src="image-800w.jpg"
  srcset="
    image-400w.jpg 400w,
    image-800w.jpg 800w,
    image-1200w.jpg 1200w
  "
  sizes="(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px"
  alt="Responsive image"
  loading="lazy"
>
\`\`\`

### Next.js Image Component

\`\`\`tsx
import Image from 'next/image';

function OptimizedImage() {
  return (
    <Image
      src="/hero-image.jpg"
      alt="Hero image"
      width={800}
      height={600}
      priority // For above-the-fold images
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
    />
  );
}
\`\`\`

## Code Splitting and Lazy Loading

### Dynamic Imports

\`\`\`tsx
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}
\`\`\`

### Route-Based Code Splitting

\`\`\`tsx
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
\`\`\`

## Bundle Optimization

### Webpack Bundle Analyzer

\`\`\`bash
# Install bundle analyzer
npm install --save-dev webpack-bundle-analyzer

# Add to package.json scripts
"analyze": "npx webpack-bundle-analyzer build/static/js/*.js"
\`\`\`

### Tree Shaking

\`\`\`tsx
// Bad: imports entire library
import _ from 'lodash';

// Good: imports only what's needed
import { debounce } from 'lodash';

// Even better: use specific package
import debounce from 'lodash.debounce';
\`\`\`

## Caching Strategies

### HTTP Caching Headers

\`\`\`javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
\`\`\`

### Service Worker Caching

\`\`\`javascript
// sw.js
const CACHE_NAME = 'my-app-v1';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        return response || fetch(event.request);
      })
  );
});
\`\`\`

## JavaScript Optimization

### Debouncing and Throttling

\`\`\`tsx
import { useCallback, useMemo } from 'react';

function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  
  const debouncedSearch = useMemo(
    () => debounce(async (searchQuery) => {
      if (searchQuery) {
        const response = await fetch(\`/api/search?q=\${searchQuery}\`);
        const data = await response.json();
        setResults(data);
      }
    }, 300),
    []
  );
  
  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  }, [debouncedSearch]);
  
  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

### Memoization

\`\`\`tsx
import { memo, useMemo, useCallback } from 'react';

const ExpensiveComponent = memo(({ data, onUpdate }) => {
  const processedData = useMemo(() => {
    return data.map(item => ({
      ...item,
      computed: heavyComputation(item)
    }));
  }, [data]);
  
  return (
    <div>
      {processedData.map(item => (
        <div key={item.id}>{item.computed}</div>
      ))}
    </div>
  );
});

function ParentComponent() {
  const [data, setData] = useState([]);
  
  const handleUpdate = useCallback((id, newValue) => {
    setData(prev => prev.map(item => 
      item.id === id ? { ...item, value: newValue } : item
    ));
  }, []);
  
  return (
    <ExpensiveComponent
      data={data}
      onUpdate={handleUpdate}
    />
  );
}
\`\`\`

## Critical CSS

### Extracting Critical CSS

\`\`\`javascript
// Critical CSS extraction
const critical = require('critical');

critical.generate({
  inline: true,
  base: 'dist/',
  src: 'index.html',
  dest: 'index-critical.html',
  width: 1300,
  height: 900,
  minify: true
});
\`\`\`

### Inline Critical CSS

\`\`\`tsx
// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: \`
                /* Critical CSS here */
                body { margin: 0; font-family: Arial, sans-serif; }
                .header { background: #333; color: white; padding: 1rem; }
              \`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
\`\`\`

## Monitoring and Measurement

### Web Vitals Monitoring

\`\`\`tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

function sendToAnalytics(metric) {
  // Send to your analytics service
  gtag('event', metric.name, {
    event_category: 'Web Vitals',
    event_label: metric.id,
    value: Math.round(metric.value),
    non_interaction: true,
  });
}

getCLS(sendToAnalytics);
getFID(sendToAnalytics);
getFCP(sendToAnalytics);
getLCP(sendToAnalytics);
getTTFB(sendToAnalytics);
\`\`\`

### Performance Observer

\`\`\`javascript
// Monitor long tasks
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.duration > 50) {
      console.warn('Long task detected:', entry);
    }
  });
});

observer.observe({ entryTypes: ['longtask'] });
\`\`\`

## Best Practices Checklist

1. **Optimize images** - Use modern formats, responsive images, and lazy loading
2. **Minimize JavaScript** - Code splitting, tree shaking, and minification
3. **Implement caching** - HTTP caching, CDN, and service workers
4. **Critical CSS** - Inline critical CSS and defer non-critical styles
5. **Monitor performance** - Use Web Vitals and performance monitoring tools
6. **Optimize fonts** - Use font-display: swap and preload important fonts
7. **Reduce bundle size** - Analyze and optimize your bundle
8. **Use CDN** - Serve static assets from a CDN

## Conclusion

Web performance optimization is an ongoing process that requires constant monitoring and improvement. By implementing these techniques, you can significantly improve your application's performance and user experience.

Remember to measure before and after optimizations to ensure you're making meaningful improvements!`,
    coverImage: 'https://images.pexels.com/photos/11035384/pexels-photo-11035384.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: authors[1],
    category: categories[4],
    tags: [tags[5], tags[4], tags[0]],
    publishedAt: '2024-01-05T11:20:00Z',
    readingTime: 18,
    featured: false,
    trending: false,
    views: 2156,
    likes: 198,
    published: true
  }
];