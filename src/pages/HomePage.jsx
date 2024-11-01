import React from "react";
import grantShipsLogo from "../assets/gsLogo.svg";
import warpcastIcon from "../assets/farcastericon.svg";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import { Typography, Grid, Container } from "@mui/material";
import alloLogo from "../assets/allowht.png";
import envioLogo from "../assets/enviowht.png";
import hatsLogo from "../assets/hatswht.png";
import ipfsLogo from "../assets/ipfswht.png";
import pinataLogo from "../assets/pinatawht.png";
import graphLogo from "../assets/thegraphwht.png";
import { TbRocketOff } from "react-icons/tb";
import "../style/App.css";

const announcements = [
  "Round 2 is complete! 90K ARB distributed.",
  "Community vote opening soon, stay tuned.",
  "Pilot retrospective linked below!",
];

const Ticker = ({ messages }) => {
  return (
    <div className="ticker-container">
      <div className="ticker-wrap">
        <div className="ticker">
          {messages.map((message, index) => (
            <div className="ticker-item" key={index}>
              {message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function HomePage() {
  return (
    <>
      <Ticker messages={announcements} />

      <p className="home-title">Grant Ships</p>
      <p className="byline">The Competitive Grants Platform</p>
      <div className="logo-container">
        <img src={grantShipsLogo} className="logo" alt="Grant Ships logo" />
      </div>

      {/* About Grant Ships Section */}
      <p className="about-section">
        <strong>HOW IT WORKS:</strong> <br />
        <br />
        <strong>1.</strong> Fund your Grant Ships and watch them compete.
        <br />
        <br />
        <strong>2.</strong> DAO vote to signal which Ships get more funding.
        <br />
        <br />
        <strong>3.</strong> Repeat and watch your Ships evolve!
      </p>

      <div className="card-container">
        <a
          href="https://rules.grantships.fun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="banner-button">Game Rules</button>
        </a>

        <a href="/pilotretro.pdf" target="_blank" rel="noopener noreferrer">
          <button className="banner-button">Pilot Report</button>
        </a>

        <a
          href="https://app.grantships.fun"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="banner-button app-button">App</button>
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
          className="shake-icon"
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
      {/* 
      <Container className="protocol-section">
        <Typography variant="h4" gutterBottom>
          Grant Ships is Powered By:
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="protocol-card">
              <a href="https://envio.dev/" target="_blank" rel="noopener noreferrer">
                <img src={envioLogo} alt="Envio Logo" className="protocol-logo" />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="protocol-card">
              <a href="https://allo.gitcoin.co/" target="_blank" rel="noopener noreferrer">
                <img src={alloLogo} alt="Allo Protocol Logo" className="protocol-logo" />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="protocol-card">
              <a href="https://www.hatsprotocol.xyz/" target="_blank" rel="noopener noreferrer">
                <img src={hatsLogo} alt="Hats Protocol Logo" className="protocol-logo" />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="protocol-card">
              <a href="https://ipfs.tech/" target="_blank" rel="noopener noreferrer">
                <img src={ipfsLogo} alt="IPFS Logo" className="protocol-logo" />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="protocol-card">
              <a href="https://www.pinata.cloud/" target="_blank" rel="noopener noreferrer">
                <img src={pinataLogo} alt="Pinata Logo" className="protocol-logo" />
              </a>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="protocol-card">
              <a href="https://thegraph.com/" target="_blank" rel="noopener noreferrer">
                <img src={graphLogo} alt="The Graph Logo" className="protocol-logo" />
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
      <hr />
      */}
      {/* 
      <Container className="testimonials-section">
        <Typography variant="h4" gutterBottom>
          What People Are Saying
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="testimonial-card">
              <Typography variant="h6" gutterBottom>
                "It is fast other grants are really slow, is like I need to wait couple of months to get funds. GrantShips ship it fast"
              </Typography>
              <Typography variant="body2">
                - kevoAdler
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="testimonial-card">
              <Typography variant="h6" gutterBottom>
                "Keep grinding, this is a solid project!"
              </Typography>
              <Typography variant="body2">
                - Omniacs.run!
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="testimonial-card">
              <Typography variant="h6" gutterBottom>
                "My experience with grant ship is amazing. They are accommodating. They help you a lot."
              </Typography>
              <Typography variant="body2">
                - Metarave
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      */}

      <p className="footer">
        © 2023-Present{" "}
        <a
          href="https://daomasons.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DAO Masons
        </a>
      </p>
    </>
  );
}

export default HomePage;
