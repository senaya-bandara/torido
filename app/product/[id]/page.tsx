import { notFound } from "next/navigation";
import { PRODUCTS, BEST_SELLERS } from "@/lib/products";
import ProductDetails from "@/app/components/ProductDetails";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const allProducts = [...PRODUCTS, ...BEST_SELLERS];

  const product = allProducts.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return <ProductDetails product={product} />;
}
