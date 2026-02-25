'use client'

import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BlogPost } from "@/data/categories"
import { ChevronRight } from "lucide-react"

export function LatestBlogsSidebar({ blogs }) {
  return (
    <div className="sticky top-24 space-y-6">
      {/* Latest Posts Card */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-primary to-primary/80 p-4">
          <h2 className="font-playfair text-lg font-bold text-primary-foreground">
            Latest Articles
          </h2>
          <p className="text-xs text-primary-foreground/70 mt-1">
            Stay updated with new stories
          </p>
        </div>

        <div className="divide-y">
          {blogs.map((blog, index) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.id}`}
              className="block p-3 hover:bg-accent/50 transition-colors"
            >
              <div className="flex gap-3">
                {/* Thumbnail */}
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold line-clamp-2 text-foreground hover:text-primary transition-colors">
                    {blog.title}
                  </p>
                  <div className="flex items-center gap-1.5 mt-1">
                    <Badge variant="outline" className="text-xs">
                      {blog.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {blog.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Separator />
        <Link
          href="/blog"
          className="block p-3 text-center text-sm font-semibold text-primary hover:bg-accent/50 transition-colors flex items-center justify-center gap-2 group"
        >
          View All Articles
          <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </Card>

      {/* Newsletter Signup Card */}
      <Card className="overflow-hidden">
        <div className="bg-gradient-to-r from-accent to-accent/80 p-4 text-accent-foreground">
          <h3 className="font-semibold text-sm">Never miss an update</h3>
          <p className="text-xs opacity-90 mt-1">
            Get the best stories delivered to your inbox
          </p>
        </div>

        <div className="p-4 space-y-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 rounded border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button className="w-full px-3 py-2 rounded bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors">
            Subscribe
          </button>
          <p className="text-xs text-muted-foreground text-center">
            No spam, unsubscribe anytime
          </p>
        </div>
      </Card>

      {/* About Section */}
      <Card className="p-4 space-y-3">
        <h3 className="font-semibold text-sm">About ParcharManch</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          ParcharManch is a platform for curious minds to explore ideas, stories, and insights across technology, business, lifestyle, and education.
        </p>
        <div className="flex gap-2 pt-2">
          <Link href="#" className="text-xs text-primary hover:underline">
            About
          </Link>
          <span className="text-xs text-muted-foreground">•</span>
          <Link href="#" className="text-xs text-primary hover:underline">
            Contact
          </Link>
          <span className="text-xs text-muted-foreground">•</span>
          <Link href="#" className="text-xs text-primary hover:underline">
            Privacy
          </Link>
        </div>
      </Card>
    </div>
  )
}
