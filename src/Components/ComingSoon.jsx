import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-6 text-center">
      {/* Main content */}
      <div className="max-w-md mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Coming <span className="text-blue-400">Soon</span>
        </h1>

        <p className="text-xl text-gray-300 mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>

        <div className="bg-white/5 p-8 rounded-xl border border-gray-900">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-cyan-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          <p className="text-gray-400 mb-4">Launching in December 2025</p>
          <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg transition-colors">
            <a href="/">Back To Home</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
