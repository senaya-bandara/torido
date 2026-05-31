
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";

export default function BestSellersPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-6">
          Best Sellers
        </h1>

        <p className="text-slate-600">
          Our most popular products.
        </p>
      </main>

      <Footer />
    </>
  );
}
