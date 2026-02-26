"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"
import { useBlogs } from "@/contexts/BlogContext"

export function CategoryPagination() {
  const { catPage, setCatPage, catTotalPages } = useBlogs()

  if (catTotalPages <= 1) return null

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const changePage = (page) => {
      scrollTop()
    setCatPage(page)
  }

  return (
    <div className="mt-14 flex justify-center">
      <Pagination>
        <PaginationContent className="gap-1">
          {/* PREV */}
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (catPage > 1) changePage(catPage - 1)
              }}
              className={catPage === 1 ? "opacity-40 pointer-events-none" : ""}
            />
          </PaginationItem>

          {/* NUMBERS */}
          {Array.from({ length: catTotalPages }).map((_, i) => {
            const page = i + 1
            return (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={page === catPage}
                  onClick={(e) => {
                    e.preventDefault()
                    changePage(page)
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            )
          })}

          {/* NEXT */}
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={(e) => {
                e.preventDefault()
                if (catPage < catTotalPages) changePage(catPage + 1)
              }}
              className={
                catPage === catTotalPages
                  ? "opacity-40 pointer-events-none"
                  : ""
              }
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}