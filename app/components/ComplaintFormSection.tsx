"use client";

import { useState } from "react";

export default function ComplaintFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    subject: "",
    message: "",
    file: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("तुमची तक्रार नोंदवण्यात आली! 🙏");
  };

  return (
    <section className="relative bg-[#e8f1ff] py-20 sm:py-24 px-4">
      {/* Soft Wave Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="block w-full h-12"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M-2 8C294 70 459 -56 802 7V72H-2V8Z" fill="#fff" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl rounded-[30px] shadow-[0_8px_35px_rgba(0,0,0,0.1)] p-8 sm:p-14 border border-[#1C5FAF]/10 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-[#1C5FAF] tracking-wide drop-shadow">
            ग्रामपंचायत तक्रार पोर्टल
          </h2>
          <p className="mt-3 text-gray-700 text-base sm:text-lg">
            तुमची समस्या आमच्यासाठी महत्त्वाची आहे. कृपया खालील तपशील भरा 🙌
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="👤 नाव"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-[#1C5FAF] transition-all"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="📱 मोबाइल क्रमांक"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-[#1C5FAF] transition-all"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="📝 तक्रारीचा विषय"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-[#1C5FAF] transition-all"
          />

          <textarea
            name="message"
            placeholder="✉️ तक्रारीचे तपशील"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full p-4 rounded-xl border border-gray-300 bg-white shadow-sm focus:ring-4 focus:ring-blue-300 focus:border-[#1C5FAF] transition-all resize-none"
          />

          {/* FILE ATTACH */}
          <div className="flex items-center gap-2 text-[#1C5FAF] font-medium cursor-pointer">
            <label className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
              📎 फाइल जोडा
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {formData.file && (
              <span className="text-gray-600 text-sm truncate">
                {formData.file.name}
              </span>
            )}
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full py-4 bg-[#1C5FAF] text-white font-bold rounded-2xl shadow-[0_6px_0_#144a87] hover:shadow-[0_4px_0_#144a87] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_0px_0_#144a87] transition-all"
          >
            🚀 तक्रार नोंदवा
          </button>
        </form>
      </div>
    </section>
  );
}
