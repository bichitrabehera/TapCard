import React from "react";
import step1 from "../assets/TapCard website images/img_android_compact.png";
import step2 from "../assets/TapCard website images/img_android_compact_454x204.png";
import step3 from "../assets/TapCard website images/img_android_compact_1.png";
import step4 from "../assets/TapCard website images/img_android_compact_2.png";

const HowToUse = () => {
  const steps = [
    {
      number: "1",
      title: "Create your account",
      description: "Sign up in just a few taps with your basic information",
      image: step1,
    },
    {
      number: "2",
      title: "Complete your profile",
      description: "Add your professional details and social links",
      image: step2,
    },
    {
      number: "3",
      title: "Get your personalized QR",
      description: "Generate your unique digital business card QR code",
      image: step3,
    },
    {
      number: "4",
      title: "Download & Share",
      description: "Save your card and share it with anyone, anywhere",
      image: step4,
    },
  ];

  return (
    <section className="bg-[#202020] text-white py-20 px-6 md:px-20 lg:py-28">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How To Use <span className="text-[#4fbbff]">TapCard</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Get started in just 4 simple steps to create your digital business
            card
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}

          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group relative z-10"
            >
              {/* Step Number with gradient background */}
              <div className="w-10 h-10 bg-gradient-to-br from-[#0e1f4e] to-[#00BFFF] text-white text-2xl font-bold rounded-full flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                {step.number}
              </div>

              {/* Step Image with hover effect */}
              <div className="mb-6 rounded-xl">
                <img
                  src={step.image}
                  alt={`Step ${step.number}`}
                  className="h-[180px] w-auto object-contain rounded-xl transform group-hover:-translate-y-2 transition-all duration-300"
                />
              </div>

              {/* Step Content */}
              <div className="px-4">
                <h2 className="text-xl md:text-2xl font-bold mb-3">
                  {step.title}
                </h2>
                <p className="text-gray-300 text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-[#4fbbff] to-[#8e54e9] text-white font-bold py-3 px-8 rounded-full text-lg hover:shadow-lg hover:shadow-[#4fbbff]/30 transition-all duration-300">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
