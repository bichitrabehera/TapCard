// import React, { useState } from "react";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClose = () => setIsOpen(false);

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/0 text-white py-6 px-6 md:px-[100px] flex justify-between items-center z-50 border-b border-white/10">
//         {/* Logo */}
//         <div className="flex items-center space-x-2">
//           <span className="text-4xl font-extrabold">tapcard</span>
//         </div>

//         {/* Desktop Links */}
//         <div className="hidden md:flex items-center space-x-6 text-sm">
//           <a href="/" className="hover:underline">
//             Home
//           </a>
//           <a href="/howitworks" className="hover:underline">
//             How it works
//           </a>
//           <button className="bg-[#00BFFF] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200">
//             Download
//           </button>
//         </div>

//         {/* Mobile Hamburger */}
//         <div className="md:hidden z-50">
//           <button onClick={() => setIsOpen(!isOpen)}>
//             <svg
//               className="w-6 h-6 text-white"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </nav>

//       {/* Fullscreen Mobile Menu */}
//       {isOpen && (
//         <div className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 z-40">
//           <a
//             href="/"
//             onClick={handleClose}
//             className="text-white text-2xl hover:text-blue-300"
//           >
//             Home
//           </a>
//           <a
//             href="/howitworks"
//             onClick={handleClose}
//             className="text-white text-2xl hover:text-blue-300"
//           >
//             How it works
//           </a>
//           <button
//             onClick={handleClose}
//             className="bg-[#00BFFF] text-black px-6 py-2 rounded-full text-lg font-medium hover:bg-blue-400 transition"
//           >
//             Download
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5"; // clean icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black text-white py-6 px-6 md:px-[100px] flex justify-between items-center z-50 border-b border-white/10">
        {/* Logo */}
        <div className="flex items-center space-x-2 text-4xl font-extrabold">
          <span className="text-white">tapcard</span>
        </div>

        {/* Desktop Nav (hidden on mobile) */}
        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/howitworks" className="hover:underline">
            How it works
          </a>

          <button className="bg-[#00BFFF] text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-600">
            <a href="/comingsoon" className="hover:underline">
              Download
            </a>{" "}
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose size={28} /> : <div>
              <div className="bg-white p-[1px] w-10 mb-2"></div>
              <div className="bg-white p-[1px] w-5 mb-2"></div>
              <div className="bg-white p-[1px] w-10 mt-2"></div>
              </div>}
          </button>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black text-white flex flex-col items-start px-6 pt-30 space-y-6 z-40">
          <a
            href="/"
            onClick={() => setIsOpen(false)}
            className="border-b border-gray-100 pb-2 w-full"
          >
            HOME
          </a>
          <a
            href="/howitworks"
            onClick={() => setIsOpen(false)}
            className="border-b border-gray-100 pb-2 w-full"
          >
            HOW IT WORKS
          </a>
          <a
            href="/comingsoon"
            onClick={() => setIsOpen(false)}
            className="border-b border-gray-100 pb-2 w-full"
          >
            DOWNLOAD
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
