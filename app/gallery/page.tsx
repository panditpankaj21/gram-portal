"use client";

import { useState } from "react";

export default function GalleryPage() {
  const images = [
    "/gallery/image1.jpg",
    "/gallery/image2.jpg",
    "/gallery/image3.jpg",
    "/gallery/image4.jpg",
    "/gallery/image5.jpg",
  ];

  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="px-4 py-12 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <h2 className="text-center text-4xl font-extrabold text-[#0A427A] mb-10 drop-shadow-sm tracking-wide">
        📸 फोटो गॅलरी
      </h2>

      {/* Gallery */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            onClick={() => setSelectedImg(src)}
            className="
              cursor-pointer rounded-xl overflow-hidden shadow-lg bg-white
              border border-blue-100 group
              hover:shadow-blue-300/70 transition-all duration-300
            "
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              draggable={false}
              className="
                w-full h-44 object-cover
                group-hover:scale-110 transition-transform duration-500
              "
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedImg && (
        <div
          className="
            fixed inset-0 z-999
            bg-black/70 backdrop-blur-sm
            flex justify-center items-center
            animate-[fadeIn_0.25s_ease-in-out]
          "
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <button
              onClick={() => setSelectedImg(null)}
              className="
                absolute -top-4 -right-4
                bg-white text-[#0A427A] font-bold
                rounded-full shadow-md
                w-9 h-9 flex justify-center items-center text-xl
                hover:bg-blue-100 transition
              "
            >
              ✕
            </button>

            <img
              src={selectedImg}
              alt="full"
              className="rounded-xl shadow-2xl object-contain max-h-[90vh] max-w-[90vw]"
            />
          </div>
        </div>
      )}
    </section>
  );
}
