"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Slide = {
  src: string;
  caption: string;
};

const slides: Slide[] = [
  { src: "/gallery/image1.jpg", caption: "Village Panchayat Office" },
  { src: "/gallery/image2.jpg", caption: "Public Meeting Area" },
  { src: "/gallery/image3.jpg", caption: "Clean Water Facility" },
  { src: "/gallery/image4.jpg", caption: "Primary Health Center" },
  { src: "/gallery/image5.jpg", caption: "Local School Campus" },
];

export default function GalleryCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative w-full mx-auto aspect-video sm:aspect-[16/7] overflow-hidden shadow-xl group">
      {/* Image */}
      <Image
        src={slides[index].src}
        alt={slides[index].caption}
        fill
        className=" transition-all duration-700 scale-105 group-hover:scale-100"
        priority
      />

      {/* Gradient + Caption */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3 text-white text-sm sm:text-lg font-medium drop-shadow">
        {slides[index].caption}
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-1 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition shadow backdrop-blur-md"
        aria-label="Previous image"
      >
        ❮
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-1 sm:p-2 rounded-full opacity-0 group-hover:opacity-100 transition shadow backdrop-blur-md"
        aria-label="Next image"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-300 ${
              index === i
                ? "bg-white scale-125 shadow"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}