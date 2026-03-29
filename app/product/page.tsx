"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import { PRODUCTS } from "@/lib/products";

export default function ProductPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--primary)] mb-3">
              Shop
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-slate-950">
              All T-Shirts
            </h1>
            <p className="text-slate-600 mt-2">
              Browse all Torido T-shirts in one place.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-80">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full">
                    {p.badge}
                  </div>
                </div>

                <div className="p-5">
                  <h2 className="font-medium text-slate-900">{p.name}</h2>
                  <p className="mt-1 font-semibold text-slate-900">{p.price}</p>

                  <Link
                    href={`/product/${p.id}`}
                    className="text-sm mt-3 inline-block text-[var(--primary)] hover:underline"
                  >
                    View details →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="text-sm text-[var(--primary)] hover:underline"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}