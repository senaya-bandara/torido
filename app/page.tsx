"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Leaf,
  ShieldCheck,
  Truck,
  RefreshCcw,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { onAuthStateChanged, signOut, User as FirebaseUser } from "firebase/auth";
import { auth } from "@/lib/firebase";

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
  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const accountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        accountRef.current &&
        !accountRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="text-slate-900">
      {/* NAVBAR */}
      <header className="theme-navbar fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center">
          {/* Left: Logo */}
          <div className="flex shrink-0 items-center min-w-[220px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="Torido"
                width={220}
                height={70}
                className="h-10 w-auto object-contain"
                priority
              />
            </Link>
          </div>

          {/* Center: Nav */}
          <div className="flex flex-1 justify-center">
            <nav className="hidden md:flex items-center gap-8 whitespace-nowrap text-[12px] font-bold tracking-[0.14em] uppercase text-slate-900">
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
          </div>

          {/* Right: Search + Account */}
          <div className="flex shrink-0 items-center justify-end gap-4 min-w-[360px]">
            <div className="hidden md:flex items-center border border-slate-200 rounded-xl px-3 py-2 w-56 focus-within:ring-2 focus-within:ring-[var(--primary)]">
              <Search size={18} strokeWidth={1.5} className="text-slate-500" />
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ml-2 w-full text-sm outline-none placeholder:text-slate-400"
                placeholder="Search tees..."
              />
            </div>

            <div ref={accountRef} className="relative">
              {user ? (
                <>
                  <button
                    onClick={() => setMenuOpen((prev) => !prev)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-50 transition whitespace-nowrap"
                    aria-label="Account menu"
                  >
                    <span className="text-sm font-medium text-[var(--primary)]">
                      Hello, {user.displayName || user.email?.split("@")[0]}
                    </span>
                  </button>

                  {menuOpen && (
                    <div className="absolute right-0 mt-2 w-60 rounded-2xl border border-slate-200 bg-white shadow-lg p-2 z-50">
                      <Link
                        href="/account/settings"
                        className="block px-4 py-3 rounded-xl text-sm hover:bg-slate-50"
                        onClick={() => setMenuOpen(false)}
                      >
                        Account Settings
                      </Link>

                      <Link
                        href="/account/settings"
                        className="block px-4 py-3 rounded-xl text-sm hover:bg-slate-50"
                        onClick={() => setMenuOpen(false)}
                      >
                        Profile Details
                      </Link>

                      <button
                        onClick={async () => {
                          await signOut(auth);
                          setMenuOpen(false);
                        }}
                        className="w-full text-left px-4 py-3 rounded-xl text-sm text-red-500 hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href="/account"
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition whitespace-nowrap"
                >
                  Account
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* offset for fixed navbar */}
      <div className="h-16" />

      {/* HERO */}
      <section className="relative w-full h-[70vh] md:h-[78vh] min-h-[500px] overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Kids wearing Torido T-shirt"
          fill
          priority
          className="object-cover object-[100%_center] theme-image"
        />

        <div className="absolute inset-0 theme-hero-overlay" />

        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(255,255,255,0)_48%,rgba(0,0,0,0.08)_100%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
          <div className="max-w-[620px]">
            <span className="inline-block mb-5 text-xs uppercase tracking-[0.22em] text-[var(--primary)] bg-white/70 px-4 py-2 rounded-full border border-[var(--primary)]/20 shadow-sm">
              Everyday Essentials
            </span>

            <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.04em] leading-[0.98] text-slate-950">
              Comfort made{" "}
              <span className="relative inline-block text-[var(--primary)]">
                simple.
                <span className="absolute left-0 -bottom-1 w-full h-3 bg-[var(--primary)]/18 -z-10 rounded-md" />
              </span>
            </h1>

            <p className="mt-6 text-base md:text-xl text-slate-600 leading-relaxed max-w-[540px]">
              Premium cotton tees for kids — soft, safe, and built for play.
            </p>

            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-700">
              <span className="inline-flex items-center gap-2">
                <Leaf size={16} className="text-[var(--primary)]" />
                Soft cotton
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} className="text-[var(--primary)]" />
                Kid-safe prints
              </span>
              <span className="inline-flex items-center gap-2">
                <Truck size={16} className="text-[var(--primary)]" />
                Fast delivery
              </span>
              <span className="inline-flex items-center gap-2">
                <RefreshCcw size={16} className="text-[var(--primary)]" />
                7-day exchange
              </span>
            </div>

            <div className="mt-7">
              <span className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 text-sm shadow-md">
                Loved by parents across Sri Lanka
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--primary)] mb-3">
              Shop
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-[-0.03em] text-slate-950">
              T-Shirts
            </h2>
            <p className="text-slate-600 mt-2">
              Minimal, comfortable, and designed for everyday wear.
            </p>
          </div>

          <p className="text-slate-500 mb-8">Minimal • White-first • Lime accents</p>

          {filteredProducts.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-8 text-slate-500">
              No T-shirts found for "{searchTerm}".
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="theme-card rounded-2xl transition overflow-hidden"
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
          )}
        </div>
      </section>

      {/* BEST SELLERS */}
      <section id="best" className="theme-soft-section">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold mb-2">Best Sellers</h2>
          <p className="text-slate-500 mb-8 text-sm">
            Our most loved pieces.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BEST_SELLERS.map((p) => (
              <div
                key={p.id}
                className="rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
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

      <footer
        id="contact"
        className="mt-20 bg-slate-100 border-t border-slate-200"
      >
        <div className="max-w-7xl mx-auto px-6 py-14 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-slate-900">Torido</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              Premium cotton kidswear designed for comfort, safety and everyday play.
            </p>

            <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
              <span className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full">
                COD Available
              </span>
              <span className="text-xs bg-white border border-slate-200 px-3 py-1 rounded-full">
                Islandwide Delivery
              </span>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-4 text-slate-600">
              <li className="hover:text-[#70B147] transition cursor-pointer">
                Delivery Information
              </li>
              <li className="hover:text-[#70B147] transition cursor-pointer">
                Exchanges & Returns
              </li>
              <li className="hover:text-[#70B147] transition cursor-pointer">
                Size Guide
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="font-semibold text-slate-900 mb-4">Contact</h4>

            <p className="text-slate-600">
              WhatsApp:{" "}
              <a
                href="https://wa.me/94769737089"
                className="text-[#70B147] hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                +94 76 973 7089
              </a>
            </p>

            <p className="mt-3 text-slate-600 break-words">
              Email:{" "}
              <a
                href="mailto:senayabandara@gmail.com"
                className="text-[#70B147] hover:underline"
              >
                senayabandara@gmail.com
              </a>
            </p>

            <p className="mt-6 text-xs text-slate-500">
              © {new Date().getFullYear()} Torido. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}