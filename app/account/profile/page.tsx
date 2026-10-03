
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { onAuthStateChanged, User } from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  Timestamp,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { useRouter } from "next/navigation";

type UserProfile = {
  fullName: string;
  email: string;
  address: string;
  contactNumber: string;
};

type OrderItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  quantity?: number;
  selectedColor?: string;
  selectedSize?: string;
};

type Order = {
  id: string;
  userId: string;
  email?: string;
  items: OrderItem[];
  total: number;
  status: string;
  createdAt?: Timestamp | Date | any;
};

export default function ProfilePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [ordersLoading, setOrdersLoading] = useState(true);

  const [profile, setProfile] =
    useState<UserProfile | null>(null);

  const [orders, setOrders] =
    useState<Order[]>([]);

  const [error, setError] = useState("");
  const [ordersError, setOrdersError] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      async (user: User | null) => {
        if (!user) {
          router.push("/account");
          return;
        }

        await loadProfile(user);
        await loadOrders(user);

        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [router]);

  /* --------------------------------
     LOAD PROFILE
  -------------------------------- */

  async function loadProfile(user: User) {
    try {
      const docRef = doc(
        db,
        "users",
        user.uid
      );

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
        setProfile({
          fullName:
            user.displayName || "",

          email:
            user.email || "",

          address: "",

          contactNumber: "",
        });
      }
    } catch (error: any) {
      console.error(
        "PROFILE FIREBASE ERROR:",
        error
      );

      setError(
        error?.message ||
          "Unable to load your profile details."
      );
    }
  }

  /* --------------------------------
     LOAD ORDERS
  -------------------------------- */

  async function loadOrders(user: User) {
    setOrdersLoading(true);
    setOrdersError("");

    try {
      const ordersRef = collection(
        db,
        "orders"
      );

      const ordersQuery = query(
        ordersRef,
        where(
          "userId",
          "==",
          user.uid
        )
      );

      const snapshot =
        await getDocs(ordersQuery);

      const loadedOrders: Order[] =
        snapshot.docs.map((orderDoc) => {
          const data = orderDoc.data();

          return {
            id: orderDoc.id,
            userId: data.userId,
            email: data.email || "",
            items: data.items || [],
            total: Number(data.total || 0),
            status:
              data.status || "Pending",
            createdAt:
              data.createdAt || null,
          };
        });

      /* 
        Sort newest orders first.
        We do this in JavaScript instead
        of Firestore so you don't need
        a composite index.
      */
      loadedOrders.sort(
        (a, b) => {
          const dateA =
            getOrderDate(a)?.getTime() || 0;

          const dateB =
            getOrderDate(b)?.getTime() || 0;

          return dateB - dateA;
        }
      );

      setOrders(loadedOrders);
    } catch (error: any) {
      console.error(
        "ORDERS FIREBASE ERROR:",
        error
      );

      setOrdersError(
        error?.message ||
          "Unable to load your orders."
      );
    } finally {
      setOrdersLoading(false);
    }
  }

  /* --------------------------------
     ORDER DATE
  -------------------------------- */

  function getOrderDate(
    order: Order
  ): Date | null {
    if (!order.createdAt) {
      return null;
    }

    if (
      order.createdAt instanceof Timestamp
    ) {
      return order.createdAt.toDate();
    }

    if (
      order.createdAt instanceof Date
    ) {
      return order.createdAt;
    }

    if (
      typeof order.createdAt.toDate ===
      "function"
    ) {
      return order.createdAt.toDate();
    }

    if (
      typeof order.createdAt === "string" ||
      typeof order.createdAt === "number"
    ) {
      const date = new Date(
        order.createdAt
      );

      if (!isNaN(date.getTime())) {
        return date;
      }
    }

    return null;
  }

  /* --------------------------------
     FORMAT DATE
  -------------------------------- */

  function formatDate(order: Order) {
    const date = getOrderDate(order);

    if (!date) {
      return "Date unavailable";
    }

    return date.toLocaleDateString(
      "en-GB",
      {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }
    );
  }

  /* --------------------------------
     ORDER NUMBER
  -------------------------------- */

