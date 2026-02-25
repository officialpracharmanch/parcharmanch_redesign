import Image from "next/image"
import { Clock, TrendingUp } from "lucide-react"


export function CategorySidebar({ latestPosts }) {
  return (
    <div className="space-y-8">
      {/* Latest Posts */}
      <div className="overflow-hidden border border-border bg-card">
        <div className="border-b border-border bg-secondary/50 px-5 py-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
              Latest Posts
            </h3>
          </div>
        </div>

        <div className="divide-y divide-border">
          {latestPosts?.map((post,i) => (
            <div key={i} className="group p-4 transition-colors hover:bg-secondary cursor-pointer">
              <div className="mb-2 flex items-start gap-3">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
                  <Image
                     src={post?.HeroImg?.url || main.image}
                  alt={post?.HeroAltText}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-xs font-bold leading-snug text-foreground group-hover:text-accent line-clamp-2 transition-colors">
                    {post.Title}
                  </h4>
                  <div className="mt-1 flex items-center gap-2 text-[10px] text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span> 4 min read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
