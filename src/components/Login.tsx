import React, { useState } from "react";

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "test@test.com" && password === "test") {
      setError("");
      onLoginSuccess(); // Jump to main app
    } else {
      setError("Invalid email or password. Try test@test.com / test");
    }
  };

  const handleRegister = () => {
    alert("Registration feature coming soon!");
  };

  return (
    <div className="login-container">
      <img src="/Piezofabric logo.jpeg" alt="PiezoFabric Logo" className="logo" />
      <h1 className="title">PiezoFabric</h1>
      <p className="slogan">Revolutionizing Blood Pressure Monitoring with Comfort</p>

      <div className="form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />

        {error && <p className="error">{error}</p>}

        <button onClick={handleLogin} className="btn primary">Login</button>
        <button onClick={handleRegister} className="btn secondary">Register</button>
      </div>

      <footer className="footer">
        <p>Version 1.0.0</p>
        <details>
          <summary>Update Logs</summary>
          <ul>
            <li>v1.0.0 - Initial release with mock login</li>
            <li>v0.9.0 - Added monitoring simulation</li>
            <li>v0.8.0 - UI redesign</li>
          </ul>
        </details>
      </footer>
    </div>
  );
};

export default Login;