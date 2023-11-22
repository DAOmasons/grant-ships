import { useState } from "react";
import grantShipsLogo from "./assets/rocket.png";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="/" target="_blank">
          <img
            src={grantShipsLogo}
            className="logo grantships"
            alt="Grant Ships logo"
          />
        </a>
      </div>
      <h1>Grant Ships</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
