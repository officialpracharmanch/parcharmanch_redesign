import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { useBlogs } from "@/contexts/BlogContext";
import { getCategoryColor } from "@/lib/getCategoryColor";


// const categoryColors = {
//   AI: "bg-blue-600 text-blue-50",
//   Business: "bg-indigo-600 text-indigo-50",
//   Travel: "bg-sky-600 text-sky-50",
//   Lifestyle: "bg-pink-600 text-pink-50",
//   Technology: "bg-cyan-600 text-cyan-50",
// }

// function getColor(category) {
//   return categoryColors[category] || "bg-accent text-accent-foreground"
// }

export function EditorsPicks({ picks }) {
    const {getBlogsByCategory}=useBlogs();
    const blogs = getBlogsByCategory("Digital Marketing");
  return (
    <section className="border-y border-border bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="mb-1.5 flex items-center gap-2">
              <div className="h-5 w-1 bg-accent" />
              <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                {"Editor's Picks"}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground">
              Hand-picked stories our editors loved this week
            </p>
          </div>
          <button className="hidden items-center gap-1.5 text-xs font-bold text-accent uppercase tracking-wider transition-colors hover:text-accent/80 md:flex">
            View All
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {blogs?.slice(0,4).map((pick, i) => (
            <article
              key={i}
              className="group flex cursor-pointer flex-col overflow-hidden border border-border bg-card transition-all hover:border-accent/30 hover:shadow-lg hover:scale-105"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                    src={pick?.HeroImg?.url || pick.image}
                  alt={pick?.HeroAltText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute left-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent/90 text-xs font-bold text-accent-foreground">
                  {i + 1}
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-3.5">
                <div>
                  <span
                    className={`mb-1 inline-block rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(pick.Category)}`}
                  >
                    {pick.Category}
                  </span>
                  <h3 className="mb-1.5 text-xs font-bold leading-snug text-card-foreground transition-colors group-hover:text-accent line-clamp-2">
                    {pick.Title}
                  </h3>
                  <p className="mb-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {pick.MetaDescription}
                  </p>
                </div>
                <div className="space-y-1 border-t border-border/50 pt-2 text-[10px] text-muted-foreground">
                  <div className="font-medium text-foreground/70">{pick.author}</div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Feb 16, 2026</span>
                    {1===1 && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        4 min read
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
