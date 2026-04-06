// Parent component storing common state data

import { useState } from 'react'

function Weather() { 

// two separate state values to store weather data
    const [weather, setWeather] = useState('sunny')
    const [tempCelcius, setTempCelcius] = useState(27)

// handler function to update both state values at once
    const handleWeatherChange = (newWeather, newTemp) => {
        setWeather(newWeather)
        setTempCelcius(newTemp)
}



// Child component - receives parent state handler via props
function CheckWeather(props) {
    const weatherTypes = ['sunny', 'windy', 'raining', 'cloudy'];

    // generates new random weather data and updates state via prop
    const randomWeather = () => {
        let newTemp = Math.floor(Math.random() * 40);
        let newWeatherIndex = Math.floor(
            Math.random() *

    weatherTypes.length);
        // ++ try to destructure this function from the props object
        props.onWeatherChange(weatherTypes[newWeatherIndex], newTemp)
    }

return (
    <button onClick={randomWeather}>Check Weather</button>
    )
}

// ++ Add some more weather types of your own

// Child component to display and convert temp if needed
function Temperature({temp, units = 'C'}) { // default to celsius

        // convert to Fahrenheit if units is F (or not C)
    let displayTemp = units === 'C' ? temp : (temp * 9/5) + 32

        return (
    <span className="Temperature">
        <strong> {parseInt(displayTemp)}&deg;{units} </strong>
    </span>
    )
}


return (
    <div className='Weather componentBox'>
        <h2>Today's Weather</h2>
        <div>
            <strong>{weather}</strong> with a temp of


        <Temperature temp={tempCelcius} units="C" />
    </div>

        <CheckWeather onWeatherChange={handleWeatherChange} />
    </div>
    )
}

export default Weather;