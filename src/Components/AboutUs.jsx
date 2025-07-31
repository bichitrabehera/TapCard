import React from "react";
import AboutUsImg from "../assets/TapCard website images/about.jpg";

const AboutUs = () => {
  return (
    <section className="relative w-full  px-6 md:px-20 py-24 overflow-hidden">
      {/* Content */}
      <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto">
        {/* Left - Text */}
        <div className="lg:w-1/2 text-white space-y-6 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-light leading-tight">
            Your digital identity,{" "}
            <span className="bg-[#00BFFF] font-medium bg-clip-text text-transparent">
              simplified.
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            TapCard revolutionizes how you share your professional identity. We unify all your links—business profiles, social networks, and contact info—into one sleek QR code.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            Whether networking at events or connecting online, TapCard empowers you to share smarter and leave a lasting impression.
          </p>

          <button className="mt-4 bg-gradient-to-r from-[#00BFFF] to-[#0080FF] text-white font-medium py-3 px-8 rounded-xl shadow-md hover:shadow-blue-400/40 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Right - Image */}
        <div className="lg:w-1/2 justify-end flex">
          <img
            src={AboutUsImg}
            alt="About TapCard"
            className="h-[290px] rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
