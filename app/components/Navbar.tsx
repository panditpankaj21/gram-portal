"use client";

import GoogleTranslate from "./GoogleTranslate";
import { useState } from "react";
import NotificationBanner from "./NotificationBanner";
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
    <header className="w-full bg-white shadow-sm">
      <div className="w-full bg-[#1C5FAF] text-white text-sm py-1 px-4 flex justify-between items-center">
        <span>भारत सरकार • Government of India</span>

        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => changeFont("large")}
              className="px-2 py-0.5 bg-white text-[#1C5FAF] rounded text-xs font-semibold hover:bg-gray-100"
            >
              A+
            </button>
            <button
              onClick={() => changeFont("base")}
              className="px-2 py-0.5 bg-white text-[#1C5FAF] rounded text-xs font-semibold hover:bg-gray-100"
            >
              A
            </button>
            <button
              onClick={() => changeFont("small")}
              className="px-2 py-0.5 bg-white text-[#1C5FAF] rounded text-xs font-semibold hover:bg-gray-100"
            >
              A-
            </button>
          </div>

          <GoogleTranslate />
        </div>
      </div>

      <div className="px-4 py-3 text-center">
        <h1 className="text-xl font-bold text-gray-900 tracking-wide leading-tight">
          ग्रामपंचायत कोतवालबर्डी
        </h1>

        <p className="text-[15px] text-gray-700 leading-tight mt-1">
          पंचायत समिती काटोल, जिल्हा परिषद नागपूर
        </p>

        <p className="text-[14px] text-gray-600 mt-1">
          महाराष्ट्रातील एकमेव ग्रामपंचायत उपक्रम
        </p>
      </div>
      <MainMenu/>
      <NotificationBanner/>
    </header>
  );
}
