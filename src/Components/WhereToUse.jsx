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
        icon: <FaBriefcase className="text-yellow-500" />,
        title: "Job Interviews",
        description: "Impress recruiters with one tap to your full profile.",
    },
    {
        icon: <FaUniversity className="text-blue-500" />,
        title: "Campus Networking",
        description: "Quickly connect with peers, professors, and recruiters.",
    },
    {
        icon: <FaShareAlt className="text-green-500" />,
        title: "Social Sharing",
        description: "Share all your platforms instantly with new contacts.",
    },
    {
        icon: <FaHandshake className="text-purple-500" />,
        title: "Client Meetings",
        description: "Professionally exchange contact details on the go.",
    },
];

const WhereToUse = () => (
    <section className="w-full text-black px-6 py-30 bg-[#f1f1f1]">
        <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-20">
                <p className="uppercase text-lg text-cyan-600 tracking-wider">
                    Synapse In Action
                </p>
                <h2 className="text-4xl md:text-5xl font-light m-8">
                    Where{" "}
                    <span className="text-cyan-600 font-medium">
                        Synapse
                    </span>{" "}
                    Makes a Difference
                </h2>
                <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                    Whether it’s interviews, networking, or sharing your brand—TapCard is your go-to identity tool.
                </p>
            </div>

            {/* Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {useCases.map((item, idx) => (
                    <div
                        key={idx}
                        className="group w-full max-w-sm mx-auto bg-white border border-gray-200 rounded p-5 sm:p-6 hover:border-black hover:shadow-lg transition-all duration-300"
                    >
                        <div className="w-12 h-12 mb-4 rounded-full bg-gray-100 flex items-center justify-center text-xl">
                            {item.icon}
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                            {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default WhereToUse;
