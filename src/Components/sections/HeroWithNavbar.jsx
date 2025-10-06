import RotatingText from "../common/RotatingText";
import Navbar from "../common/Navbar";

const HeroWithNavbar = () => {
  ;

  return (
    <div className="relative flex flex-col py-10 md:py-20 min-h-screen text-white overflow-hidden">
      <Navbar />
      {/* Hero Section */}
      <header className="flex-1 flex flex-col justify-center items-center text-center relative z-10 px-6">
        <h1 className="font-extrabold text-4xl md:text-8xl leading-tight">
          <div className="flex justify-center items-center">
            share
            <RotatingText
              texts={["socials", "moments", "story", "world"]}
              mainClassName="px-3 ml-2 text-cyan-600 rounded-full uppercase overflow-hidden"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <span className="block mt-2 text-white">with one scan</span>
        </h1>
        <p className="text-gray-300 text-base md:text-xl mt-4 max-w-xl">
          Create and customize your profile, generate a QR, and share instantly.
        </p>
        <div className="pt-20">
          <a href="/comingsoon" className="px-8 py-4 text-lg md:text-xl border-1 border-[#ffffff50]">Download</a>
        </div>
      </header>

    </div>
  );
};

export default HeroWithNavbar;
