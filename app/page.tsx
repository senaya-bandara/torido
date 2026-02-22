import Image from "next/image";
import Link from "next/link";
import { Search, User, ShoppingBag, Leaf, ShieldCheck, Truck, RefreshCcw } from "lucide-react";


const PRODUCTS = [
  { id: "dino-smile", name: "Dino Smile Tee", price: "Rs 2,450", image: "/product1.jpg", badge: "COD" },
  { id: "unicorn-dreams", name: "Unicorn Dreams Tee", price: "Rs 2,300", image: "/product2.png", badge: "COD" },
  { id: "unicorn-dreams-2", name: "Unicorn Dreams Tee", price: "Rs 2,300", image: "/product2.png", badge: "COD" },

  { id: "tshirt-4", name: "Dino Smile Tee", price: "Rs 2,450", image: "/product1.jpg", badge: "COD" },
  { id: "tshirt-5", name: "Unicorn Dreams Tee", price: "Rs 2,300", image: "/product2.png", badge: "COD" },
  { id: "tshirt-6", name: "Unicorn Dreams Tee", price: "Rs 2,300", image: "/product2.png", badge: "COD" },

  { id: "tshirt-7", name: "Dino Smile Tee", price: "Rs 2,450", image: "/product1.jpg", badge: "COD" },
  { id: "tshirt-8", name: "Unicorn Dreams Tee", price: "Rs 2,300", image: "/product2.png", badge: "COD" },
  { id: "tshirt-9", name: "Unicorn Dreams Tee", price: "Rs 2,300", image: "/product2.png", badge: "COD" },
];


const BEST_SELLERS = [
  { id: "best-1", name: "Dino Classic Tee", price: "Rs 2,450", image: "/product1.jpg", badge: "BEST" },
  { id: "best-2", name: "Unicorn Spark Tee", price: "Rs 2,300", image: "/product2.png", badge: "BEST" },
  { id: "best-3", name: "Explorer Print Tee", price: "Rs 2,350", image: "/product1.jpg", badge: "BEST" },

  { id: "best-4", name: "Dino Classic Tee", price: "Rs 2,450", image: "/product1.jpg", badge: "BEST" },
  { id: "best-5", name: "Unicorn Spark Tee", price: "Rs 2,300", image: "/product2.png", badge: "BEST" },
  { id: "best-6", name: "Explorer Print Tee", price: "Rs 2,350", image: "/product1.jpg", badge: "BEST" },

  { id: "best-7", name: "Dino Classic Tee", price: "Rs 2,450", image: "/product1.jpg", badge: "BEST" },
  { id: "best-8", name: "Unicorn Spark Tee", price: "Rs 2,300", image: "/product2.png", badge: "BEST" },
  { id: "best-9", name: "Explorer Print Tee", price: "Rs 2,350", image: "/product1.jpg", badge: "BEST" },
];

