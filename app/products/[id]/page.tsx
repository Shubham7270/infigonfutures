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
  if(!product) notFound();

  const p = product;

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-square rounded-xl border bg-white p-6 dark:bg-black">
          <Image
            src={p.image}
            alt={p.title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Info */}
        <div className="space-y-4">
           <h1 className="text-2xl font-semibold">
             {p.title}
            </h1>

         <p className="text-sm opacity-80">
            Category: {p.category}
         </p>

         <p className="text-xl font-bold">
             ${p.price}
              </p>

             <p className="leading-relaxed opacity-90">
             {p.description}
             </p>
        </div>
      </div>
    </div>
  );
}
