import React from "react";
import {
  FaBriefcase,
  FaUserGraduate,
  FaPalette,
  FaShareAlt,
  FaHandshake,
} from "react-icons/fa";

const WhereToUse = () => {
  const useCases = [
    {
      icon: <FaBriefcase className="text-blue-600 text-3xl" />,
      title: "Job Interviews",
      description:
        "Make a lasting impression by sharing your complete profile with just one scan",
    },
    {
      icon: <FaUserGraduate className="text-blue-600 text-3xl" />,
      title: "Campus Networking",
      description:
        "Connect with peers, professors, and recruiters effortlessly",
    },
    {
      icon: <FaPalette className="text-blue-600 text-3xl" />,
      title: "Creator Portfolio",
      description: "Showcase your work and social presence in one elegant link",
    },
    {
      icon: <FaShareAlt className="text-blue-600 text-3xl" />,
      title: "Instant Social Sharing",
      description:
        "Share all your social profiles simultaneously with new connections",
    },
    {
      icon: <FaHandshake className="text-blue-600 text-3xl" />,
      title: "Client Meetings",
      description:
        "Exchange professional details seamlessly during business interactions",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Where To Use <span className="text-blue-600">TapCard</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your digital identity solution for every professional scenario
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
        {useCases.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex flex-col items-center text-center"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhereToUse;
