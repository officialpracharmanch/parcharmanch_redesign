// src/context/BlogContext.jsx
"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);     // 🔹 Dynamic Page
  const [limit, setLimit] = useState(50);  
  const [totalPages, setTotalPages] = useState(1);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://parcharmanch-backend-7kc7.onrender.com/parcharmanch/getBlogs", {
        params: { page, limit },
      });

      if (res.data.success) {
        setBlogs(res.data.blogs);
        setTotalPages(res.data.totalPages || 1); // agar API pages bhej rahi hai
      } else {
        setError("Failed to fetch blogs");
      }
    } catch (err) {
      setError("Error loading blog content");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [page]); // page  change hone par call hoga

  const getBlogsByCategory = useCallback(
    (category) => {
      if (!category) return blogs
   console.log("Filtering blogs for category:", category);
      return blogs.filter(
        (blog) =>
          blog.Category?.toLowerCase() === category.toLowerCase()
      )
    },
    [blogs]
  )
// ***********************************************************************
 const [catBlogs, catSetBlogs] = useState([]);
  const [catLoading, catSetLoading] = useState(false);
  const [catError, catSetError] = useState(null);

  // inputs as state
  const [category, setCategory] = useState(null);
  const [catPage, catSetPage] = useState(1);

    const fetchCatBlogs = async () => {
      try {
        catSetLoading(true);
        catSetError(null);
         console.log("api call",category)
        const res = await axios.get(
          `http://localhost:5050/parcharmanch/getBlogsByCategory/${category}?page=${page}&limit=35`
        );

        catSetBlogs(res.data.data);
      } catch (err) {
        catSetError(
          err.response?.data?.message || "Failed to fetch blogs"
        );
        catSetBlogs([]);
      } finally {
        catSetLoading(false);
      }
    };

    useEffect(() => {
    if (!category) return;
    fetchCatBlogs();
  }, [category, catPage]); // 🔥 simple dependency
// ******************************************************************
  return (
    <BlogContext.Provider
      value={{blogs,loading,error,page,setPage,totalPages,fetchBlogs,getBlogsByCategory,catBlogs,catLoading,catError,catPage,catSetPage,setCategory
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

// Custom hook
export const useBlogs = () => useContext(BlogContext);
