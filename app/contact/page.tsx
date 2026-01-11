"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Page heading */}
        <h1 className="text-3xl font-bold text-center text-[#1C5FAF] mb-8 drop-shadow">
          संपर्क माहिती — ग्रामपंचायत सोनोली
        </h1>

        {/* Main Box */}
        <div className="bg-white shadow-xl rounded-2xl p-6 border border-blue-100">
          
          {/* Office Details */}
          <div className="flex items-start gap-4 mb-6">
            <FaMapMarkerAlt className="text-[#1C5FAF] text-3xl mt-1" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">कार्यालयाचे नाव</h2>
              <p className="text-gray-600">ग्रामपंचायत कार्यालय सोनोली</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <FaMapMarkerAlt className="text-[#1C5FAF] text-2xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">संपूर्ण पत्ता</h2>
              <p className="text-gray-600">सोनोली ता. काटोल, जिल्हा नागपूर — ४४१३०२</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <FaPhone className="text-[#1C5FAF] text-2xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">मुख्य फोन नंबर</h2>
              <p className="text-gray-600">9923620736</p>
            </div>
          </div>

          <div className="flex items-start gap-4 mb-6">
            <FaEnvelope className="text-[#1C5FAF] text-2xl mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-800">अधिकारीक ई-मेल</h2>
              <p className="text-gray-600">gpsonoli@gmail.com</p>
            </div>
          </div>

          {/* Section Divider */}
          <hr className="my-6 border-gray-300" />

          {/* Contacts */}
          <h2 className="text-2xl font-bold text-[#1C5FAF] text-center mb-4">
            संपर्क अधिकारी
          </h2>

          {/* Officers Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            {/* Sarpanch */}
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 shadow">
              <div className="flex items-center gap-3 mb-2">
                <FaUser className="text-[#1C5FAF] text-2xl" />
                <h3 className="font-bold text-lg text-gray-800">श्रीमती ललिता लिलाधर महाजन</h3>
              </div>
              <p className="text-gray-600 font-medium mb-1">सरपंच</p>
              <p className="text-gray-600">
                <span className="font-semibold">संपर्क:</span> 9226900178
              </p>
            </div>

            {/* Gram Sevak */}
            <div className="bg-blue-50 p-5 rounded-xl border border-blue-200 shadow">
              <div className="flex items-center gap-3 mb-2">
                <FaUser className="text-[#1C5FAF] text-2xl" />
                <h3 className="font-bold text-lg text-gray-800">श्री. आशिष शेषराव रेवतकर</h3>
              </div>
              <p className="text-gray-600 font-medium mb-1">ग्रामपंचायत अधिकारी</p>
              <p className="text-gray-600">
                <span className="font-semibold">संपर्क:</span> 9923620736
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
