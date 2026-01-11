"use client";

import { useState } from "react";
import { 
  Download, 
  FileText, 
  FileSpreadsheet, 
  Search, 
  FileCheck,
  Files
} from "lucide-react";

// Enhanced Data Structure
const forms = [
  {
    title: "जन्म प्रमाणपत्र अर्ज",
    subtitle: "Birth Certificate Application (Form No. 1)",
    file: "/forms/birth-form.pdf",
    type: "pdf",
    size: "1.2 MB"
  },
  {
    title: "मृत्यू प्रमाणपत्र अर्ज",
    subtitle: "Death Certificate Application (Form No. 2)",
    file: "/forms/death-form.pdf",
    type: "pdf",
    size: "1.1 MB"
  },
  {
    title: "विवाह नोंदणी अर्ज",
    subtitle: "Marriage Registration Application",
    file: "/forms/marriage-form.pdf",
    type: "pdf",
    size: "2.4 MB"
  },
  {
    title: "दारिद्र्य रेषेखाली अर्ज",
    subtitle: "Below Poverty Line (BPL) Application",
    file: "/forms/bpl-form.pdf",
    type: "pdf",
    size: "1.5 MB"
  },
  {
    title: "येणे-बाकी नसल्याचा दाखला",
    subtitle: "No Dues Certificate Request",
    file: "/forms/no-dues-form.pdf",
    type: "pdf",
    size: "0.8 MB"
  },
  {
    title: "Audit Report 2024-25",
    subtitle: "Gram Panchayat Financial Audit",
    file: "/forms/audit-2024-25.xlsx",
    type: "excel", // Different type
    size: "4.5 MB"
  },
];

export default function PanchayatForms() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter Logic
  const filteredForms = forms.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-slate-50 py-16 px-4 font-sans">
      <div className="max-w-6xl mx-auto">

        {/* --- HEADER --- */}
        <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold tracking-wider uppercase mb-3">
               <Files size={14} />
               नागरिक सुविधा
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-4">
              अर्ज आणि डाउनलोड
            </h1>
            <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full shadow-sm mb-6"></div>
            
            <p className="text-slate-500 text-lg">
               विविध शासकीय प्रमाणपत्रे आणि योजनांसाठी लागणारे अर्ज खालीलप्रमाणे उपलब्ध आहेत.
            </p>
         </div>

        {/* --- SEARCH BAR --- */}
        <div className="max-w-md mx-auto mb-12 relative">
           <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
           </div>
           <input
              type="text"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1C5FAF] focus:border-[#1C5FAF] sm:text-sm shadow-sm transition-all"
              placeholder="अर्जाचे नाव शोधा (उदा. जन्म दाखला)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
           />
        </div>

        {/* --- FORMS GRID --- */}
        {filteredForms.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredForms.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Visual Accent Bar (Left) */}
                <div className={`absolute top-0 left-0 bottom-0 w-1.5 ${item.type === 'excel' ? 'bg-green-500' : 'bg-red-500'}`}></div>

                {/* Background Icon Watermark */}
                <div className="absolute -right-6 -top-6 opacity-5 transform rotate-12 group-hover:scale-110 transition-transform">
                   {item.type === 'excel' ? <FileSpreadsheet size={100} /> : <FileText size={100} />}
                </div>

                {/* Header: Icon + Title */}
                <div className="flex items-start gap-4 mb-4 relative z-10">
                   <div className={`p-3 rounded-lg shrink-0 ${item.type === 'excel' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                      {item.type === 'excel' ? <FileSpreadsheet size={24} /> : <FileText size={24} />}
                   </div>
                   <div>
                      <h2 className="text-lg font-bold text-slate-800 leading-snug group-hover:text-[#1C5FAF] transition-colors">
                        {item.title}
                      </h2>
                      <p className="text-xs text-slate-400 mt-1 font-medium uppercase tracking-wide">
                        {item.type === 'excel' ? 'Excel Report' : 'PDF Form'} • {item.size}
                      </p>
                   </div>
                </div>

                {/* Subtitle */}
                <p className="text-sm text-slate-600 mb-6 line-clamp-2 relative z-10 pl-1">
                   {item.subtitle}
                </p>

                {/* Action Button */}
                <a
                  href={item.file}
                  download
                  className="relative z-10 flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-slate-50 text-[#1C5FAF] font-bold text-sm border border-blue-100 group-hover:bg-[#1C5FAF] group-hover:text-white transition-all"
                >
                  <Download size={18} />
                  डाउनलोड करा
                </a>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
             <FileCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
             <p className="text-slate-500 font-medium">कोणताही अर्ज आढळला नाही.</p>
             <button 
               onClick={() => setSearchTerm("")}
               className="mt-2 text-[#1C5FAF] text-sm font-bold hover:underline"
             >
               सर्व अर्ज पहा
             </button>
          </div>
        )}

      </div>
    </section>
  );
}