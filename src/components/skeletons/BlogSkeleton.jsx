export default function BlogSkeleton() {
  return (
    <div className="animate-pulse rounded-tl-2xl rounded-tr-2xl overflow-hidden bg-white border">
      
      {/* Image Skeleton */}
      <div className="h-56 w-full bg-gray-200" />

      {/* Content */}
      <div className="p-4 space-y-3">
        
        {/* Category */}
        <div className="h-3 w-20 bg-gray-200 rounded" />

        {/* Title line 1 */}
        <div className="h-4 w-full bg-gray-200 rounded" />

        {/* Title line 2 */}
        <div className="h-4 w-5/6 bg-gray-200 rounded" />

        {/* Title line 3 */}
        <div className="h-4 w-2/3 bg-gray-200 rounded" />
      </div>

      {/* Bottom line */}
      <div className="h-[2px] w-full bg-gray-200" />
    </div>
  );
}