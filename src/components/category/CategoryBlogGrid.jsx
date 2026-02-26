"use client"

import { useBlogs } from "@/contexts/BlogContext"
import { BlogCard } from "./BlogCard"
import { CategoryPagination } from "./CategoryPagination"
import Link from "next/link"


export function CategoryBlogGrid() {
  const { catBlogs, catLoading, catError } = useBlogs()

  if (catLoading) return <p className="text-center py-20 h-screen">Loading...</p>
  if (catError) return <p className="text-center text-red-500">{catError}</p>
  if (!catBlogs.length) return <p className="text-center">No blogs found</p>

  return (
    <>
       <>
      <Grid cols="md:grid-cols-2" data={catBlogs.slice(0, 2)} large />
      <Grid cols="md:grid-cols-3" data={catBlogs.slice(2, 5)} />
      <Grid cols="md:grid-cols-3" data={catBlogs.slice(5, 8)} />
      <Grid cols="md:grid-cols-2" data={catBlogs.slice(8, 10)} />
      <Grid cols="md:grid-cols-3" data={catBlogs.slice(10, 13)} />
      <Grid cols="md:grid-cols-2 lg:grid-cols-4" data={catBlogs.slice(13, 17)} />
      <Grid cols="md:grid-cols-3" data={catBlogs.slice(17)} />
    </>
       <div className="pb-4">
      <CategoryPagination />
      </div>
    </>
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