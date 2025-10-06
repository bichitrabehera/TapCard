import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import Playstore from "./PlayStore";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-[#ffffff20]">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-20">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 flex-wrap">
          {/* Sitemap */}
          <nav className="flex flex-col sm:flex-row gap-12 w-full justify-between">
            {/* Resources */}
            <div>
              <h3 className="fontstylefooter text-xl md:text-2xl font-light mb-4 uppercase tracking-wide">
                Resources
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/"
                    className="hover:text-cyan-500 transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-cyan-500 transition-colors duration-200"
                  >
                    About the Team
                  </a>
                </li>
                <div className="mt-6">
                  <Playstore />
                </div>
              </ul>
            </div>

            {/* Contact */}
            <address className="not-italic">
              <h3 className="fontstylefooter text-xl md:text-2xl font-light mb-4 uppercase tracking-wide">
                Contact
              </h3>
              <p className="text-gray-400 hover:text-cyan-500 transition-colors duration-200">
                <a href="mailto:mysynapseapp@gmail.com">
                  mysynapseapp@gmail.com
                </a>
              </p>
            </address>

            {/* Social */}
            <section>
              <h3 className="fontstylefooter text-xl md:text-2xl font-light mb-5 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex space-x-6 text-2xl text-gray-400">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="hover:text-cyan-500 transition-transform duration-200 hover:scale-110"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="hover:text-cyan-500 transition-transform duration-200 hover:scale-110"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="hover:text-cyan-500 transition-transform duration-200 hover:scale-110"
                >
                  <FaXTwitter />
                </a>
              </div>
            </section>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-800 my-12"></div>

        {/* Brand Section */}
        <div className="flex flex-col items-center text-center">
          <h1 className="text-6xl sm:text-7xl md:text-[14vh] font-[Heading] text-cyan-500 font-extrabold tracking-tighter">
            Synapse
          </h1>
          <p className="text-gray-400 mt-3 text-sm md:text-base max-w-md">
            Connecting ideas, people, and possibilities.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-12">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} <span className="text-cyan-500 font-semibold">Synapse</span> | All rights reserved | Made with 🧡
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
