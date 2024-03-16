// HomePage.jsx
import React from "react";
import grantShipsLogo from "../assets/gsLogo.svg";
import warpcastIcon from '../assets/farcastericon.svg';
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import "../style/App.css";

function HomePage() {
  return (
    <>
      <div className="logo-container">
        <img src={grantShipsLogo} className="logo grantships" alt="Grant Ships logo" />
      </div>
      <h1>Grant Ships</h1>
      <p className="byline">A Meta-Framework for Pluralistic Grant Giving</p>

      {/* Social Media Icons */}
      <div className="social-media-icons">
        <a href="https://twitter.com/grantships" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} />
        </a>
        <a href="https://t.me/grantships" target="_blank" rel="noopener noreferrer">
          <FaTelegram size={30} />
        </a>
        <a href="https://discord.gg/vShYcxJEuY" target="_blank" rel="noopener noreferrer">
          <FaDiscord size={30} />
        </a>
        <a href="https://warpcast.com/~/channel/grant-ships" target="_blank" rel="noopener noreferrer">
          <img src={warpcastIcon} alt="Warpcast Icon" style={{width: 30, height: 30}} />
        </a>
      </div>

      {/* About Grant Ships Section */}
      <div className="about-section">
        <p>Grant Ships is a novel new approach to decide where funding goes in your Web3 community. Everyone gets to play a part, making choices together to support great projects. It's all about teamwork, clear choices, and making a big impact.</p>
      </div>

      <div className="card">
        {/* Existing Buttons */}
        <a href="https://rules.grantships.fun" target="_blank" rel="noopener noreferrer">
          <button className="rulesButton">Game Rules</button>
        </a>
        <a href="https://app.grantships.fun" target="_blank" rel="noopener noreferrer">
          <button className="appDemoButton">App Demo</button>
        </a>
        <a href="https://forms.grantships.fun" target="_blank" rel="noopener noreferrer">
          <button className="signUpButton">Sign Up</button>
        </a>
      </div>

      {/* Footer */}
      <div className="footer">
        <hr />
        <p>© 2023-Present</p>
        <a href="https://daomasons.com" target="_blank" rel="noopener noreferrer">DAO Masons</a> |
        <a href="https://paragraph.xyz/@daomasons" target="_blank" rel="noopener noreferrer">Blog</a> |
        <a href="https://calendly.com/daomasons/30min" target="_blank" rel="noopener noreferrer">Calendly</a> |
        <a href="https://github.com/DAOmasons" target="_blank" rel="noopener noreferrer">Github</a> |
        <a href="mailto:daomasons@gmail.com">Email</a> |
        <a href="https://twitter.com/daomasons" target="_blank" rel="noopener noreferrer">Twitter</a> |
        <a href="https://discord.gg/NDueS3juBN" target="_blank" rel="noopener noreferrer">Discord</a>
      </div>
    </>
  );
}

export default HomePage;
