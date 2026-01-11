"use client";

import Image from "next/image";
import { 
  History, 
  Target, 
  Lightbulb, 
  User, 
  Award, 
  ScrollText 
} from "lucide-react";

export default function AboutPage() {
  const team = [
    {
      name: "सौ. नंदा अनिल बांदरे",
      role: "सरपंच",
      img: "", // Will show fallback icon until image is added
    },
    {
      name: "साहिल शेषराव ढोकें",
      role: "उप-सरपंच",
      img: "", 
    },
    {
      name: "गजानन शिवहरी शेळके",
      role: "ग्रामसेवक",
      img: "", 
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 font-sans">
      
      {/* --- HERO HEADER --- */}
      <div className="bg-[#1C5FAF] py-16 px-4 text-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="bg-white/10 text-white border border-white/20 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
             आमचा वारसा
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-4 mb-4">
            ग्रामपंचायत सोनोली
          </h1>
          <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-orange-400 via-white to-green-500 rounded-full mb-4"></div>
          <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto">
            पारदर्शक कारभार आणि विकासाची नवी दिशा.
          </p>
        </div>
      </div>
      

      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">

        {/* --- SECTION 1: HISTORY (Split Layout) --- */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#1C5FAF]">
              <History size={28} />
              <h2 className="text-3xl font-bold">आमचा इतिहास आणि वारसा</h2>
            </div>
            
            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p>
                <span className="font-bold text-slate-800">खेडी (गो. गो.) मन्नाथ</span> हे एक प्राचीन आणि सांस्कृतिक वैभव असलेले गाव आहे.
                स्वातंत्र्यपूर्व काळापासून या गावाला एक वेगळी ओळख आहे.
              </p>
              <p>
                ग्रामपंचायतने वर्षानुवर्षे गावाच्या सर्वांगीण विकासासाठी सातत्याने योगदान दिले आहे. 
                पूर्वीच्या काळी केवळ शेतीवर अवलंबून असणारे हे गाव आज शिक्षण, तंत्रज्ञान आणि 
                पायाभूत सुविधांमध्ये अग्रेसर होत आहे.
              </p>
            </div>

            <div className="flex gap-4 pt-2">
               <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl text-center">
                  <p className="text-2xl font-bold text-orange-600">६०+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">वर्षे सेवा</p>
               </div>
               <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl text-center">
                  <p className="text-2xl font-bold text-blue-600">१५००+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase">लोकसंख्या</p>
               </div>
            </div>
          </div>

          {/* Image Frame */}
          <div className="relative h-[400px] w-full bg-white p-2 rounded-2xl shadow-xl border border-slate-100 rotate-1 hover:rotate-0 transition-transform duration-500">
             <div className="relative h-full w-full rounded-xl overflow-hidden bg-slate-200">
               {/* Replace with actual image later */}
               <Image 
                 src="/gallery/image4.jpg"
                 alt="Grampanchayat Building"
                 fill
                 className="object-cover"
               />
               {/* Overlay Text */}
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="font-bold text-lg">ग्राम सचिवालय</p>
               </div>
             </div>
          </div>
        </div>

        {/* --- SECTION 2: MISSION & VISION (Cards) --- */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1C5FAF] hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-blue-50 text-[#1C5FAF] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Target size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-[#1C5FAF] transition-colors">
              आमचे ध्येय (Mission)
            </h3>
            <p className="text-slate-600 leading-relaxed">
              सर्व नागरिकांना पारदर्शक, वेगवान आणि प्रभावी सेवा उपलब्ध करून देणे. 
              लोकसहभागातून गावाचा <span className="font-semibold text-[#1C5FAF]">समतोल विकास</span> साधणे आणि प्रशासनात उत्तरदायित्व आणणे.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-xl transition-shadow group">
            <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
               <Lightbulb size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
              आमची दृष्टी (Vision)
            </h3>
            <p className="text-slate-600 leading-relaxed">
              खेडी (गो. गो.) मन्नाथला एक <span className="font-semibold text-orange-600">आदर्श, आत्मनिर्भर आणि स्मार्ट</span> गाव बनवणे. 
              जेथे आरोग्य, शिक्षण आणि रोजगार या सुविधा प्रत्येकाला समान हक्काने मिळतील.
            </p>
          </div>

        </div>

        {/* --- SECTION 3: TEAM --- */}
        <div className="space-y-10">
          <div className="text-center">
            <span className="text-[#1C5FAF] font-bold text-sm uppercase tracking-widest">Team</span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-2">आमचे पदाधिकारी</h2>
            <div className="w-16 h-1 bg-[#1C5FAF] mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                {/* Image / Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-5">
                  <div className="absolute inset-0 bg-[#1C5FAF]/10 rounded-full animate-pulse group-hover:hidden"></div>
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-50 flex items-center justify-center">
                    {member.img ? (
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={64} className="text-slate-300" />
                    )}
                  </div>
                  {/* Badge Icon */}
                  <div className="absolute bottom-0 right-0 bg-[#1C5FAF] text-white p-2 rounded-full border-2 border-white shadow-sm">
                    {index === 0 ? <Award size={16} /> : <ScrollText size={16} />}
                  </div>
                </div>

                {/* Details */}
                <h4 className="text-xl font-bold text-slate-800 group-hover:text-[#1C5FAF] transition-colors">
                  {member.name}
                </h4>
                <p className="text-slate-500 font-medium mt-1">{member.role}</p>
                
                {/* Decorative Line */}
                <div className="w-full h-px bg-slate-100 my-4 group-hover:bg-blue-100 transition-colors"></div>
                
                <p className="text-xs text-slate-400">
                   ग्रामपंचायत सोनोली
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}