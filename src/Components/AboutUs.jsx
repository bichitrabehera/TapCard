import React from "react";
import AboutUsImg from "../assets/TapCard website images/aboutus1.png";

const AboutUs = () => {
  return (
    <div className="bg-[#202020] text-white px-4 py-12">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-8">
        <h2 className="font-bold text-3xl underline">About Us</h2>
        <p className="text-lg text-gray-300">
          TapCard is your all-in-one digital identity solution.
        </p>

        <div className="w-full flex justify-center">
          <img
            src={AboutUsImg}
            alt="About TapCard"
            className="max-w-full h-auto object-contain rounded-md"
          />
        </div>

        <p className="text-base max-w-3xl text-gray-300 text-center md:text-left">
          Whether you're networking at an event, connecting with a friend, or
          sharing your social profiles, TapCard unifies all your
          links—professional and personal—into a single, convenient QR code.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
