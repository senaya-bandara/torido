
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import PageTransition from "@/app/components/PageTransition";

export default function OffersPage() {
  return (

      <PageTransition>

    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-6">Special Offers</h1>

        <div className="bg-green-50 border border-green-200 rounded-3xl p-8">
          <h2 className="text-2xl font-semibold mb-3">
            Buy 2 Get 1 Free
          </h2>

          <p>
            Limited-time offer on selected kids' t-shirts.
          </p>
        </div>
      </main>

      <Footer />
    </>
      </PageTransition>

  );
}
