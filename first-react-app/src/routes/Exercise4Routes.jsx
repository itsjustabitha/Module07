//  ============================= Module 07 Exercise 04 Side 59 =============================
// MyThemeContext.jsx, Exercise4NavBar.jsx, Exercise4Routes.jsx, Home.jsx, Login.jsx, and BitcoinRates.jsx are all related to this Exercise. 
// Please see those files for the code for this Exercise. 
// I have commented out the imports in App.jsx to not affect the rest of the module, but you can uncomment them to see the full code for this Exercise.


import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import BitcoinRates from "../pages/BitcoinRates";

export default function Exercise4Routes(props) {
  return (
    <Routes>
      <Route index element={<Home {...props} />} />
      <Route path="/login" element={<Login {...props} />} />
      <Route path="/bitcoin-rates" element={<BitcoinRates {...props} />} />
    </Routes>
  );
}