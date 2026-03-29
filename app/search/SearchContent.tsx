"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS, BEST_SELLERS } from "@/lib/products";

export default function SearchContent() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") || "").toLowerCase();

  const allProducts = [...PRODUCTS, ...BEST_SELLERS];

  const results = allProducts.filter((p) =>
    p.name.toLowerCase().includes(query)
  );

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 text-slate-900">
      <h1 className="text-2xl font-semibold mb-6">
        Search results for "{query}"
      </h1>

      {results.length === 0 ? (
        <p className="text-slate-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className="block rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition overflow-hidden"
            >
              <div className="relative h-80">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5">
                <h3 className="font-medium">{p.name}</h3>
                <p className="font-semibold mt-1">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}