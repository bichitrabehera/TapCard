import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-[#006994] text-white px-6 py-3 flex justify-between items-center">
      
      <div className="flex items-center space-x-2">
        <div className="bg-white text-black rounded-full w-10 h-10 flex items-center justify-center text-sm font-semibold">
          Logo
        </div>
        <span className="text-xl font-semibold">TapCard</span>
      </div>

      
      <div className="space-x-6 text-sm">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">How it works</a>
        <a href="#" className="hover:underline">Features</a>
        <a href="#" className="hover:underline">FAQ</a>
      </div>

     
      <div>
        <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
          Download App
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
