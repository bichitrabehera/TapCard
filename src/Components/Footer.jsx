import React from 'react';
import { FaInstagram, FaFacebook, FaTimes } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#006994] text-white px-8 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        <div className="flex flex-col items-start">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-white text-black w-12 h-12 flex items-center justify-center rounded-full font-semibold">
              Logo
            </div>
            <h2 className="text-2xl font-bold">TAPCARD</h2>
          </div>
          <p className="text-white font-semibold">Create Your TapCard</p>
          <p className="text-gray-200 mb-4">Download the App now</p>
          <button className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 transition">
            Download App
          </button>
        </div>

        <div>
          <h3 className="text-lg font-semibold underline mb-3">SiteMap</h3>
          <ul className="space-y-2 text-gray-200">
            <li>About Us</li>
            <li>Why Choose Us</li>
            <li>How To Use</li>
            <li>Where To Use</li>
            <li>Testimonials</li>
            <li>FAQ’s</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold underline mb-3">Email</h3>
          <p className="mb-5 text-gray-200">tapcard@gmail.com</p>

          <h3 className="text-lg font-semibold underline mb-3">Follow Us On</h3>
          <div className="flex space-x-5 text-2xl">
            <FaInstagram className="hover:text-gray-300 cursor-pointer" />
            <FaFacebook className="hover:text-gray-300 cursor-pointer" />
            <FaTimes className="hover:text-gray-300 cursor-pointer" /> 
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
