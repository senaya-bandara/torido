import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingBag } from "lucide-react";
import { Leaf, ShieldCheck, Truck, RefreshCcw } from "lucide-react";



export default function Home() {
  return (
    <main className="bg-white text-slate-900 pt-16">
      {/* NAVBAR */}
    

{/* NAVBAR */}
<header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
  <div className="max-w-7xl mx-auto pl-2 pr-6 h-16 flex items-center justify-between">
    {/* Left: Logo */}
    <Link href="/" className="flex items-center">
      <Image
        src="/logo.png"
        alt="Torido"
        width={260}
        height={80}
        className="h-11 w-auto object-contain"
        priority
      />
    </Link>

    {/* Center: Nav */}
    <nav className="hidden md:flex items-center gap-10 text-[13px] font-semibold tracking-[0.18em] uppercase text-slate-900">
      <Link href="#products" className="hover:text-[var(--primary)] transition">
        T-Shirts
      </Link>
      <Link href="#new" className="hover:text-[var(--primary)] transition">
        New
      </Link>
      <Link href="#best" className="hover:text-[var(--primary)] transition">
        Best Sellers
      </Link>
      <Link href="#offers" className="hover:text-[var(--primary)] transition">
        Offers
      </Link>
      <Link href="#faq" className="hover:text-[var(--primary)] transition">
        FAQ
      </Link>
    </nav>

    {/* Right: Search + Icons */}
    <div className="flex items-center gap-4">
      <div className="hidden md:flex items-center border border-slate-200 rounded-xl px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-[var(--primary)]">
        <Search size={18} strokeWidth={1.5} className="text-slate-500" />
        <input
          className="ml-2 w-full text-sm outline-none"
          placeholder="Search tees, sizes, colors…"
        />
      </div>

      <button className="p-2 rounded-lg hover:bg-slate-50" aria-label="Account">
        <User size={20} strokeWidth={1.5} className="text-slate-900" />
      </button>

      <button className="relative p-2 rounded-lg hover:bg-slate-50" aria-label="Cart">
        <ShoppingBag size={20} strokeWidth={1.5} className="text-slate-900" />
        <span className="absolute -top-1 -right-1 bg-[var(--coral)] text-white text-[10px] leading-none px-1.5 py-1 rounded-full">
          0
        </span>
      </button>
    </div>
  </div>
</header>

     {/* HERO */}
<section className="relative w-full h-[75vh] min-h-[540px] overflow-hidden">
  <Image
    src="/hero.jpg"
    alt="Kids wearing Torido T-shirt"
    fill
    priority
    className="object-cover object-[100%_center]"

  />

  {/* Soft overlay for text readability */}
  <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
    <div className="max-w-[560px]">

    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_55%,rgba(0,0,0,0.06)_100%)]" />



    <span className="inline-block mb-4 text-xs uppercase tracking-wider text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/15">
  Everyday Essentials
</span>

      {/* Headline */}
      <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-slate-900">
  Comfort made{" "}
  <span className="relative inline-block">
    simple.
    <span className="absolute left-0 -bottom-1 w-full h-2 bg-[var(--primary)]/25 -z-10 rounded-md" />
  </span>
</h1>


      {/* Supporting Line */}
      <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
  Premium cotton t-shirts designed for comfort, and everyday adventures.
</p>


      {/* Micro Trust Row */}
      <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600">
  <span className="inline-flex items-center gap-2">
    <Leaf size={16} className="text-[var(--primary)]" /> Soft cotton
  </span>
  <span className="inline-flex items-center gap-2">
    <ShieldCheck size={16} className="text-[var(--primary)]" /> Kid-safe prints
  </span>
  <span className="inline-flex items-center gap-2">
    <Truck size={16} className="text-[var(--primary)]" /> Fast delivery
  </span>
  <span className="inline-flex items-center gap-2">
    <RefreshCcw size={16} className="text-[var(--primary)]" /> 7-day exchange
  </span>
</div>


    </div>
  </div>
</section>


{/* SHOP BY AGE */}
<section id="products" className="bg-white max-w-7xl mx-auto px-6 py-16">
  <div className="max-w-7xl mx-auto px-6 py-14">
    <h2 className="text-xl font-semibold">Shop by Age</h2>
    <p className="text-slate-600 text-sm mt-1">Quick access for parents.</p>

    <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {["0–12m","1–2y","3–4y","5–6y","7–8y","9–10y"].map((x) => (
        <button
          key={x}
          className="h-12 rounded-2xl bg-white border border-slate-200 text-sm font-medium hover:border-[var(--primary)] hover:bg-white transition"
        >
          {x}
        </button>
      ))}
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

      <section id="best" className="max-w-7xl mx-auto px-6 pb-16">
  <h2 className="text-xl font-semibold mb-2">Best Sellers</h2>
  <p className="text-slate-500 mb-6 text-sm">Most loved picks.</p>
  <div className="rounded-2xl border border-slate-100 p-8 text-slate-600">
    Carousel coming next (we’ll build it after cart + product data).
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

<section id="new" className="max-w-7xl mx-auto px-6 pb-16">
  <h2 className="text-xl font-semibold mb-2">New Arrivals</h2>
  <p className="text-slate-500 mb-6 text-sm">Fresh drops.</p>
  <div className="rounded-2xl border border-slate-100 p-8 text-slate-600">
    New arrivals section coming next.
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

          <div className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-80">
              <Image src="/product2.png" alt="Unicorn Dreams Tee" fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-[var(--primary)]
 text-xs px-3 py-1 rounded-full">
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

          <div className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-80">
              <Image src="/product2.png" alt="Unicorn Dreams Tee" fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-[var(--primary)]
 text-xs px-3 py-1 rounded-full">
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

          <div className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-80">
              <Image src="/product2.png" alt="Unicorn Dreams Tee" fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-[var(--primary)]
 text-xs px-3 py-1 rounded-full">
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

          <div className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-80">
              <Image src="/product2.png" alt="Unicorn Dreams Tee" fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-[var(--primary)]
 text-xs px-3 py-1 rounded-full">
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

          <div className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-80">
              <Image src="/product2.png" alt="Unicorn Dreams Tee" fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-[var(--primary)]
 text-xs px-3 py-1 rounded-full">
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
          <div className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-80">
              <Image src="/product2.png" alt="Unicorn Dreams Tee" fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-[var(--primary)]
 text-xs px-3 py-1 rounded-full">
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

          <div className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden">
            <div className="relative h-80">
              <Image src="/product2.png" alt="Unicorn Dreams Tee" fill className="object-cover" />
              <div className="absolute top-3 left-3 bg-[var(--primary)]
 text-xs px-3 py-1 rounded-full">
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
