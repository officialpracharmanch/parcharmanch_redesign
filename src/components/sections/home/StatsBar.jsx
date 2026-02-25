import { FileText, Users, TrendingUp, Award } from "lucide-react"

const stats = [
  { icon: FileText, value: "2,500+", label: "Articles Published" },
  { icon: Users, value: "125K+", label: "Monthly Readers" },
  { icon: TrendingUp, value: "50+", label: "Expert Writers" },
  { icon: Award, value: "4.9/5", label: "Reader Rating" },
]

export function StatsBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-center gap-3 px-4 py-5 lg:px-8 lg:py-6">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded bg-secondary">
              <stat.icon className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="text-lg font-bold text-foreground lg:text-xl">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
