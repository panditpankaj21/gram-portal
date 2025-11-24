"use client";

import React, { useState } from "react";
import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Main Issues", href: "/mukhya-prasth" },
  { label: "Village Sevak", href: "/gram-sevak" },
  { label: "Gallery", href: "/gallery" },
  { label: "Development Works", href: "/vikas-kame" },
  { label: "Survey Information", href: "/sabhechi-mahiti" },
  { label: "Birth Certificate", href: "/birth-certificate" },
  { label: "Death Certificate", href: "/death-certificate" },
  { label: "Marriage Certificate", href: "/marriage-certificate" },
  { label: "Surpanch Office", href: "/surpanch-karyala" },
  { label: "Deputy Surpanch Office", href: "/up-surpanch-karyala" },
  { label: "Executive Members", href: "/sadasya-karyakari" },
];


export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1C5FAF] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          <div className="text-lg font-bold">ग्रामपंचायत कोतवालबर्डी</div>

          <div className="hidden xl:flex flex-wrap gap-4 justify-center items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-1 hover:text-yellow-300 font-medium transition-colors text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="xl:hidden bg-[#1C5FAF] px-4 pb-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block mt-5 hover:text-blue-300 font-medium"
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
