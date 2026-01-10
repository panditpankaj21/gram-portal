import { Download } from "lucide-react";

const forms = [
  {
    title: "जन्म प्रमाणपत्र अर्ज",
    subtitle: "Birth Certificate Application (Form No. 1)",
    file: "/forms/birth-form.pdf",
  },
  {
    title: "मृत्यू प्रमाणपत्र अर्ज",
    subtitle: "Death Certificate Application (Form No. 2)",
    file: "/forms/death-form.pdf",
  },
  {
    title: "विवाह नोंदणी अर्ज",
    subtitle: "Marriage Registration Application",
    file: "/forms/marriage-form.pdf",
  },
  {
    title: "दारिद्र्य रेषेखाली अर्ज",
    subtitle: "Below Poverty Line Application",
    file: "/forms/bpl-form.pdf",
  },
  {
    title: "येणे-बाकी नसल्याचा दाखला",
    subtitle: "No Dues Certificate",
    file: "/forms/no-dues-form.pdf",
  },
  {
    title: "Audit Report 2024-25",
    subtitle: "Gram Panchayat Financial Audit",
    file: "/forms/audit-2024-25.xlsx",
  },
];

export default function PanchayatForms() {
  return (
    <section className="min-h-screen bg-blue-50/60 py-12 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#1C5FAF] tracking-wide">
          ग्रामपंचायत अर्ज व सेवा
        </h1>
        <p className="text-center text-slate-600 mt-2 mb-10 text-[15px]">
          आवश्यक फॉर्म खाली दिले आहेत — डाउनलोड करून सादर करा
        </p>

        {/* Forms Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {forms.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-blue-200 bg-white shadow-sm
              hover:border-blue-400 hover:shadow-md transition-all duration-200 p-5"
            >
              <h2 className="text-lg font-semibold text-[#1C5FAF] leading-snug">
                {item.title}
              </h2>
              <p className="text-sm text-slate-600 mt-1">
                {item.subtitle}
              </p>

              <a
                href={item.file}
                download
                className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-md
                bg-[#1C5FAF] text-white text-sm font-medium
                hover:bg-[#0e529a] transition-all"
              >
                <Download size={18} />
                Download
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
