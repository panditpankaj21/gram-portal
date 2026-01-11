"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

const yojanas = [
  {
    name: "संत गाडगे बाबा ग्राम स्वच्छता अभियान",
    desc: "गावे स्वच्छ, सुंदर आणि आरोग्यदायी करण्यासाठी विशेष मोहीम.",
    img: "/yojana/gadge.jpg",
    link: "#"
  },
  {
    name: "प्रधानमंत्री आवास योजना – ग्रामीण",
    desc: "सर्वांसाठी हक्काचे घर: ग्रामीण भागातील बेघरांना घरकुल.",
    img: "/yojana/pmay.jpg",
    link: "#"
  },
  {
    name: "रामाई आवास घरकुल योजना",
    desc: "अनुसूचित जाती व नवबौद्ध घटकांसाठी घरकुल योजना.",
    img: "/yojana/ramai.png",
    link: "#"
  },
  {
    name: "अटल भूजल योजना",
    desc: "भूजल पातळी वाढवण्यासाठी आणि पाण्याचे संवर्धन करण्यासाठी.",
    img: "/yojana/atal.jpg",
    link: "#"
  },
];

export default function YojanaSection() {
  return (
    <section className="relative w-full bg-slate-50 py-16 px-4 sm:px-8 font-sans overflow-hidden">
      
      {/* Background Decoration (Subtle Grid) */}
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '24px 24px', opacity: 0.5 }}></div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold tracking-wider uppercase mb-3">
             <BookOpen size={14} />
             लोककल्याण
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-4">
            शासकीय योजना
          </h2>
          {/* Tricolor Bar */}
          <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full shadow-sm mb-4"></div>
          
          <p className="text-slate-500 text-lg">
            गावाच्या सर्वांगीण विकासासाठी राबविण्यात येणाऱ्या महत्त्वाच्या शासकीय योजना.
          </p>
        </div>

        {/* RESPONSIVE GRID (1 col mobile -> 2 col tablet -> 4 col desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {yojanas.map((yojana, idx) => (
            <Link 
              href={yojana.link} 
              key={idx}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 transition-all duration-300 flex flex-col h-full"
            >
              {/* IMAGE CONTAINER */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-200">
                {/* Fallback color if image fails loading */}
                <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                
                <Image
                  src={yojana.img}
                  alt={yojana.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="font-bold text-[#1e3a8a] text-lg leading-tight mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors">
                  {yojana.name}
                </h3>
                
                {/* Added Description line for better UX */}
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                   {yojana.desc}
                </p>

                {/* Footer Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-bold text-blue-600 group-hover:text-blue-800">
                   <span>अधिक माहिती</span>
                   <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Link */}
        <div className="text-center mt-8">
           <Link 
             href="/schemes" 
             className="inline-flex items-center gap-2 text-slate-500 font-semibold hover:text-blue-700 transition-colors"
           >
             सर्व योजना पहा <ArrowRight size={16} />
           </Link>
        </div>

      </div>
    </section>
  );
}