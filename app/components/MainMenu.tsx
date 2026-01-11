"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaChevronDown,
  FaHome,
  FaUsers,
  FaServicestack,
  FaLightbulb,
  FaFolderOpen,
  FaBars,
  FaTimes
} from "react-icons/fa";

export default function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    setMobileDropdown(null);
  }, [pathname]);

  const toggleMobileDropdown = (label: string) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  const menuItems = [
    { label: "मुख्य पृष्ठ", icon: <FaHome />, href: "/" },
    {
      label: "ग्रामपंचायत माहिती",
      icon: <FaUsers />,
      children: [
        { label: "आमच्याबद्दल", href: "/about" },
        { label: "पदाधिकारी व सदस्य", href: "/members" },
        { label: "माहिती अधिकार (RTI)", href: "/rti" },
      ],
    },
    {
      label: "सेवा व सुविधा",
      icon: <FaServicestack />,
      children: [
        { label: "नागरिक सेवा", href: "/services" },
        { label: "आरोग्य/शिक्षण सुविधा", href: "/health-education" },
      ],
    },
    {
      label: "शासकीय योजना",
      icon: <FaLightbulb />,
      children: [
        { label: "योजना", href: "/schemes" },
        { label: "कामांची माहिती", href: "/projects" },
        { label: "आर्थिक माहिती", href: "/finance" },
        { label: "कर माहिती", href: "/tax-info" },
      ],
    },
    {
      label: "अधिक",
      icon: <FaFolderOpen />,
      mega: true,
      children: [
        { label: "सूचना", href: "/notices", group: "Info" },
        { label: "डाउनलोड फॉर्म", href: "/forms", group: "Forms" },
        { label: "गॅलरी", href: "/gallery", group: "Media" },
        { label: "मिडिया लिंक", href: "/media", group: "Media" },
        { label: "संपर्क", href: "/contact", group: "Info" },
      ],
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="relative bg-[#1e3a8a] text-white shadow-lg z-40 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          
          <div className="md:hidden font-bold text-lg tracking-wide">
             मेनू (Menu)
          </div>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex w-full justify-center space-x-2 lg:space-x-6">
            {menuItems.map((item, index) => {
              // Check if this is the last item in the list
              const isLast = index === menuItems.length - 1;

              return (
                <div key={item.label} className="relative group h-14 flex items-center">
                  
                  {item.children ? (
                    <button 
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                        hover:bg-blue-700 hover:text-yellow-400 group-hover:bg-blue-800
                      `}
                    >
                      <span className="text-yellow-400/80 group-hover:text-yellow-400">{item.icon}</span>
                      <span>{item.label}</span>
                      <FaChevronDown className="text-xs opacity-70 group-hover:rotate-180 transition-transform duration-300" />
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200
                        ${isActive(item.href!) 
                          ? "bg-blue-800 text-yellow-400 shadow-inner" 
                          : "hover:bg-blue-700 hover:text-yellow-400"
                        }`}
                    >
                      <span className={`${isActive(item.href!) ? "text-yellow-400" : "text-yellow-400/80"}`}>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* --- DROPDOWN LOGIC --- */}
                  {item.children && (
                    <div 
                      className={`absolute top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 transform translate-y-4 group-hover:translate-y-0 z-50
                        ${item.mega ? "w-[500px]" : "w-60"}
                        ${isLast ? "right-0" : "left-0"} 
                      `}
                    >
                      <div className="bg-white text-gray-800 rounded-lg shadow-xl border-t-4 border-orange-500 overflow-hidden ring-1 ring-black ring-opacity-5">
                        
                        {item.mega ? (
                          <div className="grid grid-cols-3 gap-4 p-6 bg-slate-50">
                             {Array.from(new Set(item.children.map(c => c.group))).map(groupName => (
                               <div key={groupName}>
                                  <h4 className="font-bold text-orange-600 text-xs uppercase tracking-wider mb-2 border-b border-orange-200 pb-1">
                                    {groupName}
                                  </h4>
                                  <ul className="space-y-1">
                                    {item.children?.filter(c => c.group === groupName).map(sub => (
                                      <li key={sub.label}>
                                        <Link href={sub.href} className="block text-sm text-gray-600 hover:text-blue-700 hover:translate-x-1 transition-all py-1">
                                           {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                               </div>
                             ))}
                          </div>
                        ) : (
                          <div className="py-2">
                            {item.children.map((sub) => (
                              <Link
                                key={sub.label}
                                href={sub.href}
                                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-700 border-l-4 border-transparent hover:border-orange-500 transition-all"
                              >
                                {sub.label}
                              </Link>
                            ))}
                          </div>
                        )}

                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden bg-[#162c6b] border-t border-blue-800 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-8 space-y-1">
          {menuItems.map((item) => (
            <div key={item.label} className="border-b border-blue-800/50 last:border-0">
              {item.children ? (
                <>
                  <button
                    onClick={() => toggleMobileDropdown(item.label)}
                    className="w-full flex items-center justify-between py-3 text-left text-base font-medium text-white hover:text-yellow-400"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-yellow-400">{item.icon}</span> {item.label}
                    </span>
                    <FaChevronDown
                      size={12}
                      className={`transition-transform duration-200 ${
                        mobileDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`bg-[#0f2050] overflow-hidden transition-all duration-300 ${
                      mobileDropdown === item.label ? "max-h-96 py-2" : "max-h-0"
                    }`}
                  >
                    {item.children.map((sub) => (
                      <Link
                        key={sub.label}
                        href={sub.href}
                        className="block px-10 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-white/5 border-l-2 border-transparent hover:border-yellow-400"
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={item.href!}
                  className="flex items-center gap-3 py-3 text-base font-medium text-white hover:text-yellow-400"
                >
                  <span className="text-yellow-400">{item.icon}</span> {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}