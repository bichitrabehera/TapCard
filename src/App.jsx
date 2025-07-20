import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import ComingSoon from "./Components/ComingSoon";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
