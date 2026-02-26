import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { useBlogs } from "@/contexts/BlogContext";
import { getCategoryColor } from "@/lib/getCategoryColor";
import Link from "next/link"

/* ───────────── Category color map (JSX) ───────────── */
// const categoryColors = {
//   AI: "bg-blue-600 text-blue-50",
//   Programming: "bg-emerald-600 text-emerald-50",
//   Gadgets: "bg-orange-600 text-orange-50",
//   Technology: "bg-cyan-600 text-cyan-50",
//   Startups: "bg-rose-600 text-rose-50",
//   Marketing: "bg-amber-600 text-amber-50",
//   Finance: "bg-teal-600 text-teal-50",
//   Business: "bg-indigo-600 text-indigo-50",
//   Health: "bg-green-600 text-green-50",
//   Travel: "bg-sky-600 text-sky-50",
//   Productivity: "bg-stone-600 text-stone-50",
//   Lifestyle: "bg-pink-600 text-pink-50",
//   Education: "bg-violet-600 text-violet-50",
//   Tutorials: "bg-fuchsia-600 text-fuchsia-50",
//   Career: "bg-lime-600 text-lime-50",
//   Learning: "bg-purple-600 text-purple-50",
// }

// function getColor(category) {
//   return categoryColors[category] || "bg-accent text-accent-foreground"
// }

/* ──────────────────────────────────────────────
   LAYOUT A – Big image left | stacked list right
   Used for: Technology
   ────────────────────────────────────────────── */
export function BlogSectionA({ title, subtitle, posts }) {
    const {getBlogsByCategory}=useBlogs();
    const blogs = getBlogsByCategory("Digital Marketing");
  const main = blogs?.[0]
  const rest = blogs?.slice(1,4) || []

  return (
     <section className=" bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-8">
        <SectionHeader title="HEALTH" subtitle={subtitle} />

        <div className="grid gap-6 lg:grid-cols-2">
          {/* LEFT -- large featured card */}
          {main && (
            <Link href={`/blog/${main?.Slug}`} className="group flex h-full cursor-pointer flex-col overflow-hidden border border-border rounded-2xl transition-all hover:border-accent/80 hover:-translate-y-[1px]">
              <div className="relative min-h-60 overflow-hidden">
                <Image
                src={main?.HeroImg?.url || main.image}
                  alt={main?.HeroAltText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 "
                />
                <span
                  className={`absolute left-0 top-4 rounded-r px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(main.Category)}`}
                >
                  {main.Category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                {/* <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Feb 16, 2026</span>
                  {1===1 && (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      4 min read
                    </span>
                  )}
                </div> */}
                <h3 className="mb-2 font-serif text-xl font-bold leading-tight text-foreground transition-colors group-hover:text-accent text-balance">
                  {main.Title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {main.MetaDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-accent uppercase tracking-wider">
                  Read Article
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          )}

          {/* RIGHT -- stacked horizontal cards */}
          <div className="flex flex-col rounded-2xl gap-2">
            {rest.map((post,index) => (
              <Link href={`/blog/${post?.Slug}`}
                key={index}
                className="group flex cursor-pointer border gap-4 rounded-2xl transition-all hover:-translate-y-[1px] hover:border hover:border-accent/80 overflow-hidden"
              >
                <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden lg:h-[8rem] lg:w-32">
                  <Image
                  src={post?.HeroImg?.url || main.image}
                  alt={post?.HeroAltText}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-tl-2xl rounded-bl-2xl"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-4">
                  <span
                    className={`mb-1.5 inline-block w-fit rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(main.Category)}`}
                  >
                    {post.Category}
                  </span>
                  <h3 className="text-sm font-bold leading-snug text-foreground transition-colors group-hover:text-accent line-clamp-1">
                    {post.Title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-1 max-h-6">
                  {main.MetaDescription}
                </p>
                  {/* <div className="flex items-center justify-between text-xs text-muted-foreground">
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