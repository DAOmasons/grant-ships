// HomePage.jsx
import React from "react";
import grantShipsLogo from "../assets/gsLogo.svg";
import warpcastIcon from "../assets/farcastericon.svg";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import "../style/App.css";

function HomePage() {
  return (
    <>
      <h1 className="home-title">Grant Ships</h1>
      <div className="logo-container">
        <img src={grantShipsLogo} className="logo" alt="Grant Ships logo" />
      </div>

      <p className="byline">A Meta-Framework for Pluralistic Grant Giving</p>

      {/* About Grant Ships Section
      <div className="about-section">
        <p>
          Grant Ships is a novel new approach to decide where funding goes in
          your Web3 community. Everyone gets to play a part, making choices
          together to support great projects. It's all about teamwork, clear
          choices, and making a big impact.
        </p>
      </div> */}

      <div className="card">
        {/* Existing Buttons */}
        <a
          href="https://rules.grantships.fun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="banner-button">Game Rules</button>
        </a>
        <a
          href="https://app.grantships.fun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="banner-button">App Demo</button>
        </a>
        <a
          href="https://forms.grantships.fun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="banner-button">Sign Up</button>
        </a>
      </div>
      <hr />
      {/* Social Media Icons */}
      <div className="social-media-icons">
        <a
          href="https://twitter.com/grantships"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} />
        </a>
        <a
          href="https://t.me/grantships"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram size={30} />
        </a>
        <a
          href="https://discord.gg/vShYcxJEuY"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord size={30} />
        </a>
        <a
          href="https://warpcast.com/~/channel/grant-ships"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={warpcastIcon}
            alt="Warpcast Icon"
            style={{ width: 30, height: 30 }}
          />
        </a>
      </div>
      <p>© 2023-Present DAO Masons</p>
    </>
  );
}

export default HomePage;
