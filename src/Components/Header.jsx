import React from "react";
import qrImage from "../assets/TapCard website images/ab2.png";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-black via-gray-950 to-black w-full ">
      <div className="w-full px-6 md:px-[100px] py-30 h-[100vh] flex flex-col-reverse md:flex-row items-center md:items-center justify-between gap-10">
        {/* Text Content on full left */}
        <div className="w-full md:w-1/2 md:text-left text-center space-y-6">
          <h2 className="text-sm font-medium text-gray-400 mb-4 tracking-widest uppercase">
            Digital Identity, Reimagined{" "}
          </h2>
          <h1 className="text-5xl sm:text-7xl font-light text-white leading-tight">
            Share Smarter <br /> Connect Faster
          </h1>
          <p className="text-[#a7a7a7] text-lg">
            From phone number to portfolio—share it all with a single QR.
          </p>
          <button className="bg-[#00608d] text-white px-6 py-4 rounded-2xl hover:bg-[#004c70] transition">
            <a href="/comingsoon"> Create Your TapCard</a>{" "}
          </button>
        </div>

        {/* QR image on full right */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={qrImage}
            alt="QR Code with phone"
            className="w-[200px] sm:w-[400px] md:w-[300px] mt-10 p-10 object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
