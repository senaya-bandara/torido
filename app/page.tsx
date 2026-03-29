"use client";

import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import { useState } from "react";

import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import { PRODUCTS, BEST_SELLERS } from "@/lib/products";


export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [submittedSearch, setSubmittedSearch] = useState("");

  const filteredProducts = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes(submittedSearch.toLowerCase())
  );

  const isSearching = submittedSearch.length > 0;

  return (
    <>
      <Navbar />

      <main className="pt-20 text-slate-900">

        {/* SEARCH BAR */}
        <div className="max-w-7xl mx-auto px-6 mt-6">
          <div className="flex items-center border border-slate-200 rounded-xl px-3 py-2 w-full md:w-96 focus-within:ring-2 focus-within:ring-[var(--primary)]">
            <Search size={18} className="text-slate-500" />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setSubmittedSearch(searchInput.trim());
                }
              }}
              placeholder="Search tees..."
              className="ml-2 w-full text-sm outline-none"
            />
          </div>
        </div>

        {/* HERO (hide when searching) */}
        {!isSearching && (
          <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--primary)] mb-4">
                Everyday Essentials
              </p>

              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Comfort made <span className="text-[var(--primary)]">simple.</span>
              </h1>

              <p className="mt-4 text-slate-600">
                Premium cotton tees for kids — soft, safe, and built for play.
              </p>
            </div>

            <div className="relative h-[400px]">
              <Image
                src="/hero.jpg"
                alt="Hero"
                fill
                className="object-cover rounded-2xl"
              />
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
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="font-semibold mt-1">{p.price}</p>

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
        </section>

        {/* BEST SELLERS (hide when searching) */}
        {!isSearching && (
          <section className="max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-2xl font-semibold mb-6">Best Sellers</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {BEST_SELLERS.map((p) => (
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
                  </div>

                  <div className="p-5">
                    <h3 className="font-medium">{p.name}</h3>
                    <p className="font-semibold mt-1">{p.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </>
  );
}