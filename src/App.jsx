import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from 'lenis';
import Layout from "./Components/layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import ComingSoon from "./Components/ComingSoon";

const App = () => {
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
