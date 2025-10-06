import React from "react";
import HeroSection from "../components/sections/HeroSection";
import KeyFeatures from "../components/KeyFeatures";
import HowItWorks from "../components/sections/HowItWorks";
import WhereToUse from "../Components/WhereToUse"
import HeroWithNavbar from "../components/sections/HeroSection";


const Home = () => {
  return (
    <div className="bg-black text-white">
      <HeroWithNavbar />
      <KeyFeatures />
      <HowItWorks />
      <WhereToUse />
    </div>
  );
};

export default Home;

{/* CTA */ }
<section className="border-t border-[#111] py-20 px-6 sm:px-12">
  <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 bg-[#0e0e0e] border border-[#1b1b1b] p-10">
    <div>
      <h3 className="text-2xl font-semibold mb-2 tracking-tight">Ready to join Synapse?</h3>
      <p className="text-gray-400 text-sm sm:text-base">
        Start creating your profile and share your first QR in under a minute.
      </p>
    </div>

    <div className="flex gap-4">
      <a
        href="/signup"
        className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-none transition"
      >
        Get Started
      </a>
      <a
        href="/learn"
        className="px-6 py-3 border border-[#333] text-gray-300 hover:text-white hover:border-cyan-600 transition rounded-none"
      >
        Learn More
      </a>
    </div>
  </div>
</section>
