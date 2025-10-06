import React from "react";
import { Briefcase, University, Share2, Handshake } from "lucide-react";

const useCases = [
    {
        icon: <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Job Interviews",
        description: "Impress recruiters instantly with one scan of your professional profile.",
    },
    {
        icon: <University className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Campus Networking",
        description: "Connect with peers, professors, and clubs effortlessly.",
    },
    {
        icon: <Share2 className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Social Sharing",
        description: "Share all your social profiles in one tap — no app required.",
    },
    {
        icon: <Handshake className="w-6 h-6 sm:w-7 sm:h-7" />,
        title: "Client Meetings",
        description: "Exchange contact info professionally in seconds.",
    },
];

const WhereToUse = () => {
    return (
        <section className="relative max-w-screen-2xl mx-auto text-white bg-black py-20 px-6 sm:py-28">
            <div className="">
                {/* Heading */}
                <div className="text-left md:text-left mb-16 sm:mb-24">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                        where <span className="text-cyan-400 uppercase font-[Heading]">Synapse</span> makes a difference
                    </h2>
                    <p className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg max-w-lg leading-relaxed mx-auto md:mx-0">
                        Seamless connections for interviews, networking, social sharing, and client meetings — all in one tap.
                    </p>
                </div>

                {/* Use Cases Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
                    {useCases.map((item, index) => (
                        <div
                            key={index}
                            className="group relative border border-[#2a2a2a] bg-gradient-to-b from-[#0a0a0a] to-[#101010]
                         p-6 sm:p-8 md:p-10 hover:bg-[#0f0f0f] transition-all duration-300
                         hover:border-cyan-500/40 hover:-translate-y-2 "
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center mb-6 bg-[#111] border border-[#333] text-gray-300 group-hover:text-cyan-400 transition-colors rounded-md">
                                {item.icon}
                            </div>

                            {/* Text */}
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 tracking-wide uppercase group-hover:text-cyan-400 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                                {item.description}
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

export default WhereToUse;
