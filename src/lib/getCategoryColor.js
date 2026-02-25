const categoryColors = {
  "Real Estate": "bg-blue-600 text-blue-50",
  "Programming": "bg-emerald-600 text-emerald-50",
  "Gadgets": "bg-orange-600 text-orange-50",
  "Technology": "bg-cyan-600 text-cyan-50",
  "Startups": "bg-rose-600 text-rose-50",
  "Marketing": "bg-amber-600 text-amber-50",
  "Finance": "bg-teal-600 text-teal-50",
  "Business": "bg-indigo-600 text-indigo-50",
  "Health": "bg-green-600 text-green-50",
  "Travel": "bg-sky-600 text-sky-50",
  "Productivity": "bg-stone-600 text-stone-50",
  "Lifestyle": "bg-pink-600 text-pink-50",
  "Education": "bg-violet-600 text-violet-50",
  "Tutorials": "bg-fuchsia-600 text-fuchsia-50",
  "Career": "bg-lime-600 text-lime-50",
  "Learning": "bg-purple-600 text-purple-50"
}

export function getCategoryColor(category) {
  if (!category) return "bg-gray-600 text-gray-50"

  return (
    categoryColors[category] ||
    categoryColors[category.trim()] ||
    "bg-gray-600 text-gray-50"
  )
}