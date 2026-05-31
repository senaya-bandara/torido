"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";

export default function TshirtsPage() {
  return (
<motion.main
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="pt-24"
>
      {/* HERO */}
      <section className="relative h-[60vh] -mt-20 overflow-hidden">
        <Image
  src="/hero-tshirt.png"
  alt="T-Shirts"
  fill
  className="object-cover object-[center_20%]"
/>

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />

<div className="absolute inset-0 flex items-center pt-16">
  <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl text-white">
              <p className="uppercase tracking-[0.25em] mb-4">
                Premium Kids Collection
              </p>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                T-Shirts For Everyday Adventures
              </h1>

              <p className="mt-6 text-lg text-white/90">
                Comfortable, durable and playful designs made for active kids.
              </p>

              <Link
                href="#products"
                className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-white border-y">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

            <div>
              <div className="text-3xl mb-2">🌿</div>
              <p className="font-semibold">100% Cotton</p>
            </div>

            <div>
              <div className="text-3xl mb-2">🚚</div>
              <p className="font-semibold">Islandwide Delivery</p>
            </div>

            <div>
              <div className="text-3xl mb-2">💵</div>
              <p className="font-semibold">Cash On Delivery</p>
            </div>

            <div>
              <div className="text-3xl mb-2">⭐</div>
              <p className="font-semibold">Premium Quality</p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION TITLE */}
      <section
        id="products"
        className="max-w-7xl mx-auto px-6 pt-16 pb-10"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">

          <div>
            <p className="text-green-600 font-semibold uppercase tracking-widest">
              Collection
            </p>

            <h2 className="text-4xl font-bold text-slate-900">
              Shop T-Shirts
            </h2>
          </div>

          <div className="flex gap-3 flex-wrap">

            <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              New Arrivals
            </span>

            <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
              Best Sellers
            </span>

            <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
              Cotton Tees
            </span>

          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {PRODUCTS.map((p) => (
            <Link
              key={p.id}
              href={`/product/${p.id}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-[450px] overflow-hidden bg-white">

                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
                  NEW
                </div>

              </div>

              <div className="p-6">

                <h3 className="font-semibold text-xl text-slate-900">
                  {p.name}
                </h3>

                <p className="mt-2 text-lg font-bold text-green-600">
                  {p.price}
                </p>

                <div className="flex items-center justify-between mt-5">

                  <span className="text-yellow-500">
                    ★★★★★
                  </span>

                  <span className="text-green-600 font-medium">
                    View →
                  </span>

                </div>

              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* PROMOTIONAL BANNER */}
      <section className="max-w-7xl mx-auto px-6 pb-20">

        <div className="rounded-[40px] bg-gradient-to-r from-green-600 to-green-500 text-white overflow-hidden">

          <div className="grid md:grid-cols-2 gap-10 items-center p-12">

            <div>
              <p className="uppercase tracking-widest mb-4">
                Exclusive Offer
              </p>

              <h2 className="text-4xl font-bold mb-4">
                Buy 2 Get 1 Free
              </h2>

              <p className="text-white/90">
                Limited time offer on selected Torido collections.
              </p>

              <button className="mt-8 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Shop Offers
              </button>
            </div>

            <div className="text-center text-8xl">
              🎉
            </div>

          </div>

        </div>

      </section>

    </motion.main>
  );
}
