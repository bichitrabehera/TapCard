import React, { useState, useEffect } from "react";
import HamburgerButton from "./HamburgerButton";
import Button from "./PlayStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "How it Works", path: "/howitworks" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } backdrop-blur-xl bg-[#f1f1f1] border-b border-white/10 text-black`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center py-3">
          {/* Logo */}
          <h1 className="text-4xl font-extrabold">
            Synapse
          </h1>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="hover:text-[#60A5FA] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="ml-4">
              <Button />
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden z-50">
            <HamburgerButton
              isOpen={isOpen}
              toggle={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-start px-6 pt-24 space-y-6 z-40 text-lg">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="w-full border-b border-cyan-600 pb-2"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <Button />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
