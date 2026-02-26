import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { useBlogs } from "@/contexts/BlogContext";
import { getCategoryColor } from "@/lib/getCategoryColor";
import Link from "next/link"

/* ──────────────────────────────────────────────
   LAYOUT C – Left list | Right tall image
   ────────────────────────────────────────────── */
export function BlogSectionC({ title, subtitle, posts = [] }) {
    const {getBlogsByCategory}=useBlogs();
    const blogs = getBlogsByCategory("Digital Marketing");

  const main = blogs[0]
  const rest = blogs?.slice(1,4)


  return (
    <section className=" bg-white ">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-8">
        <SectionHeader title="POLITICS" subtitle={subtitle} />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-5">
            {rest.map((post) => (
              <Link href={`/blog/${post?.Slug}`}
                key={post.Title}
                className="group flex border rounded-2xl hover:translate-y-[1px]  hover:border-accent/80 overflow-hidden"
              >
                <div className="relative  min-h-full w-24 overflow-hidden lg:h-28 lg:w-28">
                  <Image
                     src={main?.HeroImg?.url || main.image}
                  alt={main?.HeroAltText}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 border p-4">
                  <span className={`mb-1.5 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(post.Category)}`}>
                    {post.Category}
                  </span>
                  <h3 className="mb-1 text-sm font-bold group-hover:text-accent line-clamp-2">
                    {post.Title}
                  </h3>
                  <p className="mb-1.5 text-xs text-muted-foreground line-clamp-2">
                    {post.MetaDescription}
                  </p>
                  {/* <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Feb 16, 2026</span>
                    {1===1 && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        4 min read
                      </span>
                    )}
                  </div> */}
                </div>
              </Link>
            ))}
          </div>

          {main && (
            <div className="lg:order-2">
              <Link href={`/blog/${main?.Slug}`}
               className="group relative h-full min-h-80 cursor-pointer overflow-hidden border rounded-2xl transition-all hover:border-accent/80 hover:-translate-y-[1px] block">
                <Image
                  src={main.HeroImg?.url}
                  alt={main.HeroAltText}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span
                    className={`mb-2 inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(main.Category)}`}
                  >
                    {main.Category}
                  </span>
                  <h3 className="mb-2 font-serif text-xl font-bold leading-tight text-primary-foreground text-balance">
                    {main.Title}
                  </h3>
                  <p className="mb-3 text-sm leading-relaxed text-primary-foreground/70 line-clamp-2">
                    {main.MetaDescription}
                  </p>
                  {/* <div className="flex items-center gap-3 text-xs text-primary-foreground/50">
                    <span>Feb 16, 2026</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      4 min read
                    </span>
                  </div> */}
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ──────────────── Section Header ──────────────── */
function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8 flex items-end justify-between">
      <div>
        <div className="mb-1.5 flex items-center gap-2">
          {/* <div className="h-5 w-1 bg-accent" /> */}
          <h2 className="font-serif text-2xl font-bold md:text-3xl">
            {title}
          <hr  className="h-1 bg-accent"/>
          </h2>
        </div>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>
      <button className="hidden md:flex items-center gap-1.5 text-xs font-bold text-accent uppercase">
        View All
        <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  )
}
