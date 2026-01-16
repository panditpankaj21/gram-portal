"use client";

import Image from "next/image";
import { 
  MapPin, 
  Users, 
  LandPlot, 
  Building2, 
  Mail, 
  Phone, 
  Hash
} from "lucide-react";

export default function VillageProfileSection() {
  
  const stats = [
    { label: "लोकसंख्या (Population)", value: "1572", icon: <Users size={20} />, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "क्षेत्रफळ (Area)", value: "12.85 चौ.कि.मी", icon: <LandPlot size={20} />, color: "text-green-600", bg: "bg-green-50" },
    { label: "कुटुंब संख्या (Households)", value: "350+", icon: <Building2 size={20} />, color: "text-orange-600", bg: "bg-orange-50" },
    { label: "पिन कोड (Pincode)", value: "441306", icon: <Hash size={20} />, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <section className="w-full bg-slate-50 py-12 md:py-10 px-4 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-3">
             गावाची ओळख व नकाशा
           </h2>
           <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full"></div>
           <p className="text-slate-500 mt-3 font-medium">
             ग्रामपंचायत सोनोली: भौगोलिक व प्रशासकीय माहिती
           </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

          {/* LEFT — VILLAGE PROFILE CARD */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden relative">
             {/* Top Decorative Bar */}
             <div className="h-2 w-full bg-[#1e3a8a]"></div>
             
             <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
                   {/* Village Logo / Image */}
                   <div className="relative w-24 h-24 shrink-0 rounded-full border-4 border-slate-100 shadow-md overflow-hidden">
                      <Image
                        src="/gallery/image1.jpg" // Ensure this image exists
                        alt="Village Icon"
                        fill
                        className="object-cover"
                      />
                   </div>
                   
                   {/* Title Info */}
                   <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-slate-800">ग्रामपंचायत सोनोली</h3>
                      <p className="text-slate-500 font-medium">ता. काटोल, जि. नागपूर - 441306</p>
                      <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100">
                         <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                         LGD Code: 180290
                      </div>
                   </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                   {stats.map((stat, i) => (
                      <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:shadow-md transition-shadow bg-slate-50/50">
                         <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                            {stat.icon}
                         </div>
                         <div>
                            <p className="text-lg font-bold text-slate-800">{stat.value}</p>
                            <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{stat.label}</p>
                         </div>
                      </div>
                   ))}
                </div>

                {/* Contact Info Footer */}
                <div className="bg-[#1e3a8a] -mx-6 -mb-8 md:-mx-8 md:-mb-8 p-6 text-white flex flex-col sm:flex-row justify-between items-center gap-4">
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-full">
                         <Mail size={18} />
                      </div>
                      <div className="text-sm">
                         <p className="opacity-70 text-xs uppercase font-bold">ईमेल</p>
                         <a href="mailto:gpsonoli@gmail.com" className="font-semibold hover:text-orange-300 transition">gpsonoli@gmail.com</a>
                      </div>
                   </div>
                   <div className="w-px h-10 bg-white/20 hidden sm:block"></div>
                   <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-full">
                         <Phone size={18} />
                      </div>
                      <div className="text-sm">
                         <p className="opacity-70 text-xs uppercase font-bold">संपर्क</p>
                         <a href="tel:+919923620736" className="font-semibold hover:text-orange-300 transition">+91 9923620736</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* RIGHT — MAP CARD */}
          <div className="h-full min-h-[400px] border bg-white rounded-2xl shadow-xl  border-slate-100 overflow-hidden flex flex-col">
             
             {/* Map Header */}
             <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-white">
                <div className="flex items-center gap-2 text-[#1e3a8a] font-bold">
                   <MapPin size={20} />
                   <span>नकाशा व स्थान</span>
                </div>
             </div>

             {/* Iframe (Restored Exactly as requested) */}
             <div className="relative flex-1 bg-slate-100 group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.581396023483!2d78.62692685!3d21.3670006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4560d8596f0a7%3A0x248ddb73991b6cf5!2sSonoli%2C%20Maharashtra%20441306!5e0!3m2!1sen!2sin!4v1768049940692!5m2!1sen!2sin" 
                  loading="lazy" 
                  allowFullScreen 
                  className="w-full h-full border-0" 
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}