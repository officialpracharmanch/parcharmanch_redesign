"use client"
import BlogGrid from "@/components/sections/home/BlogGrid";
import Blogs from "@/components/sections/home/Blogs";
import { BlogSectionA } from "@/components/sections/home/BlogSectionA";
import { BlogSectionB } from "@/components/sections/home/BlogSectionB";
import { BlogSectionC } from "@/components/sections/home/BlogSectionC";
import { BlogSectionD } from "@/components/sections/home/BlogSectionD";
import { CategoriesStrip } from "@/components/sections/home/CategoriesStrip";
import { EditorsPicks } from "@/components/sections/home/EditorsPicks";
import { HeroSection } from "@/components/sections/home/Hero";
import { NewsletterCta } from "@/components/sections/home/NewsletterCta";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { TopAuthors } from "@/components/sections/home/TopAuthors";
import { useBlogs } from "@/contexts/BlogContext";
export default function Home() {
  const featuredPost = {
  image: "/images/blog-ai.jpg",
  title: "The Rise of AI Agents in Software Development",
  description:
    "Explore how autonomous AI agents are transforming coding workflows and reshaping the developer experience. From automated code reviews to full-stack generation, discover what this means for the future.",
  category: "Featured",
  author: "Alex Mitchell",
  date: "Feb 18, 2026",
  readTime: "8 min read",
}

const trendingPosts = [
  {
    title: "Mastering TypeScript 6: What You Need to Know",
    category: "Programming",
    date: "Feb 15, 2026",
  },
  {
    title: "Building a Startup in the Age of AI Disruption",
    category: "Startups",
    date: "Feb 17, 2026",
  },
  {
    title: "Edge Computing: The Future of Cloud Architecture",
    category: "Technology",
    date: "Feb 10, 2026",
  },
  {
    title: "Data-Driven Marketing Strategies That Convert",
    category: "Marketing",
    date: "Feb 14, 2026",
  },
  {
    title: "Morning Routines of Highly Productive People",
    category: "Health",
    date: "Feb 16, 2026",
  },
]

const technologyPosts = [
  {
    image: "/images/blog-programming.jpg",
    title: "Mastering TypeScript 6: What You Need to Know",
    description:
      "A comprehensive guide to the latest TypeScript features that will level up your development skills.",
    category: "Programming",
    date: "Feb 15, 2026",
    readTime: "6 min read",
  },
  {
    image: "/images/blog-gadgets.jpg",
    title: "Top 10 Gadgets Redefining Productivity in 2026",
    description:
      "From smart glasses to foldable displays, these gadgets are changing how we work and create.",
    category: "Gadgets",
    date: "Feb 12, 2026",
    readTime: "5 min read",
  },
  {
    image: "/images/blog-cloud.jpg",
    title: "Edge Computing: The Future of Cloud Architecture",
    description:
      "How edge computing is reducing latency and enabling real-time processing for modern applications.",
    category: "Technology",
    date: "Feb 10, 2026",
    readTime: "7 min read",
  },
  {
    image: "/images/blog-ai.jpg",
    title: "How GPT-5 Is Changing Enterprise Software",
    description:
      "Enterprise adoption of GPT-5 is accelerating. Here is what CTO and engineering leaders need to know.",
    category: "AI",
    date: "Feb 8, 2026",
    readTime: "9 min read",
  },
  {
    image: "/images/blog-cloud.jpg",
    title: "Edge Computing: The Future of Cloud Architecture",
    description:
      "How edge computing is reducing latency and enabling real-time processing for modern applications.",
    category: "Technology",
    date: "Feb 10, 2026",
    readTime: "7 min read",
  },
]

const businessPosts = [
  {
    image: "/images/blog-startup.jpg",
    title: "Building a Startup in the Age of AI Disruption",
    description:
      "Key strategies for founders navigating the rapidly changing landscape of AI-powered innovation.",
    category: "Startups",
    date: "Feb 17, 2026",
    readTime: "7 min read",
  },
  {
    image: "/images/blog-marketing.jpg",
    title: "Data-Driven Marketing Strategies That Convert",
    description:
      "Learn how top brands use analytics and personalization to drive engagement and revenue growth.",
    category: "Marketing",
    date: "Feb 14, 2026",
    readTime: "6 min read",
  },
  {
    image: "/images/blog-finance.jpg",
    title: "Decoding Fintech: Trends Shaping the Future of Money",
    description:
      "From embedded finance to digital currencies, explore the innovations transforming financial services.",
    category: "Finance",
    date: "Feb 11, 2026",
    readTime: "8 min read",
  },
  {
    image: "/images/blog-leadership.jpg",
    title: "The Art of Remote Leadership in a Hybrid World",
    description:
      "Practical tips for leading distributed teams with clarity, empathy, and high performance.",
    category: "Business",
    date: "Feb 9, 2026",
    readTime: "5 min read",
  },
]

const lifestylePosts = [
  {
    image: "/images/blog-health.jpg",
    title: "Morning Routines of Highly Productive People",
    description:
      "Science-backed habits that help you start each day with energy, focus, and intention.",
    category: "Health",
    date: "Feb 16, 2026",
    readTime: "4 min read",
  },
  {
    image: "/images/blog-travel.jpg",
    title: "Hidden Gems: Underrated Travel Destinations for 2026",
    description:
      "Skip the tourist traps and discover breathtaking places that are still off the beaten path.",
    category: "Travel",
    date: "Feb 13, 2026",
    readTime: "6 min read",
  },
  {
    image: "/images/blog-productivity.jpg",
    title: "Digital Minimalism: Reclaiming Focus in a Noisy World",
    description:
      "Practical strategies for cutting digital clutter and building intentional technology habits.",
    category: "Productivity",
    date: "Feb 10, 2026",
    readTime: "5 min read",
  },
  {
    image: "/images/blog-mindfulness.jpg",
    title: "The Power of Mindful Living for Creative Professionals",
    description:
      "How mindfulness and meditation can unlock deeper creativity and sustained well-being.",
    category: "Lifestyle",
    date: "Feb 8, 2026",
    readTime: "4 min read",
  },
]

const educationPosts = [
  {
    image: "/images/blog-online-learning.jpg",
    title: "The Future of Online Learning Platforms in 2026",
    description:
      "How AI-powered personalization and interactive tools are transforming the way we learn online.",
    category: "Education",
    date: "Feb 19, 2026",
    readTime: "7 min read",
  },
  {
    image: "/images/blog-career.jpg",
    title: "5 In-Demand Skills Every Professional Needs This Year",
    description:
      "From prompt engineering to data literacy, these are the skills employers want the most right now.",
    category: "Career",
    date: "Feb 16, 2026",
    readTime: "5 min read",
  },
  {
    image: "/images/blog-skills.jpg",
    title: "How to Build a Learning Habit That Actually Sticks",
    description:
      "Research-backed techniques for creating consistent study routines and retaining what you learn.",
    category: "Learning",
    date: "Feb 12, 2026",
    readTime: "6 min read",
  },
  {
    image: "/images/blog-books.jpg",
    title: "10 Must-Read Books for Self-Improvement in 2026",
    description:
      "A curated list of the best books to sharpen your mind, grow your career, and improve your life.",
    category: "Tutorials",
    date: "Feb 9, 2026",
    readTime: "4 min read",
  },
]

const editorsPicksData = [
  {
    image: "/images/blog-ai.jpg",
    title: "Why AI Literacy Is the New Superpower for Every Career",
    description:
      "Understanding AI fundamentals is no longer optional. Here is how it is reshaping every industry.",
    category: "AI",
    author: "Alex Mitchell",
    date: "Feb 20, 2026",
    readTime: "6 min read",
  },
  {
    image: "/images/blog-startup.jpg",
    title: "From Zero to IPO: Lessons from India's Fastest Startups",
    description:
      "What the latest wave of Indian unicorns can teach us about resilience and product-market fit.",
    category: "Business",
    author: "Priya Sharma",
    date: "Feb 18, 2026",
    readTime: "8 min read",
  },
  {
    image: "/images/blog-travel.jpg",
    title: "Slow Travel: Why Taking Your Time Changes Everything",
    description:
      "The art of immersing yourself in a destination and the surprising benefits for mental health.",
    category: "Travel",
    author: "Rohan Verma",
    date: "Feb 15, 2026",
    readTime: "5 min read",
  },
  {
    image: "/images/blog-cloud.jpg",
    title: "How Quantum Computing Will Impact Cloud Security",
    description:
      "The coming quantum revolution will break existing encryption. What are the solutions being built today?",
    category: "Technology",
    author: "Sneha Patel",
    date: "Feb 13, 2026",
    readTime: "9 min read",
  },
]

const topAuthorsData = [
  {
    name: "Alex Mitchell",
    avatar: "/images/author-1.jpg",
    role: "Tech Editor",
    articles: 142,
  },
  {
    name: "Priya Sharma",
    avatar: "/images/author-2.jpg",
    role: "Business Writer",
    articles: 98,
  },
  {
    name: "David Chen",
    avatar: "/images/author-3.jpg",
    role: "AI Researcher",
    articles: 76,
  },
  {
    name: "Maya Kapoor",
    avatar: "/images/author-4.jpg",
    role: "Lifestyle Editor",
    articles: 115,
  },
  {
    name: "Rohan Verma",
    avatar: "/images/author-5.jpg",
    role: "Travel Writer",
    articles: 63,
  },
  {
    name: "Sneha Patel",
    avatar: "/images/author-6.jpg",
    role: "Education Lead",
    articles: 89,
  },
]
   const { blogs, loading, error, page, setPage, totalPages, fetchBlogs } = useBlogs();

  return (
    <>
    <HeroSection featured={featuredPost} trending={trendingPosts}/>
    {/* <StatsBar/> */}
    {/* <CategoriesStrip/> */}
    {/* <BlogSectionA 
    title="Technology"
    subtitle="AI, programming, gadgets, and the future of tech"
    posts={technologyPosts}
    
    /> */}

    {/* <BlogSectionB  
     title="Business"
     subtitle="Startups, marketing, finance, and leadership insights"
      posts={businessPosts}
    
    /> */}

    {/* <EditorsPicks picks={editorsPicksData}  /> */}

    {/* <BlogSectionC 
    title="Lifestyle"
    subtitle="Health, travel, productivity, and mindful living"
    posts={lifestylePosts}
    />  */}

   {/* <NewsletterCta/> */}
    {/* <BlogSectionD  
     title="Education"
    subtitle="Online learning, career growth, tutorials, and resources"
    posts={educationPosts}
    /> */}

    {/* <TopAuthors  authors={topAuthorsData} /> */}
    <Blogs
    title="Education"
    subtitle="Online learning, career growth, tutorials, and resources"
    posts={educationPosts}
    
    />

   <BlogGrid/>

  </>
  );
}
