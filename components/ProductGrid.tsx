"use client";

import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  favorites: number[];
  onToggleFavorite: (id: number) => void;
}

export default function ProductGrid({
  products,
  favorites,
  onToggleFavorite,
}: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map((product) => {
        const isFavorite = favorites.includes(product.id);
        // console.log("favorites:", favorites);

        return (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        );
      })}
    </div>
  );
}
