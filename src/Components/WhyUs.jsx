import React from "react";
import { FaQrcode, FaPalette, FaUserShield, FaMobile } from "react-icons/fa";

const features = [
  {
    icon: <FaQrcode />,
    title: "One QR for All Your Links",
    desc: "Instagram, LinkedIn, YouTube, Resume—all in one place. Simplify your connections with a single scan.",
  },
  {
    icon: <FaPalette />,
    title: "Customizable & Stylish",
    desc: "Choose from themes and layouts to make your profile uniquely yours and reflect your personal brand.",
  },
  {
    icon: <FaMobile />,
    title: "Always Accessible",
    desc: "Your QR code works anytime—even offline. Share your identity instantly, no matter the situation.",
  },
  {
    icon: <FaUserShield />,
    title: "Complete Control",
    desc: "Choose what you share and when. You're always in control of your digital identity.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#111111] text-white px-6 py-40">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Why Choose TapCard</h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          The smarter way to share your professional identity
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-[#0e1f4e] to-[#00BFFF] p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 group"
          >
            <div className="flex items-center mb-5">
              <div className="bg-white/20 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center text-white text-xl group-hover:scale-110 transition">
                {item.icon}
              </div>
              <h3 className="ml-4 text-xl font-semibold">{item.title}</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
