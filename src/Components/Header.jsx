import React from 'react';
import qrImage from '../assets/TapCard website images/qr1.png'; 

const Header = () => {
  return (
    <header className="bg-[#cceeff] py-16 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
      
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#002B45]">
          Share Smarter <br /> Connect Faster
        </h1>
        <p className="text-gray-700 text-lg">
          From phone number to portfolio—share it all with a single QR.
        </p>
        <button className="bg-[#002B45] text-white px-6 py-3 rounded-full hover:bg-[#004c70] transition">
          Download App
        </button>
      </div>

      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <img
          src={qrImage}
          alt="QR Code with phone"
          className="max-w-xs w-full"
        />
      </div>
    </header>
  );
};

export default Header;
