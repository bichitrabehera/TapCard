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
    <section className="bg-[#101010] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-white mb-3">
            How To Use <span className="text-cyan-400">TapCard</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Get started in just 4 simple steps using the app
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-10 rounded-2xl hover:shadow-cyan-500/10 transition-shadow"
            >
              {/* Image */}
              <div className="md:w-1/3 flex justify-center">
                <img
                  src={step.image}
                  alt={`Step ${step.number}`}
                  className="h-48 object-contain rounded-lg shadow-md"
                />
              </div>

              {/* Content */}
              <div className="md:w-2/3 flex flex-col justify-center text-center md:text-left">
                <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide mb-2">
                  Step {step.number}
                </h2>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold py-3 px-10 rounded-full hover:scale-105 transition-transform duration-200">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
