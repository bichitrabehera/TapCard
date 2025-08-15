import React from "react";

const ComingSoon = () => {
  return (
    <section className="bg-[#f1f1f1] text-black h-screen flex flex-col items-center justify-center px-6">
      {/* Logo / App Name */}
      <h1 className="text-4xl sm:text-5xl font-light mb-4">
        Something <span className="font-semibold text-cyan-500">Exciting</span>{" "}
        is Coming
      </h1>

      {/* Subtitle */}
      <p className="text-gray-500 text-lg sm:text-xl mb-8 text-center max-w-md">
        We’re working hard to bring you the future of digital networking. Stay
        tuned.
      </p>

      {/* Countdown Placeholder */}
      <div className="flex space-x-4 mb-10">
        <div className="text-center">
          <p className="text-3xl font-bold">00</p>
          <span className="text-gray-400 text-sm">Days</span>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">00</p>
          <span className="text-gray-400 text-sm">Hours</span>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">00</p>
          <span className="text-gray-400 text-sm">Minutes</span>
        </div>
      </div>

      <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2  transition-colors">
        <a href="/">Back To Home</a>
      </button>
    </section>
  );
};

export default ComingSoon;
