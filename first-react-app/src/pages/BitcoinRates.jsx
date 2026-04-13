//  ============================= Module 07 Exercise 04 Side 59 =============================
// MyThemeContext.jsx, Exercise4NavBar.jsx, Exercise4Routes.jsx, Home.jsx, Login.jsx, and BitcoinRates.jsx are all related to this Exercise. 
// Please see those files for the code for this Exercise. 
// I have commented out the imports in App.jsx to not affect the rest of the module, but you can uncomment them to see the full code for this Exercise.
// Displays live Bitcoin exchange rates for multiple currencies.

import { useState, useEffect } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

export default function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [price, setPrice] = useState(null);

  // Fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  useEffect(() => {
    let ignore = false;
    setPrice(null);

    fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    )
      .then((response) => response.json())
      .then((data) => {
        // API returns currency keys in lowercase, so .toLowerCase() is required
        if (!ignore) setPrice(data.bitcoin[currency.toLowerCase()]);
      });

    return () => {
      ignore = true;
    };
  }, [currency]);

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <div>
        <strong>Price: </strong>
        {price ? `${price.toLocaleString()} ${currency}` : "Loading..."}
      </div>
    </div>
  );
}