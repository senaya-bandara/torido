"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    async function loadCart() {
      const user = auth.currentUser;

      if (!user) return;

      const snap = await getDoc(
        doc(db, "carts", user.uid)
      );

      if (snap.exists()) {
        setCart(snap.data().items || []);
      }
    }

    loadCart();
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 border-b pb-4"
            >
              <div className="relative w-24 h-24">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              <div>
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p>{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
