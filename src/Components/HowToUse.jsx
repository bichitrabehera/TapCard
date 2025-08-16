import React from "react";
import { UserPlus, UserCog, QrCode } from "lucide-react";

const HowItWorksPreview = () => {
  const steps = [
    {
      title: "Create Your Account",
      description: "Sign up in seconds.",
      icon: <UserPlus className="w-5 h-5" />,
      color: "bg-pink-500",
    },
    {
      title: "Complete Your Profile",
      description: "Add your details.",
      icon: <UserCog className="w-5 h-5" />,
      color: "bg-amber-500",
    },
    {
      title: "Generate Your QR",
      description: "Get your digital card.",
      icon: <QrCode className="w-5 h-5" />,
      color: "bg-emerald-500",
    },
  ];

  return (
    <section className="bg-[#101010] text-white py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-medium text-gray-400 mb-2 tracking-widest">
            HOW IT WORKS
          </h2>
          <h1 className="text-3xl sm:text-4xl font-light mb-3 p-5">
            Just 3 Simple Steps
          </h1>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center m-10">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center bg-black py-10">
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${step.color} mb-4`}
              >
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Learn More */}
        <div className="text-center mt-12">
          <a
            href="/howitworks"
            className="inline-flex items-center justify-center px-6 py-3 rounded bg-cyan-600 hover:bg-blue-500 transition-colors duration-300 font-medium text-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksPreview;
