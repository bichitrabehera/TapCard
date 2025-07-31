import React from "react";
import { UserPlus, UserCog, QrCode, Share2 } from "lucide-react";

const HowToUse = () => {
  const steps = [
    {
      title: "Create your account",
      description: "Sign up in just a few taps with your basic information",
      icon: <UserPlus className="w-5 h-5" />,
      color: "bg-pink-500",
      ring: "ring-pink-500/20",
    },
    {
      title: "Complete your profile",
      description: "Add your professional details and social links",
      icon: <UserCog className="w-5 h-5" />,
      color: "bg-amber-500",
      ring: "ring-amber-500/20",
    },
    {
      title: "Get your personalized QR",
      description: "Generate your unique digital business card QR code",
      icon: <QrCode className="w-5 h-5" />,
      color: "bg-emerald-500",
      ring: "ring-emerald-500/20",
    },
    {
      title: "Download & Share",
      description: "Save your card and share it with anyone, anywhere",
      icon: <Share2 className="w-5 h-5" />,
      color: "bg-blue-500",
      ring: "ring-blue-500/20",
    },
  ];

  return (
    <section className="py-16 mt-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-sm font-medium text-gray-400 mb-4 tracking-widest">
            ELEGANT NETWORKING
          </h2>
          <h1 className="text-4xl font-light text-white mb-4">
            Your Digital Presence,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Simplified
            </span>
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
              className={`p-6 rounded-xl bg-[#1f1f1f] border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl ${step.ring} hover:ring-2`}
            >
              {/* Icon */}
              <div
                className={`w-10 h-10 ${step.color} rounded-lg flex items-center justify-center mb-6`}
              >
                <div className="text-white">{step.icon}</div>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-light text-white mb-2">
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
          <button className="relative group inline-flex bg-cyan-600 hover:bg-blue-400 items-center justify-center px-8 py-3.5 overflow-hidden font-medium rounded-xl">
            <a href="/comingsoon">
              {" "}
              <p className="font-semibold"> Get Started</p>{" "}
            </a>{" "}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
