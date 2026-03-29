"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PRODUCTS } from "@/lib/products";

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;

  const product = useMemo(
    () => PRODUCTS.find((p) => p.id === id),
    [id]
  );

  const [selectedSize, setSelectedSize] = useState(
    product?.sizes?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);

  function handleAddToCart() {
    if (!product) return;

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const cartItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity,
    };

    existingCart.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(existingCart));

    window.dispatchEvent(new Event("cartUpdated"));
    alert("Added to cart");
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 py-24">
          <h1 className="text-2xl font-bold text-slate-900">Product not found</h1>
          <p className="mt-3 text-slate-600">
            The T-shirt you are looking for does not exist.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 text-[var(--primary)] hover:underline"
          >
            ← Back to home
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 bg-white">
            <div className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Details */}
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--primary)] mb-3">
              {product.badge}
            </p>

            <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-slate-950">
              {product.name}
            </h1>

            <p className="mt-3 text-2xl font-semibold text-slate-900">
              {product.price}
            </p>

            <p className="mt-5 text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Sizes */}
            <div className="mt-8">
              <h2 className="text-sm font-semibold text-slate-900 mb-3">Size</h2>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-xl border text-sm font-medium transition ${
                      selectedSize === size
                        ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                        : "border-slate-300 text-slate-700 hover:border-[var(--primary)]"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-8">
              <h2 className="text-sm font-semibold text-slate-900 mb-3">Quantity</h2>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                  className="w-10 h-10 rounded-lg border border-slate-300 text-lg"
                >
                  -
                </button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity((prev) => prev + 1)}
                  className="w-10 h-10 rounded-lg border border-slate-300 text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <div className="mt-10">
              <button
                onClick={handleAddToCart}
                className="w-full md:w-auto px-8 py-4 rounded-2xl bg-[var(--primary)] text-white font-semibold hover:opacity-90 transition"
              >
                Add to Cart
              </button>
            </div>

            <Link
              href="/"
              className="inline-block mt-6 text-sm text-[var(--primary)] hover:underline"
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