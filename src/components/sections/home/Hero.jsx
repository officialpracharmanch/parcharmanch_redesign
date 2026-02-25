import Image from "next/image"
import { Clock, User, Building2, Sparkles, Heart, Gavel, Zap, BookOpen } from "lucide-react"



export function HeroSection({ featured, trending }) {
  return (
    <section className="bg-card">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-3">
        {/* Featured Post - Left 2/3 */}
        <div className="group relative lg:col-span-2  mt-4">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-10">
              <span className="mb-3 inline-block rounded bg-accent px-2.5 py-1 text-xs font-bold text-accent-foreground uppercase tracking-wider">
                {featured.category}
              </span>
              <h1 className="mb-3 max-w-2xl font-serif text-2xl font-bold leading-tight text-primary-foreground md:text-3xl lg:text-4xl text-balance">
                {featured.title}
              </h1>
              <p className="mb-4 max-w-xl text-sm leading-relaxed text-primary-foreground/70 line-clamp-2 text-pretty">
                {featured.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-primary-foreground/60">
                <span className="flex items-center gap-1.5">
                  <User className="h-3 w-3" />
                  {featured.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3 w-3" />
                  {featured.readTime}
                </span>
                <span>{featured.date}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Grid - Right 1/3 */}
        <div className="">
          <div className="grid grid-cols-2 gap-3 p-4">
            {[
              {
                name: "Real Estate",
                description: "Smart Moves for Buying, Selling, Investing Property",
                icon: Building2,
                bgColor: "bg-blue-100 dark:bg-blue-900/30",
                iconColor: "text-blue-600 dark:text-blue-400",
              },
              {
                name: "Fashion & Lifestyle",
                description: "Style Trends That Shape Your Everyday Living",
                icon: Sparkles,
                bgColor: "bg-pink-100 dark:bg-pink-900/30",
                iconColor: "text-pink-600 dark:text-pink-400",
              },
              {
                name: "Health",
                description: "Better Habits for a Stronger, Happier Life",
                icon: Heart,
                bgColor: "bg-red-100 dark:bg-red-900/30",
                iconColor: "text-red-600 dark:text-red-400",
              },
              {
                name: "Politics",
                description: "Power, Policies, and Decisions That Shape Nations",
                icon: Gavel,
                bgColor: "bg-amber-100 dark:bg-amber-900/30",
                iconColor: "text-amber-600 dark:text-amber-400",
              },
              {
                name: "Latest News",
                description: "Breaking Stories That Matter Most Today",
                icon: Zap,
                bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
                iconColor: "text-yellow-600 dark:text-yellow-400",
              },
              {
                name: "Other (General)",
                description: "Insights, Ideas, and Topics Beyond Categories",
                icon: BookOpen,
                bgColor: "bg-purple-100 dark:bg-purple-900/30",
                iconColor: "text-purple-600 dark:text-purple-400",
              },
            ].map((category) => {
              const Icon = category.icon
              return (
                <div
                  key={category.name}
                  className={`${category.bgColor} rounded-lg p-4 cursor-pointer transition-all hover:shadow-md hover:scale-105 group`}
                >
                  <div className={`${category.iconColor} mb-2 transition-transform group-hover:scale-110`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xs font-bold text-foreground uppercase tracking-wide line-clamp-1">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-[10px] leading-snug text-muted-foreground line-clamp-2">
                    {category.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
