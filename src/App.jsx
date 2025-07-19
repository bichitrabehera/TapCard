import React from "react";
import AboutUs from "./Components/AboutUs";
import WhyChooseUs from "./Components/WhyUs";
import WhereToUse from "./Components/WhereToUse";
import Navbar from "./Components/navbar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <WhyChooseUs />
      <WhereToUse />
      <Footer />
    </>
  );
};

export default App;
