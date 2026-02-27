import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { useBlogs } from "@/contexts/BlogContext";
import { getCategoryColor } from "@/lib/getCategoryColor";
import Link from "next/link"

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
   LAYOUT D – Big image left | stacked list right
   ────────────────────────────────────────────── */
export function BlogSectionD({ title, subtitle, posts = [] }) {
    const {getBlogsByCategory}=useBlogs();
    const blogs = getBlogsByCategory("POLITICS");

  const main = blogs?.slice(0,2)
  const rest = blogs.slice(2,5)

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-8">
        <SectionHeader title={title} subtitle={subtitle} />

        {/* Top row: 2-col grid */}
        <div className="mb-6 grid gap-8 md:grid-cols-2">
          {main.map((post,index) => (
            <Link href={`/blog/${post?.Slug}`}
              key={index}
              className="group cursor-pointer overflow-hidden border-[0.1px] rounded-2xl transition-all hover:border-accent/80 hover:-translate-y-[1px]"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                   src={post?.HeroImg?.url || main.image}
                  alt={post?.HeroAltText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-0 top-3 rounded-r px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(post.Category)}`}
                >
                  {post.Category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Feb 16, 2026</span>
                    {1===1 && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        4 min read
                      </span>
                    )}
                  </div>
                <h3 className="mb-2 text-sm font-bold leading-snug text-card-foreground transition-colors group-hover:text-accent line-clamp-2">
                  {post.Title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {post.MetaDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom 3-col grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {rest.map((post,index) => (
            <Link href={`/blog/${post?.Slug}`}
              key={index}
              className="group cursor-pointer overflow-hidden border border-border bg-card transition-all hover:border-accent/80 hover:-translate-y-[1px] rounded-2xl "
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                   src={post?.HeroImg?.url || main.image}
                  alt={post?.HeroAltText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span
                  className={`absolute left-0 top-3 rounded-r px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(post?.Category)}`}
                >
                  {post.Category}
                </span>
              </div>
              <div className="p-4">
               <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>Feb 16, 2026</span>
                    {1===1 && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        4 min read
                      </span>
                    )}
                  </div>
                <h3 className="mb-2 text-sm font-bold leading-snug text-card-foreground transition-colors group-hover:text-accent line-clamp-2">
                  {post.Title}
                </h3>
                <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {post.MetaDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   LAYOUT B – 2x2 grid
   ────────────────────────────────────────────── */
// export function BlogSectionB({ title, subtitle, posts = [] }) {
//   return (
//     <section className="bg-background">
//       <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
//         <SectionHeader title={title} subtitle={subtitle} />

//         <div className="grid gap-6 md:grid-cols-2">
//           {posts.map((post) => (
//             <article
//               key={post.title}
//               className="group flex cursor-pointer gap-4 border border-border bg-card p-4 hover:border-accent/30 hover:shadow-lg"
//             >
//               <div className="relative aspect-square w-32 overflow-hidden lg:w-40">
//                 <Image
//                   src={post.image}
//                   alt={post.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               <div className="flex-1">
//                 <span className={`mb-2 inline-block rounded px-2 py-0.5 text-[10px] font-bold uppercase ${getColor(post.category)}`}>
//                   {post.category}
//                 </span>

//                 <h3 className="mb-1.5 text-base font-bold group-hover:text-accent">
//                   {post.title}
//                 </h3>

//                 <p className="mb-3 text-sm text-muted-foreground line-clamp-2">
//                   {post.description}
//                 </p>

//                 <div className="flex items-center justify-between text-xs text-muted-foreground">
//                   <span>{post.date}</span>
//                   {post.readTime && (
//                     <span className="flex items-center gap-1">
//                       <Clock className="h-3 w-3" />
//                       {post.readTime}
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

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