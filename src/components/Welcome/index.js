import "./welcome.css"

export default function Welcome({ username, onBackToSignup }) {
  return (
    <div>
      <p>{`Welcome, ${username}!`}</p>
      <p>Thank you for signing up.</p>
      <button onClick={onBackToSignup}>Go back to signup</button>
    </div>
  );
}
