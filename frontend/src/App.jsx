import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import PrivateCmp from "./components/PrivateCmp";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Services from "./components/Services";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route element={<PrivateCmp />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="service" element={<Services />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="signup" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
