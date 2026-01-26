"use client";

import { useState } from "react";
import Image from "next/image"; 
import { Globe } from "lucide-react";
import MainMenu from "./MainMenu";

export default function Navbar() {
  const [fontSize, setFontSize] = useState("base");

  const changeFont = (size: string) => {
    setFontSize(size);
    if (size === "small") document.documentElement.style.fontSize = "14px";
    else if (size === "large") document.documentElement.style.fontSize = "18px";
    else document.documentElement.style.fontSize = "16px";
  };

  return (
    <header className="w-full bg-white shadow-sm font-sans z-50 relative">

      {/* 1. Accessibility Top Bar */}
      <div className="bg-[#1e3a8a] text-white text-xs md:text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
          
          {/* Left: Govt Identity */}
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-1 opacity-90 hover:opacity-100 cursor-pointer">
                <Globe size={14} />
                भारत सरकार | महाराष्ट्र शासन
             </span>
          </div>

          {/* Right: Accessibility Tools */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
               <span className="opacity-90">अक्षर आकार:</span>
               <div className="flex bg-white/10 rounded-lg p-0.5">
                  <button onClick={() => changeFont("small")} className={`px-2 py-0.5 text-xs font-bold rounded ${fontSize === 'small' ? 'bg-white text-blue-900' : 'hover:bg-white/20'}`}>A-</button>
                  <button onClick={() => changeFont("base")} className={`px-2 py-0.5 text-xs font-bold rounded ${fontSize === 'base' ? 'bg-white text-blue-900' : 'hover:bg-white/20'}`}>A</button>
                  <button onClick={() => changeFont("large")} className={`px-2 py-0.5 text-xs font-bold rounded ${fontSize === 'large' ? 'bg-white text-blue-900' : 'hover:bg-white/20'}`}>A+</button>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Header (Logo Section) */}
      <div className="bg-white py-4 md:py-6 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* --- LEFT: LOGO & NAME --- */}
          <div className="flex flex-row items-center justify-center md:gap-6 text-center md:text-left w-full md:w-auto">
             
             {/* LOGO IMAGE */}
             <div className="relative h-22 w-22 md:h-28 md:w-28">
                <Image 
                  src="/logos/panchayat.jpg" // Make sure this file exists in public/logos/
                  alt="Gram Panchayat Logo"
                  fill
                  className="object-contain" // Optional: makes it circular
                  priority
                />
             </div>

             {/* TEXT DETAILS */}
             <div className="flex flex-col items-center md:items-start">
                <h3 className="text-orange-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-1">
                  पंचायत समिती काटोल, जिल्हा नागपूर
                </h3>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#1e3a8a] leading-tight drop-shadow-sm">
                   ग्रामपंचायत सोनोली
                </h1>
                <p className="text-gray-500 text-sm md:text-base font-medium mt-1">
                   स्वच्छ, सुंदर आणि समृद्ध गाव
                </p>
             </div>
          </div>

          {/* --- RIGHT: CAMPAIGN LOGO & CONTACT --- */}
          <div className="hidden md:flex items-center gap-6">
             <div className="text-right hidden lg:block border-r border-gray-200 pr-6">
                <p className="text-xs font-bold text-gray-400 uppercase">नागरिक सहायता</p>
                <p className="text-lg font-bold text-blue-900 tracking-wider">9923620736</p>
             </div>
             
             {/* Swachh Bharat / Digital India Logo */}
             <div className="relative h-16 w-32">
                 <Image 
                   src="/logos/Swacch-Bharat.png" 
                   alt="Swachh Bharat" 
                   fill
                   className="object-contain hover:grayscale-0 transition-all duration-300"
                 />
             </div>
          </div>

        </div>
      </div>

      {/* 3. Navigation Menu */}
      <div className="bg-[#1e3a8a] shadow-md sticky top-0 z-40">
         <MainMenu />
      </div>

    </header>
  );
}