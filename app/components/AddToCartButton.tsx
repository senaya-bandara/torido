"use client";

export default function AddToCartButton({
  product,
}: {
  product: any;
}) {
  const addToCart = () => {
    const cart = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    window.dispatchEvent(
      new Event("cartUpdated")
    );

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
