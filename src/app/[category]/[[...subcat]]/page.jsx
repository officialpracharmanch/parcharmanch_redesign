"use client"

import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useBlogs } from "@/contexts/BlogContext"
import { CategoryBlogGrid } from "@/components/category/CategoryBlogGrid"
import HealthPage from "@/components/category/CategoryHeader"
import {decodeSlug} from "@/lib/helper"
export default function CategoryPage() {
  const { category, subcat } = useParams()
  const { setCategory, setSubCategory } = useBlogs()

  useEffect(() => {
    if (!category) return
const decodedCategory = decodeURIComponent(category)
const decodedSubCategory = decodeURIComponent(subcat?.[0])
    // ✅ category always set
    setCategory(decodeSlug(decodedCategory))

    // ✅ subcategory optional
    if (subcat?.length) {
      setSubCategory(decodeSlug(decodedSubCategory))
    } else {
      setSubCategory(null)
    }
  }, [category,subcat, setCategory, setSubCategory])

  return (
    <main className="min-h-screen bg-accent-foreground">
      <HealthPage />
      <section className="max-w-7xl mx-auto px-4">
        <CategoryBlogGrid />
      </section>
    </main>
  )
}