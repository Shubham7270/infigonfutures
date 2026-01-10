"use client";

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface Props {
  product: Product;
  isFavorite?: boolean;
  onToggleFavorite?: (id: number) => void;
}

export default function ProductCard({
  product,
  isFavorite = false,
  onToggleFavorite,
}: Props) {
  return (
    <div className="relative rounded-xl border p-4 shadow-sm transition hover:shadow-md">
      {/* Favorite Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          onToggleFavorite?.(product.id);
        }}
        className="absolute right-3 top-3 z-10 text-xl transition-transform hover:scale-110"
        aria-label="Toggle Favorite"
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>

      {/* Card Click */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="relative h-40 w-full">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>

        <div className="mt-4 space-y-1">
          <h3 className="line-clamp-2 text-sm font-medium">
            {product.title}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {product.category}
          </p>
          <p className="font-semibold">${product.price}</p>
        </div>
      </Link>
    </div>
  );
}
