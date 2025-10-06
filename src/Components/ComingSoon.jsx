import React from "react";
import { useState, useEffect } from "react";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date("2025-12-15T00:00:00"); // Set target date

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#f1f1f1] text-black h-screen flex flex-col items-center justify-center px-6">
      {/* Logo / App Name */}
      <h1 className="text-4xl sm:text-5xl font-light mb-4 text-center">
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
          <p className="text-3xl font-bold">{timeLeft.days}</p>
          <span className="text-gray-400 text-sm">Days</span>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{timeLeft.hours}</p>
          <span className="text-gray-400 text-sm">Hours</span>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{timeLeft.minutes}</p>
          <span className="text-gray-400 text-sm">Minutes</span>
        </div>
        <div className="text-center">
          <p className="text-3xl font-bold">{timeLeft.seconds}</p>
          <span className="text-gray-400 text-sm">Seconds</span>
        </div>
      </div>

      <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2">
        <a href="/">Back To Home</a>
      </button>
    </section>
  );
};

export default ComingSoon;
