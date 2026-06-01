"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { auth, db } from "@/lib/firebase";
import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
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
            quantity: (item.quantity || 1) + 1,
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
    const user = auth.currentUser;

    if (!user) return;

    await setDoc(
      doc(db, "carts", user.uid),
      {
        items: [],
      }
    );

    setCart([]);

    window.dispatchEvent(
      new Event("cartUpdated")
    );

    toast.success("Cart emptied");
  }

  const total = cart.reduce((sum, item) => {
    const price = Number(
      String(item.price).replace(/[^\d]/g, "")
    );

    return sum + price * (item.quantity || 1);
  }, 0);

  async function requestOrder() {
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please login first");
      return;
    }

    try {
      const order = {
        userId: user.uid,
        email: user.email,
        items: cart,
        total,
        status: "Pending",
        createdAt: new Date(),
      };

      await addDoc(
        collection(db, "orders"),
        order
      );

      const message = `
Hello Torido,

I would like to place an order.

${cart
  .map(
    (item) =>
      `• ${item.name} x ${item.quantity || 1}`
  )
  .join("\n")}

Total: Rs ${total.toLocaleString()}

Name:
Phone:
Address:
`;

      window.open(
        `https://wa.me/94769737089?text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );

      toast.success("Order submitted");

      await clearCart();
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit order");
    }
  }

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
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-slate-600">
                    {item.price}
                  </p>

                  <div className="flex gap-3 mt-3 items-center">
                    <button
                      onClick={() =>
                        decreaseQty(item.id)
                      }
                      className="w-8 h-8 border rounded-full"
                    >
                      -
                    </button>

                    <span className="font-medium">
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
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-3xl font-bold">
              Total: Rs {total.toLocaleString()}
            </h2>

            <div className="flex gap-4 mt-6 flex-wrap">
              <button
                onClick={clearCart}
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-red-500
                  text-white
                  hover:bg-red-600
                "
              >
                Empty Cart
              </button>

              <button
                onClick={requestOrder}
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-green-600
                  text-white
                  hover:bg-green-700
                "
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
