"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const accountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (accountRef.current && !accountRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
        
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Torido"
            width={180}
            height={60}
            className="h-9 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="ml-auto md:hidden p-2"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex mx-auto gap-8 text-xs font-bold uppercase tracking-[0.14em]">
          <Link href="#products">T-Shirts</Link>
          <Link href="#new">New</Link>
          <Link href="#best">Best Sellers</Link>
          <Link href="#offers">Offers</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        {/* Right side (desktop) */}
        <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className="flex items-center border rounded-xl px-3 py-2">
            <Search size={16} />
            <input
              className="ml-2 text-sm outline-none"
              placeholder="Search..."
            />
          </div>

          <div ref={accountRef} className="relative">
            {user ? (
              <>
                <button onClick={() => setMenuOpen((p) => !p)}>
                  {user.email}
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border rounded-xl shadow">
                    <Link href="/account" className="block p-3">
                      Account
                    </Link>
                    <button
                      onClick={() => signOut(auth)}
                      className="block w-full text-left p-3 text-red-500"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link href="/account">Login</Link>
            )}
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t px-4 py-4 bg-white">
          <div className="flex flex-col gap-4 text-sm font-semibold uppercase">
            <Link href="#products">T-Shirts</Link>
            <Link href="#new">New</Link>
            <Link href="#best">Best Sellers</Link>
            <Link href="#offers">Offers</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#contact">Contact</Link>
          </div>
        </div>
      )}
    </header>
  );
}