import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* === Background Patches === */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
        {/* Patch 1 */}
        <div className="absolute top-[-200px] left-[-200px] w-[400px] h-[400px] bg-[#00e5ff] opacity-30 blur-[200px] rotate-[20deg]"></div>

        {/* Patch 2 */}
        <div className="absolute bottom-[100px] right-[-150px] w-[300px] h-[300px] bg-[#00ffff] opacity-10 blur-[200px] rotate-[35deg]"></div>

        {/* Patch 3 */}
        <div className="absolute top-[40%] left-[60%] w-[250px] h-[250px] bg-[#00d4ff] opacity-10 blur-[100px] rotate-[12deg]"></div>

        {/* Optional Extra Patch */}
        <div className="absolute top-[70%] left-[20%] w-[200px] h-[200px] bg-[#00ffe1] opacity-10 blur-[120px] rotate-[45deg]"></div>
      </div>

      {/* === Content === */}
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
