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
        `https://wa.me/94781885192?text=${encodeURIComponent(
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
  <div className="space-y-5">
  {cart.map((item) => (
    <div
      key={item.id}
      className="
        group
        flex
        gap-5
        items-center
        bg-white
        rounded-3xl
        p-5
        border
        border-slate-100
        shadow-sm
        hover:shadow-lg
        transition-all
        duration-300
      "
    >
      {/* Product Image */}
      <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-50">
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="
            object-cover
            transition-transform
            duration-300
            group-hover:scale-105
          "
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        <h3 className="font-semibold text-lg text-slate-900">
          {item.name}
        </h3>

        <p className="mt-1 text-[#16A34A] font-semibold">
          {item.price}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-3 mt-4">
          <button
            onClick={() => decreaseQty(item.id)}
            className="
              w-8
              h-8
              border
              border-slate-200
              rounded-full
              flex
              items-center
              justify-center
              text-slate-700
              transition-all
              duration-150
              hover:bg-slate-100
              active:scale-90
            "
          >
            −
          </button>

          <span className="w-6 text-center font-semibold text-slate-900">
            {item.quantity || 1}
          </span>

          <button
            onClick={() => increaseQty(item.id)}
            className="
              w-8
              h-8
              border
              border-slate-200
              rounded-full
              flex
              items-center
              justify-center
              text-slate-700
              transition-all
              duration-150
              hover:bg-slate-100
              active:scale-90
            "
          >
            +
          </button>
        </div>
      </div>

      {/* Remove */}
      <button
        onClick={() => removeItem(item.id)}
        className="
          self-start
          text-sm
          text-slate-400
          hover:text-red-500
          transition-colors
          duration-200
        "
      >
        Remove
      </button>
    </div>
  ))}
</div>

          <div className="mt-10 bg-slate-50 rounded-3xl p-8">
  <div className="flex items-center justify-between">
    <span className="text-slate-600 text-lg">
      Order Total
    </span>

    <span className="text-3xl font-bold text-slate-900">
      Rs {total.toLocaleString()}
    </span>
  </div>

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
        transition-all
        duration-200
        active:scale-95
      "
    >
      Empty Cart
    </button>

    <button
      onClick={requestOrder}
      className="
        px-8
        py-3
        rounded-xl
        bg-[#7BC043]
        text-white
        font-semibold
        hover:bg-[#69b035]
        transition-all
        duration-200
        active:scale-95
        shadow-sm
        hover:shadow-md
      "
    >
      Request Order
    </button>
  </div>
</div>

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
