"use client";

import { useEffect, useMemo, useState } from "react";
import { Product } from "@/types/product";
import ProductGrid from "./ProductGrid";

interface Props {
  products: Product[];
}

export default function ProductsClient({ products }: Props) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [favorites, setFavorites] = useState<number[]>([]);

  // Load favorites from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("favorites");
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFavorites(JSON.parse(stored));
    }
  }, []);

  // Persist favorites
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const categories = useMemo(() => {
    return ["all", ...Array.from(new Set(products.map(p => p.category)))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      const matchesFavorites =
        !favoritesOnly || favorites.includes(product.id);

      return matchesSearch && matchesCategory && matchesFavorites;
    });
  }, [products, search, category, favoritesOnly, favorites]);

  const toggleFavorite = (id: number) => {
  setFavorites((prev) =>
    prev.includes(id)
      ? prev.filter((favId) => favId !== id)
      : [...prev, id]
  );
};

  return (
    <section className="space-y-6">
      {/* Controls */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" text-white w-full rounded-lg border px-3 py-2 dark:bg-gray-900"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className=" text-white rounded-lg border px-3 py-2 dark:bg-gray-900"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            checked={favoritesOnly}
            onChange={(e) => setFavoritesOnly(e.target.checked)}
          />
          Favorites only
        </label>
      </div>

      {/* Results */}
      {filteredProducts.length === 0 ? (
        <p className="text-sm text-gray-500">No products found.</p>
      ) : (
        <ProductGrid
        products={filteredProducts}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}/>
        
      )}
    </section>
  );
}
