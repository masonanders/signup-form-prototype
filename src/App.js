import { useState } from "react";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import "./main.css";

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <>
      <div id="main">
        {!!username ? (
          <Welcome username={username} onBackToSignup={() => setUsername("")} />
        ) : (
          <Signup onSignup={(username) => setUsername(username)} />
        )}
      </div>
      <div id="socials">
        <a href="https://www.linkedin.com/in/mason-anders">
          <img
            alt="LinkedIn"
            height="32"
            src={`${process.env.PUBLIC_URL}/LI-In-Bug.png`}
          />
        </a>
        <a href="https://github.com/masonanders/signup-form-prototype">
          <img
            alt="GitHub"
            height="32"
            src={`${process.env.PUBLIC_URL}/github-mark.png`}
          />
        </a>
      </div>
    </>
  );
}
