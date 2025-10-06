import React, { useState } from "react";
import HamburgerButton from "./HamburgerButton";
import Button from "./PlayStore";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  return (
    <>
      <nav
        className={`w-full z-50 transition-all max-w-screen-2xl bg-black mx-auto duration-300`}
      >
        <div className="mx-auto px-6 flex justify-between items-center">
          <h1 className="text-4xl md:text-6xl font-[Heading] font-extrabold">
            Synapse
          </h1>

          <div className="hidden md:flex items-center space-x-6 border py-6 px-12 border-[#ffffff5b] text-lg font-bold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className="transition-colors hover:underline"
              >
                {link.name}
              </a>
            ))}
            {/* <Button /> */}
          </div>

          <div className="md:hidden border p-2 border-[#ffffff60]">
            <HamburgerButton
              isOpen={isOpen}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black text-white flex flex-col items-center justify-center transform transition-transform duration-500 ease-in-out z-40 ${isOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.path}
            className="text-2xl font-medium hover:text-[#60A5FA] mb-6"
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <Button />
      </div>
    </>
  );
};

export default Navbar;
