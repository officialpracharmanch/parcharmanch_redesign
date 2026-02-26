"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import { useBlogs } from "@/contexts/BlogContext";
import {decodeSlug} from "@/lib/helper"
import Link from "next/link"
/* ================= PAGE ================= */
export default function HealthPage() {
  const { category } = useParams();
  const { setCategory } = useBlogs();

  useEffect(() => {
    if (category) setCategory(category);
  }, [category]);

  const [activeCategory, setActiveCategory] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({
    left: 0,
    top: 0,
  });

  const dropdownRef = useRef(null);

  const categories = [
    {
      title: "Medical News",
      items: [
        "Health Policies",
        "Medical Research",
        "Public Health Alerts",
        "Disease Outbreaks",
      ],
    },
    {
      title: "Fitness & Wellness",
      items: [
        "Workout Plans",
        "Weight Loss",
        "Yoga & Meditation",
        "Mental Wellness",
      ],
    },
    {
      title: "Nutrition",
      items: [
        "Diet Trends",
        "Superfoods",
        "Expert Advice",
        "Healthy Recipes",
      ],
    },
    {
      title: "Specialized Health",
      items: [
        "Women’s Health",
        "Men’s Health",
        "Child Health",
        "Senior Care",
      ],
    },
    {
      title: "Lifestyle Diseases",
      items: [
        "Diabetes",
        "Heart Health",
        "Obesity",
        "Stress Disorders",
      ],
    },
  ];

  const handleCategoryClick = (index, e) => {
    if (activeCategory === index) {
      setActiveCategory(null);
      return;
    }

    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPosition({
      left: rect.left + rect.width / 2,
      top: rect.bottom + 8,
    });

    setActiveCategory(index);
  };

  /* close dropdown */
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveCategory(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("scroll", () => setActiveCategory(null), true);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("scroll", () => setActiveCategory(null), true);
    };
  }, []);

  return (
    <div className="w-full bg-white mb-4">
      {/* HEADER */}
      <div className="sticky top-16 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 pt-6 pb-4">
          <h1 className="text-4xl font-bold mb-6 tracking-wide uppercase inline-block">
            {decodeSlug(category)}
          <hr  className="h-1 bg-yellow-500 "/>
          </h1>

          <div className="flex gap-8 pb-4 overflow-x-auto no-scrollbar">
            {categories.map((cat, index) => (
              <Link href={`/${cat?.title?.toLowerCase().replace(/\s+/g, "-")}`}
                key={index}
                onMouseEnter={(e) => handleCategoryClick(index, e)}
                className={`relative group text-lg pb-2 whitespace-nowrap
                  ${
                    activeCategory === index
                      ? "text-blue-700 font-bold"
                      : "text-black font-medium hover:font-bold"
                  }`}
              >
                {cat.title}
                <span
                  className={`absolute left-0 -bottom-[2px] h-[2px] bg-yellow-400 transition-all
                    ${
                      activeCategory === index
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* DROPDOWN */}
      {activeCategory !== null && (
        <div
          ref={dropdownRef}
        onMouseLeave={() => setActiveCategory(null)}
          style={{
            position: "fixed",
            left: dropdownPosition.left,
            top: dropdownPosition.top,
            transform: "translateX(-50%)",
          }}
          className="bg-white rounded-2xl shadow-2xl border p-4 min-w-[240px] z-[500]"
        >
          {categories[activeCategory].items.map((item, i) => (
            <Link href={`/${item?.toLowerCase().replace(/\s+/g, "-")}`}
                key={i}
                className="group relative px-4 py-3 rounded-lg text-sm font-bold text-gray-600 cursor-pointer transition-all duration-200 hover:bg-yellow-50 hover:text-black block"
              >
                {item}
                <span className="absolute left-0 top-0 h-full w-1 bg-yellow-400 opacity-0 group-hover:opacity-100 transition" />
              </Link>
          ))}
        </div>
      )}
    </div>
  );
}