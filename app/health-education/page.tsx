"use client";

import React from "react";
import { 
  School, 
  MapPin, 
  Phone, 
  Clock, 
  Users, 
  Monitor, 
  Zap, 
  Droplets,
  UserCheck
} from "lucide-react";

const facilities = [
  {
    id: 1,
    type: "शिक्षण (Education)",
    category: "school", // Used for color coding
    name: "जिल्हा परिषद उच्च प्रा. शाळा, सोनोली",
    description: "ग्रामीण भागातील विद्यार्थ्यांना दर्जेदार प्राथमिक शिक्षण.",
    stats: {
      boys: 26,
      girls: 29,
      total: 55,
      staff: 3
    },
    amenities: [
      "पिण्याचे स्वच्छ पाणी",
      "इलेक्ट्रिक सुविधा",
      "कॉम्पुटर लॅब"
    ],
    address: "सोनोली ता. काटोल, जिल्हा नागपूर - 441302",
    contactPerson: "व्यी.जी.जिचकार",
    contactPhone: "9823866257",
    timing: "सकाळी 10:30 ते सायं 5:00",
    emergency: null
  },
  {
    id: 2,
    type: "बालशिक्षण (Child Education)",
    category: "school", // Used for color coding
    name: "अंगणवाडी क्रमांक १, सोनोली",
    description: "ग्रामीण भागातील विद्यार्थ्यांना दर्जेदार प्राथमिक शिक्षण.",
    stats: {
      boys: 4,
      girls: 12,
      total: 16,
      staff: 1
    },
    amenities: [
      "पिण्याचे स्वच्छ पाणी",
      "इलेक्ट्रिक सुविधा",
    ],
    address: "सोनोली ता. काटोल, जिल्हा नागपूर - 441302",
    contactPerson: "हर्षा संजय टोनपे",
    contactPhone: "7066059721",
    timing: "सकाळी 10:00 ते दुपार 2:30",
    emergency: null
  },
  {
    id: 3,
    type: "बालशिक्षण (Child Education)",
    category: "school", // Used for color coding
    name: "अंगणवाडी क्रमांक २, सोनोली",
    description: "ग्रामीण भागातील विद्यार्थ्यांना दर्जेदार प्राथमिक शिक्षण.",
    stats: {
      boys: 10,
      girls: 4,
      total: 14,
      staff: 1
    },
    amenities: [
      "पिण्याचे स्वच्छ पाणी",
      "इलेक्ट्रिक सुविधा",
    ],
    address: "सोनोली ता. काटोल, जिल्हा नागपूर - 441302",
    contactPerson: "आशा विनोद यादव",
    contactPhone: "9158875019",
    timing: "सकाळी 10:00 ते दुपार 2:30",
    emergency: null
  }
];

// Helper to get Icon based on amenity text
const getAmenityIcon = (text: any) => {
  if (text.includes("पाणी")) return <Droplets size={14} />;
  if (text.includes("इलेक्ट्रिक") || text.includes("वीज")) return <Zap size={14} />;
  if (text.includes("कॉम्पुटर") || text.includes("संगणक")) return <Monitor size={14} />;
  return <UserCheck size={14} />;
};

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* --- HEADER --- */}
        <div className="text-center space-y-4 mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full border border-indigo-200 text-xs font-bold tracking-wider uppercase">
            <MapPin size={14} />
            गावातील पायाभूत सुविधा
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            आरोग्य, शिक्षण व इतर सुविधा
          </h1>
          <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full shadow-sm"></div>
        </div>

        {/* --- FACILITIES LIST --- */}
        <div className="space-y-6">
          {facilities.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Card Header */}
              <div className="bg-yellow-50 border-b border-yellow-100 p-4 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                 <div className="flex items-start gap-4">
                    <div className="p-3 bg-yellow-500 text-white rounded-xl shadow-sm">
                       <School size={28} />
                    </div>
                    <div>
                       <span className="text-xs font-bold text-yellow-700 uppercase tracking-widest">
                         {item.type}
                       </span>
                       <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
                         {item.name}
                       </h2>
                       <p className="text-slate-500 text-sm mt-1">{item.description}</p>
                    </div>
                 </div>
                 
                 {/* Timing Badge */}
                 <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-yellow-200 text-yellow-800 text-sm font-bold shadow-sm">
                    <Clock size={16} />
                    {item.timing}
                 </div>
              </div>

              {/* Card Body */}
              <div className="p-0 md:flex divide-y md:divide-y-0 md:divide-x divide-slate-100">
                 
                 {/* Left Side: Stats & Amenities */}
                 <div className="md:w-2/3 p-6 space-y-6">
                    
                    {/* Stats Grid */}
                    <div>
                       <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                         विद्यार्थी व कर्मचारी सांख्यिकी
                       </h3>
                       <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                             <span className="block text-2xl font-extrabold text-slate-800">{item.stats.total}</span>
                             <span className="text-xs text-slate-500 font-medium">एकूण विद्यार्थी</span>
                          </div>
                          <div className="bg-blue-50 p-3 rounded-lg border border-blue-100 text-center">
                             <span className="block text-xl font-bold text-blue-700">{item.stats.boys}</span>
                             <span className="text-xs text-blue-600 font-medium">मुले</span>
                          </div>
                          <div className="bg-pink-50 p-3 rounded-lg border border-pink-100 text-center">
                             <span className="block text-xl font-bold text-pink-700">{item.stats.girls}</span>
                             <span className="text-xs text-pink-600 font-medium">मुली</span>
                          </div>
                          <div className="bg-orange-50 p-3 rounded-lg border border-orange-100 text-center">
                             <span className="block text-xl font-bold text-orange-700">{item.stats.staff}</span>
                             <span className="text-xs text-orange-600 font-medium">कर्मचारी</span>
                          </div>
                       </div>
                    </div>

                    {/* Amenities List */}
                    <div>
                       <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                         उपलब्ध सेवा / सुविधा
                       </h3>
                       <div className="flex flex-wrap gap-2">
                          {item.amenities.map((amenity, index) => (
                             <span key={index} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-medium border border-slate-200">
                                {getAmenityIcon(amenity)}
                                {amenity}
                             </span>
                          ))}
                       </div>
                    </div>
                 </div>

                 {/* Right Side: Contact Info */}
                 <div className="md:w-1/3 bg-slate-50/50 p-6 flex flex-col justify-center space-y-5">
                    <div className="space-y-1">
                       <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                          <UserCheck size={14} />
                          संपर्क व्यक्ती
                       </div>
                       <p className="text-lg font-bold text-slate-900">{item.contactPerson}</p>
                       <p className="text-sm text-slate-500">मुख्याध्यापक / प्रभारी</p>
                    </div>

                    <div className="space-y-1">
                       <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                          <Phone size={14} />
                          फोन नंबर
                       </div>
                       <a href={`tel:${item.contactPhone}`} className="text-lg font-mono font-bold text-blue-600 hover:underline">
                          {item.contactPhone}
                       </a>
                    </div>

                    <div className="space-y-1">
                       <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider">
                          <MapPin size={14} />
                          पत्ता
                       </div>
                       <p className="text-sm text-slate-700 leading-relaxed">
                          {item.address}
                       </p>
                    </div>
                 </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}