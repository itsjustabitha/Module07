// ============================= Module 07 Exercise 01 Side 59 =============================
// Exercise4Routes.jsx — Routes for Exercise 4. Stored in src/routes/

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