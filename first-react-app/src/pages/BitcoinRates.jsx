// ============================= Module 07 Exercise 01 Side 59 =============================
// BitcoinRates.jsx — Displays live Bitcoin exchange rates for multiple currencies.

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