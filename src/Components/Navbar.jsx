import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#000000] text-white py-10 px-6 md:px-[100px] flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-3xl font-semibold">tapCard</span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-6 text-sm">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">How it works</a>
        <button className="bg-[#00BFFF] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
          Download
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[50px] left-0 w-full bg-[#ffffff] h-[100vh] px-6 py-4 flex flex-col space-y-4 text-sm md:hidden z-50">
          <a href="#" className="hover:underline text-black">Home</a>
          <a href="#" className="hover:underline text-black">How it works</a>
          <a href="#" className="hover:underline">Features</a>
          <a href="#" className="hover:underline">FAQ</a>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
            Download
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
