"use client";

import Link from "next/link";
import { 
  Megaphone, 
  Image as ImageIcon, 
  Video, 
  Newspaper, 
  ArrowRight,
  ExternalLink,
  Cast,
  Facebook,
  Instagram
} from "lucide-react";

export default function MediaPage() {
  
  const mediaLinks = [
    {
      title: "ग्रामसभा सूचना (Notices)",
      desc: "अद्ययावत ग्रामसभा नोटिस, अजेंडा आणि बैठकांचे इतिवृत्त.",
      icon: <Megaphone size={28} />,
      link: "/notices",
      color: "text-orange-600",
      bg: "bg-orange-50",
      border: "hover:border-orange-200"
    },
    {
      title: "फोटो गॅलरी (Gallery)",
      desc: "गावातील विकासकामे, कार्यक्रम आणि उत्सवांचे छायाचित्र.",
      icon: <ImageIcon size={28} />,
      link: "/gallery",
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "hover:border-blue-200"
    },
    {
      title: "व्हिडिओ गॅलरी (Videos)",
      desc: "ग्रामसभेचे व्हिडिओ रेकॉर्डिंग आणि गावाची माहितीपर लघुपट.",
      icon: <Video size={28} />,
      link: "/videos",
      color: "text-red-600",
      bg: "bg-red-50",
      border: "hover:border-red-200"
    },
    {
      title: "प्रेस नोट / बातम्या (News)",
      desc: "वृत्तपत्रातील बातम्या आणि ग्रामपंचायतीची अधिकृत प्रकाशने.",
      icon: <Newspaper size={28} />,
      link: "/press",
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "hover:border-purple-200"
    },
    // --- NEW SOCIAL MEDIA CARDS ---
    {
      title: "फेसबुक पेज (Facebook)",
      desc: "ग्रामपंचायतीच्या दैनंदिन घडामोडी आणि घोषणांसाठी आम्हाला फॉलो करा.",
      icon: <Facebook size={28} />,
      link: "https://facebook.com", // Add your real link here
      color: "text-[#1877F2]", // Official Facebook Blue
      bg: "bg-blue-50",
      border: "hover:border-blue-200"
    },
    {
      title: "इंस्टाग्राम (Instagram)",
      desc: "गावातील सौंदर्य, रील्स आणि संस्कृतीची झलक पहा.",
      icon: <Instagram size={28} />,
      link: "https://instagram.com", // Add your real link here
      color: "text-[#E1306C]", // Official Insta Pink
      bg: "bg-pink-50",
      border: "hover:border-pink-200"
    },
  ];

  return (
    <section className="min-h-screen bg-slate-50 py-16 px-4 font-sans relative">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
         
         {/* HEADER */}
         <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 border border-blue-200 text-xs font-bold tracking-wider uppercase mb-3">
               <Cast size={14} />
               जनसंपर्क कक्ष
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#1e3a8a] mb-4">
              मीडिया आणि प्रसिद्धी
            </h1>
            {/* Tricolor Bar */}
            <div className="h-1.5 w-24 mx-auto bg-gradient-to-r from-orange-500 via-white to-green-600 rounded-full shadow-sm mb-4"></div>
            
            <p className="text-slate-500 text-lg">
               ग्रामपंचायतीच्या घडामोडी, अद्ययावत माहिती आणि सोशल मीडिया हब.
            </p>
         </div>

         {/* GRID */}
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {mediaLinks.map((item, index) => (
               <Link 
                 key={index} 
                 href={item.link}
                 // Added target="_blank" logic for social links
                 target={item.link.startsWith("http") ? "_blank" : "_self"}
                 className={`group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 flex flex-col items-start gap-4 relative overflow-hidden ${item.border}`}
               >
                  {/* Icon Box */}
                  <div className={`shrink-0 w-14 h-14 rounded-xl ${item.bg} ${item.color} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                     {item.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 relative z-10 w-full">
                     <h2 className="text-lg font-bold text-slate-800 group-hover:text-[#1e3a8a] transition-colors mb-2 flex items-center justify-between">
                        {item.title}
                        <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                     </h2>
                     <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                        {item.desc}
                     </p>
                     
                     {/* Button Text */}
                     <span className={`text-sm font-bold flex items-center gap-2 ${item.color}`}>
                        पहा <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                     </span>
                  </div>

                  {/* Decorative Blob on Hover */}
                  <div className={`absolute -right-10 -bottom-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${item.bg}`}></div>
               </Link>
            ))}
         </div>

      </div>
    </section>
  );
}