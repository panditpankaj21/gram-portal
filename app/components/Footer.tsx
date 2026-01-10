"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-[#1C3C74] to-[#245A9A] text-white pt-10 pb-6">
        
        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {[
            { href: "#", alt: "फेसबुक", src: "/icons/facebook.png" },
            { href: "#", alt: "ट्विटर", src: "/icons/twitter.png" },
            { href: "#", alt: "इंस्टाग्राम", src: "/icons/instagram.png" },
            { href: "#", alt: "यूट्यूब", src: "/icons/youtube.png" },
          ].map((icon, idx) => (
            <a key={idx} href={icon.href} aria-label={icon.alt}>
              <Image
                src={icon.src}
                alt={icon.alt}
                width={36}
                height={36}
                className="hover:scale-110 transition-transform"
              />
            </a>
          ))}
        </div>

        {/* Policy Links */}
        <div className="text-yellow-300 font-medium flex flex-wrap justify-center gap-3 mb-6 text-sm md:text-base">
          <a href="#" className="hover:underline">कॉपीराईट धोरण</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">अस्वीकरण</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">गोपनीयता धोरण</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">संपर्क</a>
        </div>

        {/* Main Text */}
        <div className="px-4 text-[14px] md:text-[15px] leading-relaxed text-center">
          <p>
            वेबसाइट डिझाइन, विकसित व देखभाल केलेले 
            <span className="font-semibold"> सर्टनेक्सस इंडिया प्रा. लि. नागपूर.</span>
          </p>
          <p className="mt-1">
            सामग्री ग्रामपंचायत कार्यालय, महाराष्ट्र शासनाद्वारे प्रदान केलेली आहे.
          </p>
          <p className="mt-2 font-semibold">
            © 2025 सर्टनेक्सस इंडिया प्रा. लि. नागपूर
          </p>
        </div>

        {/* Logos */}
        <div className="flex justify-center flex-wrap gap-5 mt-8 px-4">
          {[
            { src: "/logos/Swacch-Bharat.png", alt: "स्वच्छ भारत" },
            { src: "/logos/Digital-India.png", alt: "डिजिटल इंडिया" },
            { src: "/logos/beti-bacho.png", alt: "बेटी बचाओ बेटी पढ़ाओ" },
            { src: "/logos/satyamev.png", alt: "सत्यमेव जयते" },
            { src: "/logos/azadi.png", alt: "आज़ादी का महोत्सव" },
          ].map((logo, idx) => (
            <Image
              key={idx}
              src={logo.src}
              alt={logo.alt}
              width={60}
              height={70}
              className="bg-white rounded shadow p-2 max-w-[80px] h-auto"
            />
          ))}
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-[#1a3875] text-white text-center py-3 text-xs md:text-sm">
        © 2025 ग्रामपंचायत कोतवालबर्डी | संपर्क: 9764850450
      </div>
    </>
  );
}
