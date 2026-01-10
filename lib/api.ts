import { Product } from "../types/product";

const API_URL = "https://fakestoreapi.com/products";

export async function  fetchProducts(): Promise<Product[]> {
    const  res =  await fetch(API_URL);
    
    if(!res.ok){
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

export async function fetchProductById(id: number): Promise<Product> {
    const res = await fetch(`${API_URL}/${id}`,{
        cache:"no-store",
    });

    if(!res.ok){
        throw new Error("Failed to fetch product");
    }
    const text = await res.text();
    if(text === ""){
        throw new Error("Product not found");
    }
    return JSON.parse(text);
}