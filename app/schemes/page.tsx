"use client";

import { 
  Home, 
  Shovel, 
  CheckCircle, 
  FileText, 
  Phone, 
  User, 
} from "lucide-react";

// Data
const schemes = [
  {
    id: 1,
    name: "प्रधानमंत्री आवास योजना (PMAY)",
    shortDesc: "गरीब व लघुउत्पन्न गटातील कुटुंबांना गृहनिर्माणासाठी अनुदान.",
    objective: "सर्व पात्र कुटुंबांना सुरक्षित व परवडणारे घर उपलब्ध करून देणे.",
    eligibility: ["गरीबी रेषेखालील (BPL)", "लहान उत्पन्न गट (LIG) कुटुंबे"],
    process: "ग्रामपंचायत कार्यालयातून अर्ज करा किंवा ऑनलाईन पोर्टलवरून अर्ज करा.",
    contactPerson: "श्री. आशिष शेषराव रेवतकर (ग्राम पंचायत अधिकारी)",
    contactNumber: "9923620736",
    color: "blue", // Theme color
    icon: <Home className="w-6 h-6" />,
    image: "/yojana/pmay.jpg" // Replace with actual image path
  },
  {
    id: 2,
    name: "मनरेगा (MGNREGA)",
    shortDesc: "ग्रामीण भागातील बेरोजगारांना 100 दिवसांचा हमी रोजगार.",
    objective: "ग्रामीण नागरिकांना रोजगार उपलब्ध करून देणे व पायाभूत सुविधा उभारणी.",
    eligibility: ["गावातील सर्व प्रौढ नागरिक", "वय १८ वर्षांवरील"],
    process: "ग्रामपंचायत कार्यालयात अर्ज सादर करा (Job Card).",
    contactPerson: "श्री. प्रविण बागडे",
    contactNumber: "8446043404",
    color: "green", // Theme color
    icon: <Shovel className="w-6 h-6" />,
    image: "/yojana/manrega.jpg" // Replace with actual image path
  }
];

export default function SchemesPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* --- HEADER --- */}
        <div className="text-center space-y-4 mb-10">
          <span className="bg-orange-100 text-orange-800 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase border border-orange-200">
            जनकल्याण
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            शासकीय योजना
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            ग्रामपंचायत स्तरावर राबविण्यात येणाऱ्या प्रमुख योजनांची माहिती व अर्ज प्रक्रिया
          </p>
          <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full"></div>
        </div>

        {/* --- SCHEMES GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {schemes.map((scheme) => (
            <div 
              key={scheme.id} 
              className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              
              {/* Image Section */}
              <div className="h-48 bg-slate-200 relative overflow-hidden">
                {/* Placeholder Image - Replace src with scheme.image in production */}
                <img 
                  src={scheme.image} 
                  alt={scheme.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className={`absolute top-4 left-4 p-3 rounded-xl shadow-lg text-white ${
                  scheme.color === 'blue' ? 'bg-blue-600' : 'bg-emerald-600'
                }`}>
                  {scheme.icon}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-slate-900 leading-tight mb-2 group-hover:text-blue-700 transition-colors">
                    {scheme.name}
                  </h2>
                  <p className="text-slate-600 font-medium">
                    {scheme.shortDesc}
                  </p>
                </div>

                {/* Objective */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">उद्देश (Objective)</h4>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {scheme.objective}
                  </p>
                </div>

                {/* Details Grid */}
                <div className="space-y-4 mb-6 flex-1">
                  
                  {/* Eligibility */}
                  <div>
                    <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2">
                      <CheckCircle className="w-4 h-4 text-orange-500" />
                      पात्रता (Eligibility)
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {scheme.eligibility.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 bg-orange-50 text-orange-700 text-xs font-semibold rounded-md border border-orange-100">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                     <h4 className="flex items-center gap-2 text-sm font-bold text-slate-800 mb-2">
                      <FileText className="w-4 h-4 text-blue-500" />
                      अर्ज प्रक्रिया
                    </h4>
                    <p className="text-sm text-slate-600 ml-6">
                      {scheme.process}
                    </p>
                  </div>
                </div>

                {/* Footer: Contact */}
                <div className="mt-auto pt-4 border-t border-slate-100">
                  <div className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-200">
                    <div className="flex items-center gap-3">
                       <div className="bg-white p-2 rounded-full border border-slate-100 shadow-sm text-slate-400">
                          <User size={18} />
                       </div>
                       <div>
                          <p className="text-xs text-slate-500 font-bold uppercase">संपर्क व्यक्ती</p>
                          <p className="text-sm font-bold text-slate-900">{scheme.contactPerson}</p>
                       </div>
                    </div>
                    
                    <a 
                      href={`tel:${scheme.contactNumber}`} 
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold text-white shadow-md hover:opacity-90 transition-opacity ${
                        scheme.color === 'blue' ? 'bg-blue-600' : 'bg-emerald-600'
                      }`}
                    >
                      <Phone size={16} />
                      <span className="hidden sm:inline">Call</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
        
        {/* Footer Note */}
        <div className="text-center mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
           <h3 className="font-bold text-blue-900 mb-2">अधिक माहिती हवी आहे?</h3>
           <p className="text-blue-700 text-sm">
             इतर योजनांच्या माहितीसाठी कृपया ग्रामपंचायत कार्यालयाशी संपर्क साधावा. <br/> 
             वेळ: सकाळी १०:०० ते सायंकाळी ५:०० (सुट्टीचे दिवस वगळून)
           </p>
        </div>

      </div>
    </div>
  );
}