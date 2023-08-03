import { useState } from "react";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";
import "./main.css"

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <div id="main">
      {!!username ? (
        <Welcome username={username} onBackToSignup={() => setUsername("")} />
      ) : (
        <Signup onSignup={(username) => setUsername(username)} />
      )}
    </div>
  );
}
