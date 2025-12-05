"use client";

import { useState } from "react";
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
      <div className="px-5 mx-auto" >
        <div className="flex justify-between items-center h-14">
          <div className="text-lg font-bold">Gram Panchayat Sonoli</div>

          <div className="hidden flex-wrap gap-4 justify-center items-center">
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

          <div className="">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none cursor-pointer"
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
        <div className="bg-[#1C5FAF] px-4 pb-4 space-y-2 md:grid md:grid-cols-4 md:space-y-0">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`block mt-5 hover:text-blue-300 font-medium
              md:border-l-2 md:border-white/10 md:pl-2
              ${index === navItems.length - 1 ? "md:border-r-0" : ""}
              `}
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
