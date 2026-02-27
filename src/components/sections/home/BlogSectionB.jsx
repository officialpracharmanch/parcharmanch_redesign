import Image from "next/image"
import { Clock, ArrowRight } from "lucide-react"
import { useBlogs } from "@/contexts/BlogContext"
import { getCategoryColor } from "@/lib/getCategoryColor"
import Link from "next/link"
export function BlogSectionB({ title, subtitle }) {
  const { getBlogsByCategory } = useBlogs()
  const blogs = getBlogsByCategory("REAL ESTATE") || []

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-8">
        <SectionHeader title={title} subtitle={subtitle} />

        {/* APPLIED GRID CARD DESIGN */}
        <div className="grid gap-6 md:grid-cols-2">
          {blogs?.slice(0,4).map((post,i) => (
            <Link href={`/blog/${post?.Slug}`}
              key={i}
              className="group flex cursor-pointer gap-4 overflow-hidden border transition-all hover:border-accent/80  hover:translate-x-[1px] rounded-2xl"
            >
              <div className="relative aspect-square w-32 flex-shrink-0 overflow-hidden lg:w-40">
                <Image
                  src={post?.HeroImg?.url}
                  alt={post?.HeroAltText}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col justify-center p-4">
                <span
                  className={`mb-2 inline-block w-fit rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(post.Category)}`}
                >
                  {post.Category}
                </span>
                <h3 className="mb-1.5 text-base font-bold leading-snug text-card-foreground transition-colors group-hover:text-accent text-balance">
                  {post.Title}
                </h3>
                <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {post.MetaDescription}
                </p>
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-center justify-between gap-4 text-xs text-muted-foreground">
                  <span>Feb 16, 2026</span>
                  {1===1 && (
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      4 min read
                    </span>
                  )}
                </div> */}
                  <ArrowRight className="h-3.5 w-3.5 text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────── Section Header ───────────── */
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

      <button className="hidden md:flex items-center gap-1.5 text-xs font-bold uppercase text-accent">
        View All
        <ArrowRight className="h-3 w-3" />
      </button>
    </div>
  )
}



























// import Image from "next/image"
// import { Clock, ArrowRight } from "lucide-react"
// import { useBlogs } from "@/contexts/BlogContext";
// import { getCategoryColor } from "@/lib/getCategoryColor";


// /* ──────────────────────────────────────────────
//    LAYOUT B – Big image left | stacked list right
//    ────────────────────────────────────────────── */
// export function BlogSectionB({ title, subtitle, posts }) {
//     const {getBlogsByCategory}=useBlogs();
//     const blogs = getBlogsByCategory("Digital Marketing");

//   return (
//    <section className="bg-white">
//       <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
//         <SectionHeader title={title} subtitle={subtitle} />

//         <div className="grid gap-8 md:grid-cols-2">
//           {blogs?.slice(0,4)?.map((post,index) => (
//             <article
//               key={index}
//               className="group flex cursor-pointer gap-4 overflow-hidden border border-border bg-card p-4 transition-all hover:border-accent/30 hover:shadow-xl hover:-translate-y-2"
//             >
//               <div className="relative aspect-square w-56 flex-shrink-0 overflow-hidden lg:w-64">
//                 <Image
//                   src={post?.HeroImg?.url}
//                   alt={post?.HeroAltText}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>
//               <div className="flex flex-1 flex-col justify-center">
//                 <span
//                   className={`mb-2 inline-block w-fit rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(post.Category)}`}
//                 >
//                   {post.Category}
//                 </span>
//                 <h3 className="mb-1.5 text-base font-bold leading-snug text-card-foreground transition-colors group-hover:text-accent text-balance">
//                   {post.Title}
//                 </h3>
//                 <p className="mb-3 text-sm leading-relaxed text-muted-foreground line-clamp-4">
//                   {post.MetaDescription}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center justify-between text-xs text-muted-foreground">
//                   <span>Feb 16, 2026</span>
//                   {1===1 && (
//                     <span className="flex items-center gap-1">
//                       <Clock className="h-3 w-3" />
//                       4 min read
//                     </span>
//                   )}
//                 </div>
//                   <ArrowRight className="h-3.5 w-3.5 text-accent opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
//                 </div>
//               </div>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
// /* ──────────────── Section Header ──────────────── */
// function SectionHeader({ title, subtitle }) {
//   return (
//     <div className="mb-8 flex items-end justify-between">
//       <div>
//         <div className="mb-1.5 flex items-center gap-2">
//           <div className="h-5 w-1 bg-accent" />
//           <h2 className="font-serif text-2xl font-bold md:text-3xl">
//             {title}
//           </h2>
//         </div>
//         <p className="text-sm text-muted-foreground">{subtitle}</p>
//       </div>
//       <button className="hidden md:flex items-center gap-1.5 text-xs font-bold text-accent uppercase">
//         View All
//         <ArrowRight className="h-3 w-3" />
//       </button>
//     </div>
//   )
// }

