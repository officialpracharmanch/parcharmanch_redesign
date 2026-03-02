"use client";

import Image from "next/image";
import Link from "next/link";
import { useBlogs } from "@/contexts/BlogContext";
import { getCategoryHoverText, getCategoryText,getCategoryColor } from "@/lib/getCategoryColor";

// import { categoryText } from "@/lib/getCategoryColor";

export default function Blogs() {
  const {
    blogs,
    loading,
    error,
    page,
    setPage,
    totalPages,
  } = useBlogs();

 
  const handleLoadMore = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <section className="bg-accent-foreground py-14">
      <div className="mx-auto max-w-7xl px-4 md:px-8">

        {/* Loading (first page) */}
        {loading && page === 1 && (
          <p className="text-center text-gray-500">Loading blogs...</p>
        )}

        {/* Error */}
        {error && (
          <p className="text-center text-red-500">{error}</p>
        )}

        {/* Blogs Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 space-y-6  items-start">
          {blogs.map((blog) => (
            <Link
              key={blog._id}
              href={`/blog/${blog.slug}`}
              className="group rounded-tl-2xl rounded-tr-2xl overflow-hidden bg-white border hover:shadow-lg transition group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={blog?.HeroImg?.url}
                  alt={blog?.HeroAltText || blog.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <span className={`text-xs font-semibold tracking-wider  uppercase ${getCategoryText(blog.Category)}`}>
                  {blog.Category}
                </span>

                <h3 className={`mt-2 text-lg font-semibold  leading-snug line-clamp-3 ${getCategoryHoverText(blog.Category)} `}>
                  {blog.Title}
                </h3>
              </div>

              {/* Bottom red line */}
              <div className={`h-[2px] ${getCategoryColor(blog.Category)} scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
            </Link>
          ))}
        </div>

        {/* Load More */}
        {page < totalPages && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={handleLoadMore}
              disabled={loading}
              className="rounded-full border border-black px-8 py-2 text-sm font-semibold text-black hover:bg-black hover:text-white transition disabled:opacity-50"
            >
              {loading ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}