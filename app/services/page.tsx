"use client";

import React from "react";
import { 
  FileText, 
  CheckSquare, 
  Clock, 
  IndianRupee, 
  Phone, 
  Download, 
  ArrowRight,
  Baby,
  HeartHandshake,
  FileBadge,
  AlertCircle
} from "lucide-react";

// Data Configuration
const services = [
  {
    id: 1,
    name: "जन्म नोंदणी दाखला",
    purpose: "गावातील नवजात बाळाचा जन्म नोंदवण्यासाठी",
    process: [
      "हॉस्पिटल/डॉक्टरकडून जन्म प्रमाणपत्र घ्यावे",
      "ग्रामपंचायत कार्यालयात अर्ज करावा",
      "तपासणी करून ७ दिवसांत प्रमाणपत्र दिले जाईल"
    ],
    documents: ["जन्म प्रमाणपत्र (हॉस्पिटल)", "आई-वडिलांचे आधार कार्ड"],
    fee: "20",
    days: "७ दिवस",
    contact: "9923620736",
    icon: <Baby className="w-6 h-6" />
  },
  {
    id: 2,
    name: "मृत्यू नोंदणी दाखला",
    purpose: "मृत्यूची शासकीय दप्तरी नोंदणी करणे",
    process: [
      "हॉस्पिटल/डॉक्टरकडून मृत्यू प्रमाणपत्र घ्यावे",
      "ग्रामपंचायत कार्यालयात अर्ज करावा",
      "तपासणी करून ७ दिवसांत प्रमाणपत्र दिले जाईल"
    ],
    documents: ["मृत्यू प्रमाणपत्र (हॉस्पिटल)", "आई-वडिलांचे/वारसाचे आधार कार्ड"],
    fee: "20",
    days: "७ दिवस",
    contact: "9923620736",
    icon: <AlertCircle className="w-6 h-6" />
  },
  {
    id: 3,
    name: "विवाह नोंदणी दाखला",
    purpose: "विवाहाची कायदेशीर नोंदणी",
    process: [
      "ग्रामपंचायत कार्यालयात अर्ज करावा",
      "तपासणी करून ७ दिवसांत प्रमाणपत्र दिले जाईल"
    ],
    documents: ["अर्ज नमुना", "आधार कार्ड", "स्टॅम्प पेपर", "टी.सी (TC)", "तीन साक्षीदार आधार कार्ड"],
    fee: "20",
    days: "७ दिवस",
    contact: "9923620736",
    icon: <HeartHandshake className="w-6 h-6" />
  },
  {
    id: 4,
    name: "दारिद्र्य रेषेखालील असल्याचा दाखला (BPL)",
    purpose: "शासकीय योजनांचा लाभ घेण्यासाठी",
    process: [
      "ग्रामपंचायत कार्यालयात अर्ज करावा",
      "तपासणी करून ७ दिवसांत प्रमाणपत्र दिले जाईल"
    ],
    documents: ["आधार कार्ड", "रेशन कार्ड"],
    fee: "20",
    days: "७ दिवस",
    contact: "9923620736",
    icon: <FileBadge className="w-6 h-6" />
  },
  {
    id: 5,
    name: "येणे बाकी नसल्याचा दाखला (No Dues)",
    purpose: "घर/मालमत्ता कर भरल्याचा पुरावा",
    process: [
      "ग्रामपंचायत कार्यालयात अर्ज करावा",
      "तपासणी करून ७ दिवसांत प्रमाणपत्र दिले जाईल"
    ],
    documents: ["आधार कार्ड", "घर टॅक्स पावती"],
    fee: "20",
    days: "५ दिवस",
    contact: "9923620736",
    icon: <FileText className="w-6 h-6" />
  },
  {
    id: 6,
    name: "नमुना ८ चा उतारा",
    purpose: "मालमत्ता कराची नोंद",
    process: [
      "ग्रामपंचायत कार्यालयात अर्ज करावा",
      "तपासणी करून ७ दिवसांत प्रमाणपत्र दिले जाईल"
    ],
    documents: ["आधार कार्ड", "घर टॅक्स पावती"],
    fee: "20",
    days: "५ दिवस",
    contact: "7038579757", // Specific number for this service
    icon: <FileText className="w-6 h-6" />
  },
  {
    id: 7,
    name: "निराधार असल्याचा दाखला",
    purpose: "संजय गांधी / श्रावणबाळ योजनेसाठी",
    process: [
      "ग्रामपंचायत कार्यालयात अर्ज करावा",
      "तपासणी करून ७ दिवसांत प्रमाणपत्र दिले जाईल"
    ],
    documents: ["आधार कार्ड", "टी.सी (TC)"],
    fee: "20",
    days: "२० दिवस",
    contact: "9923620736",
    icon: <FileBadge className="w-6 h-6" />
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* --- HEADER --- */}
        <div className="text-center space-y-4 mb-10">
          <span className="bg-teal-50 text-teal-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-teal-200">
            नागरिक सनद (Citizen Charter)
          </span>
          <h1 className="text-3xl md:text-5xl mt-3 font-extrabold text-slate-900">
            ग्रामपंचायत सेवा
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            दाखले, प्रमाणपत्रे आणि परवाने मिळवण्याची सोपी व पारदर्शक प्रक्रिया
          </p>
          {/* Tricolor Bar */}
          <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full shadow-sm"></div>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              
              {/* 1. Service Header */}
              <div className="bg-blue-600 p-5 border-b border-slate-100 flex items-start gap-4">
                <div className="p-3 bg-white rounded-lg border border-slate-200 text-teal-600 shadow-sm">
                   {service.icon}
                </div>
                <div>
                   <h2 className="text-xl font-bold text-white leading-tight">
                     {service.name}
                   </h2>
                   <p className="text-sm text-white mt-1 font-medium">
                     {service.purpose}
                   </p>
                </div>
              </div>

              {/* 2. Content Body (Split Layout) */}
              <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 flex-1">
                
                {/* Process Column */}
                <div>
                   <h3 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                     <ArrowRight size={14} className="text-teal-500" />
                     प्रक्रिया (Process)
                   </h3>
                   <ul className="space-y-3">
                      {service.process.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                           <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center mt-0.5">
                             {idx + 1}
                           </span>
                           <span className="leading-snug">{step}</span>
                        </li>
                      ))}
                   </ul>
                </div>

                {/* Documents Column */}
                <div className="bg-slate-50/50 rounded-lg p-4 border border-slate-100/50">
                   <h3 className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                     <CheckSquare size={14} className="text-orange-500" />
                     कागदपत्रे (Documents)
                   </h3>
                   <ul className="space-y-2">
                      {service.documents.map((doc, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                           <div className="w-1.5 h-1.5 rounded-full bg-orange-400"></div>
                           {doc}
                        </li>
                      ))}
                   </ul>
                </div>
              </div>

              {/* 3. Info Bar (Fee, Time, Contact) */}
              <div className="bg-slate-50 border-t border-slate-100 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 grid grid-cols-1 sm:grid-cols-3">
                 
                 {/* Fee */}
                 <div className="px-4 py-3 flex items-center justify-center gap-2 text-slate-700">
                    <IndianRupee size={16} className="text-slate-400" />
                    <div className="text-sm">
                       <span className="block text-xs text-slate-400 font-bold uppercase">फी</span>
                       <span className="font-bold">₹{service.fee}/-</span>
                    </div>
                 </div>

                 {/* Time */}
                 <div className="px-4 py-3 flex items-center justify-center gap-2 text-slate-700">
                    <Clock size={16} className="text-slate-400" />
                    <div className="text-sm">
                       <span className="block text-xs text-slate-400 font-bold uppercase">कालावधी</span>
                       <span className="font-bold text-teal-700">{service.days}</span>
                    </div>
                 </div>

                 {/* Contact */}
                 <div className="px-4 py-3 flex items-center justify-center gap-2 bg-white sm:bg-transparent">
                    <a href={`tel:${service.contact}`} className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                        <Phone size={16} />
                        <span className="text-sm font-bold">{service.contact}</span>
                    </a>
                 </div>
              </div>

              {/* 4. Action Footer (Download) */}
              <div className="p-3 px-6 border-t border-slate-100 flex justify-between items-center bg-white">
                 <span className="text-xs text-slate-400 font-medium">अधिकृत अधिकारी: ग्रामपंचायत अधिकारी</span>
                 <button disabled className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-100 text-slate-400 text-xs font-bold cursor-not-allowed">
                    <Download size={14} />
                    फॉर्म डाउनलोड (लवकरच)
                 </button>
              </div>

            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center">
            <p className="text-xs text-slate-400">
               * सूचना: वरील कालावधी कार्यालयीन सुट्ट्या वगळून आहे. तातडीच्या सेवेसाठी थेट संपर्क साधावा.
            </p>
        </div>

      </div>
    </div>
  );
}