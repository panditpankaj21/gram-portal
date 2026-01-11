"use client";

import React, { useState } from "react";
import { Megaphone, X } from "lucide-react"; 

export default function NotificationBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      {/* CSS Update: Changed 0% from '100%' to '100vw' */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(100vw); } 
          100% { transform: translateX(-100%); }
        }
        .scrolling-text {
          animation: marquee 20s linear infinite; /* Slightly faster (20s) for better mobile feel */
        }
        .scrolling-wrapper:hover .scrolling-text {
          animation-play-state: paused;
        }
      `}</style>

      {/* 2. The Banner Component */}
      <div className="w-full bg-red-50 border-b border-red-200 h-10 flex items-center relative overflow-hidden font-sans z-30 shadow-sm">
        
        {/* Fixed Label (Left Side) */}
        <div className="bg-red-700 text-white px-4 h-full flex items-center gap-2 z-20 shadow-lg shrink-0">
          <Megaphone size={16} className="animate-pulse" />
          <span className="text-xs font-bold tracking-wide uppercase hidden sm:inline">
            महत्वाची सूचना
          </span>
          {/* Mobile Text */}
          <span className="text-xs font-bold tracking-wide uppercase sm:hidden">
            सूचना
          </span>
        </div>

        {/* Scrolling Area */}
        <div className="flex-1 overflow-hidden relative h-full flex items-center scrolling-wrapper">
          
          <div className="whitespace-nowrap scrolling-text flex items-center cursor-default">
            
            {/* Notice 1 */}
            <span className="mx-4 text-sm font-semibold text-red-900 flex items-center gap-2">
               🔴 २६ जानेवारी रोजी प्रजासत्ताक दिनानिमित्त शासकीय कार्यालये बंद राहतील.
            </span>
            
            <span className="text-red-300">|</span>
            
            {/* Notice 2 */}
            <span className="mx-4 text-sm font-semibold text-blue-900 flex items-center gap-2">
               📢 आगामी ग्रामसभा २ फेब्रुवारी रोजी आयोजित केली आहे.
            </span>

            <span className="text-red-300">|</span>

            {/* Notice 3 */}
            <span className="mx-4 text-sm font-semibold text-green-800 flex items-center gap-2">
               💧 पाणीपट्टी आणि घरपट्टी ३१ मार्च पूर्वी भरून सहकार्य करावे.
            </span>

          </div>

          {/* Fading Edges for smoothness */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-red-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-red-50 to-transparent z-10"></div>
        </div>

        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="h-full px-3 text-red-400 hover:text-red-700 hover:bg-red-100 transition-colors z-20 border-l border-red-200 bg-red-50"
          aria-label="Close notification"
        >
          <X size={16} />
        </button>

      </div>
    </>
  );
}