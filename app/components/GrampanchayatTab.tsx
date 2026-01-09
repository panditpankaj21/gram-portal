"use client";

import { useState } from "react";
import { FaUserTie, FaSchool, FaProjectDiagram, FaMapMarkedAlt, FaTasks, FaUsers } from "react-icons/fa";

const tabs = [
  { key: "गाव", icon: <FaMapMarkedAlt /> },
  { key: "प्रदेश", icon: <FaTasks /> },
  { key: "पंचायत सदस्य", icon: <FaUsers /> },
  { key: "सरपंचाचा संदेश", icon: <FaUserTie /> },
  { key: "गावातील शाळा", icon: <FaSchool /> },
  { key: "योजना", icon: <FaTasks /> },
  { key: "पंचायत कर्मचारी", icon: <FaUserTie /> },
  { key: "प्रकल्प", icon: <FaProjectDiagram /> },
];

export default function GrampanchayatTabs() {
  const [active, setActive] = useState("गाव");

  return (
    <section className="w-full bg-gradient-to-br from-[#e8f2ff] to-white py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">

        {/* LEFT SIDE — TABS */}
        <aside className="bg-white shadow-lg rounded-2xl border border-blue-200 p-4">
          <h2 className="text-lg font-bold text-[#1C5FAF] mb-4 text-center">
            माहिती विभाग
          </h2>
          <div className="flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition font-medium
                  ${active === tab.key
                    ? "bg-[#1C5FAF] text-white shadow-lg scale-105"
                    : "text-blue-900 hover:bg-blue-50 hover:scale-105"}
                `}
              >
                <span className="text-base">{tab.icon}</span>
                <span>{tab.key}</span>
              </button>
            ))}
          </div>
        </aside>

        {/* RIGHT SIDE — CONTENT */}
        <main className="bg-white shadow-xl rounded-3xl border border-blue-200 p-6 md:p-8 overflow-y-auto max-h-[80vh]">
          <h2 className="text-2xl font-bold text-[#1C5FAF] mb-6">{active}</h2>

          {/* गाव */}
          {active === "गाव" && (
            <div className="space-y-4 text-gray-800 leading-relaxed text-sm sm:text-base">
              <p>
                गट ग्रामपंचायत खेडी (गो. गो.) मन्नाथ गाव 2011 च्या
                जनगणनेनुसार, गावाचा कोड 180521 आहे. गावाचे क्षेत्रफळ 12.85
                हेक्टर असून पिन कोड 441306 आहे.
              </p>

              <table className="w-full text-left border border-gray-300 rounded-lg overflow-hidden">
                <thead className="bg-blue-100 text-blue-900">
                  <tr>
                    <th className="p-2 border">तपशील</th>
                    <th className="p-2 border">एकूण</th>
                    <th className="p-2 border">पुरुष</th>
                    <th className="p-2 border">स्त्री</th>
                  </tr>
                </thead>
                <tbody className="text-center">
                  <tr className="hover:bg-blue-50">
                    <td className="p-2 border">पूर्ण लोकसंख्या</td>
                    <td className="p-2 border">2208</td>
                    <td className="p-2 border">1126</td>
                    <td className="p-2 border">1082</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="p-2 border">अनुसूचित जाती (SC)</td>
                    <td className="p-2 border">820</td>
                    <td className="p-2 border">420</td>
                    <td className="p-2 border">400</td>
                  </tr>
                  <tr className="hover:bg-blue-50">
                    <td className="p-2 border">अनुसूचित जमाती (ST)</td>
                    <td className="p-2 border">351</td>
                    <td className="p-2 border">190</td>
                    <td className="p-2 border">161</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {/* प्रदेश */}
          {active === "प्रदेश" && (
            <div className="space-y-6 text-gray-800 leading-relaxed text-sm sm:text-base">
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  ["भौगोलिक परिसर", "शेतीप्रधान निसर्गरम्य परिसर"],
                  ["शेजारील गाव", "उत्तरेला मसोरा, दक्षिणेला पिपळा, पूर्वेला खेडी गोगो, पश्चिमेला येनिकोनी"],
                  ["शैक्षणिक सुविधा", "३ प्राथमिक शाळा + १ माध्यमिक शाळा"],
                  ["आरोग्य सुविधा", "उपकेंद्र + आशा सेविका"],
                  ["धार्मिक स्थळे", "हनुमान मंदिर, बौद्धविहार, विठ्ठल मंदिर"],
                  ["वाहतूक", "ST बस, रेल्वे, पक्के रस्ते, इंटरनेट"],
                  ["जलसंपत्ती व सिंचन", "तलाव, विहिरी, नळयोजना, तुषार सिंचन"],
                  ["उद्योग व रोजगार", "शेती, दुग्धव्यवसाय, कुक्कुटपालन, महिला बचतगट"],
                ].map(([title, desc], i) => (
                  <div key={i} className="p-4 bg-blue-50 rounded-xl border border-blue-100 shadow-sm hover:shadow-md transition">
                    <h3 className="font-semibold text-[#1C5FAF] mb-1">{title}</h3>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* पंचायत्त सदस्य */}
          {active === "पंचायत सदस्य" && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    {["क्रमांक", "नाव", "पद", "वॉर्ड", "संपर्क", "जबाबदारी"].map(
                      (h) => (
                        <th key={h} className="border p-2">{h}</th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "जयश्री पी. बागडे", "सदस्य", "01", "९७६४८५२९५८", "योजना तयार"],
                    ["2", "रोशनी एस. वरठी", "सदस्य", "02", "९१३७४९५७०४", "ग्रामसभा"],
                    ["3", "दिपक एस. बागडे", "सदस्य", "02", "८०८०३७४१७०", "पाणीपुरवठा, स्वच्छता"],
                    ["4", "हर्षा जीवन उईके", "सदस्य", "02", "८३७८०५२६३२", "सरकारी योजना राबवणे"],
                  ].map((row, i) => (
                    <tr key={i} className="text-center hover:bg-blue-50">
                      {row.map((d, j) => <td key={j} className="border p-2">{d}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* सरपंचाचा संदेश */}
          {active === "सरपंचाचा संदेश" && (
            <div className="space-y-4 text-gray-800 leading-relaxed text-sm sm:text-base">
              <p className="italic">
                आमच्या ग्रामपंचायतीच्या अधिकृत संकेतस्थळावर आपले स्वागत आहे...
              </p>
              <p>
                प्रिय ग्रामस्थ बंधूंनो आणि भगिनींनो, खेडी गोगो मन्नथ ग्रामपंचायतीची
                सरपंच म्हणून आपल्या सर्वांची सेवा करण्याची संधी मला मिळाली, याचा
                मला मनापासून अभिमान आहे.
              </p>
              <p className="font-semibold">“स्वच्छ, सशक्त आणि आत्मनिर्भर ग्रामपंचायत!”</p>
              <p className="text-right font-medium">— श्रीमती नंदाताई अनिलजी बांदरे</p>
            </div>
          )}

          {/* गावातील शाळा */}
          {active === "गावातील शाळा" && (
            <ul className="list-disc list-inside text-gray-800 space-y-2 text-sm sm:text-base">
              <li>3 प्राथमिक शाळा (1 ली – 4 थी)</li>
              <li>1 माध्यमिक शाळा (5 वी – 10 वी)</li>
              <li>3 अंगणवाडी केंद्रे बालशिक्षणासाठी</li>
              <li>उच्च शिक्षणासाठी सिंदी, सावरगाव, काटोल, नागपूर</li>
            </ul>
          )}

          {/* योजना */}
          {active === "योजना" && (
            <ul className="list-decimal list-inside text-gray-800 space-y-2 text-sm sm:text-base">
              <li>अटल भूजल योजना (2020–25)</li>
              <li>जल जीवन मिशन (Jal Jeevan Mission)</li>
              <li>मुख्यमंत्री समृद्ध पंचायत राज अभियान (2025–26)</li>
              <li>संत गाडगेबाबा ग्राम स्वच्छता अभियान</li>
              <li>प्रधानमंत्री आवास योजना – ग्रामीण (PMAY-G)</li>
              <li>रमाई आवास योजना (Ramai Aawas Yojana)</li>
            </ul>
          )}

          {/* पंचायत कर्मचारी */}
          {active === "पंचायत कर्मचारी" && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    {["क्रमांक", "नाव", "पद", "संपर्क", "जबाबदारी"].map(
                      (h) => <th key={h} className="border p-2">{h}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "राजकुमार अ. बागडे", "पाणीपुरवठा कर्मचारी", "८३९०७६६०८१", "नियमित व स्वच्छ पाणीपुरवठा"],
                    ["2", "प्रमोद डी. पर्तेती", "ग्रामपंचायत कर्मचारी", "७७७५०१३५९७", "कर वसुली, कामे पाहणे"],
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-blue-50 text-center">
                      {row.map((d,j) => <td key={j} className="border p-2">{d}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* प्रकल्प */}
          {active === "प्रकल्प" && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    {["क्रमांक", "प्रकल्पाचे नाव", "स्थिती", "सुरुवातीची तारीख", "पूर्ण होण्याची तारीख", "अंदाजित खर्च", "टीप"].map(
                      (h) => <th key={h} className="border p-2">{h}</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["1", "सिमेंट रोड व पेव्हर ब्लॉक", "पूर्ण", "2025–26", "2025–26", "₹10,00,000", "मुख्य मार्ग सुकर झाला"],
                    ["2", "सिमेंट रोड बांधकाम", "पूर्ण", "2025–26", "2025–26", "₹5,00,000", "मुख्य मार्ग सुकर झाला"],
                    ["3", "स्भूमिगत नाली बांधकाम", "काम सुरू", "2025–26", "2025–26", "₹11,00,000", "काम सुरू"],
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-blue-50 text-center">
                      {row.map((d,j) => <td key={j} className="border p-2">{d}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </main>
      </div>
    </section>
  );
}
