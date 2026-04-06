import { useState } from 'react'; // new, I added this to use the useState hook to store the selected currency and the price of bitcoin in that currency
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

function BitcoinRates() {

    const [currency, setCurrency] = useState(currencies[0]);
   const [price, setPrice] = useState(null); // new, I added this to store the price of bitcoin in the selected currency
    // fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
    const options = currencies.map(curr => <option value={curr}
key={curr}>{curr}</option>);

    return (
        <div className="BitcoinRates componentBox">
            <h3>Bitcoin Exchange Rate</h3>
            <label>Choose currency:
            <select value={currency} onChange={e =>
setCurrency(e.target.value)}>
                {options}
            </select>
        </label>
        </div>
    )
}
export default BitcoinRates;