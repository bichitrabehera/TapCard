import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {" "}
        {/* Adjust padding as needed */}
        {children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;
