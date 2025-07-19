import React from "react";
import qrImage from "../assets/TapCard website images/hero.png";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="w-full px-6 md:px-[100px] py-10 h-[80vh] flex flex-col md:flex-row items-center md:items-center justify-between gap-10">
        
        {/* Text Content on full left */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Share Smarter <br /> Connect Faster
          </h1>
          <p className="text-[#a7a7a7] text-lg">
            From phone number to portfolio—share it all with a single QR.
          </p>
          <button className="bg-[#00608d] text-white px-6 py-3 rounded-full hover:bg-[#004c70] transition">
            Download App
          </button>
        </div>

        {/* QR image on full right */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={qrImage}
            alt="QR Code with phone"
            className="w-[250px] sm:w-[300px] md:w-[350px] object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
