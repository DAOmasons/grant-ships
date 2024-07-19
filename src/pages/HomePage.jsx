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
  "Community Voting for Round 1 is Underway!",
  "We are holding an X Space July 26th",
  "Round 2 Grants begins July 29th",
  <span>
    <TbRocketOff style={{ marginRight: '0.5rem' }} /> Jade Shadow's Ship Has Crashed <TbRocketOff style={{ marginRight: '0.5rem' }} />
  </span>
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
      
      <h1 className="home-title">Grant Ships</h1>
      <div className="logo-container">
        <img src={grantShipsLogo} className="logo" alt="Grant Ships logo" />
      </div>
      
      <p className="byline">A Meta-Framework for Pluralistic Grant Giving</p>

      {/* About Grant Ships Section */}
      <div className="about-section">
        <p>
          Grant Ships is a novel approach to decide where funding goes in
          your Web3 community. Everyone gets to play a part, making choices
          together to support great projects. It's all about teamwork, clear
          choices, and making a big impact.
        </p>
      </div>
      
      <div className="card-container">
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
          <button className="banner-button">App</button>
        </a>
      </div>
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
      <hr />
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
