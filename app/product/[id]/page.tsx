import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, BEST_SELLERS } from "@/lib/products";

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

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        {/* Back */}
        <Link
          href="/"
          className="inline-block mb-8 text-sm text-[var(--primary)] hover:underline"
        >
          ← Back to products
        </Link>

        {/* Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          
          {/* Image */}
          <div className="relative h-[450px] md:h-[500px] rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <div className="inline-block mb-3 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full">
              {product.badge}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {product.name}
            </h1>

            <p className="mt-3 text-2xl font-semibold text-[var(--primary)]">
              {product.price}
            </p>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Premium kidswear made for comfort, movement, and everyday play.
              Soft cotton, safe prints, and durable stitching for active kids.
            </p>

            {/* Actions */}
            <div className="mt-8 flex gap-4 flex-wrap">
              <button className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition">
                Add to Cart
              </button>

              <button className="px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 transition">
                Buy Now
              </button>
            </div>

            {/* Info */}
            <div className="mt-8 text-sm text-slate-600 space-y-2">
              <p>✔ Cash on Delivery available</p>
              <p>✔ Islandwide delivery</p>
              <p>✔ 7-day exchange policy</p>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}