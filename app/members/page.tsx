"use client";

import React, { useState } from "react";
import { Phone, Mail, User, Printer, Search, Download } from "lucide-react"; 

// 1. Define Types for better code quality
interface Member {
  name: string;
  role: string;
  phone: string;
  email: string;
  bio?: string;
}

const members: Member[] = [
  {
    name: "आशिष शेषराव रेवतकर",
    role: "ग्राम पंचायत अधिकारी",
    phone: "9923620736",
    email: "gpsonoli12@gmail.com",
    bio: "प्रशासकीय प्रमुख",
  },
  {
    name: "ललिता लिलाधर महाजन",
    role: "सरपंच",
    phone: "9226900178",
    email: "gpsonoli12@gmail.com",
    bio: "गाव प्रमुख",
  },
  {
    name: "चंदू शेषराव तभाने",
    role: "उपसरपंच",
    phone: "9923620755",
    email: "gpsonoli12@gmail.com",
  },
  {
    name: "शाहरुख बब्बू शेख",
    role: "सदस्य",
    phone: "9922976737",
    email: "gpsonoli12@gmail.com",
  },
  {
    name: "निलेश शेषराव गजभिये",
    role: "सदस्य",
    phone: "9284128101",
    email: "gpsonoli12@gmail.com",
  },
  {
    name: "निलेश धनराज शिपाई",
    role: "सदस्य",
    phone: "8788058498",
    email: "gpsonoli12@gmail.com",
  },
  {
    name: "अर्चना अजय वाठूलकर",
    role: "सदस्या",
    phone: "9545793663",
    email: "gpsonoli12@gmail.com",
  },
  {
    name: "अनिता रोषण धुंडे",
    role: "सदस्या",
    phone: "9225607098",
    email: "gpsonoli12@gmail.com",
  },
  {
    name: "रमाबाई दुर्गादास सोमकुवर",
    role: "सदस्या",
    phone: "9607603045",
    email: "gpsonoli12@gmail.com",
  },
  {
    name: "रंजना डूमदेव देशभ्रतार",
    role: "सदस्या",
    phone: "7709813167",
    email: "gpsonoli12@gmail.com",
  },
  {
    name: "बेबीबाई दिलीप सहारे",
    role: "सदस्या",
    phone: "8605285957",
    email: "gpsonoli12@gmail.com",
  },
];

// Helper: Specific Government Colors
const getRoleStyle = (role: string) => {
  if (role.includes("सरपंच") && !role.includes("उप")) {
    return "bg-orange-100 text-orange-800 border border-orange-200"; 
  } 
  else if (role.includes("उपसरपंच") || role.includes("अधिकारी")) {
    return "bg-indigo-50 text-indigo-700 border border-indigo-200"; 
  }
  return "bg-emerald-50 text-emerald-700 border border-emerald-200";
};

// Helper: Avatar Backgrounds
const getAvatarStyle = (role: string) => {
    if (role.includes("सरपंच") && !role.includes("उप")) return "bg-orange-100 text-orange-700";
    if (role.includes("उपसरपंच") || role.includes("अधिकारी")) return "bg-indigo-100 text-indigo-700";
    return "bg-emerald-100 text-emerald-700";
}

const getAvatarInitial = (name: string) => name.trim().charAt(0);

