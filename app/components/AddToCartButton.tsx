"use client";

import { auth, db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export default function AddToCartButton({
  product,
}: {
  product: any;
}) {
  const addToCart = async () => {
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please login first");
      return;
    }

    try {
      const cartRef = doc(db, "carts", user.uid);

      const cartSnap = await getDoc(cartRef);

      let items: any[] = [];

      if (cartSnap.exists()) {
        items = cartSnap.data().items || [];
      }

     const existingItem = items.find(
  (item: any) =>
    item.id === product.id &&
    item.selectedColor === product.selectedColor &&
    item.selectedSize === product.selectedSize
);

      if (existingItem) {
        existingItem.quantity =
          (existingItem.quantity || 1) + 1;
      } else {
        items.push({
          ...product,
          quantity: 1,
        });
      }

      await setDoc(cartRef, {
        items,
      });

      window.dispatchEvent(
        new Event("cartUpdated")
      );

      toast.success(
        `${product.name} added to cart`
      );
    } catch (error) {
      console.error(error);
      toast.error("Failed to add item");
    }
  };

  return (
    <button
      onClick={addToCart}
      className="
        px-6
        py-3
        rounded-xl
        bg-[var(--primary)]
        text-white
        font-semibold
        hover:bg-[var(--primary-dark)]
        transition
      "
    >
      Add to Cart
    </button>
  );
}
