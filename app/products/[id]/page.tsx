import Image from "next/image";
import { fetchProductById } from "@/lib/api";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: string;
  };
}

export default async function ProductDetailsPage({ params }: Props) {
    const { id } = await params; 

  const productId = Number(id);

  if (Number.isNaN(productId)) {
    notFound();
  }
  const product = await fetchProductById(productId);

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square rounded-xl border bg-white p-6 dark:bg-black">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Info */}
        <div className="space-y-4">
           <h1 className="text-2xl font-semibold">
             {product.title}
            </h1>

         <p className="text-sm opacity-80">
            Category: {product.category}
         </p>

         <p className="text-xl font-bold">
             ${product.price}
              </p>

             <p className="leading-relaxed opacity-90">
             {product.description}
             </p>
        </div>
      </div>
    </div>
  );
}
