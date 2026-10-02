import { BEST_SELLERS } from "@/lib/products";
import PageTransition from "@/app/components/PageTransition";
import ProductCard from "@/app/components/ProductCard";

export default function BestSellersPage() {
  return (
    <PageTransition>
      <main className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">
          Best Sellers
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEST_SELLERS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </main>
    </PageTransition>
  );
}
