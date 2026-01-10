import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-6 text-center">
        <h1 className="text-3xl font-semibold">
          Product Explorer Dashboard
        </h1>
        <p className="text-black/70 dark:text-gray-400">
          Browse products, filter by category, and save your favorites.
        </p>
        <Link
          href="/products"
          className="inline-block rounded-lg border-black bg-black px-6 py-3 text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          View Products
        </Link>
      </div>
    </div>
  );
}
