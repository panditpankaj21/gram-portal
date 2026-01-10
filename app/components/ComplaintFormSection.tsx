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
    <section className="relative bg-[#e8f1ff] py-14 sm:py-16 px-4">
      
      <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 sm:p-8 border border-[#1C5FAF]/10">

        {/* HEADER */}
        <div className="text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#1C5FAF]">
            ग्रामपंचायत तक्रार पोर्टल
          </h2>
          <p className="mt-1 text-gray-600 text-sm">
            आपला अभिप्राय आमच्यासाठी महत्त्वाचा आहे
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="👤 नाव"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 focus:border-[#1C5FAF] transition-all text-sm"
            />

            <input
              type="tel"
              name="mobile"
              placeholder="📱 मोबाइल क्रमांक"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 focus:border-[#1C5FAF] transition-all text-sm"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="📝 तक्रारीचा विषय"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 focus:border-[#1C5FAF] transition-all text-sm"
          />

          <textarea
            name="message"
            placeholder="✉️ तक्रारीचे तपशील"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-blue-300 focus:border-[#1C5FAF] transition-all resize-none text-sm"
          />

          {/* FILE */}
          <div className="flex items-center gap-2 text-[#1C5FAF] text-sm font-medium cursor-pointer">
            <label className="flex items-center gap-2 hover:text-blue-600 transition cursor-pointer">
              📎 फाइल जोडा
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {formData.file && (
              <span className="text-gray-500 truncate max-w-[150px] text-xs">
                {formData.file.name}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1C5FAF] text-white text-sm font-bold rounded-xl shadow hover:bg-[#174f91] transition-all"
          >
            तक्रार नोंदवा
          </button>
        </form>
      </div>
    </section>
  );
}
