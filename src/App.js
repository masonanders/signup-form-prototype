import { useState } from "react";
import Signup from "./components/Signup";
import Welcome from "./components/Welcome";

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <div>
      {!!username ? (
        <Welcome username={username} onBackToSignup={() => setUsername("")} />
      ) : (
        <Signup onSignup={(username) => setUsername(username)} />
      )}
    </div>
  );
}
