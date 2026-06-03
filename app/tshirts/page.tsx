"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/app/components/PageTransition";
import { useEffect, useState } from "react";

 const heroImages = [
  "/product1.png",
  "/product2.png",
  "/product3.png",
];

export default function TshirtsPage() {

  const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const timer = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 4000);

  return () => clearInterval(timer);
}, []);

  
  return (

    <PageTransition>

<motion.main
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

 
      {/* HERO */}
<section className="relative h-[70vh] overflow-hidden">
 {heroImages.map((image, index) => (
  <Image
    key={image}
    src={image}
    alt="Torido Hero"
    fill
    priority
    className={`
      object-cover
      absolute
      transition-opacity
      duration-1000
      ${index === currentImage ? "opacity-100" : "opacity-0"}
    `}
  />
))}

<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
 
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
  className="
  inline-flex
  items-center
  justify-center
  px-8
  py-4
  mt-10
  rounded-2xl
  bg-white
  text-slate-900
  font-semibold
  shadow-lg
  hover:shadow-2xl
  hover:-translate-y-1
  transition-all
  duration-300
  "
>
  Shop Collection
</Link>
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

             
            </div>

            <div className="text-center text-8xl">
               <button className="mt-8 bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                Shop Offers
              </button>
            </div>

          </div>

        </div>

      </section>

    </motion.main>
    </PageTransition>

  );
}
