
import PageTransition from "@/app/components/PageTransition";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, BEST_SELLERS } from "@/lib/products";

export default function HomePage() {
     return (

      <PageTransition>
  <>
 

    <main>

     {/* HERO */}
<section className="relative h-screen overflow-hidden">

<Image
  src="/hero.png"
  alt="Torido Hero"
  fill
  priority
  className="object-cover"
/>

  <div className="absolute inset-0 bg-black/25" />
     

  <div className="absolute inset-0 flex items-center">
    <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="max-w-xl text-white">

        <p className="uppercase tracking-[0.25em] mb-4">
          New Collection 2026
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Comfort Made Simple.
        </h1>

        <p className="mt-6 text-lg">
          Premium cotton tees for kids.
        </p>

        <Link
          href="/tshirts"
          className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-xl font-semibold"
        >
          Shop Collection
        </Link>

      </div>
    </div>
  </div>

</section>

      {/* NEW ARRIVALS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/product3.png"
                alt="New Arrival"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[400px] mt-16 rounded-3xl overflow-hidden">
              <Image
                src="/product4.png"
                alt="New Arrival"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.2em] text-green-600 mb-4">
              New Arrivals
            </p>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Fresh styles for little explorers.
            </h2>

            <p className="text-slate-600 text-lg mb-8">
              Discover our newest collection designed for comfort,
              play and everyday adventures.
            </p>

            <Link
              href="/new"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-xl"
            >
              Shop New Arrivals
            </Link>
          </div>

        </div>
      </section>

     {/* WHY TORIDO */}
<section className="bg-slate-50 py-24">
  <div
    className="
      max-w-7xl
      mx-auto
      px-10
      py-16
      bg-white
      rounded-[40px]
      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    "
  >

    <h2 className="text-center text-4xl font-bold mb-16">
      Why Parents Choose Torido
    </h2>

    <div className="grid md:grid-cols-4 gap-8">
         
            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="font-semibold mb-2">
                Soft Cotton
              </h3>
              <p>Comfortable for everyday wear.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="font-semibold mb-2">
                Safe Materials
              </h3>
              <p>Designed with kids in mind.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="font-semibold mb-2">
                Cash On Delivery
              </h3>
              <p>Pay when your order arrives.</p>
            </div>

            <div className="bg-white p-8 rounded-3xl text-center">
              <h3 className="font-semibold mb-2">
                Islandwide Delivery
              </h3>
              <p>Fast shipping across Sri Lanka.</p>
            </div>

          </div>
  </div>

        </div>
      </section>

      {/* BEST SELLER */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <h2 className="text-4xl font-bold mb-12">
          Best Seller
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="relative h-[600px] rounded-3xl overflow-hidden">
            <Image
              src={BEST_SELLERS[0].image}
              alt={BEST_SELLERS[0].name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="uppercase tracking-[0.2em] text-green-600 mb-4">
              Most Loved
            </p>

            <h3 className="text-5xl font-bold mb-4">
              {BEST_SELLERS[0].name}
            </h3>

            <p className="text-2xl mb-8">
              {BEST_SELLERS[0].price}
            </p>

            <Link
              href={`/product/${BEST_SELLERS[0].id}`}
              className="bg-green-600 text-white px-8 py-4 rounded-xl inline-block"
            >
              View Product
            </Link>
          </div>

        </div>
      </section>

     {/* REVIEWS */}
<section className="bg-slate-50 py-24">

  <div
    className="
      max-w-7xl
      mx-auto
      px-10
      py-16
      bg-white
      rounded-[40px]
      shadow-[0_20px_60px_rgba(0,0,0,0.08)]
    "
  >

    <h2 className="text-center text-4xl font-bold mb-16">
      What Parents Say
    </h2>

    <div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex items-center gap-4 mb-5">

    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-lg font-bold text-green-700">
      S
    </div>

    <div>
      <h4 className="font-semibold">
        Sarah Perera
      </h4>

      <p className="text-sm text-slate-500">
        Colombo
      </p>
    </div>

  </div>

  <div className="text-yellow-500 mb-4">
    ⭐⭐⭐⭐⭐
  </div>

  <p className="text-slate-600 leading-relaxed">
    My son absolutely loves these shirts. The fabric is soft,
    comfortable and still looks new after several washes.
  </p>

</div>
         

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex items-center gap-4 mb-5">

    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-lg font-bold text-green-700">
      S
    </div>

    <div>
      <h4 className="font-semibold">
        Sarah Perera
      </h4>

      <p className="text-sm text-slate-500">
        Colombo
      </p>
    </div>

  </div>

  <div className="text-yellow-500 mb-4">
    ⭐⭐⭐⭐⭐
  </div>

  <p className="text-slate-600 leading-relaxed">
    My son absolutely loves these shirts. The fabric is soft,
    comfortable and still looks new after several washes.
  </p>

</div>

<div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

  <div className="flex items-center gap-4 mb-5">

    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-lg font-bold text-green-700">
      S
    </div>

    <div>
      <h4 className="font-semibold">
        Sarah Perera
      </h4>

      <p className="text-sm text-slate-500">
        Colombo
      </p>
    </div>

  </div>

  <div className="text-yellow-500 mb-4">
    ⭐⭐⭐⭐⭐
  </div>

  <p className="text-slate-600 leading-relaxed">
    My son absolutely loves these shirts. The fabric is soft,
    comfortable and still looks new after several washes.
  </p>


        </div>

      </section>

    </main>

  
  </>
  </PageTransition>

);


}
