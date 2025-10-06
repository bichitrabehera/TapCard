/**
 * Animated hamburger button component for mobile navigation
 * Smooth, centered cross animation with Tailwind CSS
 */
import React from "react";

const HamburgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      className="relative flex flex-col justify-between w-8 h-8 focus:outline-none group"
      onClick={onClick}
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      {/* Top bar */}
      <span
        className={`absolute left-1/2 top-1/2 block w-5 h-0.5 bg-white rounded transform transition-transform duration-300 ease-in-out ${isOpen
            ? "rotate-45 -translate-x-1/2 -translate-y-1/2"
            : "-translate-x-1/2 -translate-y-[9px]"
          }`}
      ></span>

      {/* Middle bar */}
      <span
        className={`absolute left-1/2 top-1/2 block w-5 h-0.5 bg-white rounded transform transition-opacity duration-200 ease-in-out ${isOpen ? "opacity-0" : "opacity-100 -translate-x-1/2 -translate-y-1/2"
          }`}
      ></span>

      {/* Bottom bar */}
      <span
        className={`absolute left-1/2 top-1/2 block w-5 h-0.5 bg-white rounded transform transition-transform duration-300 ease-in-out ${isOpen
            ? "-rotate-45 -translate-x-1/2 -translate-y-1/2"
            : "-translate-x-1/2 translate-y-[9px]"
          }`}
      ></span>
    </button>
  );
};

export default HamburgerButton;