export default function MembersDirectory() {
  const [searchTerm, setSearchTerm] = useState("");

  // Simple Filter Logic
  const filteredMembers = members.filter(m => 
    m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    m.role.toLowerCase().includes(searchTerm.toLowerCase()) || 
    m.phone.includes(searchTerm)
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full min-h-screen bg-slate-50 p-4 sm:p-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* --- HEADER --- */}
        <div className="bg-white rounded-t-xl shadow-sm p-8 text-center relative overflow-hidden border-b-4 border-[#1e3a8a]">
           {/* Top Tricolor Strip */}
           <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-white to-green-600"></div>
           
           <div className="flex flex-col items-center justify-center">
             <div className="mb-3">
               <span className="bg-indigo-50 text-indigo-800 text-xs font-bold px-3 py-1 rounded border border-indigo-100 tracking-widest uppercase">
                 महाराष्ट्र शासन
               </span>
             </div>
             <h2 className="text-3xl font-bold text-slate-800">
                पदाधिकारी व सदस्य माहिती कक्ष
             </h2>
             <p className="text-slate-500 mt-2">ग्रामपंचायत सोनोली, ता. नरखेड, जि. नागपूर</p>
           </div>
        </div>

        {/* --- CONTROLS (Search & Print) --- */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
            {/* Search Input */}
            <div className="relative w-full sm:w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input 
                  type="text" 
                  placeholder="नाव, पद किंवा फोन नंबर शोधा..." 
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Print Button */}
            <button 
              onClick={handlePrint}
              className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg hover:bg-slate-200 transition-colors text-sm print:hidden"
            >
               <Printer size={16} />
               यादी प्रिंट करा
            </button>
        </div>

        {/* --- DESKTOP VIEW (Table) --- */}
        <div className="hidden md:block bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#1e3a8a] text-white">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold tracking-wider uppercase">नाव</th>
                <th className="px-6 py-4 text-left text-xs font-bold tracking-wider uppercase">पद</th>
                <th className="px-6 py-4 text-left text-xs font-bold tracking-wider uppercase">संपर्क</th>
                <th className="px-6 py-4 text-left text-xs font-bold tracking-wider uppercase">ईमेल</th>
                <th className="px-6 py-4 text-left text-xs font-bold tracking-wider uppercase">जबाबदारी</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredMembers.length > 0 ? (
                filteredMembers.map((m, i) => (
                  <tr key={i} className="hover:bg-indigo-50/30 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center font-bold text-lg ${getAvatarStyle(m.role)}`}>
                          {getAvatarInitial(m.name)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-bold text-gray-900">{m.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-sm ${getRoleStyle(m.role)}`}>
                        {m.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 font-mono font-medium">
                      {m.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-600 underline decoration-indigo-200 underline-offset-4 hover:text-indigo-800">
                        <a href={`mailto:${m.email}`}>{m.email}</a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 italic">
                      {m.bio || "—"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                    <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                        कोणतीही माहिती आढळली नाही.
                    </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* --- MOBILE VIEW (Cards) --- */}
        <div className="md:hidden space-y-4">
          {filteredMembers.map((m, i) => (
            <div key={i} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 relative overflow-hidden">
               {/* Color Bar on Left based on role */}
               <div className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                  m.role.includes("सरपंच") && !m.role.includes("उप") ? "bg-orange-500" : 
                  (m.role.includes("उपसरपंच") || m.role.includes("अधिकारी")) ? "bg-indigo-600" : "bg-emerald-500"
               }`}></div>

               <div className="flex justify-between items-start mb-4 pl-3">
                  <div className="flex items-center gap-3">
                     <div className={`h-12 w-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm ${getAvatarStyle(m.role)}`}>
                         {getAvatarInitial(m.name)}
                     </div>
                     <div>
                         <h3 className="font-bold text-gray-900 text-lg">{m.name}</h3>
                         <span className={`mt-1 inline-block px-2 py-0.5 rounded text-xs font-bold ${getRoleStyle(m.role)}`}>
                           {m.role}
                         </span>
                     </div>
                  </div>
               </div>

               <div className="pl-3 space-y-2 border-t border-gray-100 pt-3">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span className="font-mono font-medium">{m.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span className="truncate">{m.email}</span>
                  </div>
                  {m.bio && (
                    <div className="flex items-start gap-3 text-sm text-gray-500 mt-1 bg-gray-50 p-2 rounded">
                      <User className="w-4 h-4 text-gray-400 mt-0.5" />
                      <span className="italic">{m.bio}</span>
                    </div>
                  )}
               </div>
            </div>
          ))}
          {filteredMembers.length === 0 && (
              <div className="text-center py-8 text-slate-500">
                 कोणतीही माहिती आढळली नाही.
              </div>
          )}
        </div>

      </div>
    </div>
  );
}