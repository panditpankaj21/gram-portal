"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Building2, 
  Users, 
  Landmark, 
  Leaf 
} from "lucide-react";

export default function AboutSection() {
  
  const features = [
    { icon: <Landmark className="text-orange-600" size={20} />, title: "पारदर्शक प्रशासन", desc: "लोकाभिमुख व पारदर्शक कारभार" },
    { icon: <Building2 className="text-blue-600" size={20} />, title: "पायाभूत सुविधा", desc: "रस्ते, पाणी आणि वीज यावर भर" },
    { icon: <Users className="text-purple-600" size={20} />, title: "लोकसहभाग", desc: "प्रत्येक निर्णयात ग्रामस्थांचा सहभाग" },
    { icon: <Leaf className="text-green-600" size={20} />, title: "हरित गाव", desc: "पर्यावरण पूरक विकास कामे" },
  ];

  return (
    <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden">
      
      {/* Background Pattern (Subtle Dots) */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">
            
            {/* Header Block */}
            <div>
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 border border-orange-200 text-xs font-bold tracking-wider uppercase mb-4">
                  <Building2 size={14} />
                  ग्राम विकास
               </div>
               <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
                 ग्रामपंचायत <span className="text-[#1e3a8a] relative inline-block">
                    सोनोली
                    {/* Creative Underline */}
                    <svg className="absolute w-full h-3 -bottom-1 left-0 text-orange-500" viewBox="0 0 100 10" preserveAspectRatio="none">
                       <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                    </svg>
                 </span>
               </h2>
            </div>

            {/* Main Description */}
            <div className="pl-4 border-l-4 border-[#1e3a8a] py-1">
               <p className="text-lg text-slate-600 leading-relaxed font-medium">
                 "निसर्गरम्य परिसराच्या कुशीत वसलेले आणि समृद्ध सांस्कृतिक वारसा लाभलेले सोनोली हे 
                 नागपूर जिल्ह्याच्या काटोल तालुक्यातील एक प्रगतशील गाव आहे. ग्रामपंचायत सोनोली अंतर्गत 
                 येणारे आमचे गाव शांतता, सामाजिक एकता आणि शाश्वत विकासाचे उत्तम उदाहरण म्हणून 
                 ओळखले जाते."
               </p>
            </div>
            
            <p className="text-slate-500 leading-relaxed">
               हे गाव तालुका मुख्यालय काटोलपासून सुमारे १२ किमी अंतरावर, 
               तर जिल्हा मुख्यालय नागपूरपासून ६० किमी अंतरावर स्थित आहे. 
               परंपरेची जपणूक करत आधुनिकतेची कास धरणारे सोनोली गाव आज 
               आपल्या नाविन्यपूर्ण विकासकामांच्या जोरावर प्रगतीचे नवे टप्पे गाठत आहे. 
               पुढील विभागांमध्ये तुम्हाला या गावाबद्दलची माहिती मिळेल.
            </p>

            {/* Feature Grid (New Improvement) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {features.map((item, idx) => (
                 <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                    <div className="mt-1 p-2 bg-white rounded-md shadow-sm border border-slate-100 shrink-0">
                       {item.icon}
                    </div>
                    <div>
                       <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                       <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* Action Button */}
            <div className="pt-2">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 bg-[#1e3a8a] text-white px-8 py-4 rounded-xl text-sm font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-800 hover:shadow-xl transition-all duration-300"
              >
                अधिक वाचा
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT IMAGE (Composite Layout) */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            
            {/* Back Decorative Circle */}
            <div className="absolute w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl opacity-60 -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            
            {/* Main Image Frame */}
            <div className="relative w-full max-w-md">
               {/* Top-Right Decorative Box */}
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 z-0"></div>
               
               <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="relative h-[450px] w-full">
                     <Image
                        src="/gallery/image1.jpg" // Ensure path is correct
                        alt="Grampanchayat Building"
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-1000"
                        priority
                     />
                     {/* Overlay Gradient */}
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                  </div>
                  
                  {/* Bottom Text on Image */}
                  <div className="absolute bottom-10 left-0 right-0 p-6 text-white">
                     <p className="font-bold text-lg">ग्राम सचिवालय</p>
                     <p className="text-sm opacity-90">प्रशासकीय केंद्र</p>
                  </div>
               </div>

               {/* Floating Stats Badge */}
               <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-[200px]">
                  <div className="bg-green-100 p-3 rounded-full text-green-700">
                     <Building2 size={24} />
                  </div>
                  <div>
                     <p className="text-3xl font-extrabold text-slate-900">७०+</p>
                     <p className="text-xs font-bold text-slate-500 uppercase">वर्षे अविरत सेवा</p>
                  </div>
               </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}