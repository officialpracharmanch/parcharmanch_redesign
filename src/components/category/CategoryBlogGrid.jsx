"use client"

import { useBlogs } from "@/contexts/BlogContext"
import { BlogCard } from "./BlogCard"
import { CategoryPagination } from "./CategoryPagination"
import Link from "next/link"
import Image from "next/image";
import { getCategoryHoverText, getCategoryText ,getCategoryColor} from "@/lib/getCategoryColor";


export function CategoryBlogGrid() {
  const { catBlogs, catLoading, catError,catTotalPages,catPage, setCatPage } = useBlogs();
  console.log("totalPages=>",catTotalPages);
  console.log("currentPage=>",catPage);

  const handleLoadMore = () => {
    if (catPage < catTotalPages) {
      setCatPage((prev) => prev + 1);
    }
  };

  if (catLoading && catPage === 1) return <p className="text-center py-20 h-screen">Loading...</p>
  if (catError) return <p className="text-center text-red-500">{catError}</p>
  if (!catBlogs.length) return <p className="text-center">No blogs found</p>

  return (
    <section className="bg-accent-foreground py-14">
          <div className="mx-auto max-w-7xl px-4 md:px-8">
            {/* Blogs Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 space-y-6  items-start">
              {catBlogs.map((blog,i) => (
                <Link
                  key={i}
                  href={`/blog/${blog.Slug}`}
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
            {catPage < catTotalPages && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={handleLoadMore}
                  disabled={catLoading}
                  className="rounded-full border border-black px-8 py-2 text-sm font-semibold text-black hover:bg-black hover:text-white transition disabled:opacity-50"
                >
                  {catLoading ? "Loading..." : "Load More"}
                </button>
              </div>
            )}
          </div>
        </section>
















    // <>
    //    <>
    //   <Grid cols="md:grid-cols-2" data={catBlogs.slice(0, 2)} large />
    //   <Grid cols="md:grid-cols-3" data={catBlogs.slice(2, 5)} />
    //   <Grid cols="md:grid-cols-3" data={catBlogs.slice(5, 8)} />
    //   <Grid cols="md:grid-cols-2" data={catBlogs.slice(8, 10)} />
    //   <Grid cols="md:grid-cols-3" data={catBlogs.slice(10, 13)} />
    //   <Grid cols="md:grid-cols-2 lg:grid-cols-4" data={catBlogs.slice(13, 17)} />
    //   <Grid cols="md:grid-cols-3" data={catBlogs.slice(17)} />
    // </>
    //    <div className="pb-4">
    //   <CategoryPagination />
    //   </div>
    // </>
  )
}


function Grid({ data, cols, large }) {
  if (!data.length) return null;

  return (
    <div className={`grid grid-cols-1 ${cols} gap-8 mb-16`}>
      {data.map((item) => (
        <Card key={item._id} item={item} large={large} />
      ))}
    </div>
  );
}

/* ================= CARD ================= */
function Card({ item, large }) {
  return (
    <div className="h-full">
      <Link href={`/blog/${item.Slug}`}
        className="
          group h-full rounded-2xl overflow-hidden bg-white border
          hover:border-accent/80 hover:-translate-y-[1px]
          transition cursor-pointer
          flex flex-col
        "
      >
        {/* IMAGE */}
        <img
          src={item?.HeroImg?.url}
          alt={item.Title}
          className={`w-full ${
            large ? "h-[320px]" : "h-[240px]"
          } object-cover group-hover:scale-105 transition`}
        />

        {/* CONTENT */}
        <div className="p-5 flex flex-col flex-1">
          <h3
            className={`${
              large ? "text-[22px]" : "text-[18px]"
            } font-semibold line-clamp-2`}
          >
            {item.Title}
          </h3>

          <p className="text-gray-500 text-sm mt-3 line-clamp-2 flex-1">
            {item.MetaDescription}
          </p>

         
        </div>
      </Link>
    </div>
  );
}