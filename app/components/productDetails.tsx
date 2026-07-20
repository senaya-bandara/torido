
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

export default function ProductDetails({
  product,
}: {
  product: any;
}) {
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || {
      name: "",
      image: product.image,
    }
  );

  const [selectedSize, setSelectedSize] = useState(
    product.sizes?.[0] || ""
  );

  return (
    <main className="bg-white text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Back */}
        <Link
          href="/tshirts"
          className="inline-block mb-8 text-sm text-[var(--primary)] hover:underline"
        >
          ← Back to products
        </Link>

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Product Image */}
          <div className="relative h-[450px] md:h-[550px] rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm">
            <Image
              src={selectedColor.image}
              alt={product.name}
              fill
              className="object-cover transition-all duration-300"
            />
          </div>

          {/* Product Details */}
          <div>

            <div className="inline-block mb-3 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full">
              {product.badge}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {product.name}
            </h1>

            <p className="mt-3 text-2xl font-semibold text-[var(--primary)]">
              {product.price}
            </p>

            <p className="mt-5 text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}

            {product.colors && (
              <div className="mt-8">

                <h3 className="font-semibold mb-4">
                  Colour
                </h3>

                <div className="flex flex-wrap gap-3">

                  {product.colors.map((color: any) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color)}
                      className={`px-5 py-2 rounded-full border transition-all ${
                        selectedColor.name === color.name
                          ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                          : "bg-white border-slate-300 hover:border-[var(--primary)]"
                      }`}
                    >
                      {color.name}
                    </button>
                  ))}

                </div>

              </div>
            )}

            {/* Size Selection */}

            {product.sizes && (
              <div className="mt-8">

                <h3 className="font-semibold mb-4">
                  Size
                </h3>

                <div className="flex flex-wrap gap-3">

                  {product.sizes.map((size: string) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-full border transition-all ${
                        selectedSize === size
                          ? "bg-[var(--primary)] text-white border-[var(--primary)]"
                          : "bg-white border-slate-300 hover:border-[var(--primary)]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}

                </div>

              </div>
            )}
                        {/* Actions */}
            <div className="mt-10 flex gap-4 flex-wrap">
              <AddToCartButton
                product={{
                  ...product,
                  image: selectedColor.image,
                  selectedColor: selectedColor.name,
                  selectedSize,
                }}
              />
            </div>

            {/* Product Summary */}
            <div className="mt-10 border-t pt-8 space-y-4">

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Selected Colour
                </span>

                <span className="font-medium">
                  {selectedColor.name}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-500">
                  Selected Size
                </span>

                <span className="font-medium">
                  {selectedSize}
                </span>
              </div>

            </div>

            {/* Info */}
            <div className="mt-8 text-sm text-slate-600 space-y-2">
              <p>✔ Cash on Delivery available</p>
              <p>✔ Islandwide delivery</p>
              <p>✔ 7-day exchange policy</p>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
