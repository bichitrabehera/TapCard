import React from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black md:px-[100px] text-white px-8 py-20">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Logo + CTA */}
        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-3 mb-4">
            <h2 className="text-2xl font-bold">tapcard</h2>
          </div>
          <p className="font-semibold">Create Your TapCard</p>
          <p className="text-gray-400 mb-4">Download the App now</p>
          <button className="bg-white text-black px-5 py-2 rounded-full hover:bg-gray-200 transition">
            Download
          </button>
          <p className="text-gray-400 mt-10">
            © 2025 tapcard | All rights reserved | Made with 🧡
          </p>
        </div>

        {/* Sitemap */}
        <div className="flex space-x-30 flex-col md:flex-row">
          <div>
            <h3 className="text-lg font-semibold mb-3 mt-6">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Why Choose Us</li>
              <li>How To Use</li>
              <li>Where To Use</li>
              <li>Testimonials</li>
              <li>FAQ’s</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-3 mt-6">Email</h3>
            <p className="mb-5 text-gray-400">tapcard@gmail.com</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 mt-6">Follow Us On</h3>
            <div className="flex space-x-5 text-2xl">
              <FaInstagram className="hover:text-gray-300 cursor-pointer" />
              <FaFacebook className="hover:text-gray-300 cursor-pointer" />
              <FaXTwitter className="hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
