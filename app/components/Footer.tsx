"use client";

import Image from "next/image";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight,
  ExternalLink
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full font-sans">

      {/* 2. Main Footer Body */}
      <div className="bg-[#0f172a] text-slate-200 pt-12 pb-8 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: About & Identity */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-l-4 border-orange-500 pl-3">
              ग्रामपंचायत कार्यालय
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              आपल्या गावाचा सर्वांगीण विकास हेच आमचे ध्येय. पारदर्शक कारभार आणि लोकाभिमुख प्रशासन.
            </p>
            
            {/* Social Media (Vector Icons) */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-blue-600 transition-colors group">
                <Facebook size={20} className="text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-sky-500 transition-colors group">
                <Twitter size={20} className="text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-pink-600 transition-colors group">
                <Instagram size={20} className="text-slate-400 group-hover:text-white" />
              </a>
              <a href="#" className="bg-slate-800 p-2 rounded-lg hover:bg-red-600 transition-colors group">
                <Youtube size={20} className="text-slate-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-l-4 border-white pl-3">
              महत्वाचे दुवे
            </h3>
            <ul className="space-y-2 text-sm">
              {[
                "मुख्य पृष्ठ", 
                "आमच्याबद्दल", 
                "शासकीय योजना", 
                "नागरिक सुविधा", 
                "RTI माहिती", 
                "संपर्क"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="flex items-center gap-2 hover:text-orange-400 transition-colors group">
                    <ChevronRight size={14} className="text-slate-500 group-hover:text-orange-400" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-l-4 border-green-600 pl-3">
              संपर्क माहिती
            </h3>
            <div className="space-y-3 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span>ग्रामपंचायत कार्यालय, सोनोली<br/>ता. काटोल, जिल्हा नागपूर - 441302</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-500 shrink-0" />
                <span className="font-mono">+91 9764850450</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                <a href="mailto:gpsonoli@gmail.com" className="hover:text-white transition-colors">
                  gpsonoli@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 4: Government Initiatives (Logos) */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white border-l-4 border-blue-500 pl-3">
              शासकीय अभियान
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[
                { src: "/logos/Swacch-Bharat.png", alt: "Swachh Bharat" },
                { src: "/logos/Digital-India.png", alt: "Digital India" },
                { src: "/logos/beti-bacho.png", alt: "Beti Bachao" },
                { src: "/logos/satyamev.png", alt: "Satyamev Jayate" },
                { src: "/logos/azadi.png", alt: "Azadi Ka Amrit Mahotsav" },
                { src: "/ladli.png", alt: "Ladli bahin yojna" },
              ].map((logo, idx) => (
                <div key={idx} className="bg-white p-1 rounded-md flex items-center justify-center h-14 w-full shadow-sm hover:scale-105 transition-transform">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={50}
                    height={50}
                    className="w-auto h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Policy Links */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-medium">
           <a href="#" className="hover:text-white hover:underline">गोपनीयता धोरण (Privacy Policy)</a>
           <a href="#" className="hover:text-white hover:underline">अटी व शर्ती (Terms & Conditions)</a>
           <a href="#" className="hover:text-white hover:underline">अस्वीकरण (Disclaimer)</a>
           <a href="#" className="hover:text-white hover:underline">साइटमॅप (Sitemap)</a>
        </div>
      </div>

      {/* 3. Bottom Copyright Bar */}
      <div className="bg-[#090e1a] text-slate-400 py-4 px-4 text-xs md:text-sm border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="text-center md:text-left">
            <p>
              © 2025 <span className="text-white font-semibold">ग्रामपंचायत सोनोली (ता. काटोल)</span>. सर्व हक्क राखीव.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-1 md:gap-2 text-center md:text-right">
             <span>Developed by</span>
             <a 
               href="#" 
               className="flex items-center gap-1.5 text-orange-400 hover:text-orange-300 transition-colors font-semibold"
             >
               pkp and vw
               <ExternalLink size={12} />
             </a>
          </div>

        </div>
      </div>
    </footer>
  );
}