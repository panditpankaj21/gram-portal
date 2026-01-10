export default function MediaPage() {
  const mediaLinks = [
    {
      title: "ग्रामसभा सूचना",
      desc: "अद्ययावत ग्रामसभा नोटिस, चर्चा आणि बैठकांचे निष्कर्ष.",
      icon: "📢",
      link: "#",
    },
    {
      title: "फोटो गॅलरी",
      desc: "गावातील कार्यक्रमांचे, विकासकामांचे आणि उत्सवांचे फोटो.",
      icon: "📸",
      link: "/gallery",
    },
    {
      title: "व्हिडिओ क्लिप्स",
      desc: "ग्रामसभेचे व्हिडिओ, बैठकांची झलक आणि महत्त्वाच्या घोषणा.",
      icon: "🎥",
      link: "#",
    },
    {
      title: "प्रेस प्रकाशन",
      desc: "ग्रामपंचायतीच्या बातम्या आणि प्रकाशने.",
      icon: "🗞️",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-[#E8F1FB] py-14 px-4">
      <div className="max-w-6xl mx-auto border-2 text-center">
         
        {/* Title */}
        <h1 className="text-3xl text-center font-bold text-[#1C5FAF] mb-3">
          मीडिया लिंक
        </h1>
        <p className="text-center text-slate-700 mb-10">
          आमच्या गावातील घडामोडी, अद्ययावत माहिती आणि माध्यमांतील नोंदी येथे उपलब्ध आहेत.
        </p>

        {/* Card Grid */}
        <div className="w-3xl  self-auto border-2 grid sm:grid-cols-2 lg:grid-cols-2 gap-y-10 gap-x-10">
          {mediaLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="block bg-white rounded-2xl p-6 border border-[#1C5FAF]/20 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="text-4xl text-[#1C5FAF]">{item.icon}</div>
              <h2 className="text-lg font-semibold text-[#1C5FAF] mt-3">
                {item.title}
              </h2>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                {item.desc}
              </p>
              <div className="mt-4 text-[#1C5FAF] font-medium text-sm">
                अधिक जाणून घ्या →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
