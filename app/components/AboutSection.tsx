"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full bg-gradient-to-b from-blue-50 via-white to-blue-50 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="text-gray-800">
          <h2 className="text-2xl sm:text-2xl font-extrabold text-[#1C5FAF] mb-6 leading-tight">
            आमच्या गट ग्रामपंचायत बद्दल
          </h2>

          {/* Truncated Text */}
          <p className="text-[17px] leading-relaxed sm:text-[18px] sm:leading-loose text-gray-700 line-clamp-5">
            आमच्या गावाचा समृद्ध इतिहास, सांस्कृतिक परंपरा आणि विकासकामांची सातत्यपूर्ण धडपड
            यामुळे गट ग्रामपंचायत खेडी (गो. गो.) मन्नाथ सतत प्रगतीच्या मार्गावर आहे.
            खेडी गोवारगोंदी ही महाराष्ट्रातील नागपूर जिल्ह्याच्या नरखेड तालुक्यातील एक
            ग्रामपंचायत आहे. हे गाव तालुका मुख्यालय नरखेड पासून सुमारे २० किमी अंतरावर आणि
            जिल्हा मुख्यालय नागपूर पासून सुमारे ८२ किमी अंतरावर स्थित आहे.
            पुढील विभागांमध्ये तुम्हाला या गावाबद्दलची संपूर्ण माहिती मिळेल.
          </p>

          {/* READ MORE BTN */}
          <Link
            href="/about"
            className="mt-8 inline-block bg-[#1C5FAF] text-white px-7 py-3 rounded-lg text-base font-semibold shadow-lg hover:bg-[#174f91] transition"
          >
            अधिक वाचा →
          </Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative w-full h-80 sm:h-[26rem] shadow-xl rounded-xl overflow-hidden">
          <Image
            src="/gallery/image1.jpg"
            alt="ग्रामपंचायत"
            fill
            priority
            className="object-cover hover:scale-110 duration-[900ms] ease-out"
          />
        </div>
      </div>
    </section>
  );
}
