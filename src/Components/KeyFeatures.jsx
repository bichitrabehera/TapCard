import React from "react";
import { FiZap, FiUserCheck, FiShare2, FiBarChart2 } from "react-icons/fi";

const features = [
  {
    icon: <FiZap className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "One QR for Everything",
    description:
      "Link your contact info, portfolio, and socials into one scannable QR code.",
  },
  {
    icon: <FiUserCheck className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Customizable Profile",
    description:
      "Control how your digital identity looks with themes, colors, and layouts.",
  },
  {
    icon: <FiShare2 className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Instant Sharing",
    description:
      "Share instantly with anyone — no apps required for them to view.",
  },
  {
    icon: <FiBarChart2 className="w-6 h-6 sm:w-7 sm:h-7" />,
    title: "Analytics & Insights",
    description: "Track who’s scanning and when, so you know your reach.",
  },
];

const KeyFeatures = () => {
  return (
    <section className="relative text-white bg-black py-20 px-6 sm:py-28">
      <div className="max-w-screen-2xl mx-auto">
        {/* Heading */}
        <div className="text-left md:text-left mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight  leading-[1.1]">
            why <span className="text-cyan-400 uppercase font-[Heading]">Synapse</span> stands out
          </h2>
          <p className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg max-w-lg leading-relaxed mx-auto md:mx-0">
            Engineered for speed, simplicity, and clarity all in one scan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative border border-[#2a2a2a] bg-gradient-to-b from-[#0a0a0a] to-[#101010]
                         p-6 sm:p-8 md:p-10 hover:bg-[#0f0f0f] transition-all duration-300
                         hover:border-cyan-500/40 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-6 bg-[#111] border border-[#333] text-gray-300 group-hover:text-cyan-400 transition-colors">
                {feature.icon}
              </div>

              {/* Text */}
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 tracking-wide uppercase group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>

              {/* Accent Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
