import React from "react";
import { FaQrcode, FaPalette, FaUserShield, FaMobile } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <div className=" bg-blue-300 mx-auto px-5 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose TapCard
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          The smarter way to share your professional identity
        </p>
      </div>

      {/* Main Features Grid */}
      <div className="grid md:grid-cols-2 gap-10 mb-16 max-w-5xl mx-auto items-center justify-center">
        {/* Feature 1 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
          <div className="flex items-center mb-4">
            <FaQrcode className="text-[#006995] text-2xl mr-4" />
            <h3 className="text-xl font-semibold">One QR for All Your Links</h3>
          </div>
          <p className="text-gray-700">
            Instagram, LinkedIn, Twitter, YouTube, Resume, WhatsApp—all
            accessible through a single scan. Simplify your connections without
            compromising your online presence.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
          <div className="flex items-center mb-4">
            <FaPalette className="text-[#006995] text-2xl mr-4" />
            <h3 className="text-xl font-semibold">Customizable & Stylish</h3>
          </div>
          <p className="text-gray-700">
            Choose how your profile looks with customizable themes and layouts.
            Match your personal brand and make every impression uniquely yours.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
          <div className="flex items-center mb-4">
            <FaMobile className="text-[#006995] text-2xl mr-4" />
            <h3 className="text-xl font-semibold">Always Accessible</h3>
          </div>
          <p className="text-gray-700">
            Your auto-generated QR code works anytime—even offline. No more
            "I'll send you my details later"—share everything instantly.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
          <div className="flex items-center mb-4">
            <FaUserShield className="text-[#006995] text-2xl mr-4" />
            <h3 className="text-xl font-semibold">Complete Control</h3>
          </div>
          <p className="text-gray-700">
            Show or hide any part of your profile with one tap. Share exactly
            what you want, when you want—your professional identity, your rules.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default WhyChooseUs;
