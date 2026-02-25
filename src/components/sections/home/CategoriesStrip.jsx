import { Cpu, Briefcase, Heart, GraduationCap, Code, TrendingUp, Globe, Lightbulb } from "lucide-react"

const categories = [
  { name: "HEALTH", icon: Cpu, count: 342 },
  { name: "REAL ESTATE", icon: Briefcase, count: 218 },
  { name: "FASHION & LIFESTYLE", icon: Heart, count: 189 },
  { name: "POLITICS", icon: GraduationCap, count: 156 },
  { name: "OTHER", icon: Code, count: 294 },
  { name: "NEWS (Core Media Section)", icon: TrendingUp, count: 173 },
  { name: "Travel", icon: Globe, count: 127 },
  { name: "Innovation", icon: Lightbulb, count: 98 },
]

export function CategoriesStrip() {
  return (
    <section className="bg-card border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-6 lg:py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xs font-bold text-foreground uppercase tracking-widest">
            Browse by Category
          </h2>
          <span className="text-xs text-muted-foreground">8 categories</span>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="group flex flex-col items-center gap-2 rounded border border-border bg-background px-3 py-4 transition-all hover:border-accent/50 hover:bg-secondary hover:shadow-sm"
            >
              <cat.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
              <span className="text-xs font-semibold text-foreground">{cat.name}</span>
              <span className="text-[10px] text-muted-foreground">{cat.count} articles</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
