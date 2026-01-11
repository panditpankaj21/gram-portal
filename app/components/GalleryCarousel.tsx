"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Ensure you have lucide-react installed

type Slide = {
  id: number;
  src: string;
  caption: string;
  subText?: string; // Optional extra context
};

const slides: Slide[] = [
  { id: 1, src: "/gallery/image1.jpg", caption: "ग्रामपंचायत कार्यालय", subText: "प्रशासकीय इमारत" },
  { id: 2, src: "/gallery/image2.jpg", caption: "ग्रामसभा", subText: "लोकसहभाग आणि चर्चा" },
  { id: 3, src: "/gallery/image3.jpg", caption: "पाणीपुरवठा योजना", subText: "स्वच्छ पिण्याचे पाणी" },
  { id: 4, src: "/gallery/image4.jpg", caption: "प्राथमिक आरोग्य केंद्र", subText: "आरोग्य सुविधा" },
  { id: 5, src: "/gallery/image5.jpg", caption: "जिल्हा परिषद शाळा", subText: "शिक्षण हेच भविष्य" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Memoized navigation functions to avoid stale closures
  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, prev]);

  return (
    <div 
      className="relative w-full aspect-video sm:aspect-[16/7] md:aspect-[21/9] bg-slate-900 overflow-hidden shadow-2xl group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* --- Slides (Stacked for Fade Effect) --- */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={slide.src}
            alt={slide.caption}
            fill
            className="object-cover object-center"
            priority={index === 0} // Only prioritize LCP image
          />
          
          {/* Overlay Gradient (Better Text Contrast) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/10" />
        </div>
      ))}

      {/* --- Caption Section --- */}
      <div className="absolute bottom-8 left-4 sm:left-10 z-20 max-w-2xl">
        <div className="overflow-hidden">
          <h2 className={`text-white text-2xl sm:text-4xl font-bold tracking-wide drop-shadow-lg transition-all duration-700 transform ${
            isPaused ? "translate-y-0 opacity-100" : "translate-y-0" 
          }`}>
             {slides[current].caption}
          </h2>
        </div>
        <p className="text-orange-300 text-sm sm:text-lg font-medium mt-1 drop-shadow-md">
           {slides[current].subText}
        </p>
      </div>

      {/* --- Controls (Arrows) --- */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white transition-all transform hover:scale-110 active:scale-95 hidden sm:flex"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md border border-white/20 text-white transition-all transform hover:scale-110 active:scale-95 hidden sm:flex"
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* --- Indicators (Dots) --- */}
      <div className="absolute bottom-4 right-4 sm:right-10 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-500 rounded-full h-1.5 sm:h-2 ${
              current === i 
                ? "w-8 bg-orange-500" 
                : "w-2 sm:w-3 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}