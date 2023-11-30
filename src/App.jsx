// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import grantShipsLogo from "./assets/rocketgrad3.svg";
import "./style/App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <Link to="/">
                <img
                  src={grantShipsLogo}
                  className="logo grantships"
                  alt="Grant Ships logo"
                />
              </Link>
            </li>
            <li className="menuHeader">Grant Ships</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
