"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { getCategoryColor } from "@/lib/getCategoryColor"

const POSTS_PER_PAGE = 9

export function CategoryBlogGrid({ blogs = [] }) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE)

  const paginatedBlogs = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    return blogs.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [blogs, currentPage])

  const getPaginationItems = () => {
    const items = []
    const maxVisible = 5

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) items.push(i)
    } else {
      items.push(1)

      if (currentPage > 3) items.push("...")

      for (
        let i = Math.max(2, currentPage - 1);
        i <= Math.min(totalPages - 1, currentPage + 1);
        i++
      ) {
        items.push(i)
      }

      if (currentPage < totalPages - 2) items.push("...")

      items.push(totalPages)
    }

    return items
  }

  return (
    <div>
      {/* BLOG GRID */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {paginatedBlogs.map((post, index) => (
          <article
            key={index}
            className="group cursor-pointer overflow-hidden border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg"
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <Image
                src={post.HeroImg?.url || post.image}
                alt={post.HeroAltText || post.Title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <span
                className={`absolute left-0 top-3 rounded-r px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(
                  post.Category
                )}`}
              >
                {post.Category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-col p-5">
              <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
                <span>
                  {post.createdAt
                    ? new Date(post.createdAt).toDateString()
                    : ""}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  4 min read
                </span>
              </div>

              <h3 className="mb-2 font-serif text-base font-bold leading-snug line-clamp-2 transition-colors group-hover:text-accent">
                {post.Title}
              </h3>

              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {post.MetaDescription}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">
                  By {post.author || "Admin"}
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* PAGINATION (STATE ONLY, NO URL CHANGE) */}
      {totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <Pagination>
            <PaginationContent>
              {/* Previous */}
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage((p) => Math.max(1, p - 1))
                  }}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>

              {/* Page Numbers */}
              {getPaginationItems().map((item, index) => (
                <PaginationItem key={index}>
                  {item === "..." ? (
                    <PaginationEllipsis />
                  ) : (
                    <PaginationLink
                      href="#"
                      isActive={item === currentPage}
                      onClick={(e) => {
                        e.preventDefault()
                        setCurrentPage(item)
                      }}
                    >
                      {item}
                    </PaginationLink>
                  )}
                </PaginationItem>
              ))}

              {/* Next */}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    setCurrentPage((p) =>
                      Math.min(totalPages, p + 1)
                    )
                  }}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : ""
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      )}
    </div>
  )
}