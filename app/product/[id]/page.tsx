import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, BEST_SELLERS } from "@/lib/products";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default function ProductPage({ params }: ProductPageProps) {
  const allProducts = [...PRODUCTS, ...BEST_SELLERS];
  const product = allProducts.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 text-slate-900">
      <Link
        href="/"
        className="inline-block mb-8 text-sm text-[var(--primary)] hover:underline"
      >
        ← Back to products
      </Link>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div className="relative h-[500px] rounded-3xl overflow-hidden border border-slate-200 bg-white">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <div className="inline-block mb-3 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full">
            {product.badge}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
          <p className="mt-3 text-2xl font-semibold">{product.price}</p>

          <p className="mt-5 text-slate-600 leading-relaxed">
            {"description" in product
              ? product.description
              : "Premium kidswear made for comfort, movement, and everyday play."}
          </p>

          {"sizes" in product && Array.isArray(product.sizes) && (
            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500 mb-3">
                Available Sizes
              </h2>

              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 rounded-xl border border-slate-300 text-sm hover:border-[var(--primary)] hover:text-[var(--primary)] transition"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition">
              Add to Cart
            </button>

            <a
              href="https://wa.me/94769737089"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-slate-300 font-semibold hover:bg-slate-50 transition"
            >
              Order on WhatsApp
            </a>
          </div>

          <div className="mt-10 border-t border-slate-200 pt-6 space-y-3 text-sm text-slate-600">
            <p><span className="font-medium text-slate-900">Fabric:</span> Premium cotton</p>
            <p><span className="font-medium text-slate-900">Delivery:</span> Islandwide delivery available</p>
            <p><span className="font-medium text-slate-900">Payment:</span> Cash on Delivery</p>
          </div>
        </div>
      </div>
    </main>
  );
}