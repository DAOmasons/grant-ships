import grantShipsLogo from "../assets/rocketgrad3.svg";
import "../style/App.css";

function AboutPage() {
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
      <div className="card">About Grant Ships</div>
    </>
  );
}

export default AboutPage;
