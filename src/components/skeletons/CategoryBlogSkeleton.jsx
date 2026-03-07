export function CategoryBlogSkeleton() {
  return (
    <div className="flex gap-4 overflow-hidden rounded-2xl border animate-pulse">
      
      {/* Image Skeleton */}
      <div className="h-20 w-28 flex-shrink-0 bg-gray-200 lg:h-[8rem] lg:w-32 rounded-tl-2xl rounded-bl-2xl"></div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-center p-4 space-y-2">
        
        {/* Category */}
        <div className="h-3 w-16 bg-gray-200 rounded"></div>

        {/* Title */}
        <div className="h-4 w-3/4 bg-gray-200 rounded"></div>

        {/* Description */}
        <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}