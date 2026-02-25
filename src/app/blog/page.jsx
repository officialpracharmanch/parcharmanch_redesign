'use client'

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Badge } from "@/components/ui/badge"
import { blogPosts } from "@/data/categories"
import { Clock, ArrowRight } from "lucide-react"

export default function BlogArchivePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-12">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <h1 className="font-playfair text-4xl font-bold md:text-5xl text-balance">
            All Articles
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            Explore our complete collection of articles across technology, business, lifestyle, and education.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <article className="group h-full flex flex-col overflow-hidden border border-border rounded-lg bg-card hover:shadow-lg hover:border-accent/30 transition-all duration-300">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-3 p-4">
                  <div className="flex items-center justify-between gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <div>
                    <h2 className="font-semibold text-sm md:text-base line-clamp-2 group-hover:text-accent transition-colors text-balance">
                      {post.title}
                    </h2>
                    <p className="mt-1.5 text-xs md:text-sm text-muted-foreground line-clamp-2">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-border/50">
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                    <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
