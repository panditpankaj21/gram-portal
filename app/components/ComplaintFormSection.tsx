"use client";

import { useState } from "react";
import { 
  Send, 
  UploadCloud, 
  User, 
  Phone, 
  FileText, 
  MessageSquare, 
  CheckCircle2 
} from "lucide-react";

export default function ComplaintFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
    file: null as File | null,
    agreement: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert("कृपया अटी व शर्ती मान्य करा.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert("आपली तक्रार यशस्वीरित्या नोंदवली गेली आहे! संदर्भ क्रमांक: #GRV-2026-001");
    setIsSubmitting(false);
    // Reset form logic here if needed
  };

  return (
    <section className="relative w-full bg-slate-50 py-10 px-4 md:px-8 font-sans" id="complaint-form">
      
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          
          {/* LEFT SIDE: Info Panel */}
          <div className="bg-[#1e3a8a] p-8 md:p-10 text-white md:w-2/5 flex flex-col justify-between relative overflow-hidden">
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
             <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-40 h-40 bg-orange-500 rounded-full blur-3xl opacity-20"></div>

             <div className="relative z-10">
               <h3 className="text-2xl font-bold mb-2">नागरिक तक्रार निवारण</h3>
               <div className="h-1 w-12 bg-orange-500 mb-6"></div>
               <p className="text-blue-100 text-sm leading-relaxed mb-8">
                 गावातील समस्या, सूचना किंवा तक्रारी थेट ग्रामपंचायतीकडे पोहोचवण्यासाठी हे अधिकृत पोर्टल आहे. 
                 आम्ही आपल्या गोपनीयतेचा आदर करतो.
               </p>

               <div className="space-y-4 text-sm font-medium">
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-white/10 rounded-lg"><Phone size={18} /></div>
                   <span>हेल्पलाइन: 9923620755</span>
                 </div>
                 <div className="flex items-center gap-3">
                   <div className="p-2 bg-white/10 rounded-lg"><MessageSquare size={18} /></div>
                   <span>व्हाट्सअँप: 9923620736</span>
                 </div>
               </div>
             </div>

             <div className="relative z-10 mt-12 text-xs text-blue-200">
                * सुट्टीचे दिवस वगळून २४ तासात प्रतिसाद.
             </div>
          </div>

          {/* RIGHT SIDE: The Form */}
          <div className="p-8 md:p-10 md:w-3/5">
            <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <FileText className="text-orange-500" />
              तक्रार अर्ज
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Mobile Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">नाव (Full Name)</label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      placeholder="उदा. अमित पाटील"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm text-slate-800 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">मोबाईल (Mobile)</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 text-slate-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="mobile"
                      placeholder="98XXXXXXXX"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      maxLength={10}
                      className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm text-slate-800 font-medium font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">विषय (Subject)</label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="उदा. पिण्याच्या पाण्याची समस्या"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm text-slate-800 font-medium"
                  />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">तक्रारीचे विवरण (Description)</label>
                  <textarea
                    name="message"
                    placeholder="कृपया सविस्तर माहिती द्या..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-sm text-slate-800 resize-none"
                  />
              </div>

              {/* File Upload (Styled) */}
              <div className="relative group">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileChange}
                />
                <label 
                  htmlFor="file-upload"
                  className="flex items-center justify-center gap-3 w-full p-4 border-2 border-dashed border-slate-300 rounded-xl cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all"
                >
                  <div className="p-2 bg-slate-100 rounded-full group-hover:bg-blue-100 transition-colors">
                    <UploadCloud className="text-slate-500 group-hover:text-blue-600 w-5 h-5" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-slate-600 group-hover:text-blue-700">
                      {formData.file ? formData.file.name : "फोटो किंवा अटैचमेंट जोडा"}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">Max size: 5MB (JPG/PDF)</p>
                  </div>
                </label>
              </div>

              {/* Agreement */}
              <div className="flex items-start gap-3 pt-2">
                <div className="relative flex items-center">
                   <input
                     type="checkbox"
                     id="agreement"
                     checked={formData.agreement}
                     onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
                     className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-slate-300 checked:border-blue-600 checked:bg-blue-600 transition-all"
                   />
                   <CheckCircle2 className="pointer-events-none absolute left-0.5 top-0.5 h-4 w-4 text-white opacity-0 peer-checked:opacity-100" />
                </div>
                <label htmlFor="agreement" className="text-xs text-slate-500 cursor-pointer select-none leading-tight">
                  मी याद्वारे प्रमाणित करतो/करते की वरील माहिती सत्य आहे. 
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-xl text-white font-bold text-sm tracking-wide shadow-lg transition-all flex items-center justify-center gap-2
                  ${isSubmitting 
                    ? "bg-slate-400 cursor-not-allowed" 
                    : "bg-[#1e3a8a] hover:bg-blue-800 hover:shadow-blue-900/20 active:scale-[0.98]"
                  }`}
              >
                {isSubmitting ? (
                  "प्रक्रिया सुरू आहे..."
                ) : (
                  <>
                    तक्रार सबमिट करा <Send size={18} />
                  </>
                )}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}