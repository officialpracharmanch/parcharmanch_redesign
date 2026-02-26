import React from "react";
import BlogDetails from "./BlogDetails";

// ✅ Helper: Fetch blog data once (for metadata + content)
async function getBlogData(id) {
  let loading = true;
  let data = null;
  let error = null;

  try {
    console.log("id =>",id)
    const res = await fetch(
      `https://parcharmanch-backend-7kc7.onrender.com/parcharmanch/getBlogBySlug/${id}`,
      {
         cache: "force-cache",
        next: { revalidate: 120 }, // revalidate every 2 minutes
      }
    );

    if (!res.ok) throw new Error("Failed to fetch blog data");

    const json = await res.json();
    
    data = json || null;
  } catch (err) {
    error = err.message || "Unknown error occurred";
    console.log("data =>",error)
  } finally {
    loading = false;
  }

  return { data, error, loading };
}

// ✅ Metadata (uses same API)
export async function generateMetadata({ params }) {
  const { id } = await params;
  const { data } = await getBlogData(id);
  

  const single = data?.blog;

  if (!single) {
    return {
      title: "Parcharmanch – Blog",
      description: "Explore the latest blogs and articles on Parcharmanch.",
    };
  }

  return {
    title: single?.MetaTitle || single?.Title || "Parcharmanch Blog",
    description:
      single?.MetaDescription ||
      "Read insightful stories and blogs on Parcharmanch.",
    alternates: {
      canonical: `https://www.parcharmanch.in/blog/${id}`,
    },
  };
}

// ✅ Main Blog Page (SSR)
export default async function Page({ params }) {
  const { id } = await params;
  const { data, error, loading } = await getBlogData(id);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center p-8">
          <div className="text-red-600 text-lg font-semibold mb-2">
            Unable to Load Blog
          </div>
          <div className="text-gray-600">
            Please try again later or contact support if the issue persists.
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50 border-2 border-red-500">
        <p className="text-gray-600 text-lg animate-pulse">
          ⏳ Loading blog content...
        </p>
      </div>
    );
  }

  if (!data?.blog) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Blog not found.
      </div>
    );
  }

  return (
    <>
      <BlogDetails post={data} />
    </>
  );
}