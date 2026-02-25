import Image from "next/image"


export function CategoryHero({
  name,
  description,
  image,
  subcategories,
}) {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-accent/10 to-accent/5">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 py-16 lg:px-6 lg:py-20">
        <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
          {name}
        </h1>

        <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>

        {/* Subcategories in Hero */}
        <div className="flex flex-wrap gap-2">
          {subcategories.map((sub) => (
            <span
              key={sub}
              className="inline-block rounded-full bg-accent/10 px-4 py-2 text-sm font-semibold text-accent border border-accent/30"
            >
              {sub}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Accent Bar */}
      <div className="relative h-1 w-full bg-gradient-to-r from-accent via-accent/50 to-transparent" />
    </section>
  )
}
