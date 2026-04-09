//  ============================= Module 07 Exercise 01 Side 34 =============================

import { useState } from "react";
import { useData } from "../hooks/useData";
import { useEmojiContext } from "../context/EmojiContext"; 
import { moods } from "./Emoji"; 

const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {
    const [currency, setCurrency] = useState(currencies[0]);
    const { mood } = useEmojiContext();

  const data = useData(
        `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`
    );

    const price = data ? data.bitcoin[currency.toLowerCase()] : null;

    // old code from mod6 
    const options = currencies.map(curr => <option value={curr} key={curr}>{curr}</option>);

    return (
        <div className="BitcoinRates componentBox">
            <img 
                src={moods[mood].emoji} 
                alt={moods[mood].label} 
                style={{ width: '50px' }} 
            />
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
                <select value={currency} onChange={e => setCurrency(e.target.value)}>
                    {options}
                </select>
            </label>
            <div><strong>Price: </strong>{data ? `${data.bitcoin[currency.toLowerCase()].toLocaleString()} ${currency}` : "Loading..."}</div>
        </div>
    )
}

export default BitcoinRates;



//  ============================= Module 07 Exercise 01 Side 15 =============================
// import { useState, useEffect } from "react";// new, I added this to use the useState hook to store the selected currency and the price of bitcoin in that currency
// const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// function BitcoinRates() {

//     const [currency, setCurrency] = useState(currencies[0]);
//    const [price, setPrice] = useState(null); // new, I added this to store the price of bitcoin in the selected currency
//     // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
//     const options = currencies.map(curr => <option value={curr}
// key={curr}>{curr}</option>);

// useEffect(() => {
//   let ignore = false;
//   setPrice(null);
//   fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
//     .then(response => response.json())
//     .then(data => {
//       if (!ignore) setPrice(data.bitcoin[currency.toLowerCase()]); // needed to add .toLowerCase() because the API returns the price in lowercase currency code
//     });
//   return () => { ignore = true; };
// }, [currency]);

//     return (
//         <div className="BitcoinRates componentBox">
//             <h3>Bitcoin Exchange Rate</h3>
//             <label>Choose currency:
//             <select value={currency} onChange={e =>
// setCurrency(e.target.value)}>
//                 {options}
//             </select>
//         </label>
//         <div><strong>Price: </strong>{price ? `${price.toLocaleString()} ${currency}` : "Loading..."}</div>
//         </div>
//     )
// }
// export default BitcoinRates;