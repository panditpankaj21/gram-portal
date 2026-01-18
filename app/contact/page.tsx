"use client";

import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  User, 
  Building2,
  CalendarDays
} from "lucide-react";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-slate-50 py-16 px-4 font-sans">
      
      {/* --- PAGE HEADER --- */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold tracking-wider uppercase mb-3">
            <Phone size={14} />
            नागरिक सहायता कक्ष
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-4">
          संपर्क साधा
        </h1>
        <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full shadow-sm mb-4"></div>
        <p className="text-slate-500 text-lg">
          आपल्या समस्या, सूचना आणि अर्जांसाठी ग्रामपंचायत कार्यालयाशी संपर्क साधा.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-start">

        {/* --- LEFT COLUMN: OFFICE INFO (5 cols) --- */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Main Info Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
             <div className="bg-[#1e3a8a] p-6 text-white">
                <h2 className="text-xl font-bold flex items-center gap-2">
                   <Building2 className="text-orange-400" />
                   ग्रामपंचायत कार्यालय
                </h2>
                <p className="opacity-90 text-sm mt-1">सोनोली, ता. काटोल, जि. नागपूर</p>
             </div>
             
             <div className="p-6 space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-blue-50 rounded-lg text-[#1e3a8a]">
                      <MapPin size={24} />
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-800">पत्ता</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        मु. पो. सोनोली, तालुका काटोल,<br/>
                        जिल्हा नागपूर, महाराष्ट्र - ४४१३०२
                      </p>
                   </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-green-50 rounded-lg text-green-700">
                      <Phone size={24} />
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-800">दूरध्वनी क्रमांक</h3>
                      <p className="text-slate-600 text-sm font-mono font-medium">
                        +91 9923620736
                      </p>
                   </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-orange-50 rounded-lg text-orange-600">
                      <Mail size={24} />
                   </div>
                   <div>
                      <h3 className="font-bold text-slate-800">ई-मेल पत्ता</h3>
                      <p className="text-slate-600 text-sm">
                        gpsonoli12@gmail.com
                      </p>
                   </div>
                </div>
             </div>
          </div>

          {/* Office Timing Card (New Requirement) */}
          <div className="bg-gradient-to-br from-blue-900 to-[#1e3a8a] rounded-2xl shadow-lg p-6 text-white relative overflow-hidden">
             <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4">
                <Clock size={120} />
             </div>
             
             <div className="relative z-10">
                <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
                   <Clock className="text-orange-400" />
                   कार्यालय वेळा (Office Hours)
                </h3>
                
                <div className="space-y-3">
                   <div className="flex justify-between items-center border-b border-white/20 pb-2">
                      <span className="flex items-center gap-2 text-sm font-medium opacity-90">
                         <CalendarDays size={16} /> सोमवार - शुक्रवार
                      </span>
                      <span className="font-bold text-orange-300">
                         सकाळी 9:45 ते सायं 5:45
                      </span>
                   </div>
                   <div className="flex justify-between items-center pt-1">
                      <span className="flex items-center gap-2 text-sm font-medium opacity-90">
                         <CalendarDays size={16} /> शनिवार-रविवार / सुट्टी
                      </span>
                      <span className="font-bold text-red-300 bg-red-500/20 px-2 py-0.5 rounded text-xs">
                         बंद (Closed)
                      </span>
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* --- RIGHT COLUMN: OFFICERS & MAP (7 cols) --- */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Officers Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
             {/* Sarpanch Card */}
             <div className="bg-white p-6 rounded-2xl border-t-4 border-orange-500 shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-orange-50 rounded-full text-orange-600">
                      <User size={28} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">सरपंच (Sarpanch)</p>
                      <h3 className="text-lg font-bold text-slate-800 mt-1">सौ. ललिता लिलाधर महाजन</h3>
                      <a href="tel:9226900178" className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-orange-600 bg-orange-50 px-3 py-1.5 rounded-lg hover:bg-orange-100 transition-colors">
                         <Phone size={14} /> 9226900178
                      </a>
                   </div>
                </div>
             </div>

             {/* Gram Sevak Card */}
             <div className="bg-white p-6 rounded-2xl border-t-4 border-[#1e3a8a] shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                   <div className="p-3 bg-blue-50 rounded-full text-[#1e3a8a]">
                      <User size={28} />
                   </div>
                   <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">ग्रामसेवक (Gram Sevak)</p>
                      <h3 className="text-lg font-bold text-slate-800 mt-1">श्री. आशिष शेषराव रेवतकर</h3>
                      <a href="tel:9923620736" className="inline-flex items-center gap-2 mt-3 text-sm font-bold text-[#1e3a8a] bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                         <Phone size={14} /> 9923620736
                      </a>
                   </div>
                </div>
             </div>
          </div>

          {/* Map Container */}
          <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-100 h-[300px] sm:h-[400px]">
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.603785507428!2d78.6269575!3d21.3661181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd45671392f6c9f%3A0x421583e22aea3fd6!2sGram%20Panchayat%20Office!5e0!3m2!1sen!2sin!4v1768122737754!5m2!1sen!2sin" 
               width="100%" 
               height="100%" 
               style={{ border: 0, borderRadius: '12px' }} 
               allowFullScreen 
               loading="lazy"
               className="grayscale hover:grayscale-0 transition-all duration-700"
               title="Grampanchayat Sonoli Map"
             ></iframe>
             
          </div>

        </div>

      </div>
    </section>
  );
}