import React from "react";
import qrImage from "../assets/TapCard website images/ab3.png";
import Button from "./PlayStore";

const Header = () => {
  return (
    <header className="bg-[#101010] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-12 py-15 lg:py-20 flex flex-col-reverse lg:flex-row items-center justify-between">
        {/* Text */}
        <div className="w-full flex-1 lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="font-extrabold tracking-tight leading-tight text-3xl sm:text-6xl md:text-6xl">
            Share Everything
            <br />
            <span className="text-cyan-600">with One Scan</span>
          </h1>
          <p className="text-gray-300 max-w-md mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed">
            Create and customize your profile, generate a QR, and share
            instantly.
          </p>
          <div className="flex justify-center lg:justify-start mt-8">
            <Button />
          </div>
        </div>

        {/* Image */}
        <div className="flex-1 flex justify-center lg:justify-end m-5 lg:mb-0">
          <div className="w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] xl:w-[240px] 2xl:w-[300px]">
            <img
              src={qrImage}
              alt="QR code phone"
              className="w-full h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
