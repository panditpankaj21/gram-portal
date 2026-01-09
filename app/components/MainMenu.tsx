"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "मुख्य पृष्ठ", href: "/" },
  { label: "आमच्याबद्दल", href: "/about" },
  { label: "प्रमाणपत्रे", href: "/pramanpatre" },
  { label: "फॉर्म / डाउनलोड", href: "/forms" },
  { label: "मिडिया लिंक", href: "/media" },
  { label: "गॅलरी", href: "/gallery" },
  { label: "तालाव", href: "/talav" },
];

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1C5FAF] text-white shadow-md border-b border-blue-900/40 sticky top-0 z-50">
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Branding */}
          <div className="text-lg font-bold tracking-wide drop-shadow">ग्रामपंचायत सोनोली</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 lg:gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative font-medium text-[15px] hover:text-yellow-300 transition-colors group"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-yellow-300 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none cursor-pointer transition-transform"
            aria-label="Toggle Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1C5FAF] px-6 pb-6 space-y-3 animate-fade-in">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-[16px] font-medium border-l-4 border-transparent pl-2 hover:border-yellow-300 hover:text-yellow-300 transition-all"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}