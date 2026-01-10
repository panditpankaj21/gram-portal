export default function AboutPage() {
  const team = [
    {
      name: "सौ. नंदा अनिल बांदरे",
      role: "सरपंच",
      img: "", // put /gallery/nanda.jpg later
    },
    {
      name: "साहिल शेषराव ढोकें",
      role: "उप-सरपंच",
      img: "", // /gallery/sahil.jpg
    },
    {
      name: "गजानन शिवहरी शेळके",
      role: "ग्रामसेवक",
      img: "", // /gallery/gajanan.jpg
    },
  ];

  return (
    <section className="min-h-screen bg-[#E8F1FB] py-14 px-4">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-2xl font-bold text-[#1C5FAF]">
            आमच्याबद्दल
          </h1>
          <p className="text-slate-700 mt-2">
            आमच्या ग्रामपंचायत, इतिहास, आणि ध्येयाबद्दल जाणून घ्या
          </p>
        </div>

        {/* History */}
        <div className="bg-white rounded-2xl shadow-lg border border-[#1C5FAF]/20 p-8 space-y-5">
          <h2 className="text-xl font-semibold text-[#1C5FAF]">
            आमचा इतिहास आणि वारसा
          </h2>
          <p className="text-slate-700 leading-relaxed">
            खेडी (गो. गो.) मन्नाथ हे एक प्राचीन आणि सांस्कृतिक वैभव असलेले गाव आहे.
            ग्रामपंचायतने वर्षानुवर्षे गावाच्या सर्वांगीण विकासासाठी सातत्याने
            योगदान दिले आहे.
          </p>
          <p className="text-slate-700 leading-relaxed">
            शिक्षण, आरोग्य, रस्ते, स्वच्छता आणि डिजिटल सेवांमध्ये सुधारणा
            करण्यासाठी सतत प्रयत्न केले जात आहेत.
          </p>

          <div className="p-1 rounded-xl border border-[#1C5FAF]/30 overflow-hidden">
            <img
              src="/gallery/panchayat-building.jpg"
              alt="ग्रामपंचायत इमारत"
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Mission + Vision */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-md rounded-2xl p-6 border border-[#1C5FAF]/20 hover:shadow-[#1C5FAF]/20 transition-shadow">
            <h3 className="text-xl font-bold text-[#1C5FAF] mb-2">आमचे ध्येय</h3>
            <p className="text-slate-700 leading-relaxed">
              सर्व नागरिकांना पारदर्शक आणि प्रभावी सेवा उपलब्ध करून देणे, सहभागी
              शासन वाढवणे आणि गावाचा समतोल विकास साधणे.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-6 border border-[#1C5FAF]/20 hover:shadow-[#1C5FAF]/20 transition-shadow">
            <h3 className="text-xl font-bold text-[#1C5FAF] mb-2">आमची दृष्टी</h3>
            <p className="text-slate-700 leading-relaxed">
              खेडी (गो. गो.) मन्नाथला आदर्श, आत्मनिर्भर, आणि आधुनिक सुविधांनी
              युक्त स्मार्ट गाव बनवणे.
            </p>
          </div>
        </div>

        {/* Team */}
        <div className="space-y-6">
          <h2 className="text-center text-2xl font-semibold text-[#1C5FAF]">
            आमच्या टीमला भेटा
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.map((p, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md border border-[#1C5FAF]/20 p-6 text-center hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                {p.img ? (
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-[#1C5FAF]/50"
                  />
                ) : (
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#1C5FAF]/90 flex items-center justify-center text-white text-3xl font-bold shadow-md">
                    {p.name[0]}
                  </div>
                )}
                <h4 className="font-semibold text-[#1C5FAF] text-lg mt-4">
                  {p.name}
                </h4>
                <p className="text-slate-600 text-sm">{p.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
