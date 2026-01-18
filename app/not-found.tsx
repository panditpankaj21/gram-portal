import Link from "next/link";
import { 
  FileQuestion, 
  Home, 
  ArrowLeft, 
  HelpCircle,
  Phone
} from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-5 w-full flex items-center justify-center font-sans">

      {/* --- MAIN NOTIFICATION CARD --- */}
      <div className="relative z-10  bg-white border shadow-xl border-slate-200 rounded-2xl max-w-lg w-full overflow-hidden">
        
        {/* Top Decorative Strip (Tricolor) */}
        <div className="h-1.5 w-full bg-linear-to-r from-orange-500 via-white to-green-600"></div>

        <div className="p-8 md:p-10 text-center">
          
          {/* Icon: Styled like a Stamp */}
          <div className="w-20 h-20 mx-auto bg-blue-50 text-[#1e3a8a] rounded-full flex items-center justify-center mb-6 border-4 border-white shadow-sm">
             <FileQuestion size={36} strokeWidth={1.5} />
          </div>

          {/* Heading - Clean & Moderate Size */}
          <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-2">
            पृष्ठ उपलब्ध नाही
          </h1>
          <p className="text-sm font-bold text-orange-600 uppercase tracking-widest mb-6">
            Page Not Found / Under Maintenance
          </p>

          {/* Message - Small & Readable */}
          <p className="text-slate-500 text-sm leading-relaxed mb-8 px-4">
            क्षमस्व, आपण शोधत असलेले पृष्ठ सध्या अस्तित्वात नाही किंवा त्यावर 
            प्रशासकीय काम चालू आहे. कृपया मुख्यपृष्ठावर परत जा किंवा मदतीसाठी संपर्क साधा.
          </p>

          {/* Action Buttons - Professional Outline Style */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="/"
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[#1e3a8a] text-white text-sm font-bold rounded-lg hover:bg-blue-900 transition-colors shadow-sm"
            >
              <Home size={16} />
              मुख्यपृष्ठ
            </Link>

            <Link 
              href="/contact"
              className="flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-slate-700 border border-slate-300 text-sm font-bold rounded-lg hover:bg-slate-50 transition-colors"
            >
              <ArrowLeft size={16} />
              मागे जा
            </Link>
          </div>
        </div>

        {/* Footer: Quick Help Section (The "Special" Touch) */}
        <div className="bg-slate-50 border-t border-slate-100 p-4 px-8 flex items-center justify-between">
           <div className="flex items-center gap-2 text-slate-500">
              <HelpCircle size={16} />
              <span className="text-xs font-semibold">मदत हवी आहे?</span>
           </div>
           <a href="tel:9923620736" className="flex items-center gap-2 text-[#1e3a8a] hover:underline">
              <Phone size={14} />
              <span className="text-xs font-bold">9923620736</span>
           </a>
        </div>

      </div>
    </div>
  );
}