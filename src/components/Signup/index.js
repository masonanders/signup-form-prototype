import { useState } from "react";
import "./signup.css";

export default function Signup({ onSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState(false);

  function fieldsAreValid() {
    return !!username && !!password && password === confPass;
  }

  function submit() {
    if (fieldsAreValid()) {
      onSignup(username);
    } else {
      setError(true);
    }
  }

  return (
    <div id="signup">
      <h1>Sign up</h1>

      <input
        type="text"
        id="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        error={String(error && !username)}
      />

      <input
        type={showPass ? "text" : "password"}
        id="pass"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={String(error && (!password || password !== confPass))}
      />

      <input
        type={showPass ? "text" : "password"}
        id="conf-pass"
        placeholder="Confirm Password"
        value={confPass}
        onChange={(e) => setConfPass(e.target.value)}
        error={String(error && (!confPass || password !== confPass))}
      />

      <span className="checkboxWithLabel">
        <input
          type="checkbox"
          id="show-pass"
          checked={showPass}
          onChange={(e) => setShowPass(e.target.checked)}
        />
        <label htmlFor="show-pass">Show Password</label>
      </span>

      {error && (
        <div className="error-messages">
          {!username && <p>Username is required</p>}
          {!(password || confPass) && <p>Password is required</p>}
          {password !== confPass && <p>Passwords must match</p>}
        </div>
      )}

      <button disabled={error && !fieldsAreValid()} onClick={submit}>
        Sign up
      </button>

    </div>
  );
}
