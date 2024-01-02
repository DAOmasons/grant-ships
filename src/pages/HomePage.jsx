// HomePage.jsx
import React from "react";
import grantShipsLogo from "../assets/rocketgrad3.svg";
import { FaTwitter as FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import "../style/App.css";

function HomePage() {
  return (
    <>
      <div>
        <img src={grantShipsLogo} className="logo grantships" alt="Grant Ships logo" />
      </div>
      <h1>Grant Ships</h1>
      <p className="byline">Framework for Pluralistic Grant Giving</p> {/* Byline added here */}

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

      {/* About Section */}
      <div className="about-section">
        <h2>About Grant Ships</h2>
        <p>Grant Ships is a "evolutionary" game within the Arbitrum ecosystem, transforming the way community funds are allocated through a blend of strategic gameplay and decentralized governance. </p>
        <p>The game features several key roles and primary mechanics: Delegated Arbitrum Voters who shape the game's direction, Game Facilitators overseeing fund distribution, Grantees responsible for project execution, and Grant Ship Operators managing fund stewardship and grant programs. The game mechanics involve proposal submissions, impact evaluations, community voting, and transparent fund allocation, all centered around the community's collective decision-making.</p>
        <p>Emphasizing decentralization, Grant Ships promotes democratic governance, transparency, and innovation, positioning itself as a pioneering model for community-driven funding.</p>
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
