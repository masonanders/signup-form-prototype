import "./welcome.css";

export default function Welcome({ username, onBackToSignup }) {
  return (
    <div id="welcome">
      <h2>{`Welcome, ${username}!`}</h2>
      <p>
        Thank you for signing up. This is a prototype feature that has no
        further functionality.
      </p>
      <button onClick={onBackToSignup}>Go back to signup</button>
    </div>
  );
}
