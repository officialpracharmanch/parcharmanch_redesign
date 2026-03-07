"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { decodeSlug, createSlug } from "@/lib/helper";
import { categories as CAT_MAP } from "@/data/catSubcatMap";
import "@/app/globals.css";

export default function HealthPage() {
  const { category, subcat } = useParams();

  // ✅ normalize active subcategory
  const activeSubcat = subcat?.[0]
    ? createSlug(decodeSlug(decodeURIComponent(subcat[0])))
    : null;

  /* find current category */
  const currentCategory = useMemo(() => {
    if (!category) return null;

    const decodedCategory = decodeURIComponent(category);
    return CAT_MAP.find(
      (c) => createSlug(c.name) === decodedCategory
    );
  }, [category]);

  const subcategories = currentCategory?.subcategories || [];

  if (!currentCategory) return null;

  return (
    <div className="w-full bg-accent-foreground mb-4">
      <div className="sticky top-16 bg-accent-foreground border-b-4 border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 uppercase">
            {decodeSlug(category)}
          </h1>

          {/* SUBCATEGORY BAR */}
          <div className="flex gap-6 overflow-x-auto removeScrollbar">
            {subcategories.map((sub) => {
              const subSlug = createSlug(sub.name);
              const isActive = subSlug === activeSubcat;

              return (
                <Link
                  key={sub.name}
                  href={`/${decodeURIComponent(category)}/${subSlug}`}
                  className={`relative pb-2 text-base md:text-md whitespace-nowrap
                    ${
                      isActive
                        ? "text-blue-700 font-bold"
                        : "text-gray-800 font-medium hover:text-blue-600"
                    }`}
                >
                  {sub.name}

                  {/* ✅ LINE ALWAYS VISIBLE */}
                  {/* <span
                    className={`absolute left-0 -bottom-[2px] h-[2px] w-full transition-colors
                      ${
                        isActive
                          ? "bg-blue-600"
                          : "bg-gray-300"
                      }`}
                  /> */}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}













// "use client";

// import { useState, useEffect, useRef, useMemo } from "react";
// import { useParams } from "next/navigation";
// import Link from "next/link";
// import { decodeSlug, createSlug } from "@/lib/helper";
// import { categories as CAT_MAP } from "@/data/catSubcatMap";
// import "@/app/globals.css";

// export default function HealthPage() {
//   const { category, subcat } = useParams();

//   const isMobile =
//     typeof window !== "undefined" && window.innerWidth < 768;

//   /* find current category */
//   const currentCategory = useMemo(() => {
//     const decodedCategory = decodeURIComponent(category);
//     return CAT_MAP.find(
//       (c) => createSlug(c.name) === decodedCategory
//     );
//   }, [category]);

//   const subcategories = currentCategory?.subcategories || [];

//   const [activeIndex, setActiveIndex] = useState(null);
//   const [dropdownPosition, setDropdownPosition] = useState({
//     left: 0,
//     top: 0,
//   });

//   const dropdownRef = useRef(null);

//   /* open dropdown */
//   const openDropdown = (index, e) => {
//     if (!isMobile && e) {
//       const rect = e.currentTarget.getBoundingClientRect();
//       setDropdownPosition({
//         left: Math.min(
//           rect.left + rect.width / 2,
//           window.innerWidth - 180
//         ),
//         top: rect.bottom + 8,
//       });
//     }
//     setActiveIndex(index);
//   };

//   /* close dropdown on outside click / scroll */
//   useEffect(() => {
//     function handleClickOutside(e) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target)
//       ) {
//         setActiveIndex(null);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener(
//       "scroll",
//       () => setActiveIndex(null),
//       true
//     );

//     return () => {
//       document.removeEventListener(
//         "mousedown",
//         handleClickOutside
//       );
//       document.removeEventListener(
//         "scroll",
//         () => setActiveIndex(null),
//         true
//       );
//     };
//   }, []);

//   if (!currentCategory) return null;

//   return (
//     <div className="w-full bg-white mb-4">
//       {/* HEADER */}
//       <div className="sticky top-16 bg-white border-b border-gray-200 z-40">
//         <div className="max-w-7xl mx-auto px-4 md:px-6 pt-6 pb-4">
//           <h1 className="text-3xl md:text-4xl font-bold mb-6 tracking-wide uppercase inline-block">
//             {decodeSlug(category)}
//             <hr className="h-1 bg-yellow-500" />
//           </h1>

//           {/* SUBCATEGORY BAR */}
//           <div
//             className="flex gap-6 pb-3 overflow-x-auto scrollbar-hide max-w-full"
//             onMouseLeave={() => setActiveIndex(null)}
//           >
//             {subcategories.map((sub, index) => {
//               const subSlug = createSlug(sub.name);
//               const isActive = subSlug === subcat;
//               const hasTags = sub.tags?.length > 0;

//               return (
//                 <Link
//                   key={sub.name}
//                   href={`/${category}/${subSlug}`}
//                   onMouseEnter={(e) => {
//                     if (!isMobile && hasTags) {
//                       openDropdown(index, e);
//                     } else {
//                       setActiveIndex(null);
//                     }
//                   }}
//                   onClick={(e) => {
//                     if (isMobile && hasTags) {
//                       e.preventDefault();
//                       openDropdown(index);
//                     }
//                   }}
//                   className={`relative flex-shrink-0 text-base md:text-lg pb-2 whitespace-nowrap
//                     ${
//                       isActive
//                         ? "text-blue-700 font-bold"
//                         : "text-black font-medium hover:font-bold"
//                     }`}
//                 >
//                   {sub.name}
//                   <span
//                     className={`absolute left-0 -bottom-[2px] h-[2px] bg-yellow-400 transition-all
//                       ${
//                         isActive
//                           ? "w-full"
//                           : "w-0 group-hover:w-full"
//                       }`}
//                   />
//                 </Link>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* TAG DROPDOWN */}
//       {activeIndex !== null &&
//         subcategories[activeIndex]?.tags?.length > 0 && (
//           <div
//             ref={dropdownRef}
//             className={`z-[500] bg-white border shadow-2xl
//               ${
//                 isMobile
//                   ? "fixed bottom-0 left-0 right-0 rounded-t-2xl max-h-[60vh] overflow-y-auto"
//                   : "absolute rounded-2xl min-w-[260px]"
//               }
//             `}
//             style={
//               !isMobile
//                 ? {
//                     left: dropdownPosition.left,
//                     top: dropdownPosition.top,
//                     transform: "translateX(-50%)",
//                   }
//                 : {}
//             }
//           >
//             {/* Mobile Header */}
//             {isMobile && (
//               <div className="p-4 border-b flex justify-between items-center font-bold">
//                 {subcategories[activeIndex].name}
//                 <button
//                   onClick={() => setActiveIndex(null)}
//                   className="text-xl"
//                 >
//                   ✕
//                 </button>
//               </div>
//             )}

//             <div className="p-3">
//               {subcategories[activeIndex].tags.map((tag) => (
//                 <Link
//                   key={tag}
//                   href={`/${category}/${createSlug(
//                     subcategories[activeIndex].name
//                   )}/${createSlug(tag)}`}
//                   onClick={() => setActiveIndex(null)}
//                   className="group relative flex items-center px-4 py-3 pl-6 rounded-lg text-sm font-bold text-gray-600 transition-all duration-200 hover:bg-yellow-50 hover:text-black"
//                 >
//                   {/* YELLOW LEFT LINE */}
//                   <span className="absolute left-0 top-0 h-full w-1 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-all rounded-r" />
//                   {tag}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         )}
//     </div>
//   );
// }