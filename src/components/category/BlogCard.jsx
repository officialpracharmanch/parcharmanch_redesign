import Image from "next/image"

export function BlogCard({ blog }) {
  return (
    <article className="group overflow-hidden rounded-2xl bg-white shadow hover:shadow-xl transition">
      <div className="relative aspect-[16/10]">
        <Image
          src={blog.HeroImg?.url}
          alt={blog.Title}
          fill
          className="object-cover group-hover:scale-105 transition"
        />
      </div>

      <div className="p-5">
        <h3 className="font-semibold line-clamp-2">{blog.Title}</h3>
        <p className="text-sm text-gray-500 mt-2">
          {blog.author || "Admin"}
        </p>
      </div>
    </article>
  )
}