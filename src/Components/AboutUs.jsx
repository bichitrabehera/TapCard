import React from "react";

const AboutUs = () => {
  return (
    <section className=" text-white px-6 md:px-20 py-32">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-light leading-tight tracking-tight">
          Your digital identity,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00BFFF] to-[#0080FF] font-medium">
            simplified.
          </span>
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed">
          TapCard revolutionizes how you share your professional identity. We
          unify all your links—business profiles, social networks, and contact
          info—into one sleek QR code.
        </p>

        <p className="text-gray-400 text-lg leading-relaxed">
          Whether networking at events or connecting online, TapCard empowers
          you to share smarter and leave a lasting impression.
        </p>

        <button className="mt-6 bg-[#0080FF] text-white font-semibold py-3 px-8 rounded-xl ">
          <a href="/comingsoon"> Learn More</a>
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
