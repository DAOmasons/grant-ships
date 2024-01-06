// HomePage.jsx
import React from "react";
import grantShipsLogo from "../assets/gsLogo.svg";
import warpcastIcon from '../assets/farcastericon.svg';
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
import "../style/App.css";
import ParticlesBackground from "./ParticlesBackground";

function HomePage() {
  return (
    <>
      <ParticlesBackground />
      <div className="logo-container">
        <img src={grantShipsLogo} className="logo grantships" alt="Grant Ships logo" />
      </div>
      <h1>Grant Ships</h1>
      <p className="byline">Meta-Framework for Pluralistic Grant Giving</p>

      {/* Social Media Icons */}
      <div className="social-media-icons">
        <a href="https://twitter.com/grantships" target="_blank" rel="noopener noreferrer">
          <FaXTwitter size={30} />
        </a>
        <a href="https://t.me/grantships" target="_blank" rel="noopener noreferrer">
          <FaTelegram size={30} />
        </a>
        <a href="https://discord.gg/vShYcxJEuY" target="_blank" rel="noopener noreferrer">
          <FaDiscord size={30} />
        </a>
        <a href="https://warpcast.com/~/channel/grant-ships" target="_blank" rel="noopener noreferrer">
          <img src={warpcastIcon} alt="Warpcast" style={{ height: '30px', width: '30px' }} />
        </a>
      </div>

      <div className="card">
        {/* Existing Buttons */}
        <a href="https://rules.grantships.fun" target="_blank" rel="noopener noreferrer">
          <button className="rulesButton">Game Rules</button>
        </a>
        <a href="https://forms.grantships.fun" target="_blank" rel="noopener noreferrer">
          <button className="signUpButton">Sign Up</button>
        </a>
      </div>
      {/* Footer */}
      <div className="footer">
        <p>
          © 2023-Present
        </p>
        <p>
          <a href="https://daomasons.com" target="_blank" rel="noopener noreferrer">
          DAO Masons
          </a>
        </p>
      </div>
    </>
  );
}

export default HomePage;
