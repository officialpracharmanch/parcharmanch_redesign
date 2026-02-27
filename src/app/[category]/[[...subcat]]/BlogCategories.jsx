// app/blogs/[category]/BlogCategories.jsx
"use client"

import { useBlogs } from "@/contexts/BlogContext"
import { CategoryBlogGrid } from "@/components/category/CategoryBlogGrid"
import { CategorySidebar } from "@/components/category/CategorySidebar"

export default function BlogCategories() {
  const {
    catBlogs,
    catLoading,
    catError,
    category,
    catPage,
    catTotalPages,
  } = useBlogs()

  /* ---------------- Loading ---------------- */
  if (catLoading) {
    return (
      <div className="min-h-screen bg-background py-12 text-center">
        <p className="text-muted-foreground">Loading blogs...</p>
      </div>
    )
  }

  /* ---------------- Error ---------------- */
  if (catError) {
    return (
      <div className="min-h-screen bg-background py-12 text-center">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{catError}</p>
      </div>
    )
  }

  /* ---------------- Empty ---------------- */
  if (!catBlogs.length) {
    return (
      <div className="min-h-screen bg-background py-12 text-center">
        <h1 className="text-2xl font-bold">No blogs found</h1>
        <p className="mt-2 text-muted-foreground">
          There are no blogs available for this category.
        </p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* LEFT: BLOG GRID */}
            <div className="lg:col-span-2">
              <CategoryBlogGrid
                blogs={catBlogs}
                category={category}
                currentPage={catPage}
                totalPages={catTotalPages}
              />
            </div>

            {/* RIGHT: SIDEBAR */}
            <div className="lg:sticky lg:top-4 lg:h-fit">
              <CategorySidebar latestPosts={catBlogs.slice(0, 5)} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}