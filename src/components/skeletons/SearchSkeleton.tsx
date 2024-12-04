export function SearchSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 -mt-24 relative z-10 mb-12">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-10 bg-gray-200 rounded-lg animate-pulse" />
          <div className="w-40 h-10 bg-gray-200 rounded-lg animate-pulse" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-80 rounded-2xl bg-gray-200 animate-pulse" />
        ))}
      </div>
    </div>
  );
}