import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white text-slate-900">

      {/* HERO SECTION */}
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/hero.jpg"
          alt="Kids T-Shirt"
          fill
          priority
          className="object-cover"
        />

        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/60 to-transparent" />

        {/* Text Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-lime-100 text-sm text-slate-700">
              Cash on Delivery • Fast Delivery
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Premium kids t-shirts,
              <br /> simple & comfy.
            </h1>

            <p className="mt-4 text-slate-600">
              We moved from wholesale to direct retail — same quality, better value.
            </p>

            <Link
              href="#products"
              className="inline-block mt-6 px-6 py-3 rounded-xl bg-lime-400 text-slate-900 font-medium hover:bg-lime-500 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-2">T-Shirts</h2>
        <p className="text-slate-500 mb-8">
          Minimal • White-first • Lime accents
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Product Card 1 */}
          <div className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-80">
              <Image
                src="/product1.jpg"
                alt="Dino Tee"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-lime-400 text-xs px-3 py-1 rounded-full">
                COD
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-medium">Dino Smile Tee</h3>
              <p className="mt-1 font-semibold">Rs 2,450</p>
              <Link
                href="/product/dino-smile"
                className="text-sm mt-3 inline-block text-lime-600 hover:underline"
              >
                View details →
              </Link>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-80">
              <Image
                src="/product2.png"
                alt="Unicorn Tee"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-lime-400 text-xs px-3 py-1 rounded-full">
                COD
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-medium">Unicorn Dreams Tee</h3>
              <p className="mt-1 font-semibold">Rs 2,300</p>
              <Link
                href="/product/unicorn-dreams"
                className="text-sm mt-3 inline-block text-lime-600 hover:underline"
              >
                View details →
              </Link>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
