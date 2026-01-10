export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl animate-pulse space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="aspect-square rounded-xl bg-gray-200 dark:bg-gray-700" />
        <div className="space-y-4">
          <div className="h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-4 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-6 w-1/4 rounded bg-gray-200 dark:bg-gray-700" />
          <div className="h-20 rounded bg-gray-200 dark:bg-gray-700" />
        </div>
      </div>
    </div>
  );
}
