"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { PRODUCTS, BEST_SELLERS } from "@/lib/products";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(submittedSearch.toLowerCase())
  );

  const isSearching = submittedSearch.length > 0;

  return (
    <main className="text-slate-900">
      {/* HERO (hide when searching) */}
      {!isSearching && (
        <section className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Hero"
            fill
            priority
            className="object-cover object-[100%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-soft)] via-white/60 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-[620px]">
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--primary)] mb-4">
                Everyday Essentials
              </p>

              <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] tracking-tight text-slate-900">
                Comfort made <span className="text-[var(--primary)]">simple.</span>
              </h1>

              <p className="mt-4 text-slate-600 text-base md:text-lg">
                Premium cotton tees for kids — soft, safe, and built for play.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* PRODUCTS / SEARCH RESULTS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl font-semibold mb-6">
          {isSearching ? "Search Results" : "Products"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {(isSearching ? filteredProducts : PRODUCTS).map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className="block rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-80">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full">
                  {p.badge}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-medium group-hover:text-[var(--primary)] transition">
                  {p.name}
                </h3>
                <p className="font-semibold mt-1">{p.price}</p>

                <span className="text-sm mt-3 inline-block text-[var(--primary)] group-hover:underline">
                  View details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* BEST SELLERS (hide when searching) */}
      {!isSearching && (
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h2 className="text-2xl font-semibold mb-6">Best Sellers</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BEST_SELLERS.map((p) => (
              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="block rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-80">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full">
                    {p.badge}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-medium group-hover:text-[var(--primary)] transition">
                    {p.name}
                  </h3>
                  <p className="font-semibold mt-1">{p.price}</p>

                  <span className="text-sm mt-3 inline-block text-[var(--primary)] group-hover:underline">
                    View details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}