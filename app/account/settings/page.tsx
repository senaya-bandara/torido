"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import toast from "react-hot-toast";

export default function AccountSettingsPage() {
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const user = auth.currentUser;

    if (!user) return;

    const snap = await getDoc(
      doc(db, "users", user.uid)
    );

    if (snap.exists()) {
      const data = snap.data();

      setFullName(data.fullName || "");
      setAddress(data.address || "");
      setContactNumber(
        data.contactNumber || ""
      );
    }
  }

  async function saveProfile() {
    const user = auth.currentUser;

    if (!user) {
      toast.error("Please login");
      return;
    }

    try {
      await setDoc(
        doc(db, "users", user.uid),
        {
          fullName,
          address,
          contactNumber,
        },
        { merge: true }
      );

      toast.success(
        "Profile updated successfully"
      );
    } catch (error) {
      console.error(error);
      toast.error(
        "Failed to update profile"
      );
    }
  }

  return (
    <div className="pt-24 max-w-3xl mx-auto px-6">
      <h1 className="text-3xl font-bold mb-8">
        Account Settings
      </h1>

      <div className="space-y-4">
        <input
          type="text"
          value={fullName}
          onChange={(e) =>
            setFullName(e.target.value)
          }
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
          placeholder="Address"
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          value={contactNumber}
          onChange={(e) =>
            setContactNumber(
              e.target.value
            )
          }
          placeholder="Contact Number"
          className="w-full border p-3 rounded-lg"
        />

        <button
          onClick={saveProfile}
          className="
            px-6
            py-3
            rounded-xl
            bg-[var(--primary)]
            text-white
            font-semibold
          "
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
