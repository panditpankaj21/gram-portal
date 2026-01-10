"use client";

import Image from "next/image";

export default function SarpanchSection() {
  return (
    <section className="w-full bg-linear-to-b from-[#e8f1ff] to-white py-8 px-4 sm:px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT — MAP + TITLE */}
        <div> 
            <h2 className="text-2xl font-bold text-[#1C5FAF] mb-5 text-center md:text-left">
                🗺️ नकाशा 
            </h2> 
            <div className="w-full h-120 rounded-2xl overflow-hidden shadow-xl ring-1 ring-blue-300">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7764.949017081841!2d78.1291!3d20.8909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4975dd75e2bbb%3A0x7c64cbea2e119cf9!2sNarkhed%2C%20Maharashtra!5e0!3m2!1en!2sin!4v1704877777777" 
                loading="lazy" 
                allowFullScreen 
                className="w-full h-full border-0" 
                />
            </div>
        </div>

        {/* RIGHT — PROFILE */}
        <div className="relative bg-white/70 backdrop-blur-md shadow-xl rounded-3xl border border-blue-200 p-5 hover:shadow-blue-300/40 transition duration-500">
          {/* PHOTO */}
          <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg from-blue-300 via-blue-400 to-blue-500 mb-6">
            <Image
              src="/gallery/image1.jpg"
              alt="सरपंच"
              fill
              className="object-cover"
            />
          </div>

          {/* NAME & TITLE */}
          <h3 className="text-2xl font-bold text-center text-[#1C5FAF] mb-1">
            सौ. नंदा अनिल बांदरे
          </h3>
          <p className="text-center text-blue-900 font-semibold mb-4 tracking-wide">
            सरपंच
          </p>

          {/* CONTACT INFO */}
          <div className="space-y-1 text-center text-gray-700 text-sm mb-6">
            <p>📧 <span className="font-medium text-blue-900">nandabandre66@gmail.com</span></p>
            <p>📞 <span className="font-medium text-blue-900">+91-9763185985</span></p>
          </div>

          {/* PROFILE INFO GRID */}
          <h4 className="text-center text-md font-semibold text-[#1C5FAF] mb-6 border-t border-blue-200 pt-4">
            ग्रामपंचायत प्रोफाइल
          </h4>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              ["नरखेड", "ब्लॉक / तालुका"],
              ["नागपूर", "जिल्हा"],
              ["महाराष्ट्र", "राज्य"],
              ["441306", "पिनकोड"],
              ["180521", "GP कोड"],
              ["2208", "लोकसंख्या"],
              ["12.85", "चौ.कि.मी"],
            ].map(([value, label], i) => (
              <div
                key={i}
                className="border-blue-100 rounded-xl py-4 px-2 shadow-sm transform transition duration-300"
              >
                <p className="font-bold text-[#1C5FAF] text-lg sm:text-base">{value}</p>
                <p className="text-gray-600 text-xs sm:text-sm">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
