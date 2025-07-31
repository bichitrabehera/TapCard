import React from "react";
import qrImage from "../assets/TapCard website images/ab2.png";

const Header = () => {
  return (
    <header className="relative w-full min-h-screen overflow-hidden">
      {/* Content Block */}
      <div className="relative z-10 w-full px-6 md:px-[100px] py-30 h-[100vh] flex flex-col-reverse md:flex-row items-center justify-center gap-10 ">
        {/* Text Content */}
        <div className="w-full md:w-1/2 text-left space-y-6">
          <h2 className="text-sm font-medium text-gray-400 mb-4 tracking-widest uppercase">
            Digital Identity, Reimagined
          </h2>
          <h1 className="text-5xl sm:text-7xl font-light text-white leading-tight">
            Share Smarter <br /> Connect Faster
          </h1>
          <p className="text-[#a7a7a7] text-lg">
            From phone number to portfolio—share it all with a single QR.
          </p>
          <button className="bg-white text-black px-3 py-2 rounded-full transition flex items-center gap-2 hover:bg-gray-200">
            <svg
              className="w-10 h-10 py-2 px-2 bg-black rounded-full text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 4v12"
              />
            </svg>
            <a href="/comingsoon">Get TapCard</a>
          </button>
        </div>

        {/* QR Image */}
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
