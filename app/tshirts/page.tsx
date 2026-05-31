import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import { PRODUCTS } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function TshirtsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8">T-Shirts</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PRODUCTS.map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className="block rounded-2xl bg-white border shadow-sm overflow-hidden"
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
                <h3>{p.name}</h3>
                <p>{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
