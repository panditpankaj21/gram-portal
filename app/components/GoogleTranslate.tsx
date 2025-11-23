"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function GoogleTranslate() {
  useEffect(() => {
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          includedLanguages: "en,mr",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
  }, []);

  const setLanguage = (lang: string) => {
    const cookieValue = lang === "mr" ? "/en/mr" : "/mr/en";

    document.cookie = `googtrans=${cookieValue}; path=/`;
    document.cookie = `googtrans=${cookieValue}; domain=${window.location.hostname}; path=/`;

    window.location.reload();
  };

  return (
    <div className="w-full flex justify-end p-3">
      <select
        className=""
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="">🌐</option>
        <option value="en" className="bg-white text-black rounded px-4 py-2 border shadow">English</option>
        <option value="mr" className="bg-white text-black rounded px-4 py-2 border shadow">मराठी</option>
      </select>

      <div id="google_translate_element" style={{ display: "none" }} />

      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />

      <style jsx global>{`
        .goog-te-banner-frame,
        .goog-te-menu-frame,
        .goog-te-gadget {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
