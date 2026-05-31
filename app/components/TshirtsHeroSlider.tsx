"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/hero-green.jpg",
  "/hero-black.jpg",
  "/hero-pink.jpg",
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
    <Image
      src={images[current]}
      alt="Torido Hero"
      fill
      priority
      className="object-cover"
    />
  );
}
