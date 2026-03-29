"use client";

export default function AccountSettingsPage() {
  return (
    <div className="pt-24 max-w-3xl mx-auto px-6">
      <h1 className="text-2xl font-semibold mb-6">Account Settings</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full border p-3 rounded-lg"
        />
        <input
          type="text"
          placeholder="Contact Number"
          className="w-full border p-3 rounded-lg"
        />

        <button className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg">
          Save Changes
        </button>
      </div>
    </div>
  );
}