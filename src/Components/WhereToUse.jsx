import React from "react";
import {
  FaBriefcase,
  FaUniversity,
  FaPaintBrush,
  FaShareAlt,
  FaHandshake,
} from "react-icons/fa";

const useCases = [
  {
    icon: <FaBriefcase className="text-yellow-400" />,
    title: "Job Interviews",
    description: "Impress recruiters with one tap to your full profile.",
  },
  {
    icon: <FaUniversity className="text-blue-400" />,
    title: "Campus Networking",
    description: "Quickly connect with peers, professors, and recruiters.",
  },
  {
    icon: <FaPaintBrush className="text-pink-400" />,
    title: "Creator Portfolio",
    description: "Showcase your work beautifully in one elegant link.",
  },
  {
    icon: <FaShareAlt className="text-green-400" />,
    title: "Social Sharing",
    description: "Share all your platforms instantly with new contacts.",
  },
  {
    icon: <FaHandshake className="text-purple-400" />,
    title: "Client Meetings",
    description: "Professionally exchange contact details on the go.",
  },
];

const WhereToUse = () => (
  <section className="w-full text-white px-6 py-34">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="uppercase text-sm text-pink-500 tracking-wider mb-2">
          TapCard In Action
        </p>
        <h2 className="text-3xl font-light mb-4">
          Where <span className="text-cyan-400 font-medium font-mono">TapCard</span> Makes a Difference
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Whether it’s interviews, networking, or sharing your brand—TapCard is your go‑to identity tool.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {useCases.map((item, idx) => (
          <div
            key={idx}
            className="group w-full max-w-sm mx-auto bg-[#1a1a1a] border border-white/10 rounded-xl p-5 sm:p-6 backdrop-blur-md hover:border-white/20 hover:shadow-cyan-500/10 transition-all duration-300"
          >
            <div className="w-12 h-12 mb-4 rounded-full bg-white/10 flex items-center justify-center text-xl">
              {item.icon}
            </div>
            <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhereToUse;
