import React from "react";
import Footer from "../common/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <main className="">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
