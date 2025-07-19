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
    icon: <FaBriefcase />,
    title: "Job Interviews",
    description: "Impress recruiters with one tap to your full profile.",
  },
  {
    icon: <FaUniversity />,
    title: "Campus Networking",
    description: "Quickly connect with peers, professors, and recruiters.",
  },
  {
    icon: <FaPaintBrush />,
    title: "Creator Portfolio",
    description: "Showcase your work beautifully in one elegant link.",
  },
  {
    icon: <FaShareAlt />,
    title: "Social Sharing",
    description: "Share all your platforms instantly with new contacts.",
  },
  {
    icon: <FaHandshake />,
    title: "Client Meetings",
    description: "Professionally exchange contact details on the go.",
  },
];

const WhereToUse = () => (
  <section className="bg-gradient-to-b from-black to-gray-950 text-white px-6 py-24">
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="uppercase text-sm text-pink-500 tracking-wider mb-2">
          TapCard In Action
        </p>
        <h2 className="text-3xl font-bold mb-4">
          Where <span className="text-cyan-400">TapCard</span> Makes a
          Difference
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto">
          Whether it’s interviews, networking, or sharing your brand—TapCard is
          your go‑to identity tool.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {useCases.map((item, idx) => (
          <div
            key={idx}
            className="group w-full max-w-sm mx-auto sm:mx-0 bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 backdrop-blur-md hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-12 h-12 mb-4 rounded-full bg-cyan-600/20 text-cyan-400 flex items-center justify-center text-xl">
              {item.icon}
            </div>
            <h3 className="text-base sm:text-lg font-medium text-white mb-1">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              {item.description}
            </p>
{/* 
            <button className="mt-4 opacity-0 group-hover:opacity-100 text-cyan-400 text-sm font-medium transition-opacity">
              Learn more →
            </button> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhereToUse;
