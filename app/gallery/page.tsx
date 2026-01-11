"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  Image as ImageIcon,
  Filter
} from "lucide-react";

// Data Structure (Supports Categories)
const galleryData = [
  { src: "/gallery/image1.jpg", category: "विकास कामे", title: "ग्रामपंचायत इमारत" },
  { src: "/gallery/image2.jpg", category: "कार्यक्रम", title: "ग्रामसभा बैठक" },
  { src: "/gallery/image3.jpg", category: "सुविधा", title: "पाणीपुरवठा टाकी" },
  { src: "/gallery/image4.jpg", category: "सुविधा", title: "आरोग्य केंद्र" },
  { src: "/gallery/image5.jpg", category: "विकास कामे", title: "नवीन सिमेंट रस्ता" },
  // Duplicating for demo (Remove in production)
  { src: "/gallery/image1.jpg", category: "इतर", title: "शाळा परिसर" },
];

const categories = ["सर्व", "विकास कामे", "कार्यक्रम", "सुविधा"];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("सर्व");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // Filter Logic
  const filteredImages = selectedCategory === "सर्व" 
    ? galleryData 
    : galleryData.filter(img => img.category === selectedCategory);

  // --- Modal Navigation Logic ---
  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % filteredImages.length);
  }, [selectedIndex, filteredImages.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! - 1 + filteredImages.length) % filteredImages.length);
  }, [selectedIndex, filteredImages.length]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (selectedIndex === null) return;
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
    if (e.key === "Escape") setSelectedIndex(null);
  }, [selectedIndex, handleNext, handlePrev]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <section className="min-h-screen bg-slate-50 py-16 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold tracking-wider uppercase mb-3">
              <ImageIcon size={14} />
              विकास कामे व उपक्रम
           </div>
           <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-4">
             फोटो गॅलरी
           </h2>
           <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full shadow-sm"></div>
        </div>

        {/* --- FILTERS --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${
                selectedCategory === cat
                  ? "bg-[#1e3a8a] text-white border-[#1e3a8a] shadow-md transform scale-105"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-blue-50 hover:border-blue-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- GALLERY GRID --- */}
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item, index) => (
              <div
                key={index}
                onClick={() => setSelectedIndex(index)}
                className="group relative h-64 w-full rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl border border-slate-200 transition-all duration-300 bg-slate-200"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                   <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-2 py-1 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm mb-2">
                        {item.category}
                      </span>
                      <h3 className="text-white font-bold text-lg">{item.title}</h3>
                   </div>
                   
                   {/* Center Icon */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 hover:bg-white/30">
                      <ZoomIn size={24} />
                   </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400 bg-white rounded-2xl border border-dashed border-slate-300">
             <Filter className="w-12 h-12 mx-auto mb-3 opacity-20" />
             <p>या विभागात सध्या कोणतेही फोटो उपलब्ध नाहीत.</p>
          </div>
        )}

        {/* --- LIGHTBOX MODAL --- */}
        {selectedIndex !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300 p-4">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <X size={28} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-110 hidden sm:block z-50"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all hover:scale-110 hidden sm:block z-50"
            >
              <ChevronRight size={32} />
            </button>

            {/* Main Image Container */}
            <div className="relative w-full max-w-5xl h-[80vh] flex flex-col items-center justify-center">
              <div className="relative w-full h-full">
                <Image
                  src={filteredImages[selectedIndex].src}
                  alt="Gallery View"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Caption */}
              <div className="absolute bottom-4 left-0 right-0 text-center">
                 <p className="text-white/80 text-sm uppercase tracking-widest mb-1">{filteredImages[selectedIndex].category}</p>
                 <h3 className="text-white text-xl font-bold">{filteredImages[selectedIndex].title}</h3>
                 <p className="text-white/50 text-xs mt-2">
                   Image {selectedIndex + 1} of {filteredImages.length}
                 </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}