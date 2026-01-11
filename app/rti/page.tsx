"use client";

import React from "react";
import { 
  FileText, 
  ShieldAlert, 
  Phone, 
  Mail, 
  MapPin, 
  User, 
  Gavel, 
  Info 
} from "lucide-react";

// Data Objects
const rtiOfficer = {
  name: "आशिष शेषराव रेवतकर",
  role: "ग्राम पंचायत अधिकारी (जन माहिती अधिकारी)",
  address: "सोनोली, ता.काटोल, जिल्हा- नागपूर",
  phone: "9923620736",
  email: "gpsonoli@gmail.com",
};

const appellateAuthority = {
  first: {
    name: "श्री. सुरेश नेहारे",
    role: "विस्तार अधिकारी (पंचायत)",
    designation: "प्रथम अपील प्राधिकृत अधिकारी",
  },
  second: {
    name: "मुख्य कार्यकारी अधिकारी (CEO)",
    role: "जिल्हा परिषद, नागपूर",
    designation: "द्वितीय अपील अधिकारी",
  }
};

const stats = [
  { year: "2024-25", total: 2, solved: 2, pending: 0, rejected: 0 },
  { year: "2025-26", total: 1, solved: 1, pending: 0, rejected: 0 },
];

export default function RTIPage() {
  return (
    <div className="w-full min-h-screen  p-4 md:p-8 font-sans">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* --- HEADER --- */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 text-xs font-bold tracking-wider uppercase">
            <Info size={14} />
            पारदर्शकता व दायित्व
          </div>
          <h1 className="text-3xl md:text-3xl font-extrabold text-blue-500">
            माहिती अधिकार (RTI) कक्ष
          </h1>
          <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-orange-400 via-white to-green-500 rounded-full shadow-sm"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            माहितीचा अधिकार अधिनियम २००५ अंतर्गत नियुक्त अधिकारी व अर्जांची स्थिती
          </p>
        </div>

        {/* --- SECTION 1: OFFICERS INFO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Public Information Officer (PIO) */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative group hover:shadow-md transition-shadow">
            <div className="bg-blue-600 p-4 text-white flex items-center gap-3">
              <User className="w-6 h-6" />
              <div>
                <h3 className="font-bold text-lg">जन माहिती अधिकारी</h3>
                <p className="text-blue-100 text-xs opacity-90">Public Information Officer</p>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">नाव</p>
                <p className="text-lg font-bold text-slate-800">{rtiOfficer.name}</p>
                <p className="text-sm text-slate-500 font-medium">{rtiOfficer.role}</p>
              </div>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 text-slate-600">
                  <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <span className="text-sm">{rtiOfficer.address}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" />
                  <span className="text-sm font-mono font-bold">{rtiOfficer.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Mail className="w-5 h-5 text-blue-500 shrink-0" />
                  <a href={`mailto:${rtiOfficer.email}`} className="text-sm hover:text-blue-700 underline decoration-blue-200 underline-offset-2">
                    {rtiOfficer.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Appellate Authority */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden relative hover:shadow-md transition-shadow">
            <div className="bg-slate-800 p-4 text-white flex items-center gap-3">
              <Gavel className="w-6 h-6" />
              <div>
                <h3 className="font-bold text-lg">अपील अधिकारी</h3>
                <p className="text-slate-300 text-xs opacity-90">Appellate Authority</p>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* First Appeal */}
              <div className="relative pl-4 border-l-2 border-orange-400">
                 <h4 className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">
                    प्रथम अपील अधिकारी
                 </h4>
                 <p className="text-lg font-bold text-slate-800">{appellateAuthority.first.name}</p>
                 <p className="text-sm text-slate-500">{appellateAuthority.first.role}</p>
              </div>

              {/* Second Appeal */}
              <div className="relative pl-4 border-l-2 border-slate-300">
                 <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">
                    द्वितीय अपील अधिकारी
                 </h4>
                 <p className="text-lg font-bold text-slate-800">{appellateAuthority.second.name}</p>
                 <p className="text-sm text-slate-500">{appellateAuthority.second.role}</p>
                 <span className="text-xs text-slate-400 italic">(वरिष्ठ स्तर)</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- SECTION 2: STATISTICS TABLE --- */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center gap-3">
            <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
               <FileText size={20} />
            </div>
            <div>
               <h3 className="text-lg font-bold text-slate-800">RTI अर्जांची आकडेवारी</h3>
               <p className="text-sm text-slate-500">मागील वर्षांचा गोषवारा</p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-600 font-semibold border-b border-slate-200">
                <tr>
                  <th className="px-6 py-4">वर्ष</th>
                  <th className="px-6 py-4 text-center">एकूण अर्ज</th>
                  <th className="px-6 py-4 text-center text-emerald-700">निकाली काढलेले</th>
                  <th className="px-6 py-4 text-center text-orange-600">प्रलंबित</th>
                  <th className="px-6 py-4 text-center text-red-600">नाकारलेले</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {stats.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-slate-800">{row.year}</td>
                    
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 text-blue-700 font-bold">
                        {row.total}
                      </span>
                    </td>
                    
                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center gap-1 text-emerald-700 font-bold bg-emerald-50 px-2 py-1 rounded-md">
                        {row.solved}
                        <span className="text-xs font-normal opacity-70">Solved</span>
                      </span>
                    </td>
                    
                    <td className="px-6 py-4 text-center">
                       {row.pending > 0 ? (
                           <span className="text-orange-600 font-bold">{row.pending}</span>
                       ) : (
                           <span className="text-slate-300">-</span>
                       )}
                    </td>
                    
                    <td className="px-6 py-4 text-center">
                        {row.rejected > 0 ? (
                           <span className="text-red-600 font-bold">{row.rejected}</span>
                       ) : (
                           <span className="text-slate-300">-</span>
                       )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 p-4 text-xs text-center text-slate-400">
            ही माहिती नियमितपणे अद्यतनित केली जाते. (Last Updated: 2026)
          </div>
        </div>

      </div>
    </div>
  );
}