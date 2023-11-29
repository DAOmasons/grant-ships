import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import grantShipsLogo from "./assets/rocket.png";
import "./style/App.css";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul list-style:none>
            <li>
              <Link to="/">
                <img
                  src={grantShipsLogo}
                  className="logo grantships"
                  alt="Grant Ships logo"
                />
              </Link>
            </li>
            <li class="menuHeader">Grant Ships</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
