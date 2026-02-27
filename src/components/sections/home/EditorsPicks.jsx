import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { useBlogs } from "@/contexts/BlogContext"
import { getCategoryColor } from "@/lib/getCategoryColor"
import Link from "next/link"
export function EditorsPicks() {
  const { getBlogsByCategory } = useBlogs()
  const blogs = getBlogsByCategory("FASHION & LIFESTYLE") || []

  const main = blogs[0]
  const rest = blogs.slice(1, 4)

  return (
    <section className=" bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-6 lg:py-8">

        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <div className="mb-1.5 flex items-center gap-2">
              {/* <div className="h-5 w-1 bg-accent" /> */}
              <h2 className="font-serif text-2xl font-bold md:text-3xl">
                Editor&apos;s Picks
          <hr  className="h-1 bg-accent"/>
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Stories hand-picked by our editorial team
            </p>
          </div>

          <button className="hidden md:flex items-center gap-1.5 text-xs font-bold uppercase text-accent">
            View All
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        {/* Layout */}
        <div className="grid gap-8 lg:grid-cols-3">

          {/* HERO PICK */}
          {main && (
            <Link href={`/blog/${main?.Slug}`}
             className="group relative lg:col-span-2 overflow-hidden rounded-2xl border hover:border-accent/80 cursor-pointer hover:translate-y-[1px] hover:shadow-md transition-all">
              <div className="relative h-[420px]">
                <Image
                  src={main?.HeroImg?.url || main.image}
                  alt={main?.HeroAltText || main.Title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span
                    className={`mb-3 inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(
                      main.Category
                    )}`}
                  >
                    {main.Category}
                  </span>

                  <h3 className="mb-3 font-serif text-2xl font-bold leading-tight">
                    {main.Title}
                  </h3>

                  <p className="mb-4 text-sm text-white/80 line-clamp-2">
                    {main.MetaDescription}
                  </p>

                  {/* <div className="flex items-center gap-4 text-xs text-white/70">
                    <span>Feb 16, 2026</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      4 min read
                    </span>
                  </div> */}
                </div>
              </div>
            </Link>
          )}

          {/* SIDE PICKS */}
          <div className="flex flex-col gap-6">
            {rest.map((post, i) => (
              <Link href={`/blog/${post?.Slug}`}
                key={i}
                className="group flex cursor-pointer gap-4 overflow-hidden rounded-lg border transition-all hover:-translate-y-[1px] hover:shadow-md hover:border-accent/80"
              >
                <div className="relative h-auto w-28 flex-shrink-0 overflow-hidden rounded-md">
                  <Image
                    src={post?.HeroImg?.url || post.image}
                    alt={post?.HeroAltText || post.Title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="flex flex-1 flex-col justify-between p-3">
                  <div>
                    <span
                      className={`mb-1 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(
                        post.Category
                      )}`}
                    >
                      {post.Category}
                    </span>

                    <h4 className="mb-1 text-sm font-bold leading-snug group-hover:text-accent line-clamp-2">
                      {post.Title}
                    </h4>
                  </div>

                  {/* <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Feb 16, 2026</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      4 min read
                    </span>
                  </div> */}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}