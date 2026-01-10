"use client";

import { useState } from "react";

const items = [
  {
    type: "Certificate",
    title: "सर्वोत्कृष्ट ग्रामपंचायत",
    desc: "सर्वोत्तम ग्रामपंचायत या प्रकारात प्रथम क्रमांकाचा पुरस्कार.",
    image: "/gallery/image1.jpg",
  },
  {
    type: "Award",
    title: "भूजल समृद्ध ग्राम स्पर्धा २०२२-२३",
    desc: "ग्रामाचा प्रथम क्रमांक! 🏆",
    image: "/gallery/image2.jpg",
  },
  // Add more…
];

const fallback = (title: string) => title.charAt(0).toUpperCase();

export default function AwardsPage() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <>
      <section className="min-h-screen w-full bg-gradient-to-b from-[#e8f1ff] to-white py-16 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C5FAF]">
              प्रमाणपत्रे आणि पुरस्कार
            </h2>
            <p className="text-gray-600 text-lg mt-2">
              आमच्या ग्रामपंचायतीला मिळालेली अधिकृत प्रमाणपत्रे आणि सन्मान.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-blue-100 
                shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* IMAGE */}
                <div className="relative w-full h-48 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1C5FAF]/10 text-5xl font-bold text-[#1C5FAF]">
                      {fallback(item.title)}
                    </div>
                  )}
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-full bg-[#1C5FAF] text-white">
                    {item.type}
                  </span>

                  <h3 className="mt-3 text-lg font-semibold text-gray-800 group-hover:text-[#1C5FAF] transition">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>

                  {/* SIMPLE ARROW BUTTON */}
                  <button
                    onClick={() => setActive(item.image ?? null)}
                    className="mt-4 cursor-pointer flex items-center gap-1 text-[#1C5FAF] font-semibold hover:gap-2 transition-all"
                  >
                    पहा/डाउनलोड करा →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODAL */}
      {active && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center p-4 z-[999]"
          onClick={() => setActive(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white rounded-2xl shadow-xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active}
              alt="Full"
              className="w-full max-h-[75vh] object-contain rounded-lg"
            />

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActive(null)}
              className="absolute -top-4 -right-4 bg-white rounded-full shadow-lg p-2 font-bold text-[#1C5FAF] hover:bg-blue-50"
            >
              ✕
            </button>

            {/* DOWNLOAD BUTTON */}
            <a
              href={active}
              download
              className="mt-4 block text-center w-full py-3 rounded-xl border border-[#1C5FAF] text-[#1C5FAF] font-semibold hover:bg-[#1C5FAF] hover:text-white transition"
            >
              डाउनलोड करा 
            </a>
          </div>
        </div>
      )}
    </>
  );
}
