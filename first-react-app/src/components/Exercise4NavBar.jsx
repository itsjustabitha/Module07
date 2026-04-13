//  ============================= Module 07 Exercise 04 Side 59 =============================
// MyThemeContext.jsx, Exercise4NavBar.jsx, Exercise4Routes.jsx, Home.jsx, Login.jsx, and BitcoinRates.jsx are all related to this Exercise. 
// Please see those files for the code for this Exercise. 
// I have commented out the imports in App.jsx to not affect the rest of the module, but you can uncomment them to see the full code for this Exercise.

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { MyThemeContext } from "../context/MyThemeContext";
export default function NavBar() {
  const { theme } = useContext(MyThemeContext);
  return (
    <nav
      className="NavBar"
      style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/bitcoin-rates">Bitcoin Rates</NavLink>
        </li>
      </ul>{" "}
    </nav>
  );
}
