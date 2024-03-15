// HomePage.jsx
import React from "react";
import grantShipsLogo from "../assets/gsLogo.svg";
import warpcastIcon from '../assets/farcastericon.svg';
import { FaXTwitter, FaTelegram, FaDiscord } from "react-icons/fa6";
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
          <FaXTwitter size={30} />
        </a>
        <a href="https://t.me/grantships" target="_blank" rel="noopener noreferrer">
          <FaTelegram size={30} />
        </a>
        <a href="https://discord.gg/vShYcxJEuY" target="_blank" rel="noopener noreferrer">
          <FaDiscord size={30} />
        </a>
        <a href="https://warpcast.com/~/channel/grant-ships" target="_blank" rel="noopener noreferrer">
          <svg width="30" height="30" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M257.778 155.556H742.222V844.445H671.111V528.889H670.414C662.554 441.677 589.258 373.333 500 373.333C410.742 373.333 337.446 441.677 329.586 528.889H328.889V844.445H257.778V155.556Z" fill="currentColor"/>
          <path d="M128.889 253.333L157.778 351.111H182.222V746.667C169.949 746.667 160 756.616 160 768.889V795.556H155.556C143.283 795.556 133.333 805.505 133.333 817.778V844.445H382.222V817.778C382.222 805.505 372.273 795.556 360 795.556H355.556V768.889C355.556 756.616 345.606 746.667 333.333 746.667H306.667V253.333H128.889Z" fill="currentColor"/>
          <path d="M675.556 746.667C663.282 746.667 653.333 756.616 653.333 768.889V795.556H648.889C636.616 795.556 626.667 805.505 626.667 817.778V844.445H875.556V817.778C875.556 805.505 865.606 795.556 853.333 795.556H848.889V768.889C848.889 756.616 838.94 746.667 826.667 746.667V351.111H851.111L880 253.333H702.222V746.667H675.556Z" fill="currentColor"/>
        </svg>
      </a>
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
        <p>
          <a href="https://daomasons.com" target="_blank" rel="noopener noreferrer">
          DAO Masons
          </a>
        </p>
        {/* Additional Links */}
        <a href="https://paragraph.xyz/@daomasons" target="_blank" rel="noopener noreferrer">Blog</a> |
        <a href="https://calendly.com/daomasons/30min" target="_blank" rel="noopener noreferrer">Calendly</a> |
        <a href="https://github.com/DAOmasons" target="_blank" rel="noopener noreferrer">Github</a> |
        <a href="mailto:daomasons@gmail.com">Email</a>
      </div>
    </>
  );
}
export default HomePage;
