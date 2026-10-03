"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

type UserProfile = {
  fullName: string;
  email: string;
  address: string;
  contactNumber: string;
};

export default function ProfilePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [profile, setProfile] =
    useState<UserProfile | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user: User | null) => {
        if (!user) {
          router.push("/account");
          return;
        }

        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            const data = docSnap.data();

            setProfile({
              fullName:
                data.fullName ||
                user.displayName ||
                "",
              email:
                data.email ||
                user.email ||
                "",
              address:
                data.address || "",
              contactNumber:
                data.contactNumber || "",
            });
          } else {
            // User is logged in but does not
            // have a profile document yet.
            setProfile({
              fullName:
                user.displayName || "",
              email:
                user.email || "",
              address: "",
              contactNumber: "",
            });
          }
        } catch (error) {
          console.error(
            "Failed to load profile:",
            error
          );

          setError(
            "Unable to load your profile details."
          );
        } finally {
          setLoading(false);
        }
      }
    );

    return () => unsubscribe();
  }, [router]);

  /* LOADING */
  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="animate-pulse">
          <div className="h-4 w-28 bg-slate-100 rounded mb-3" />

          <div className="h-10 w-56 bg-slate-100 rounded mb-10" />

          <div className="h-72 bg-slate-50 rounded-3xl border border-slate-100" />
        </div>
      </main>
    );
  }

  /* ERROR */
  if (error) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-red-50 border border-red-100 rounded-3xl p-10 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Unable to load profile
          </h1>

          <p className="mt-3 text-slate-600">
            {error}
          </p>

          <button
            onClick={() => window.location.reload()}
            className="
              inline-flex
              mt-6
              px-7
              py-3
              rounded-full
              bg-[#7BC043]
              text-white
              font-semibold
              hover:bg-[#69b035]
              transition
            "
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  /* PROFILE */
  if (!profile) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="bg-slate-50 rounded-3xl p-10 text-center">
          <h1 className="text-2xl font-bold text-slate-900">
            Profile not available
          </h1>

          <p className="mt-3 text-slate-500">
            We couldn't find your profile information.
          </p>

          <Link
            href="/account/settings"
            className="
              inline-flex
              mt-6
              px-7
              py-3
              rounded-full
              bg-[#7BC043]
              text-white
              font-semibold
              hover:bg-[#69b035]
              transition
            "
          >
            Complete Profile
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">

        <div>
          <p className="uppercase tracking-[0.2em] text-[#7BC043] font-semibold text-sm mb-2">
            My Account
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Profile Details
          </h1>

          <p className="mt-3 text-slate-500">
            Manage your personal information.
          </p>
        </div>

        <Link
          href="/account/settings"
          className="
            inline-flex
            items-center
            justify-center
            px-7
            py-3
            rounded-full
            bg-[#7BC043]
            text-white
            font-semibold
            hover:bg-[#69b035]
            transition-all
            duration-200
            shadow-sm
            hover:shadow-md
          "
        >
          Edit Profile
        </Link>

      </div>

      {/* PROFILE CARD */}
      <div
        className="
          bg-white
          rounded-3xl
          border
          border-slate-100
          shadow-sm
          p-8
          md:p-10
        "
      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">

          {/* FULL NAME */}
          <div>
            <p className="text-sm text-slate-500 mb-2">
              Full Name
            </p>

            <p className="text-lg font-semibold text-slate-900">
              {profile.fullName || "Not provided"}
            </p>
          </div>

          {/* EMAIL */}
          <div>
            <p className="text-sm text-slate-500 mb-2">
              Email Address
            </p>

            <p className="text-lg font-semibold text-slate-900 break-all">
              {profile.email || "Not provided"}
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <p className="text-sm text-slate-500 mb-2">
              Contact Number
            </p>

            <p className="text-lg font-semibold text-slate-900">
              {profile.contactNumber || "Not provided"}
            </p>
          </div>

          {/* ADDRESS */}
          <div>
            <p className="text-sm text-slate-500 mb-2">
              Address
            </p>

            <p className="text-lg font-semibold text-slate-900 whitespace-pre-line">
              {profile.address || "Not provided"}
            </p>
          </div>

        </div>

      </div>

      {/* ACCOUNT NAVIGATION */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

        <Link
          href="/account"
          className="
            bg-slate-50
            rounded-3xl
            p-6
            border
            border-slate-100
            hover:bg-white
            hover:shadow-md
            transition-all
            duration-200
          "
        >
          <p className="text-sm text-slate-500">
            Account
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-1">
            My Orders
          </h3>

          <p className="text-slate-500 mt-2">
            View your previous orders and order status.
          </p>
        </Link>

        <Link
          href="/account/settings"
          className="
            bg-slate-50
            rounded-3xl
            p-6
            border
            border-slate-100
            hover:bg-white
            hover:shadow-md
            transition-all
            duration-200
          "
        >
          <p className="text-sm text-slate-500">
            Account Settings
          </p>

          <h3 className="text-xl font-semibold text-slate-900 mt-1">
            Edit Information
          </h3>

          <p className="text-slate-500 mt-2">
            Update your name, phone number and address.
          </p>
        </Link>

      </div>

    </main>
  );
}
