'use client'

import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Heart, Share2, BookmarkIcon } from "lucide-react"
import { BlogPost } from "@/data/categories"



export function BlogDetailContent({ post }) {
  const initials = post.author
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase()

  return (
    <article className="space-y-6">
      {/* Header Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{post.date}</span>
          <span className="text-sm text-muted-foreground">•</span>
          <span className="text-sm text-muted-foreground">{post.readTime} read</span>
        </div>

        <h1 className="font-playfair text-4xl font-bold leading-tight text-balance md:text-5xl">
          {post.title}
        </h1>

        <p className="text-lg text-muted-foreground text-balance">
          {post.description}
        </p>
      </div>

      {/* Author Section */}
      <div className="flex items-center justify-between rounded-lg bg-card p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage 
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${post.author}`}
              alt={post.author}
            />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{post.author}</p>
            <p className="text-xs text-muted-foreground">Published on {post.date}</p>
          </div>
        </div>
        <Button variant="outline" size="sm">Follow</Button>
      </div>

      {/* Featured Image */}
      <div className="relative aspect-video overflow-hidden rounded-lg">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="prose prose-sm dark:prose-invert max-w-none">
        <h2>Introduction</h2>
        <p>
          {post.description} This comprehensive guide will walk you through everything you need to know about this topic, providing practical insights and actionable strategies.
        </p>

        <h2>Key Takeaways</h2>
        <ul>
          <li>Understanding the fundamentals and core concepts</li>
          <li>Practical implementation strategies and best practices</li>
          <li>Real-world examples and case studies</li>
          <li>Future trends and what's coming next</li>
          <li>Resources for continued learning</li>
        </ul>

        <h2>Deep Dive into the Topic</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <h2>Best Practices</h2>
        <p>
          When approaching this topic, consider these important practices that will help you achieve optimal results and avoid common pitfalls.
        </p>
        <ul>
          <li>Start with a clear understanding of your goals</li>
          <li>Document your process and learnings</li>
          <li>Iterate based on feedback and results</li>
          <li>Stay updated with the latest developments</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          This topic continues to evolve rapidly. By staying informed and applying these principles, you'll be well-positioned to succeed. Keep learning, experimenting, and sharing your knowledge with others.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 pt-6 border-t">
        <Button variant="outline" size="sm" className="gap-2">
          <Heart className="h-4 w-4" />
          Helpful
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <BookmarkIcon className="h-4 w-4" />
          Save
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </div>

      {/* Related Tags */}
      <div className="space-y-3 pt-4">
        <h3 className="font-semibold text-sm">Tags</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{post.subcategory}</Badge>
          <Badge variant="secondary">{post.category}</Badge>
          <Badge variant="secondary">Tutorial</Badge>
          <Badge variant="secondary">Guide</Badge>
        </div>
      </div>
    </article>
  )
}
