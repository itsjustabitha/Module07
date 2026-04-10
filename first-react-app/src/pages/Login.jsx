// ============================= Module 07 Exercise 01 Side 59 =============================
// Login.jsx — Login page with email/password form and dark/light theme toggle.

import { useState } from "react";
import { useTheme } from "../context/MyThemeContext";
import { useUser } from "../context/UserContext";

export default function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const { theme, darkMode, toggleTheme } = useTheme(); 

 

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitResult(`Logged in as ${userEmail}`);
  }

  return (
    <div
      className="Login componentBox"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Log In</button>
        <button type="button" onClick={toggleTheme}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </button>

        <p>{submitResult}</p>
      </form>
    </div>
  );
}