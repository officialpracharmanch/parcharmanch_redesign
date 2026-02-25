// app/blogs/[category]/BlogCategories.jsx

import { CategoryHero } from "@/components/category/CategoryHero"
import { CategoryBlogGrid } from "@/components/category/CategoryBlogGrid"
import { CategorySidebar } from "@/components/category/CategorySidebar"

export default function BlogCategories({
  blogs = [],
  category,
  currentPage,
  totalPages,
}) {
  if (!blogs.length) {
    return (
      <div className="min-h-screen bg-background py-12 text-center">
        <h1 className="text-2xl font-bold">No blogs found</h1>
        <p className="mt-2 text-muted-foreground">
          There are no blogs available for this category.
        </p>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Category Hero Section */}
      {/* <CategoryHero
        name={category}
        description={`Latest blogs related to ${category}`}
      /> */}

      {/* Main Content */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left: Blog Grid */}
            <div className="lg:col-span-2">
              <CategoryBlogGrid
                blogs={blogs}
                currentPage={currentPage}
                totalPages={totalPages}
                category={category}
              />
            </div>

            {/* Right: Sidebar */}
            <div className="lg:sticky lg:top-4 lg:h-fit">
              <CategorySidebar latestPosts={blogs.slice(0, 5)} />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}












// import Link from "next/link"
// import { categories, blogPosts } from "@/data/categories"
// import { CategoryHero } from "@/components/category/CategoryHero"
// import { CategoryBlogGrid } from "@/components/category/CategoryBlogGrid"
// import { CategorySidebar } from "@/components/category/CategorySidebar"


// export default async function 
// BlogCategories({blogs}) {
//   const category = categories["business"]

//   if (!category) {
//     return (
//       <div className="min-h-screen bg-background py-12">
//         <div className="mx-auto max-w-7xl px-4 text-center">
//           <h1 className="text-3xl font-bold text-foreground">Category not found</h1>
//           <p className="mt-2 text-muted-foreground">
//             The category you are looking for does not exist.
//           </p>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <main className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <CategoryHero
//         name={category.name}
//         description={category.description}
//         image={category.image}
//         subcategories={category.subcategories}
//       />

//       {/* Main Content */}
//       <section className="bg-background py-12 lg:py-16">
//         <div className="mx-auto max-w-7xl px-4 lg:px-6">
//           <div className="grid gap-8 lg:grid-cols-3">
//             {/* Left: Blog Grid */}
//             <div className="lg:col-span-2">
//               <CategoryBlogGrid blogs={blogs} />
//             </div>

//             {/* Right: Sidebar - Sticky */}
//             <div className="lg:sticky lg:top-4 lg:h-fit">
//               <CategorySidebar latestPosts={blogs?.slice(0,5)} />
//             </div>
//           </div>
//         </div>
//       </section>


//     </main>
//   )
// }
