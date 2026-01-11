"use client";

import Image from "next/image";
import { 
  History, 
  Target, 
  Lightbulb, 
  User, 
  Award, 
  ScrollText,
  MapPin,
  Quote
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
      <div className="bg-[#1C5FAF] py-16 md:py-20 px-4 text-center relative overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <span className="bg-white/10 text-white border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase backdrop-blur-sm shadow-sm">
             
             आमचा वारसा, आमचा अभिमान
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-6 mb-6 drop-shadow-md tracking-tight">
            ग्रामपंचायत सोनोली
          </h1>
          {/* Tricolor Bar */}
          <div className="h-1.5 w-32 mx-auto bg-gradient-to-r from-orange-400 via-white to-green-500 rounded-full mb-6 shadow-sm"></div>
          <p className="text-blue-100 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
            पारदर्शक कारभार आणि विकासाची नवी दिशा.
          </p>
        </div>
      </div>
      

      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 space-y-20">

        {/* --- SECTION 1: ABOUT CONTENT (Formatted) --- */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Main Content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4 border-b border-slate-200 pb-4">
              <div className="p-3 bg-orange-50 rounded-lg text-orange-600 border border-orange-100">
                <History size={32} />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900">आमच्या गावाबद्दल</h2>
            </div>
            
            <div className="prose prose-lg text-slate-600 leading-relaxed text-justify">
               {/* I have formatted your text into paragraphs with bold headers for readability.
                 The content is exactly what you provided.
               */}
               
               <p className="text-lg font-medium text-slate-800">
                 निसर्ग, संस्कृती आणि प्रगतीचा संगम - आमचे सोनोली!
               </p>
               <p>
                 नागपूर जिल्ह्यातील काटोल तालुक्यात वसलेले सोनोली हे एक शांत, सुंदर आणि प्रगतशील गाव आहे. काटोल शहरापासून जवळ असलेल्या या गावाने आपली ग्रामीण संस्कृती जपतानाच आधुनिकतेची कास धरली आहे. तालुक्याचे मुख्यालय असलेल्या काटोल शहरापासून सुमारे १२ किमी अंतरावर स्थित, आमचे गाव शांतता आणि सामाजिक एकतेचे उत्तम उदाहरण आहे. सामाजिक एकता आणि कृषी समृद्धी ही आमच्या गावाची प्रमुख ओळख आहे.
               </p>

               <h4 className="text-[#1C5FAF] font-bold text-lg mt-6 mb-2 flex items-center gap-2">
                 🔹 लोकसंख्या आणि समाजजीवन:
               </h4>
               <p>
                 २०११ च्या जनगणनेनुसार, गावाची लोकसंख्या सुमारे १५७२ आहे, ज्यात पुरुष आणि स्त्रियांचे प्रमाण समतोल आहे. गावाचा साक्षरता दर (सुमारे ८७%) हा जिल्ह्याच्या सरासरीपेक्षा जास्त आहे, जो येथील रहिवाशांची शिक्षणाप्रती असलेली ओढ दर्शवतो. गावात सर्व जाती-धर्माचे लोक गुण्यागोविंदाने राहतात आणि एकमेकांच्या सुख-दुःखात सहभागी होतात.
               </p>

               <h4 className="text-[#1C5FAF] font-bold text-lg mt-6 mb-2 flex items-center gap-2">
                 🔹 धार्मिक आणि सांस्कृतिक वारसा:
               </h4>
               <p>
                 गावाच्या आध्यात्मिक ऊर्जेचे केंद्र म्हणजे श्री बजरंगबली मंदिर होय. हे मंदिर गावकऱ्यांच्या श्रद्धेचे स्थान असून येथे वर्षभर विविध धार्मिक कार्यक्रमांचे आयोजन केले जाते. सोनोलीमध्ये सर्व धर्मीय सण अत्यंत उत्साहात साजरे केले जातात. विशेषतः पोळा, हनुमान जयंती, डॉ. बाबासाहेब आंबेडकर जयंती आणि ईद यांसारख्या सणांच्या निमित्ताने गावात सामाजिक सलोख्याचे दर्शन घडते.
               </p>

               <h4 className="text-[#1C5FAF] font-bold text-lg mt-6 mb-2 flex items-center gap-2">
                 🔹 कृषी आणि अर्थव्यवस्था:
               </h4>
               <p>
                 सोनोली हे एक सुजलाम सुफलाम गाव आहे. येथील शेतकरी कष्टाळू असून प्रामुख्याने मोसंबी आणि संत्रा या फळबागांसाठी हे क्षेत्र ओळखले जाते. यासोबतच कपाशी, सोयाबीन, तूर, गहू, चना आणि विविध प्रकारच्या भाजीपाल्याचे विक्रमी उत्पादन येथे घेतले जाते. गावातील अर्थव्यवस्था मुख्यत्वे शेतीवर आधारित असून, आधुनिक सिंचन पद्धतींचा वापर करण्याकडे गावकऱ्यांचा कल वाढत आहे.
               </p>

               <h4 className="text-[#1C5FAF] font-bold text-lg mt-6 mb-2 flex items-center gap-2">
                 🔹 ग्राम प्रशासन आणि नेतृत्व:
               </h4>
               <p>
                 सध्या गावाच्या विकासाची धुरा सरपंच सौ. ललिता लीलाधर महाजन यांच्या नेतृत्वाखाली ग्रामपंचायत समर्थपणे सांभाळत आहे. गाव हगणदारीमुक्त करणे, शुद्ध पिण्याच्या पाण्याची सोय, सिमेंट रस्ते आणि डिजिटल साक्षरता यांसारख्या विविध विकासकामांद्वारे सोनोलीला एक 'आदर्श गाव' बनवण्यासाठी ग्रामपंचायत सातत्याने प्रयत्नशील आहे.
               </p>

               <div className="bg-blue-50 border-l-4 border-[#1C5FAF] p-4 mt-6 rounded-r-lg">
                 <p className="italic font-medium text-blue-900">
                   <span className="font-bold">आमचा संकल्प:</span> शिक्षण, आरोग्य आणि पायाभूत सुविधांच्या बाबतीत सोनोली गावाला स्वयंपूर्ण बनवणे आणि प्रत्येक ग्रामस्थाचे जीवनमान उंचावणे हेच आमचे मुख्य ध्येय आहे.
                 </p>
               </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
               <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm">
                  <p className="text-3xl font-extrabold text-orange-600">७०+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">वर्षे अविरत सेवा</p>
               </div>
               <div className="bg-white border border-slate-200 p-4 rounded-xl text-center shadow-sm">
                  <p className="text-3xl font-extrabold text-blue-600">१५००+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">एकूण लोकसंख्या</p>
               </div>
            </div>
          </div>

          {/* Right: Image Frame */}
          <div className="lg:col-span-5 sticky top-24">
             <div className="relative h-[500px] w-full bg-white p-3 rounded-2xl shadow-2xl border border-slate-100 transform rotate-1 hover:rotate-0 transition-transform duration-700">
                <div className="relative h-full w-full rounded-xl overflow-hidden bg-slate-200">
                  {/* Replace with actual image later */}
                  <Image 
                    src="/gallery/image4.jpg"
                    alt="Grampanchayat Building"
                    fill
                    className="object-cover"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                     <div className="flex items-center gap-2 mb-1">
                        <MapPin size={18} className="text-orange-400" />
                        <span className="text-xs font-bold uppercase tracking-wider text-orange-200">प्रशासकीय केंद्र</span>
                     </div>
                     <p className="font-bold text-xl leading-tight">ग्राम सचिवालय, सोनोली</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white shadow-lg">
                   <Quote size={20} />
                </div>
             </div>
          </div>
        </div>

        {/* --- SECTION 2: MISSION & VISION (Cards) --- */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-[#1C5FAF] hover:shadow-2xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-blue-50 text-[#1C5FAF] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1C5FAF] group-hover:text-white transition-colors shadow-sm">
               <Target size={30} />
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
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-orange-500 hover:shadow-2xl transition-all duration-300 group">
            <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors shadow-sm">
               <Lightbulb size={30} />
            </div>
            <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors">
              आमची दृष्टी (Vision)
            </h3>
            <p className="text-slate-600 leading-relaxed">
              सोनोलीला एक <span className="font-semibold text-orange-600">आदर्श, आत्मनिर्भर आणि स्मार्ट</span> गाव बनवणे. 
              जेथे आरोग्य, शिक्षण आणि रोजगार या सुविधा प्रत्येकाला समान हक्काने मिळतील.
            </p>
          </div>

        </div>

        {/* --- SECTION 3: TEAM --- */}
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-[#1C5FAF] font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-4">
              आमचे पदाधिकारी
            </h2>
            <div className="w-20 h-1.5 bg-[#1C5FAF] mx-auto mt-4 rounded-full"></div>
            <p className="text-slate-500 mt-4 text-lg">
              गावाच्या विकासासाठी कटिबद्ध असलेले आमचे नेतृत्व.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center relative overflow-hidden group"
              >
                {/* Decorative Top Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 via-white to-green-500"></div>

                {/* Image / Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-[#1C5FAF]/5 rounded-full animate-pulse group-hover:hidden"></div>
                  <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg bg-slate-50 flex items-center justify-center relative z-10">
                    {member.img ? (
                      <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                    ) : (
                      <User size={56} className="text-slate-300" />
                    )}
                  </div>
                  {/* Badge Icon */}
                  <div className="absolute bottom-0 right-0 bg-[#1C5FAF] text-white p-2 rounded-full border-2 border-white shadow-md z-20">
                    {index === 0 ? <Award size={14} /> : <ScrollText size={14} />}
                  </div>
                </div>

                {/* Details */}
                <h4 className="text-lg font-bold text-slate-800 group-hover:text-[#1C5FAF] transition-colors">
                  {member.name}
                </h4>
                <p className="text-[#1C5FAF] font-medium text-sm mt-1 bg-blue-50 inline-block px-3 py-0.5 rounded-full border border-blue-100">
                  {member.role}
                </p>
                
                {/* Decorative Line */}
                <div className="w-12 h-0.5 bg-slate-200 mx-auto my-5 group-hover:w-20 group-hover:bg-orange-300 transition-all duration-300"></div>
                
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wide">
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