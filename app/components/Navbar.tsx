"use client";

import { useState } from "react";
import Image from "next/image"; // Ensure you have images in public folder
import { Search, Globe, SkipForward } from "lucide-react";
import MainMenu from "./MainMenu";

export default function Navbar() {
  const [fontSize, setFontSize] = useState("base");

  const changeFont = (size: string) => {
    setFontSize(size);
    // Standard Govt Accessibility Resizing
    if (size === "small") {
      document.documentElement.style.fontSize = "14px";
    } else if (size === "large") {
      document.documentElement.style.fontSize = "18px";
    } else {
      document.documentElement.style.fontSize = "16px";
    }
  };

  return (
    <header className="w-full bg-white shadow-sm font-sans z-50 relative">

      {/* 2. Accessibility Top Bar (Dark Blue) */}
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

            {/* Font Resizer */}
            <div className="flex items-center gap-2">
               <span className="opacity-90">अक्षर आकार:</span>
               <div className="flex bg-white/10 rounded-lg p-0.5">
                  <button 
                    onClick={() => changeFont("small")}
                    className={`px-2 py-0.5 text-xs font-bold rounded ${fontSize === 'small' ? 'bg-white text-blue-900' : 'hover:bg-white/20'}`}
                  >
                    A-
                  </button>
                  <button 
                    onClick={() => changeFont("base")}
                    className={`px-2 py-0.5 text-xs font-bold rounded ${fontSize === 'base' ? 'bg-white text-blue-900' : 'hover:bg-white/20'}`}
                  >
                    A
                  </button>
                  <button 
                    onClick={() => changeFont("large")}
                    className={`px-2 py-0.5 text-xs font-bold rounded ${fontSize === 'large' ? 'bg-white text-blue-900' : 'hover:bg-white/20'}`}
                  >
                    A+
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Main Header (Logo Section) */}
      <div className="bg-white py-4 md:py-6 shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Emblem & Name */}
          <div className="flex items-center gap-4 md:gap-6 text-center md:text-left w-full md:w-auto justify-center md:justify-start">
             {/* Indian Emblem (Ashoka Stambh) */}
             {/* Replace src with your actual image path */}
             {/* <div className="shrink-0">
                <Image 
                  src="/satyamev.png" // Ensure you have this image
                  alt="Satyamev Jayate"
                  width={60}
                  height={90}
                  className="w-12 h-auto md:w-16 object-contain opacity-90"
                />
             </div> */}

             <div>
                <h3 className="text-orange-600 font-bold text-xs md:text-sm tracking-widest uppercase mb-1">
                  पंचायत समिती काटोल, जिल्हा नागपूर
                </h3>
                <h1 className="text-3xl md:text-5xl font-extrabold text-[#1e3a8a] leading-tight">
                   ग्रामपंचायत सोनोली
                </h1>
                <p className="text-gray-500 text-sm md:text-base font-medium mt-1">
                   स्वच्छ, सुंदर आणि समृद्ध गाव
                </p>
             </div>
          </div>

          {/* Right: Campaign Logo (e.g., Swachh Bharat or Digital India) */}
          <div className="hidden md:flex items-center gap-6">
             {/* Example: Digital India or Swachh Bharat Logo */}
             <div className="text-right hidden lg:block">
                <p className="text-xs font-bold text-gray-400 uppercase">नागरिक सहायता</p>
                <p className="text-lg font-bold text-blue-900">9923620736</p>
             </div>
             
             <Image 
                src="/logos/Swacch-Bharat.png" 
                alt="Swachh Bharat" 
                width={120} 
                height={60}
                className="w-28 h-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
             />
          </div>
        </div>
      </div>

      {/* 4. Navigation Menu */}
      <div className="bg-[#1e3a8a] shadow-md">
         <MainMenu />
      </div>

    </header>
  );
}