import React from "react";
import { UserPlus, UserCog, QrCode, Share2, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Create Your Account",
    description:
      "Sign up in seconds with your email or social login. No complex forms—just the essentials to get started.",
    icon: <UserPlus className="w-6 h-6" />,
    color: "text-pink-500",
  },
  {
    title: "Complete Your Profile",
    description:
      "Add your role, company, bio, and links. Pick a theme that matches your personal brand and style.",
    icon: <UserCog className="w-6 h-6" />,
    color: "text-amber-500",
  },
  {
    title: "Generate Your QR",
    description:
      "Instantly create a unique QR that points to your digital card—always up to date, no reprints required.",
    icon: <QrCode className="w-6 h-6" />,
    color: "text-emerald-500",
  },
  {
    title: "Download & Share",
    description:
      "Save your QR, add it to your email signature, print it, or share it directly—no app needed to view.",
    icon: <Share2 className="w-6 h-6" />,
    color: "text-blue-500",
  },
];

const benefits = [
  "Faster networking with a single scan",
  "Always-on, always-up-to-date profile",
  "Analytics to understand your reach",
];

const HowItWorksPage = () => {
  return (
    <main className="w-full">
      {/* Hero */}
      <section className="bg-black text-white items-center flex">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-28">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light leading-tight">
              Your Digital Identity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600">
                Step-by-Step
              </span>
            </h1>
            <p className="text-gray-400 text-lg sm:text-xl mt-6">
              From signup to sharing—see exactly how TapCard streamlines your
              networking in four simple steps.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Steps */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
              How It Works
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
              Four clear steps to create, customize, and share your digital
              presence.
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between">
            {/* Connector line on desktop */}
            {/* <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gray-200" /> */}

            {steps.map((step, i) => (
              <div
                key={i}
                className="relative z-10 mb-12 lg:mb-0 flex-1 px-0 lg:px-4"
              >
                <div className="w-16 h-16 border border-gray-200 flex items-center justify-center mb-6">
                  <span className={`${step.color}`}>{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-side: App mockup / video + text */}
      {/* <section className="bg-[#f7f7f7] text-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-24 grid lg:grid-cols-2 gap-12 items-center"> */}
          {/* Text block */}
          {/* <div>
            <h2 className="text-3xl sm:text-4xl font-light">
              See It In Action
            </h2>
            <p className="text-gray-700 mt-4 text-base sm:text-lg">
              Watch how quickly TapCard takes you from zero to shareable.
              Customize your profile, generate your QR, and start connecting—no
              friction, no fuss.
            </p>

            <ul className="mt-8 space-y-3">
              {[
                "Customize themes & layouts",
                "Add socials, portfolio, and contact info",
                "Instant QR generation",
                "Works across devices",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-800">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Media block (replace src with your demo video or screenshot) */}
          {/* <div className="w-full">
            {/* If you have a video URL, swap the placeholder below with an iframe/video element */}
            {/* <div className="relative aspect-[16/9] bg-white border border-gray-200 flex items-center justify-center">
              <div className="text-center px-6">
                <p className="text-sm text-gray-500">
                  App Preview / Video Placeholder
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Replace this box with an image, screenshot carousel, or an
                  iframe to a demo video.
                </p>
              </div>
            </div> */}
          {/* </div>  */}
        {/* // </div> */}
      {/* // </section> */}

      {/* Why It Works */}
      <section className="bg-[#f1f1f1] text-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20 sm:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
              Why It Works
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              TapCard removes friction from introductions and follow-ups so you
              focus on the connection—not the tools.
            </p>
          </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
            {benefits.map((b, i) => (
              <div key={i} className="bg-white border border-gray-200 p-8">
                <CheckCircle2 className="w-6 h-6 text-cyan-600 mb-4" />
                <h3 className="text-lg font-semibold">{b}</h3>
                <p className="text-gray-600 mt-2">
                  {i === 0 &&
                    "Scan once, share everything—no typing or manual follow-ups."}
                  {i === 1 &&
                    "Update details anytime; your QR always points to the latest info."}
                  {i === 2 &&
                    "Anyone can view your card in the browser—no downloads needed."}
                  {i === 3 &&
                    "See when and where scans happen to measure impact."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white text-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-24 sm:py-28 text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl mt-5">
            Create your digital card now and start sharing in minutes.
          </p>
          <a
            href="/comingsoon"
            className="inline-flex items-center justify-center mt-10 px-10 py-4 bg-cyan-600 hover:bg-blue-500 transition-colors duration-300 font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
};

export default HowItWorksPage;
