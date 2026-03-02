"use client";

import Image from "next/image";
import Link from "next/link";
import { getCategoryColor } from "@/lib/getCategoryColor";
import {createSlug} from "@/lib/helper";
import { getCategoryHoverText, getCategoryText } from "@/lib/getCategoryColor";

export function CategoryBlogsSection({ title, blogs }) {
  if (!blogs?.length) return null;

  return (
    <div>
      {/* 🔹 CATEGORY HEADER */}
      <div className="mb-6 flex items-center justify-between border-b border-border pb-2">
        <h2 className="text-sm font-bold uppercase tracking-wide">
          {title}
        </h2>
        <Link href={`/${createSlug(title)}`} className="text-xl text-muted-foreground">›</Link>
      </div>

      {/* 🔹 BLOG LIST (NO GRID HERE) */}
      <div className="space-y-6">
        {blogs.map((post, index) => (
          <Link
            href={`/blog/${post?.Slug}`}
            key={index}
            className="group flex cursor-pointer gap-4 overflow-hidden rounded-2xl border transition-all hover:-translate-y-[1px] hover:border-accent/80"
          >
            {/* IMAGE – LEFT SIDE (UNCHANGED) */}
            <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden lg:h-[8rem] lg:w-32">
              <Image
                src={post?.HeroImg?.url || post.image}
                alt={post?.HeroAltText || post.Title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-tl-2xl rounded-bl-2xl"
              />
            </div>

            {/* CONTENT – RIGHT SIDE */}
            <div className="flex flex-1 flex-col justify-center p-4">
              <span
                className={`mb-1.5 inline-block w-fit rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(post.Category)}`}
              >
                {post.Category}
              </span>

              <h3 className={`text-sm font-bold leading-snug text-foreground transition-colors line-clamp-1 ${getCategoryHoverText(post.Category)} `}>
                {post.Title}
              </h3>

              <p className="flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-1 max-h-6">
                {post.MetaDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <Link href={`/${createSlug(title)}`} className="block mt-4 text-sm font-medium text-muted-foreground transition-colors text-right hover:text-accent hover:underline">View more</Link>
    </div>
  );
}