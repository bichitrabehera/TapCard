import React from "react";
import { UserPlus, UserCog, QrCode, Share2 } from "lucide-react";

const HowToUse = () => {
  const steps = [
    {
      title: "Create your account",
      description: "Sign up in just a few taps with your basic information",
      icon: <UserPlus className="w-5 h-5" />,
      color: "bg-pink-500",
      ring: "ring-pink-500/20"
    },
    {
      title: "Complete your profile",
      description: "Add your professional details and social links",
      icon: <UserCog className="w-5 h-5" />,
      color: "bg-amber-500",
      ring: "ring-amber-500/20"
    },
    {
      title: "Get your personalized QR",
      description: "Generate your unique digital business card QR code",
      icon: <QrCode className="w-5 h-5" />,
      color: "bg-emerald-500",
      ring: "ring-emerald-500/20"
    },
    {
      title: "Download & Share",
      description: "Save your card and share it with anyone, anywhere",
      icon: <Share2 className="w-5 h-5" />,
      color: "bg-blue-500",
      ring: "ring-blue-500/20"
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-40 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-medium text-gray-400 mb-4 tracking-widest">
            ELEGANT NETWORKING
          </h2>
          <h1 className="text-4xl font-bold text-white mb-4">
            Your Digital Presence, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Simplified</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Transform how you connect with professionally designed digital cards
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-gray-900 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl ${step.ring} hover:ring-2`}
            >
              {/* Icon */}
              <div className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center mb-6`}>
                <div className="text-white">
                  {step.icon}
                </div>
              </div>
              
              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="relative group inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium rounded-full">
            <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full"></span>
            <span className="relative w-full text-white bg-blue-500 p-4 rounded-2xl font-semibold flex items-center gap-2">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;