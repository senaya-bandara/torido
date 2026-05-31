import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";
import Image from "next/image";
import { BEST_SELLERS } from "@/lib/products";
import PageTransition from "@/app/components/PageTransition";



export default function BestSellersPage() {
  return (
    <>

    <PageTransition>

      <main className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-8">Best Sellers</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {BEST_SELLERS.map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className="
block
rounded-3xl
bg-white
overflow-hidden
shadow-md
hover:shadow-2xl
hover:-translate-y-2
transition-all
duration-300
"
            >
              <div className="relative h-80">
                <Image src={p.image} alt={p.name} fill className="object-cover" />
              </div>

              <div className="p-5">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="mt-1">{p.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

     </PageTransition>

    </>
  );
}
