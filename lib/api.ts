import { Product } from "../types/product";

const API_URL = "https://fakestoreapi.com/products";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const res = await fetch(API_URL, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("fetchProducts failed:", res.status);
      return []; 
    }

    return await res.json();
  } catch (error) {
    console.error("fetchProducts error:", error);
    return []; 
  }
}

export async function fetchProductById(id: number): Promise<Product | null> {
  try {
    const res = await fetch(`${API_URL}/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("fetchProductById failed:", res.status);
      return null;
    }

    const text = await res.text();
    if (!text) return null;

    return JSON.parse(text);
  } catch (error) {
    console.error("fetchProductById error:", error);
    return null;
  }
}
