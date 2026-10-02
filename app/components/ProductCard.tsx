import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: any;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="
        block
        rounded-3xl
        bg-white
        overflow-hidden
        shadow-md
        hover:shadow-2xl
        hover:-translate-y-2
        transition-all
        duration-300
      "
    >
      {/* Product Image */}
      <div className="relative h-96">
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 bg-[#7BC043] text-white text-sm font-semibold px-4 py-2 rounded-full">
            {product.badge}
          </span>
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-top"
        />
      </div>

      {/* Product Information */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-slate-900">
          {product.name}
        </h3>

        <p className="mt-3 text-xl font-bold text-[#16A34A]">
          LKR {product.price}
        </p>

        <div className="mt-6 flex items-center justify-between">
          {/* Rating */}
          <div className="text-yellow-500 text-lg">
            ★★★★★
          </div>

          {/* View */}
          <span className="text-[#16A34A] font-semibold">
            View →
          </span>
        </div>
      </div>
    </Link>
  );
}
