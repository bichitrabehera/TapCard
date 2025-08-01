import React from "react";
import qrImage from "../assets/TapCard website images/ab3.png";
import Button from "./PlayStore";

const Header = () => {
  return (
    <header className="relative w-full overflow-hidden min-h-screen text-white">
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-24 py-20 gap-10 max-w-[1200px] mx-auto">
        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h2 className="text-sm font-medium text-gray-400 tracking-widest uppercase">
            Digital Identity, Reimagined
          </h2>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-light leading-tight">
            Share Smarter <br /> Connect Faster
          </h1>

          <p className="text-[#a7a7a7] text-md max-w-md">
            From phone number to portfolio <br /> share it all with a single QR.
          </p>

          <div>
            <Button />
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={qrImage}
            alt="QR Code with phone"
            className="w-[200px] sm:w-[300px] p-6 sm:p-10 object-contain transition-transform duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
