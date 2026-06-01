"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Menu,
  X,
  User as UserIcon,
  ShoppingBag,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const accountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => setUser(u));
    return () => unsubscribe();
  }, []);

useEffect(() => {
  async function loadCartCount() {
    const user = auth.currentUser;

    if (!user) {
      setCartCount(0);
      return;
    }

    const snap = await getDoc(
      doc(db, "carts", user.uid)
    );

    if (snap.exists()) {
      const items = snap.data().items || [];

      const totalQty = items.reduce(
        (sum: number, item: any) =>
          sum + (item.quantity || 1),
        0
      );

      setCartCount(totalQty);
    }
  }

  loadCartCount();

  window.addEventListener(
    "cartUpdated",
    loadCartCount
  );

  return () => {
    window.removeEventListener(
      "cartUpdated",
      loadCartCount
    );
  };
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
    user?.displayName && user.displayName.trim() !== ""
      ? user.displayName.split(" ")[0]
      : user?.email
      ? user.email.split("@")[0]
      : "User";

  return (
<header
  className="
    sticky
    top-0
    z-50
    bg-white/95
    backdrop-blur-xl
    border-b
    border-slate-100
    shadow-[0_8px_30px_rgba(0,0,0,0.05)]
  "
>     <div className="max-w-7xl mx-auto px-8 h-20 flex items-center">
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
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <nav className="hidden md:flex mx-auto gap-10 text-sm font-medium tracking-wide">
     <Link
  href="/tshirts"
  className="
    relative
    text-slate-700
    hover:text-green-600
    transition-colors
    duration-300
    after:absolute
    after:left-0
    after:-bottom-2
    after:h-[2px]
    after:w-0
    after:bg-green-600
    after:transition-all
    after:duration-300
    hover:after:w-full
  "
>
  T-Shirts
</Link>
      <Link href="/new">New</Link>
      <Link href="/best sellers">Best Sellers</Link>
      <Link href="/offers">Offers</Link>
      <Link href="/faq">FAQ</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4 ml-auto">
<div className="
  flex
  items-center
  bg-slate-50
  rounded-2xl
  px-4
  py-2
  shadow-sm
">            <Search size={16} />
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && searchInput.trim()) {
                  window.location.href = `/search?q=${encodeURIComponent(
                    searchInput.trim()
                  )}`;
                }
              }}
              className="ml-2 text-sm outline-none"
              placeholder="Search..."
            />
          </div>
<Link
  href="/cart"
  className="
    relative
    flex
    items-center
    justify-center
    w-11
    h-11
    rounded-2xl
    bg-slate-50
    hover:bg-slate-100
    transition-all
  "
>
  <ShoppingBag size={20} />

  {cartCount > 0 && (
    <span
      className="
        absolute
        -top-1
        -right-1
        bg-green-600
        text-white
        text-[10px]
        font-bold
        min-w-[18px]
        h-[18px]
        rounded-full
        flex
        items-center
        justify-center
      "
    >
      {cartCount}
    </span>
  )}
</Link>
          <div ref={accountRef} className="relative">
            {user ? (
              <>
                <button
                  onClick={() => setMenuOpen((p) => !p)}
className="
  flex
  items-center
  gap-2
  rounded-2xl
  px-4
  py-2
  bg-slate-50
  hover:bg-slate-100
  transition-all
  duration-300
"                  aria-label="Open account menu"
                >
                  <UserIcon size={18} className="text-[var(--primary)]" />
                  <span className="text-sm font-medium text-slate-900">
                    Hello {firstName}
                  </span>
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden z-50">
                    <Link
                      href="/account/profile"
                      className="block px-4 py-3 text-sm hover:bg-slate-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Profile Details
                    </Link>

                    <Link
                      href="/account/settings"
                      className="block px-4 py-3 text-sm hover:bg-slate-50"
                      onClick={() => setMenuOpen(false)}
                    >
                      Account Settings
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
            <Link href="/tshirts" onClick={() => setMobileMenuOpen(false)}>
              T-Shirts
            </Link>
            <Link href="/new" onClick={() => setMobileMenuOpen(false)}>
              New
            </Link>
            <Link href="/best sellers" onClick={() => setMobileMenuOpen(false)}>
              Best Sellers
            </Link>
            <Link href="/offer" onClick={() => setMobileMenuOpen(false)}>
              Offers
            </Link>
            <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>

            <div className="pt-2 border-t border-slate-200">
              {user ? (
                <>
                  <p className="text-sm normal-case font-medium text-[var(--primary)] mb-3">
                    Hello {firstName}
                  </p>

                  <Link
                    href="/account/profile"
                    className="block py-2 normal-case"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile Details
                  </Link>

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
