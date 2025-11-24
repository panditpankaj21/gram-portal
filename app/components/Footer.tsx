"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="bg-gradient-to-b from-[#1C3C74] to-[#245A9A] text-white pt-10 pb-6 mt-10">
        
        {/* Social Icons */}
        <div className="flex justify-center flex-wrap gap-4 mb-6">
          {[
            { href: "#", alt: "Facebook", src: "/icons/facebook.png" },
            { href: "#", alt: "Twitter", src: "/icons/twitter.png" },
            { href: "#", alt: "Instagram", src: "/icons/instagram.png" },
            { href: "#", alt: "YouTube", src: "/icons/youtube.png" },
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
          <a href="#" className="hover:underline">Copyright Policy</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">Disclaimer</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <span className="hidden sm:inline">|</span>
          <a href="#" className="hover:underline">Contact Us</a>
        </div>

        {/* Main Text */}
        <div className="px-4 text-[14px] md:text-[15px] leading-relaxed text-center">
          <p>
            Website Designed, Developed & Maintained by 
            <span className="font-semibold"> Certnexus India Pvt. Ltd. Nagpur.</span>
          </p>
          <p className="mt-1">
            Content provided by Grampanchayat Office, Government of Maharashtra.
          </p>
          <p className="mt-2 font-semibold">
            © 2025 Certnexus India Pvt. Ltd. Nagpur
          </p>
        </div>

        {/* Logos */}
        <div className="flex justify-center flex-wrap gap-5 mt-8 px-4">
          {[
            { src: "/logos/Swacch-Bharat.png", alt: "Swachh Bharat" },
            { src: "/logos/Digital-India.png", alt: "Digital India" },
            { src: "/logos/beti-bacho.png", alt: "Beti Bacho Beti Padao" },
            { src: "/logos/satyamev.png", alt: "Satyamev Jayete" },
            { src: "/logos/azadi.png", alt: "Azadi ka Maha Utsav" },
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
