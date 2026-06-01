"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    loadCart();
  }, []);

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

  async function saveCart(updatedCart: any[]) {
    const user = auth.currentUser;

    if (!user) return;

    await setDoc(
      doc(db, "carts", user.uid),
      {
        items: updatedCart,
      }
    );

    setCart(updatedCart);

    window.dispatchEvent(
      new Event("cartUpdated")
    );
  }

  async function increaseQty(id: string) {
    const updated = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              (item.quantity || 1) + 1,
          }
        : item
    );

    await saveCart(updated);
  }

  async function decreaseQty(id: string) {
    const updated = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(
              1,
              (item.quantity || 1) - 1
            ),
          }
        : item
    );

    await saveCart(updated);
  }

  async function removeItem(id: string) {
    const updated = cart.filter(
      (item) => item.id !== id
    );

    await saveCart(updated);

    toast.success("Item removed");
  }

  async function clearCart() {
    await saveCart([]);

    toast.success("Cart emptied");
  }

  const total = cart.reduce(
    (sum, item) => {
      const price = Number(
        String(item.price).replace(
          /[^\d]/g,
          ""
        )
      );

      return (
        sum +
        price * (item.quantity || 1)
      );
    },
    0
  );

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 items-center border rounded-2xl p-4"
              >
                <div className="relative w-24 h-24">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold">
                    {item.name}
                  </h3>

                  <p>{item.price}</p>

                  <div className="flex gap-3 mt-3 items-center">
                    <button
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                      className="w-8 h-8 border rounded-full"
                    >
                      -
                    </button>

                    <span>
                      {item.quantity || 1}
                    </span>

                    <button
                      onClick={() =>
                        increaseQty(item.id)
                      }
                      className="w-8 h-8 border rounded-full"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
                  className="text-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-2xl font-bold">
              Total: Rs {total.toLocaleString()}
            </h2>

            <div className="flex gap-4 mt-6">
              <button
                onClick={clearCart}
                className="px-6 py-3 rounded-xl bg-red-500 text-white"
              >
                Empty Cart
              </button>

              <button
                className="px-6 py-3 rounded-xl bg-green-600 text-white"
              >
                Request Order
              </button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
