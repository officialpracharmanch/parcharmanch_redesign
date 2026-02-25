'use client'


import { blogPosts } from "@/data/categories"
import { notFound } from "next/navigation"
import { BlogDetailContent } from "@/components/blog/BlogDetailContent"
import { LatestBlogsSidebar } from "@/components/blog/LatestBlogsSidebar"

export default function BlogPage({ params }) {
  const post = blogPosts.find(p => p.id === "3")

  if (!post) {
    notFound()
  }

  // Get latest blogs excluding current post
  const latestBlogs = blogPosts
    .filter(p => p.id !== params.id)
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-background">
      
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content - 2 columns */}
          <div className="lg:col-span-2">
            <BlogDetailContent post={post} />
          </div>
          
          {/* Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <LatestBlogsSidebar blogs={latestBlogs} />
          </div>
        </div>
      </main>

    </div>
  )
}
