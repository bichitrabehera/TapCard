import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-10">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
