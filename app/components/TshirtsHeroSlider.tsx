"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/product1.png",
  "/product2.png",
  "/product3.png",
];

export default function TshirtsHeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
  <div className="relative h-full w-full">
    <Image
      src={images[current]}
      alt="Torido Hero"
      fill
      priority
      className="object-cover"
    />
  </div>
);
}
