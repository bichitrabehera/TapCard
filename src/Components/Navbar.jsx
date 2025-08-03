import React, { useState, useEffect } from "react";
import HamburgerButton from "./HamburgerButton";
import Button from "./PlayStore";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scroll down = hide
      } else {
        setShowNavbar(true); // scroll up = show
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } backdrop-blur-[40px] bg-black  text-white py-5 px-6 md:px-[100px] flex justify-between items-center`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2 text-4xl font-semibold">
          <span className="text-white">tapcard</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6 text-2smx">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/howitworks" className="hover:underline">
            How it works
          </a>
          <button className="">
            <a href="/comingsoon" className="hover:underline">
              <Button />
            </a>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <HamburgerButton isOpen={isOpen} toggle={() => setIsOpen(!isOpen)} />
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-[100px] text-white flex flex-col items-start px-6 pt-30 space-y-6 z-40">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="border-b border-gray-100 pb-2 w-full"
          >
            HOME
          </a>
          <a
            href="/howitworks"
            onClick={() => setIsOpen(false)}
            className="border-b border-gray-100 pb-2 w-full"
          >
            HOW IT WORKS
          </a>
          <a
            href="/comingsoon"
            onClick={() => setIsOpen(false)}
            className="border-b border-gray-100 pb-2 w-full"
          >
            DOWNLOAD
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
