import { UserPlus, UserCog, QrCode, Share2, CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Create Your Account",
    description:
      "Sign up in seconds with your email or social login. No complex forms—just the essentials to get started.",
    icon: <UserPlus className="w-6 h-6" aria-hidden />,
    color: "text-pink-400",
  },
  {
    title: "Complete Your Profile",
    description:
      "Add your role, company, bio, and links. Pick a theme that matches your personal brand and style.",
    icon: <UserCog className="w-6 h-6" aria-hidden />,
    color: "text-amber-400",
  },
  {
    title: "Generate Your QR",
    description:
      "Instantly create a unique QR that points to your digital card—always up to date, no reprints required.",
    icon: <QrCode className="w-6 h-6" aria-hidden />,
    color: "text-emerald-400",
  },
  {
    title: "Download & Share",
    description:
      "Save your QR, add it to your email signature, print it, or share it directly—no app needed to view.",
    icon: <Share2 className="w-6 h-6" aria-hidden />,
    color: "text-blue-400",
  },
];

const benefits = [
  "Faster networking with a single scan",
  "Always-on, always-up-to-date profile",
  "Analytics to understand your reach",
];

const HowItWorksPage = () => {
  return (
    <main className="max-w-screen-2xl mx-auto bg-black px-6 text-white">
      {/* Header */}
      <header className=" mx-auto py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h1 className="text-4xl sm:text-5xl lowercase md:text-6xl lg:text-7xl font-extrabold tracking-tight  leading-[1.1]">
              How <span className="">It Works</span>
            </h1>
            <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl leading-relaxed">
              A fast, seamless way to create and share your digital presence — optimized for clarity, precision, and flow.
            </p>
          </div>
        </div>
      </header>

      {/* Steps Section */}
      <section className="bg-[#000000] max-w-screen-2xl mx-auto py-20 sm:px-12 border-t border-b border-[#1a1a1a]">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, i) => (
            <article
              key={i}
              className="relative border border-[#222] bg-[#0f0f0f] hover:bg-[#151515] transition-all duration-300 p-5 flex flex-col justify-between group rounded-none shadow-[0_0_30px_rgba(0,0,0,0.2)] hover:shadow-[0_0_40px_rgba(0,255,255,0.05)]"
            >
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-cyan-500/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="mb-6">
                <div className="w-14 h-14 border border-[#333] flex items-center justify-center mb-6">
                  <span className={`${step.color}`}>{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 tracking-tight">{step.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="text-xs text-gray-600 mt-8">Step {i + 1}</div>
            </article>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-screen-2xl mx-auto py-20">
        <div className="mx-auto text-left mb-16">
          <h2 className="text-4xl sm:text-5xl lowercase md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Why It Works
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg mx-auto">
            Synapse removes the noise so every connection feels <br /> effortless, professional, and memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl py-20 mx-auto">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="relative border border-[#1f1f1f] bg-[#0a0a0a] hover:bg-[#101010] transition-all duration-300 p-10 rounded-none text-left"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-cyan-600/60"></div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{b}</h3>
                  <p className="text-gray-400 text-sm">
                    {i === 0 && "Scan once, share everything — no typing or manual follow-ups."}
                    {i === 1 && "Update details anytime; your QR always points to the latest info."}
                    {i === 2 && "Anyone can view your card in any browser — no downloads needed."}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    </main>
  );
};

export default HowItWorksPage;
