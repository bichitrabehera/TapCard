import React from "react";
import AboutUsImg from "../assets/TapCard website images/ab1.png";

const AboutUs = () => {
  return (
    <section className="w-full bg-[#202020] px-6 md:px-[100px] py-30">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left - Image */}

        {/* Right - Text */}
        <div className="lg:w-1/2 space-y-6 text-white">
          <h2 className="text-4xl md:text-5xl font-bold">
            About{" "}
            <span className="bg-gradient-to-r from-[#00BFFF] to-[#0080FF] bg-clip-text text-transparent">
              TapCard
            </span>
          </h2>

          <p className="text-xl text-gray-200">
            Your digital identity, simplified.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            TapCard revolutionizes how you share your professional identity. We
            unify all your links—business profiles, social networks, and contact
            info—into one sleek QR code.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Whether networking at events or connecting online, TapCard empowers
            you to share smarter and leave a lasting impression.
          </p>

          <button className="mt-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] text-white font-semibold py-3 px-8 rounded-full hover:shadow-blue-400/40 hover:shadow-lg transition-all duration-300">
            Learn More
          </button>
        </div>

        
      </div>
    </section>
  );
};

export default AboutUs;
