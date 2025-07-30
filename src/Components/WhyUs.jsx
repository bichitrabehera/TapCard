import React from "react";

const features = [
  {
    title: "Unified QR Identity",
    desc: "All your important links in one dynamic QR code—share your full profile instantly and effortlessly.",
    cta: "Learn more →",
  },
  {
    title: "Design That Represents You",
    desc: "From colors to layout, your TapCard is fully customizable to match your personal or professional brand.",
    cta: "Learn more →",
  },
  {
    title: "Control & Flexibility",
    desc: "You decide what to show and when—switch between modes, edit links on the fly, and keep your identity agile.",
    cta: "Learn more →",
  },
];

const WhyChooseTapCard = () => {
  return (
    <section className="bg-[#0d0d0d] text-white px-6 py-30">
      <div className="max-w-6xl mx-auto">
        {/* Section Label + Heading */}
        <div className="mb-12 text-center">
          <p className="text-pink-500 text-sm font-medium uppercase tracking-widest mb-2">
            Key Highlights
          </p>
          <h2 className="text-3xl md:text-4xl font-light text-white">
            Why Choose{" "}
            <span className="text-cyan-400 font-mono">TapCard?</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#111111] border border-white/10 rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 group"
            >
              <h3 className="text-xl text-gray-400 font-semibold mb-3 group-hover:text-cyan-400 transition">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
              {/* <button className="text-sm text-cyan-400 font-medium hover:underline">
                {item.cta}
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseTapCard;
