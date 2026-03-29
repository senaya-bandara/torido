"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, User as UserIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

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

  const firstName =
  user?.displayName?.trim().split(" ")[0] ||
  user?.email?.split("@")[0] ||
  "User";
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Torido"
            width={180}
            height={60}
            className="h-9 w-auto"
          />
        </Link>

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="ml-auto md:hidden p-2"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className="hidden md:flex mx-auto gap-8 text-xs font-bold uppercase tracking-[0.14em]">
          <Link href="#products">T-Shirts</Link>
          <Link href="#new">New</Link>
          <Link href="#best">Best Sellers</Link>
          <Link href="#offers">Offers</Link>
          <Link href="#faq">FAQ</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4 ml-auto">
          <div className="flex items-center border rounded-xl px-3 py-2">
            <Search size={16} />
            <input
  value={searchInput}
  onChange={(e) => setSearchInput(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === "Enter") {
      window.location.href = `/search?q=${encodeURIComponent(searchInput)}`;
    }
  }}
  className="ml-2 text-sm outline-none"
  placeholder="Search..."
/>
          </div>

          <div ref={accountRef} className="relative">
            {user ? (
              <>
                <button
                  onClick={() => setMenuOpen((p) => !p)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-50 transition"
                >
                  <UserIcon size={18} className="text-[var(--primary)]" />
                  <span className="text-sm font-medium text-slate-900">
                    Hello {firstName}
                  </span>
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden">
                    <Link
                      href="/account/settings"
                      className="block px-4 py-3 text-sm hover:bg-slate-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Account Settings
                    </Link>

                    <Link
                      href="/account/settings"
                      className="block px-4 py-3 text-sm hover:bg-slate-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Profile Details
                    </Link>

                    <button
                      onClick={async () => {
                        await signOut(auth);
                        setMenuOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </>
            ) : (
              <Link
                href="/account"
                className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-slate-50 transition"
              >
                <UserIcon size={18} className="text-slate-900" />
                <span className="text-sm font-medium text-slate-900">Account</span>
              </Link>
            )}
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t px-4 py-4 bg-white">
          <div className="flex flex-col gap-4 text-sm font-semibold uppercase">
            <Link href="#products" onClick={() => setMobileMenuOpen(false)}>
              T-Shirts
            </Link>
            <Link href="#new" onClick={() => setMobileMenuOpen(false)}>
              New
            </Link>
            <Link href="#best" onClick={() => setMobileMenuOpen(false)}>
              Best Sellers
            </Link>
            <Link href="#offers" onClick={() => setMobileMenuOpen(false)}>
              Offers
            </Link>
            <Link href="#faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>

            <div className="pt-2 border-t border-slate-200">
              {user ? (
                <>
                  <p className="text-sm normal-case font-medium text-[var(--primary)] mb-3">
                    Hello {firstName}
                  </p>
                  <Link
                    href="/account/settings"
                    className="block py-2 normal-case"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Account Settings
                  </Link>
                  <button
                    onClick={async () => {
                      await signOut(auth);
                      setMobileMenuOpen(false);
                    }}
                    className="block py-2 text-left text-red-500 normal-case"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  href="/account"
                  className="block py-2 normal-case"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Account
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}