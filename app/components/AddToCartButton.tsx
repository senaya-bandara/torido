"use client";

import { auth, db } from "@/lib/firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export default function AddToCartButton({
  product,
}: {
  product: any;
}) {

  const addToCart = async () => {
    const user = auth.currentUser;

    if (!user) {
      alert("Please login first");
      return;
    }

    const cartRef = doc(db, "carts", user.uid);

    const cartSnap = await getDoc(cartRef);

    let items = [];

    if (cartSnap.exists()) {
      items = cartSnap.data().items || [];
    }

    items.push(product);

    await setDoc(cartRef, {
      items,
    });

    alert("Added to cart!");
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
