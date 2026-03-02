'use client'


import { blogPosts } from "@/data/categories"
import { notFound } from "next/navigation"
import { BlogDetailContent } from "@/components/blog/BlogDetailContent"
import { LatestBlogsSidebar } from "@/components/blog/LatestBlogsSidebar"

export default function BlogDetails({post}) {
  
    return (
    <div className="min-h-screen bg-accent-foreground">
      
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2">
            <BlogDetailContent post={post} />
          </div>
          
          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <LatestBlogsSidebar blogs={post?.latestBlogs?.slice(0, 6)} />
          </div>
        </div>
      </main>

    </div>
  )
}
