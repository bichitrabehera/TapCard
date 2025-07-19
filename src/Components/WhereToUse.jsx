import React from "react";

const WhereToUse = () => {
  const useCases = [
    {
      title: "Job Interviews",
      description: "Make a lasting impression by sharing your complete profile with just one scan",
    },
    {
      title: "Campus Networking",
      description: "Connect with peers, professors, and recruiters effortlessly",
    },
    {
      title: "Creator Portfolio",
      description: "Showcase your work and social presence in one elegant link",
    },
    {
      title: "Instant Social Sharing",
      description: "Share all your social profiles simultaneously with new connections",
    },
    {
      title: "Client Meetings",
      description: "Exchange professional details seamlessly during business interactions",
    },
  ];

  return (
    <div className="bg-[#1b1b1b] text-white px-5 py-30 md:py-28">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Where To Use <span className="text-[#00BFFF]">TapCard</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Your digital identity solution for every professional scenario
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {useCases.map((item, index) => (
            <div
              key={index}
              className="group relative bg-[#112240] rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-transparent hover:border-[#00BFFF]"
            >
              {/* Number indicator */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-[#00BFFF] rounded-full flex items-center justify-center text-white font-bold text-lg">
                {index + 1}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-[#CCD6F6]">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
              
              {/* Hover effect line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <button className="bg-gradient-to-r from-[#00BFFF] to-[#0080FF] text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:brightness-110">
            Start Using TapCard Today
          </button>
          <p className="text-gray-400 mt-4">Join professionals worldwide who trust TapCard</p>
        </div>
      </div>
    </div>
  );
};

export default WhereToUse;