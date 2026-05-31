
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/footer";
import PageTransition from "@/app/components/PageTransition";

export default function FAQPage() {
  return (
      <PageTransition>

    <>
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-bold mb-10">
          Frequently Asked Questions
        </h1>

        <div className="space-y-8">
          <div>
            <h2 className="font-semibold text-lg">
              How long does delivery take?
            </h2>
            <p className="text-slate-600 mt-2">
              Delivery usually takes 2–5 working days.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Do you offer Cash on Delivery?
            </h2>
            <p className="text-slate-600 mt-2">
              Yes, Cash on Delivery is available islandwide.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-lg">
              Can I exchange a product?
            </h2>
            <p className="text-slate-600 mt-2">
              Yes, exchanges are accepted within 7 days.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </PageTransition>
    </>
  );
}
