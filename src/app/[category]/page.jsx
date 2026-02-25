// app/blogs/[category]/page.jsx

import BlogCategories from "./BlogCategories"

const LIMIT = 10 // API ko bhejne wala limit

export const metadata = {
  title: "Category Blogs | MyBlog",
  description:
    "Read latest blogs filtered by categories like AI, Programming, Technology and more.",
}

async function getBlogsByCategory(category, page) {
  const res = await fetch(
    `http://127.0.0.1:5050/parcharmanch/getBlogsByCategory/${category}?page=${page}&limit=${LIMIT}`,
    {
      next: { revalidate: 300 }, // ✅ 5 min cache (ISR)
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch blogs")
  }

  return res.json()
}

export default async function Page({ params, searchParams }) {
  // const category = params.category
  const category = "Digital Marketing"
  const page = Number(searchParams?.page) || 1

  const data = await getBlogsByCategory(category, page)

  /**
   * API RESPONSE (confirmed):
   * {
   *   success: true,
   *   category: "Digital Marketing",
   *   data: [...],
   *   pagination: {
   *     currentPage,
   *     limit,
   *     totalItems,
   *     totalPages
   *   }
   * }
   */

  return (
    <BlogCategories
      blogs={data?.data}
      category={data.category}
      currentPage={data.pagination.currentPage}
      totalPages={data.pagination.totalPages}
    />
  )
}



// // app/blogs/[category]/page.jsx

// import BlogCategories from "./BlogCategories"

// // 🔹 STATIC METADATA
// export const metadata = {
//   title: "Category Blogs | MyBlog",
//   description:
//     "Read latest blogs filtered by categories like AI, Programming, Technology and more.",
// }

// // 🔹 Cached fetch (STATIC DATA)
// async function getBlogsByCategory(category) {
//   const res = await fetch(
//     `http://localhost:5050/parcharmanch/getBlogsByCategory/${category}`,
//     {
//       next: { revalidate: 300 }, // ✅ 5 min cache
//     }
//   )

//   if (!res.ok) {
//     throw new Error("Failed to fetch blogs")
//   }
//    const data = await res.json() // ✅ ek hi baar

//   console.log("response rec", data) // ✅ safe

//   return data
// }

// export default async function Page({ params }) {
//   // const { category } = params
//   const category  = "Digital Marketing"

//   const data = await getBlogsByCategory(category)

//   // assume API response: { blogs: [] }
//   const blogs = data.blogs || data

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6 capitalize">
//         {category} Blogs
//       </h1>

//       <BlogCategories blogs={blogs?.data} />
//     </div>
//   )
// }

