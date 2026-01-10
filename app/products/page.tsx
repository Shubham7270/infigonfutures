import { fetchProducts } from "@/lib/api";
import ProductsClient from "@/components/ProductsClient";
import { notFound } from "next/navigation";

export default async function ProductsPage() {
  const products = await fetchProducts();
  if(!products){
    notFound()
  }

  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold">Products</h1>
      <ProductsClient products={products} />
    </>
  );
}
