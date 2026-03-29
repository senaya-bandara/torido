"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { onAuthStateChanged } from "firebase/auth";
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
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
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
            fullName: data.fullName || user.displayName || "",
            email: data.email || user.email || "",
            address: data.address || "",
            contactNumber: data.contactNumber || "",
          });
        } else {
          setProfile({
            fullName: user.displayName || "",
            email: user.email || "",
            address: "",
            contactNumber: "",
          });
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-10 text-slate-900">
        <p>Loading profile...</p>
      </main>
    );
  }

  if (!profile) return null;

  return (
    <main className="max-w-4xl mx-auto px-6 py-10 text-slate-900">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Profile Details</h1>
        <Link
          href="/account/settings"
          className="px-4 py-2 rounded-xl bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary-dark)] transition"
        >
          Edit Profile
        </Link>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8 space-y-6">
        <div>
          <p className="text-sm text-slate-500 mb-1">Full Name</p>
          <p className="text-lg font-medium">{profile.fullName || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500 mb-1">Email Address</p>
          <p className="text-lg font-medium">{profile.email || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500 mb-1">Contact Number</p>
          <p className="text-lg font-medium">{profile.contactNumber || "-"}</p>
        </div>

        <div>
          <p className="text-sm text-slate-500 mb-1">Address</p>
          <p className="text-lg font-medium whitespace-pre-line">
            {profile.address || "-"}
          </p>
        </div>
      </div>
    </main>
  );
}