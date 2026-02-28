const categoryColors = {
  "REAL ESTATE": "bg-[#6367FF] text-[#EFF6FF]",     // blue-600
  "HEALTH": "bg-[#84B179] text-[#F3FAF6]",
  "NEWS": "bg-[#0C7779] text-[#F0F9FF]",         // sky-600
  "POLITICS": "bg-[#C00707] text-[#FAFAF9]",  // stone-600
  "FASHION & LIFESTYLE": "bg-[#E36A6A] text-[#FDF2F8]",     // pink-600
  "OTHERS": "bg-[#E491C9] text-[#F5F3FF]",     // violet-600
  // "Programming": "bg-[#059669] text-[#ECFDF5]",    // emerald-600
  // "Gadgets": "bg-[#EA580C] text-[#FFF7ED]",        // orange-600
  // "Technology": "bg-[#0891B2] text-[#ECFEFF]",     // cyan-600
  // "Startups": "bg-[#E11D48] text-[#FFF1F2]",       // rose-600
  // "Marketing": "bg-[#D97706] text-[#FFFBEB]",      // amber-600
  // "Finance": "bg-[#0D9488] text-[#F0FDFA]",        // teal-600
  // "Business": "bg-[#4F46E5] text-[#EEF2FF]",       // indigo-600

  // "Tutorials": "bg-[#C026D3] text-[#FDF4FF]",     // fuchsia-600
  // "Career": "bg-[#65A30D] text-[#F7FEE7]",         // lime-600
  // "Learning": "bg-[#9333EA] text-[#FAF5FF]"        // purple-600
}

export function getCategoryColor(category) {
  if (!category) return "bg-[#525252] text-[#FAFAFA]"

  return (
    categoryColors[category] ||
    categoryColors[category.trim()] ||
    "bg-[#525252] text-[#FAFAFA]"
  )
}