function getOrderNumber(order: Order) {
  const date = getOrderDate(order);

  if (!date) {
    return "TOR-" + order.id.slice(0, 6).toUpperCase();
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const shortId = order.id.slice(0, 5).toUpperCase();

  return "TOR-" + year + month + day + "-" + shortId;
}
  /* --------------------------------
     PRICE
  -------------------------------- */

  function getItemPrice(
    price: string
  ) {
    return Number(
      String(price).replace(
        /[^\d]/g,
        ""
      )
    );
  }

  /* --------------------------------
     STATUS STYLING
  -------------------------------- */

  function getStatusStyle(
    status: string
  ) {
    const normalized =
      status.toLowerCase();

    if (
      normalized === "delivered" ||
      normalized === "completed"
    ) {
      return {
        background:
          "bg-green-50",
        text:
          "text-green-700",
        border:
          "border-green-100",
      };
    }

    if (
      normalized === "cancelled" ||
      normalized === "canceled"
    ) {
      return {
        background:
          "bg-red-50",
        text:
          "text-red-600",
        border:
          "border-red-100",
      };
    }

    if (
      normalized === "processing" ||
      normalized === "shipped"
    ) {
      return {
        background:
          "bg-blue-50",
        text:
          "text-blue-700",
        border:
          "border-blue-100",
      };
    }

    return {
      background:
        "bg-amber-50",
      text:
        "text-amber-700",
      border:
        "border-amber-100",
    };
  }

  /* --------------------------------
     LOADING
  -------------------------------- */

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-24">
        <div className="animate-pulse">

          <div className="h-4 w-28 bg-slate-100 rounded mb-3" />

          <div className="h-12 w-64 bg-slate-100 rounded mb-10" />

          <div className="h-72 bg-slate-50 rounded-3xl border border-slate-100" />

        </div>
      </main>
    );
  }

  /* --------------------------------
     PROFILE ERROR
  -------------------------------- */

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
            onClick={() =>
              window.location.reload()
            }
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

  if (!profile) {
    return null;
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-24">

      {/* =====================================
          PROFILE HEADER
      ====================================== */}

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

      {/* =====================================
          PROFILE DETAILS
      ====================================== */}

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
              {profile.fullName ||
                "Not provided"}
            </p>
          </div>

          {/* EMAIL */}

          <div>
            <p className="text-sm text-slate-500 mb-2">
              Email Address
            </p>

            <p className="text-lg font-semibold text-slate-900 break-all">
              {profile.email ||
                "Not provided"}
            </p>
          </div>

          {/* CONTACT */}

          <div>
            <p className="text-sm text-slate-500 mb-2">
              Contact Number
            </p>

            <p className="text-lg font-semibold text-slate-900">
              {profile.contactNumber ||
                "Not provided"}
            </p>
          </div>

          {/* ADDRESS */}

          <div>
            <p className="text-sm text-slate-500 mb-2">
              Address
            </p>

            <p className="text-lg font-semibold text-slate-900 whitespace-pre-line">
              {profile.address ||
                "Not provided"}
            </p>
          </div>

        </div>

      </div>

      {/* =====================================
          MY ORDERS
      ====================================== */}

      <section className="mt-20">

        {/* SECTION HEADER */}

        <div className="mb-8">

          <p className="uppercase tracking-[0.2em] text-[#7BC043] font-semibold text-sm mb-2">
            Order History
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">

            <div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                My Orders
              </h2>

              <p className="mt-2 text-slate-500">
                View your previous orders and order details.
              </p>

            </div>

            {!ordersLoading &&
              orders.length > 0 && (
                <span className="text-sm text-slate-400">
                  {orders.length}{" "}
                  {orders.length === 1
                    ? "order"
                    : "orders"}
                </span>
              )}

          </div>

        </div>

        {/* ORDERS LOADING */}

        {ordersLoading && (
          <div className="space-y-5">

            {[1, 2].map((item) => (
              <div
                key={item}
                className="
                  animate-pulse
                  bg-slate-50
                  rounded-3xl
                  h-64
                  border
                  border-slate-100
                "
              />
            ))}

          </div>
        )}

        {/* ORDERS ERROR */}

        {!ordersLoading &&
          ordersError && (
            <div
              className="
                bg-red-50
                border
                border-red-100
                rounded-3xl
                p-8
              "
            >

              <h3 className="text-xl font-semibold text-slate-900">
                Unable to load orders
              </h3>

              <p className="mt-2 text-slate-600 break-words">
                {ordersError}
              </p>

            </div>
          )}

        {/* NO ORDERS */}

        {!ordersLoading &&
          !ordersError &&
          orders.length === 0 && (
            <div
              className="
                bg-slate-50
                rounded-3xl
                border
                border-slate-100
                p-12
                text-center
              "
            >

              <div
                className="
                  mx-auto
                  w-16
                  h-16
                  rounded-full
                  bg-white
                  flex
                  items-center
                  justify-center
                  shadow-sm
                "
              >
                <span className="text-2xl">
                  🛍
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                No orders yet
              </h3>

              <p className="mt-2 text-slate-500">
                Your completed orders will appear here.
              </p>

              <Link
                href="/tshirts"
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
                Shop T-Shirts
              </Link>

            </div>
          )}

        {/* ORDER LIST */}

        {!ordersLoading &&
          !ordersError &&
          orders.length > 0 && (

            <div className="space-y-6">

              {orders.map((order) => {

                const statusStyle =
                  getStatusStyle(
                    order.status
                  );

                return (
                  <div
                    key={order.id}
                    className="
                      bg-white
                      rounded-3xl
                      border
                      border-slate-100
                      shadow-sm
                      overflow-hidden
                      hover:shadow-md
                      transition-shadow
                      duration-300
                    "
                  >

                    {/* ORDER HEADER */}

                    <div
                      className="
                        px-6
                        md:px-8
                        py-5
                        bg-slate-50
                        border-b
                        border-slate-100
                      "
                    >

                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <div>

                          <p className="text-xs uppercase tracking-[0.15em] text-slate-400 font-semibold">
                            Order Number
                          </p>

                          <h3 className="mt-1 text-lg font-bold text-slate-900">
                            {getOrderNumber(
                              order
                            )}
                          </h3>

                          <p className="mt-1 text-sm text-slate-500">
                            Placed on{" "}
                            {formatDate(
                              order
                            )}
                          </p>

                        </div>

                        <span
                          className={`
                            self-start
                            md:self-center
                            px-4
                            py-2
                            rounded-full
                            text-sm
                            font-semibold
                            border
                            ${statusStyle.background}
                            ${statusStyle.text}
                            ${statusStyle.border}
                          `}
                        >
                          {order.status}
                        </span>

                      </div>

                    </div>

                    {/* ORDER ITEMS */}

                    <div className="px-6 md:px-8 py-6">

                      <div className="space-y-5">

                        {order.items.map(
                          (item, index) => {

                            const quantity =
                              item.quantity ||
                              1;

                            const unitPrice =
                              getItemPrice(
                                item.price
                              );

                            const subtotal =
                              unitPrice *
                              quantity;

                            return (
                              <div
                                key={`${order.id}-${item.id}-${index}`}
                                className="
                                  flex
                                  gap-4
                                  md:gap-5
                                  items-center
                                "
                              >

                                {/* IMAGE */}

                                <div
                                  className="
                                    relative
                                    w-20
                                    h-20
                                    md:w-24
                                    md:h-24
                                    flex-shrink-0
                                    overflow-hidden
                                    rounded-2xl
                                    bg-slate-50
                                  "
                                >

                                  <Image
                                    src={
                                      item.image
                                    }
                                    alt={
                                      item.name
                                    }
                                    fill
                                    className="object-cover"
                                  />

                                </div>

                                {/* DETAILS */}

                                <div className="flex-1 min-w-0">

                                  <h4 className="font-semibold text-slate-900">
                                    {item.name}
                                  </h4>

                                  {/* COLOR / SIZE */}

                                  {(item.selectedColor ||
                                    item.selectedSize) && (
                                    <div className="flex flex-wrap gap-2 mt-2">

                                      {item.selectedColor && (
                                        <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                                          Color:{" "}
                                          {
                                            item.selectedColor
                                          }
                                        </span>
                                      )}

                                      {item.selectedSize && (
                                        <span className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                                          Size:{" "}
                                          {
                                            item.selectedSize
                                          }
                                        </span>
                                      )}

                                    </div>
                                  )}

                                  <p className="mt-2 text-sm text-slate-500">
                                    LKR{" "}
                                    {unitPrice.toLocaleString()}{" "}
                                    ×{" "}
                                    {quantity}
                                  </p>

                                </div>

                                {/* SUBTOTAL */}

                                <div className="text-right flex-shrink-0">

                                  <p className="text-sm text-slate-400 hidden sm:block">
                                    Subtotal
                                  </p>

                                  <p className="mt-1 font-bold text-slate-900">
                                    LKR{" "}
                                    {subtotal.toLocaleString()}
                                  </p>

                                </div>

                              </div>
                            );
                          }
                        )}

                      </div>

                    </div>

                    {/* ORDER TOTAL */}

                    <div
                      className="
                        px-6
                        md:px-8
                        py-5
                        border-t
                        border-slate-100
                        bg-white
                      "
                    >

                      <div className="flex items-center justify-between">

                        <div>

                          <p className="text-sm text-slate-500">
                            Order Total
                          </p>

                          <p className="text-xs text-slate-400 mt-1">
                            {order.items.length}{" "}
                            {order.items.length ===
                            1
                              ? "item"
                              : "items"}
                          </p>

                        </div>

                        <p className="text-2xl md:text-3xl font-bold text-slate-900">
                          LKR{" "}
                          {order.total.toLocaleString()}
                        </p>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>
          )}

      </section>

    </main>
  );
}
```
