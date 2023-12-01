/* eslint-disable react/no-unknown-property */
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import grantShipsLogo from "./assets/rocketgrad3.svg";
import "./style/App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {/* Menu Section */}
            <div style={{ display: "flex", alignItems: "center" }}>
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
                <Link to="/AboutPage">About</Link>
              </li>
            </div>

            {/* Social Icons Section */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                paddingRight: "7em",
              }}
            >
              <li style={{ marginLeft: "10px" }}>
                <a
                  href="https://twitter.com/grantships"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li style={{ marginLeft: "10px" }}>
                <a
                  href="https://github.com/daomasons/grantships"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li style={{ marginLeft: "10px" }}>
                <a
                  href="https://discord.gg/xuWBRkrs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faDiscord} />
                </a>
              </li>
            </div>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>

        <footer
          style={{
            marginTop: "auto",
            padding: "1em",
            textAlign: "center",
          }}
        >
          <p>
            © 2023{" "}
            <a
              href="https://www.daomasons.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              DAO Masons
            </a>
            . All rights reserved.
          </p>
          {/* Add any additional footer content here */}
        </footer>
      </div>
    </Router>
  );
}

export default App;
