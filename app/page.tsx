import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";


export default function Home() {
  return (
    <main className="bg-white text-slate-900 pt-16">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-100">
      <div className="w-full pl-4 pr-6 h-16 flex items-center">
      {/* Left: menu icon (mobile) */}
    <button
      className="md:hidden mr-4 p-2 rounded-lg hover:bg-slate-50"
      aria-label="Open menu"
    >
      <span className="block w-5 h-[2px] bg-slate-900 mb-1" />
      <span className="block w-5 h-[2px] bg-slate-900 mb-1" />
      <span className="block w-5 h-[2px] bg-slate-900" />
    </button>

    {/* Left: Logo */}
    <div className="flex items-center">
      <Image
        src="/logo.png"
        alt="Torido"
        width={240}
        height={60}
        className="h-10 md:h-11 w-auto object-contain"
        priority
      />
    </div>

    {/* Center: Links */}
    <nav className="hidden md:flex items-center gap-10 ml-12 text-[13px] font-semibold tracking-[0.15em] uppercase text-slate-800">
    <Link href="#products" className="hover:text-lime-600 transition">
        T-Shirts
      </Link>
      <Link href="#faq" className="hover:text-lime-600 transition">
        FAQ
      </Link>
      <Link href="#contact" className="hover:text-lime-600 transition">
        Contact
      </Link>
    </nav>

    {/* Right: Icons */}
    
    <div className="ml-auto flex items-center gap-6">
  <Search size={20} strokeWidth={1.5} className="text-slate-800 cursor-pointer" />
  <User size={20} strokeWidth={1.5} className="text-slate-800 cursor-pointer" />
  <ShoppingBag size={20} strokeWidth={1.5} className="text-slate-800 cursor-pointer" />
</div>

  </div>
</header>


      {/* HERO */}
      <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Kids T-Shirt"
          fill
          priority
          className="object-cover object-[98%_center]"
          />

        <div className="relative z-10 max-w-6xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-xl">
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-lime-100 text-sm text-slate-700">
              Cash on Delivery • Fast Delivery
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Premium kids t-shirts,
              <br /> simple &amp; comfy.
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

      {/* PRODUCTS */}
      <section id="products" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-2">T-Shirts</h2>
        <p className="text-slate-500 mb-8">Minimal • White-first • Lime accents</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-80">
              <Image src="/product1.jpg" alt="Dino Smile Tee" fill className="object-cover" />
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

          <div className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-80">
              <Image src="/product2.png" alt="Unicorn Dreams Tee" fill className="object-cover" />
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

      {/* FAQ */}
      <section id="faq" className="max-w-6xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold mb-3">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-100 p-6">
            <p className="font-medium mb-2">How do I pay?</p>
            <p className="text-slate-600 text-sm">Cash on Delivery (COD) only.</p>
          </div>
          <div className="rounded-2xl border border-slate-100 p-6">
            <p className="font-medium mb-2">Delivery time?</p>
            <p className="text-slate-600 text-sm">We’ll confirm delivery after order.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <p className="font-semibold mb-2">Torido</p>
            <p className="text-slate-600">Minimal kidswear. Cash on delivery.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Support</p>
            <p className="text-slate-600">Delivery • COD • Exchanges</p>
          </div>
          <div>
            <p className="font-semibold mb-2">Contact</p>
            <p className="text-slate-600">WhatsApp: +94 …</p>
            <p className="text-slate-600">Email: …</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
