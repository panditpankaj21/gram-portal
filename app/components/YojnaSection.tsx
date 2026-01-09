"use client";

import Image from "next/image";

const yojanas = [
  {
    name: "संत गाडगे बाबा ग्राम स्वच्छता अभियान",
    img: "/yojana/gadge.jpg",
  },
  {
    name: "प्रधानमंत्री आवास योजना – ग्रामीण",
    img: "/yojana/pmay.jpg",
  },
  {
    name: "रामाई आवास घरकुल योजना",
    img: "/yojana/ramai.png",
  },
  {
    name: "अटल भूजल योजना",
    img: "/yojana/atal.jpg",
  },
];

export default function YojanaSection() {
  return (
    <section className="w-full bg-gradient-to-b from-[#e8f1ff] to-white py-16 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* HEADER */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C5FAF] mb-2">
            योजना
          </h2>
          <p className="text-gray-700 sm:text-lg max-w-2xl mx-auto">
            आम्ही आमच्या गावातील ग्रामवासियांना सर्वोत्तम सुविधा देण्याचा प्रयत्न करतो. यापैकी काही खाली सूचीबद्ध आहेत.
          </p>
        </div>

        {/* HORIZONTAL SCROLL CARDS — NO SCROLLBAR */}
        <div className="overflow-x-auto py-4 -mx-4 px-4 scrollbar-hide">
          <div className="flex gap-6 min-w-max">
            {yojanas.map((yojana, idx) => (
              <div
                key={idx}
                className="relative w-64 sm:w-72 flex-shrink-0 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                {/* IMAGE */}
                <div className="relative h-40 rounded-t-3xl overflow-hidden">
                  <Image
                    src={yojana.img}
                    alt={yojana.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* NAME */}
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-[#1C5FAF] text-base sm:text-lg">
                    {yojana.name}
                  </h3>
                </div>

                {/* DECORATIVE SHADOW */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CUSTOM INLINE CSS TO HIDE SCROLLBAR */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </section>
  );
}
