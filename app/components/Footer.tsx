"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <>
        <footer className="bg-gradient-to-b from-[#1C3C74] to-[#245A9A] text-center text-white pt-10 pb-6 mt-10">

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6">
            <a href="#" aria-label="Facebook">
            <Image src="/icons/facebook.png" alt="Facebook" width={40} height={40} />
            </a>
            <a href="#" aria-label="Twitter">
            <Image src="/icons/twitter.png" alt="Twitter" width={40} height={40} />
            </a>
            <a href="#" aria-label="Instagram">
            <Image src="/icons/instagram.png" alt="Instagram" width={40} height={40} />
            </a>
            <a href="#" aria-label="YouTube">
            <Image src="/icons/youtube.png" alt="YouTube" width={40} height={40} />
            </a>
        </div>

        {/* Policy Links */}
        <div className="text-yellow-300 font-medium flex justify-center gap-6 flex-wrap mb-6">
            <a href="#" className="hover:underline">Copyright Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Disclaimer</a>
            <span>|</span>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Contact Us</a>
        </div>

        {/* Main Text */}
        <div className="text-white px-4 text-[15px] leading-relaxed">
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

        <div className="flex justify-center gap-7 flex-wrap mt-8 px-4">
            <Image src="/logos/swacch-Bharat.png" alt="Swachh Bharat" width={60} height={100} className="bg-white rounded shadow"/>
            <Image src="/logos/Digital-India.png" alt="Digital India" width={60} height={100} className="bg-white rounded shadow"/>
            <Image src="/logos/beti-bacho.png" alt="Beti Bacho Beti Padao" width={60} height={100} className="bg-white rounded shadow"/>
            <Image src="/logos/satyamev.png" alt="Satyamev Jayete" width={60} height={100} className="bg-white rounded shadow"/>
            <Image src="/logos/azadi.png" alt="Azadi ka Maha Utsav" width={60} height={100} className="bg-white rounded shadow"/>
        </div>

        </footer>
        <div className="bg-[#1a3875] text-white text-center py-3 text-sm">
            © 2025 ग्रामपंचायत कोतवालबर्डी | संपर्क: 9764850450
        </div>
    </>
  );
}
