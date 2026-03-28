"use client";

import Link from "next/link";

export default function AccountPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--primary-soft)] px-4">
      
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
        
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-2">
          Welcome to Torido
        </h1>
        <p className="text-center text-slate-500 text-sm mb-6">
          Create your account or log in
        </p>

        {/* Form */}
        <form className="space-y-4">
          
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[var(--primary)] outline-none"
          />

          {/* Primary Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[var(--primary)] text-white font-semibold hover:bg-[var(--primary-dark)] transition"
          >
            Create Account
          </button>

        </form>

        {/* Divider */}
        <div className="my-6 text-center text-sm text-slate-400">
          or
        </div>

        {/* Login */}
        <button className="w-full py-3 rounded-xl border border-slate-300 font-medium hover:bg-slate-50 transition">
          Login instead
        </button>

        {/* Back */}
        <Link
          href="/"
          className="block text-center mt-6 text-sm text-[var(--primary)] hover:underline"
        >
          ← Back to home
        </Link>

      </div>
    </main>
  );
}