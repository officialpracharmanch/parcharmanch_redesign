import Image from "next/image"
import { FileText } from "lucide-react"

export function TopAuthors({ authors }) {
  return (
    <section className="bg-card border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:px-6 lg:py-14">
        <div className="mb-8 flex items-center gap-2">
          <div className="h-5 w-1 bg-accent" />
          <h2 className="font-serif text-2xl font-bold tracking-tight text-foreground md:text-3xl">
            Top Authors
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {authors.map((author) => (
            <div
              key={author.name}
              className="group flex cursor-pointer flex-col items-center border border-border bg-background p-5 text-center transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="relative mb-3 h-16 w-16 overflow-hidden rounded-full ring-2 ring-border transition-all group-hover:ring-accent/50">
                <Image
                  src={author.avatar}
                  alt={author.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-sm font-bold text-foreground">{author.name}</h3>
              <p className="mb-2 text-xs text-muted-foreground">{author.role}</p>
              <div className="flex items-center gap-1 text-xs text-accent">
                <FileText className="h-3 w-3" />
                <span className="font-semibold">{author.articles} articles</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
