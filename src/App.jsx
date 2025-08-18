import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import ComingSoon from "./Components/ComingSoon";
import About from "./pages/About";
import Contact from "./pages/Contact";
import UserProfile from "./pages/UserProfile"; // 👈 import profile page

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* 👇 dynamic user profile route */}
          <Route path="/u/:id" element={<UserProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
