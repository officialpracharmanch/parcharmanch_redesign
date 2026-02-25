import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { useBlogs } from "@/contexts/BlogContext";
import { getCategoryColor } from "@/lib/getCategoryColor";

/* ───────────── Category color map ───────────── */
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
   LAYOUT B – Big image left | stacked list right
   ────────────────────────────────────────────── */
export function BlogSectionB({ title, subtitle, posts }) {
    const {getBlogsByCategory}=useBlogs();
    const blogs = getBlogsByCategory("Digital Marketing");

  return (
   <section className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
        <SectionHeader title={title} subtitle={subtitle} />

        <div className="grid gap-8 md:grid-cols-2">
          {blogs?.slice(0,4)?.map((post,index) => (
            <article
              key={index}
              className="group flex cursor-pointer gap-4 overflow-hidden border border-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative aspect-square w-56 flex-shrink-0 overflow-hidden lg:w-64">
                <Image
                  src={post?.HeroImg?.url}
                  alt={post?.HeroAltText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center">
                <span
                  className={`mb-2 inline-block w-fit rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(post.Category)}`}
                >
                  {post.Category}
                </span>
                <h3 className="mb-1.5 text-base font-bold leading-snug text-card-foreground transition-colors group-hover:text-accent text-balance">
                  {post.Title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-4">
                  {post.MetaDescription}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Feb 16, 2026</span>
                  {1===1 && (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      4 min read
                    </span>
                  )}
                </div>
                  <ArrowRight className="h-3.5 w-3.5 text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
              </div>
            </article>
          ))}
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
          <div className="h-5 w-1 bg-accent" />
          <h2 className="font-serif text-2xl font-bold md:text-3xl">
            {title}
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

