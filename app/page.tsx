
import PageTransition from "@/app/components/PageTransition";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS, BEST_SELLERS } from "@/lib/products";

export default function HomePage() {
     return (

      <PageTransition>
  
 

    <main>

         const heroImages = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
];

const [currentImage, setCurrentImage] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, 5000);

  return () => clearInterval(interval);
}, []);

     {/* HERO */}
<section className="relative h-screen overflow-hidden">

  {/* Background Images */}
  {heroImages.map((image, index) => (
    <Image
      key={image}
      src={image}
      alt="Torido Hero"
      fill
      priority
      className={`
        object-cover
        object-top
        md:object-center
        absolute
        inset-0
        transition-opacity
        duration-1000
        ${index === currentImage ? "opacity-100" : "opacity-0"}
      `}
    />
  ))}

  {/* Dark Overlay */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-black/50
      via-black/15
      to-transparent
      z-10
    "
  />

  {/* Content */}
  <div className="absolute inset-0 flex items-center z-20">
    <div className="max-w-7xl mx-auto px-6 w-full">

      <div className="max-w-xl text-white">

        <p className="uppercase tracking-[0.25em] mb-4">
          NEW COLLECTION 2026
        </p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[0.95]">
          Comfort Made
          <br />
          Simple.
        </h1>

        <p className="mt-6 text-lg text-white/90">
          Premium cotton tees for kids.
        </p>

        <Link
          href="/tshirts"
          className="
            inline-block
            mt-8
            bg-[#7BC043]
            hover:bg-[#69b035]
            text-white
            px-8
            py-4
            rounded-xl
            font-semibold
            transition-all
            duration-300
            shadow-md
          "
        >
          Shop Collection
        </Link>

      </div>
    </div>
  </div>

  {/* Slider Dots */}
  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
    {heroImages.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentImage(index)}
        className={`
          w-3 h-3 rounded-full transition-all
          ${
            index === currentImage
              ? "bg-white"
              : "bg-white/40"
          }
        `}
      />
    ))}
  </div>

</section>

      {/* NEW ARRIVALS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <div className="grid grid-cols-2 gap-6">
            <div className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/product3.png"
                alt="New Arrival"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-[250px] md:h-[400px] mt-16 rounded-3xl overflow-hidden">
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

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Fresh styles for little explorers.
            </h2>

            <p className="text-slate-600 text-lg mb-8">
              Discover our newest collection designed for comfort,
              play and everyday adventures.
            </p>

            <Link
  href="/new"
  className="
    inline-flex
    items-center
    justify-center
    bg-[#7BC043]
    hover:bg-[#69b035]
    text-white
    px-8
    py-4
    rounded-full
    font-medium
    transition-all
    duration-300
    shadow-sm
    hover:shadow-md
  "
>
  Shop New Arrivals
</Link>
          </div>

        </div>
      </section>

    {/* WHY TORIDO */}
<section
  className="relative py-24 bg-cover bg-center"
 style={{
      backgroundImage: "url('/bg.png')",
      opacity: 0.06,
      filter: "blur(4px)",
    }}
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
        Why Parents Choose Torido
      </h2>
      <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
        Premium quality kidswear designed for comfort, durability and everyday adventures.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-6">

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3">
          Soft Cotton
        </h3>
        <p className="text-slate-600">
          Breathable premium cotton that keeps kids comfortable throughout the day.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3">
          Safe Materials
        </h3>
        <p className="text-slate-600">
          Carefully selected fabrics that are gentle on children's skin.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3">
          Cash On Delivery
        </h3>
        <p className="text-slate-600">
          Convenient payment option available across Sri Lanka.
        </p>
      </div>

      <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition">
        <h3 className="text-xl font-semibold mb-3">
          Islandwide Delivery
        </h3>
        <p className="text-slate-600">
          Reliable delivery service reaching customers nationwide.
        </p>
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
              className="
    inline-flex
    items-center
    justify-center
    bg-[#7BC043]
    hover:bg-[#69b035]
    text-white
    px-8
    py-4
    rounded-full
    font-medium
    transition-all
    duration-300
    shadow-sm
    hover:shadow-md
  "
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

    <div className="grid md:grid-cols-3 gap-5 md:gap-8 ">

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

         </div>
       
         </div>

      </section>

    </main>

  
  </PageTransition>

);


}
