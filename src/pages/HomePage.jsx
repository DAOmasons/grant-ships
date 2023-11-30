import grantShipsLogo from "../assets/rocketgrad3.svg";
import "../style/App.css";

function HomePage() {
  return (
    <>
      <div>
        <img
          src={grantShipsLogo}
          className="logo grantships"
          alt="Grant Ships logo"
        />
      </div>
      <h1>Grant Ships</h1>
      <h2 className="card">
        An Evolutionary Grant Distribution Game in the Arbitrum Ecosystem
      </h2>
    </>
  );
}

export default HomePage;
