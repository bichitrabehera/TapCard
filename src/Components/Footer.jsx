import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import Button from "./PlayStore";

const Footer = () => {
  return (
    <footer className="text-white bg-[#101010]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-12 py-15 lg:py-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Logo + CTA */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-4">
              <h1 className="text-4xl font-extrabold">Synapse</h1>
            </div>
            <Button />
          </div>

          {/* Sitemap */}
          <div className="flex space-x-30 flex-col md:flex-row">
            <div>
              <h3 className="text-lg font-semibold mb-3 mt-6">Resources</h3>
              <ul className="space-y-2 text-gray-400 ">
                <li><a className="hover:text-cyan-600" href="/">Home</a></li>
                <li><a className="hover:text-cyan-600" href="/howitworks">How It Works</a></li>
                <li><a className="hover:text-cyan-600" href="/about">About the Team</a></li>
                <li><a className="hover:text-cyan-600" href="/">Contact Us</a></li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div>
              <h3 className="text-lg font-semibold mb-3 mt-6">Email</h3>
              <p className="mb-5 text-gray-400">synapse@gmail.com</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 mt-6">Follow Us On</h3>
              <div className="flex space-x-5 text-2xl text-gray-400">
                <FaInstagram className="hover:text-gray-300 cursor-pointer" />
                <FaFacebook className="hover:text-gray-300 cursor-pointer" />
                <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="bg-gray-400 w-full h-[0.1px] mt-10"></div>
      </div>

      {/* White copyright strip */}
      <div className="bg-[#f1f1f1] w-full py-4">
        <p className="text-center text-black text-sm">
          © 2025 Synapse | All rights reserved | Made with 🧡
        </p>
      </div>
    </footer>
  );
};

export default Footer;
