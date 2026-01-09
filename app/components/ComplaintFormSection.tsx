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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData);
    alert("तुमची तक्रार नोंदवण्यात आली!");
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#e8f1ff] to-white py-16 px-4 sm:px-8">
      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-md rounded-3xl shadow-2xl p-8 sm:p-12">
        
        {/* HEADER */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1C5FAF] mb-2">
            ग्रामपंचायत तक्रार पोर्टल
          </h2>
          <p className="text-gray-700 sm:text-lg">
            तुमच्या गावाबाबत तुम्हाला काही तक्रार असल्यास, आम्ही तुम्हाला तक्रार नोंदवण्यास प्रोत्साहित करतो.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-blue-200 focus:ring-2 focus:ring-[#1C5FAF] focus:outline-none shadow-sm transition"
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile No."
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl border border-blue-200 focus:ring-2 focus:ring-[#1C5FAF] focus:outline-none shadow-sm transition"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-xl border border-blue-200 focus:ring-2 focus:ring-[#1C5FAF] focus:outline-none shadow-sm transition"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full p-4 rounded-xl border border-blue-200 focus:ring-2 focus:ring-[#1C5FAF] focus:outline-none shadow-sm transition resize-none"
          />

          {/* FILE ATTACH */}
          <label className="flex items-center gap-3 cursor-pointer text-blue-700 hover:text-[#1C5FAF] font-medium transition">
            📎 Attach File
            <input type="file" className="hidden" onChange={handleFileChange} />
            {formData.file && <span className="text-gray-600 text-sm">{formData.file.name}</span>}
          </label>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#1C5FAF] to-blue-400 text-white font-bold py-4 rounded-2xl shadow-lg  transform transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
