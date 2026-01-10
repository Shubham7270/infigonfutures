export default function ProductSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border p-4">
      <div className="h-40 bg-gray-200 dark:bg-gray-700 rounded" />
      <div className="mt-4 space-y-2">
        <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded" />
        <div className="h-4 w-1/2 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>
    </div>
  );
}