export default function Home() {
  return (
    <main className="bg-white text-slate-900">
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
            <Link href="#contact" className="hover:text-[var(--primary)] transition">
              Contact
            </Link>
          </nav>

          {/* Right: Search + Icons */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center border border-slate-200 rounded-xl px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-[var(--primary)]">
              <Search size={18} strokeWidth={1.5} className="text-slate-500" />
              <input
                className="ml-2 w-full text-sm outline-none placeholder:text-slate-400"
                placeholder="Search tees, sizes, colors…"
              />
            </div>

            <button className="p-2 rounded-lg hover:bg-slate-50" aria-label="Account">
              <User size={20} strokeWidth={1.5} className="text-slate-900" />
            </button>

            <button className="relative p-2 rounded-lg hover:bg-slate-50" aria-label="Cart">
              <ShoppingBag size={20} strokeWidth={1.5} className="text-slate-900" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] leading-none px-1.5 py-1 rounded-full">
                0
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* offset for fixed navbar */}
      <div className="h-16" />

      {/* HERO */}
      <section className="relative w-full h-[75vh] min-h-[540px] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Kids wearing Torido T-shirt"
          fill
          priority
          className="object-cover object-[100%_center]"
        />

        {/* Brand tint overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-soft)] via-white/70 to-transparent" />

        {/* Subtle vignette for depth */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_55%,rgba(0,0,0,0.06)_100%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="max-w-[620px]">
            <span className="inline-block mb-4 text-xs uppercase tracking-wider text-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 rounded-full border border-[var(--primary)]/15">
              Everyday Essentials
            </span>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-slate-900">
              Comfort made{" "}
              <span className="relative inline-block">
                simple.
                <span className="absolute left-0 -bottom-1 w-full h-2 bg-[var(--primary)]/20 -z-10 rounded-md" />
                </span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-slate-600 leading-relaxed">
              Premium cotton tees for kids — soft, safe, and built for play.
            </p>

          

            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600">
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

     
      {/* PRODUCTS */}
      <section id="products" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-2">T-Shirts</h2>
          <p className="text-slate-500 mb-8">Minimal • White-first • Lime accents</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden"
              >
                <div className="relative h-80">
                  <Image src={p.image} alt={p.name} fill className="object-cover" />
                  <div className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full">
                    {p.badge}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-medium">{p.name}</h3>
                  <p className="mt-1 font-semibold">{p.price}</p>
                  <Link
                    href={`/product/${p.id}`}
                    className="text-sm mt-3 inline-block text-[var(--primary)] hover:underline"
                  >
                    View details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* BEST SELLERS */}
<section id="best" className="bg-slate-50">
  <div className="max-w-7xl mx-auto px-6 py-16">
    <h2 className="text-2xl font-semibold mb-2">Best Sellers</h2>
    <p className="text-slate-500 mb-8 text-sm">
      Our most loved pieces.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {BEST_SELLERS.map((p) => (
        <div
          key={p.id}
          className="group rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden"
        >
          <div className="relative h-80">
            <Image
              src={p.image}
              alt={p.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-3 left-3 bg-[var(--primary)] text-white text-xs px-3 py-1 rounded-full">
              {p.badge}
            </div>
          </div>

          <div className="p-5">
            <h3 className="font-medium">{p.name}</h3>
            <p className="mt-1 font-semibold">{p.price}</p>

            <Link
              href={`/product/${p.id}`}
              className="text-sm mt-3 inline-block text-[var(--primary)] hover:underline"
            >
              View details →
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* NEW */}
      <section id="new" className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold mb-2">New Arrivals</h2>
        <p className="text-slate-500 mb-6 text-sm">Fresh drops.</p>
        <div className="rounded-2xl border border-slate-100 p-8 text-slate-600 bg-white">
          New arrivals section coming next.
        </div>
      </section>

      {/* OFFERS */}
      <section id="offers" className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold mb-2">Offers</h2>
        <p className="text-slate-500 mb-6 text-sm">Best value deals.</p>
        <div className="rounded-2xl border border-slate-100 p-8 text-slate-600 bg-white">
          Offers section coming next.
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-7xl mx-auto px-6 pb-16">
        <h2 className="text-xl font-semibold mb-3">FAQ</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-100 p-6 bg-white">
            <p className="font-medium mb-2">How do I pay?</p>
            <p className="text-slate-600 text-sm">Cash on Delivery (COD) only.</p>
          </div>
          <div className="rounded-2xl border border-slate-100 p-6 bg-white">
            <p className="font-medium mb-2">Delivery time?</p>
            <p className="text-slate-600 text-sm">We’ll confirm delivery after order.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
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

      {/* FLOATING WHATSAPP BUTTON */}
<a
  href="https://wa.me/94770212644"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-6 right-6 z-50 group"
>
<div className="w-14 h-14 flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">    
    {/* WhatsApp Icon SVG */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M16 .396C7.163.396 0 7.56 0 16.396c0 2.82.737 5.582 2.14 8.02L.29 31.71l7.47-1.94a15.91 15.91 0 008.24 2.29c8.837 0 16-7.164 16-16.001C32 7.56 24.837.396 16 .396zm0 29.2c-2.64 0-5.217-.706-7.49-2.045l-.535-.32-4.43 1.15 1.18-4.317-.348-.557A13.576 13.576 0 012.8 16.396c0-7.297 5.903-13.2 13.2-13.2 7.296 0 13.2 5.903 13.2 13.2 0 7.296-5.904 13.2-13.2 13.2zm7.285-9.78c-.398-.2-2.355-1.16-2.72-1.292-.365-.133-.63-.2-.896.2-.266.398-1.03 1.292-1.264 1.558-.233.266-.466.3-.864.1-.398-.2-1.68-.62-3.2-1.975-1.18-1.05-1.976-2.346-2.21-2.744-.233-.398-.025-.613.175-.813.18-.18.398-.466.597-.7.2-.233.266-.4.398-.666.133-.266.066-.5-.033-.7-.1-.2-.896-2.164-1.23-2.964-.325-.78-.655-.673-.896-.685-.233-.012-.5-.014-.766-.014-.266 0-.7.1-1.064.5-.365.398-1.4 1.367-1.4 3.333 0 1.967 1.432 3.867 1.63 4.134.2.266 2.82 4.3 6.836 6.03.955.412 1.7.658 2.28.842.958.304 1.83.262 2.52.16.77-.115 2.355-.96 2.686-1.89.332-.93.332-1.727.232-1.89-.1-.166-.365-.266-.763-.466z" />
    </svg>

    <span className="text-sm font-semibold">Chat on WhatsApp</span>
  </div>
</a>
    </main>
  );
}
