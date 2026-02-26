"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useBlogs } from "@/contexts/BlogContext"
import { CategoryBlogGrid } from "@/components/category/CategoryBlogGrid"
import HealthPage from "@/components/category/CategoryHeader"

export default function CategoryPage() {
  const { category } = useParams()
  const { setCategory } = useBlogs()

  useEffect(() => {
    if (category) setCategory("Digital Marketing")
  }, [category])

  return (
    <main className="min-h-screen bg-white">
      <HealthPage />
      <section className="max-w-7xl mx-auto px-4">
        <CategoryBlogGrid />
      </section>
    </main>
  )
}