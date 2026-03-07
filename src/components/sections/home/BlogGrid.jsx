"use client";

import { useBlogs } from "@/contexts/BlogContext";
import { CategoryBlogsSection } from "./CategoryBlogsSection";
import { CategoryBlogSkeleton } from "@/components/skeletons/CategoryBlogSkeleton";

export default function BlogGrid() {
  const { blogs,randomBlogs,randomLoading,randomError } = useBlogs();

  const healthBlogs = blogs.filter(b => b.Category === "HEALTH");
  const politicsBlogs = blogs.filter(b => b.Category === "POLITICS");
  const realEstateBlogs = blogs.filter(b => b.Category === "REAL ESTATE");
  const lifestyleBlogs = blogs.filter(b => b.Category === "FASHION & LIFESTYLE");
  const newsBlogs = blogs.filter(b => b.Category === "NEWS");
  const otherBlogs = blogs.filter(b => b.Category === "OTHER");
  

  return (
    <section className="bg-accent-foreground px-4 py-10">
      <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-2">
       {randomLoading && (
          <>
            <CategoryBlogSkeleton />
            <CategoryBlogSkeleton />
             <CategoryBlogSkeleton />
            <CategoryBlogSkeleton /> 
            <CategoryBlogSkeleton />
            <CategoryBlogSkeleton /> 
            <CategoryBlogSkeleton />
            <CategoryBlogSkeleton />
             <CategoryBlogSkeleton />
            <CategoryBlogSkeleton />
             <CategoryBlogSkeleton />
            <CategoryBlogSkeleton />
          </>
        )}

         {randomError && (
          <p className="text-red-500">{randomError}</p>
        )}

        <CategoryBlogsSection
          title="HEALTH"
         blogs={randomBlogs?.HEALTH || []}
        />

     {!randomLoading && !randomError && (
      <>
        {/* <CategoryBlogsSection
          title="REAL ESTATE"
          blogs={realEstateBlogs}
        /> */}

         <CategoryBlogsSection
          title="FASHION & LIFESTYLE"
         blogs={randomBlogs?.["FASHION & LIFESTYLE"] || []}
        />

         {/* <CategoryBlogsSection
          title="NEWS"
          blogs={newsBlogs}
        /> */}

        {/* <CategoryBlogsSection
          title="POLITICS"
          blogs={politicsBlogs}
        /> */}

        {/* <CategoryBlogsSection
          title="OTHER"
          blogs={otherBlogs}
        /> */}
        </>
          )}
      </div>
    </section>
  );
}