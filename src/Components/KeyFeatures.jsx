import React from "react";
import { FiZap, FiUserCheck, FiShare2, FiBarChart2 } from "react-icons/fi";

const features = [
  {
    icon: <FiZap className="w-6 h-6" />,
    title: "One QR for Everything",
    description:
      "Link your contact info, portfolio, and socials into one scannable QR code.",
    color: "bg-blue-500",
  },
  {
    icon: <FiUserCheck className="w-6 h-6" />,
    title: "Customizable Profile",
    description:
      "Control how your digital identity looks with themes, colors, and layouts.",
    color: "bg-amber-500",
  },
  {
    icon: <FiShare2 className="w-6 h-6" />,
    title: "Instant Sharing",
    description:
      "Share instantly with anyone — no apps required for them to view.",
    color: "bg-cyan-500",
  },
  {
    icon: <FiBarChart2 className="w-6 h-6" />,
    title: "Analytics & Insights",
    description: "Track who’s scanning and when, so you know your reach.",
    color: "bg-green-500",
  },
];

const KeyFeatures = () => {
  return (
    <section className="bg-[#f1f1f1] text-black py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium text-gray-400 mb-3 tracking-widest">
            KEY FEATURES
          </h2>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight p-5">
            Why <span className="text-cyan-600">Synapse</span> Stands Out
          </h2>
          <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto">
            Designed for speed, simplicity, and flexibility — all in one scan.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 m-5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
            >
              {/* Icon with rectangle background */}
              <div
                className={`w-16 h-16 flex items-center justify-center mb-6 ${feature.color} bg-opacity-20`}
              >
                <div className="text-white text-2xl">{feature.icon}</div>
              </div>

              {/* Text */}
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm sm:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
