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

    return (
      sum +
      price * (item.quantity || 1)
    );
  }, 0);

  async function requestOrder() {
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please login first");
      return;
    }

    if (cart.length === 0) {
      toast.error("Your cart is empty");
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

      // Save order to Firestore
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

      // Open WhatsApp
      window.open(
        `https://wa.me/94781885192?text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );

      toast.success("Order submitted");

      // Clear cart
      await clearCart();

    } catch (error: any) {
      console.error(
        "ORDER SUBMISSION ERROR:",
        error
      );

      console.error(
        "Firebase error code:",
        error?.code
      );

      console.error(
        "Firebase error message:",
        error?.message
      );

      toast.error(
        error?.message ||
          "Failed to submit order"
      );
    }
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* PAGE TITLE */}
      <div className="mb-10">
        <p className="uppercase tracking-[0.2em] text-[#7BC043] font-semibold text-sm mb-2">
          Your Selection
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
          Shopping Cart
        </h1>
      </div>

      {cart.length === 0 ? (

        /* EMPTY CART */
        <div
          className="
            bg-slate-50
            rounded-3xl
            border
            border-slate-100
            p-12
            text-center
          "
        >
          <h2 className="text-2xl font-semibold text-slate-900">
            Your cart is empty
          </h2>

          <p className="mt-3 text-slate-500">
            Add some T-shirts to your cart and they will
            appear here.
          </p>

          <a
            href="/tshirts"
            className="
              inline-flex
              mt-7
              px-8
              py-3
              rounded-full
              bg-[#7BC043]
              text-white
              font-semibold
              hover:bg-[#69b035]
              transition-all
              duration-200
            "
          >
            Shop T-Shirts
          </a>
        </div>

      ) : (

        <>
          {/* CART ITEMS */}
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

                {/* PRODUCT IMAGE */}
                <div
                  className="
                    relative
                    w-28
                    h-28
                    flex-shrink-0
                    overflow-hidden
                    rounded-2xl
                    bg-slate-50
                  "
                >
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

                {/* PRODUCT DETAILS */}
                <div className="flex-1 min-w-0">

                  <h3 className="font-semibold text-lg text-slate-900">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-[#16A34A] font-semibold">
                    {item.price}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 mt-4">

                    {/* DECREASE */}
                    <button
                      onClick={() =>
                        decreaseQty(item.id)
                      }
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
                        hover:border-slate-300
                        active:scale-90
                      "
                    >
                      −
                    </button>

                    {/* QUANTITY */}
                    <span className="w-6 text-center font-semibold text-slate-900">
                      {item.quantity || 1}
                    </span>

                    {/* INCREASE */}
                    <button
                      onClick={() =>
                        increaseQty(item.id)
                      }
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
                        hover:border-slate-300
                        active:scale-90
                      "
                    >
                      +
                    </button>

                  </div>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() =>
                    removeItem(item.id)
                  }
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

          {/* ORDER SUMMARY */}
          <div
            className="
              mt-10
              bg-slate-50
              rounded-3xl
              p-8
              border
              border-slate-100
            "
          >

            <div className="flex items-center justify-between">

              <span className="text-slate-600 text-lg">
                Order Total
              </span>

              <span className="text-3xl font-bold text-slate-900">
                Rs {total.toLocaleString()}
              </span>

            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4 mt-6 flex-wrap">

              {/* EMPTY CART */}
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

              {/* REQUEST ORDER */}
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
        </>
      )}
    </main>
  );
}
