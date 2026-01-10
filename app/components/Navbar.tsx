"use client";

import { useState } from "react";
import MainMenu from "./MainMenu";

export default function Navbar() {
  const [fontSize, setFontSize] = useState("base");

  const changeFont = (size: string) => {
    setFontSize(size);

    if (size === "small") {
      document.documentElement.style.fontSize = "14px";
    } else if (size === "large") {
      document.documentElement.style.fontSize = "18px";
    } else {
      document.documentElement.style.fontSize = "16px";
    }
  };

  return (
    <header className="w-full bg-white shadow-md border-b border-gray-200">
      {/* Top Bar */}
      <div className="w-full bg-gradient-to-r from-[#0A427A] to-[#1565C0] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center py-2 px-4 space-y-1 sm:space-y-0">
        {/* Left text */}
        <div className="text-sm sm:text-base font-medium flex items-center space-x-2">
          <span>🇮🇳 भारत सरकार • Maharashtra Government</span>
        </div>

        {/* Right font controls */}
        <div className="flex items-center space-x-2">
          <span className="text-xs sm:text-sm font-semibold tracking-wide">
            अक्षर आकार:
          </span>
          <div className="flex items-center space-x-1 bg-white/20 rounded-full p-1">
            <button
              onClick={() => changeFont("small")}
              className={`px-2 py-1 rounded-full text-[#0A427A] font-medium text-xs sm:text-sm hover:bg-white hover:text-[#0A427A] transition ${
                fontSize === "small" ? "bg-white text-[#0A427A] shadow" : ""
              }`}
            >
              अ-
            </button>
            <button
              onClick={() => changeFont("base")}
              className={`px-2 py-1 rounded-full text-[#0A427A] font-medium text-xs sm:text-sm hover:bg-white hover:text-[#0A427A] transition ${
                fontSize === "base" ? "bg-white text-[#0A427A] shadow" : ""
              }`}
            >
              अ
            </button>
            <button
              onClick={() => changeFont("large")}
              className={`px-2 py-1 rounded-full text-[#0A427A] font-medium text-xs sm:text-sm hover:bg-white hover:text-[#0A427A] transition ${
                fontSize === "large" ? "bg-white text-[#0A427A] shadow" : ""
              }`}
            >
              अ+
            </button>
          </div>
        </div>
      </div>
    </div>

      {/* Branding */}
      <div className="px-4 py-4 text-center bg-gradient-to-b from-blue-50 to-white">
        <h1 className="text-2xl font-extrabold text-[#0A427A] tracking-wide leading-tight drop-shadow-sm">
          ग्राम पंचायत सोनोली
        </h1>

        <p className="text-[15px] text-gray-700 leading-tight mt-1 font-medium">
          पंचायत समिती काटोल, जिल्हा परिषद नागपूर
        </p>

        <p className="text-[14px] text-gray-600 mt-1 italic">
          गाव विकास, पारदर्शक प्रशासन आणि लोकसहभाग
        </p>
      </div>

      <MainMenu />
    </header>
  );
}