import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowItWorks />} />
      </Routes>
    </Router>
  );
};

export default App;
