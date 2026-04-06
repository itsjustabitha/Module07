import { useState, useEffect } from "react";

// Renders a digital time that updates every second
function Clock() {

const [date, setDate] = useState(new Date());
const[tickCount, setTickCount] = useState(0);

const tick = () => {
setDate(new Date());
setTickCount(prevCount => prevCount + 1)
console.log('tick'); // track the effect frequency
};

// useEffect(() => { // first arg is usually an arrow function
// setInterval(() => tick(), 1000);
// console.log('Clock component mounted');
// }, []); // second arg is an array of dependencies

useEffect(() => {
let clockInterval = setInterval(() => tick(), 1000);
console.log('Clock component mounted');

// function returned from useEffect is run on unmount
// and used to cleanup any side effects
return () => {
console.log('Clock component unmounted');
clearInterval(clockInterval);
}
}, []);

// const tick = () => {
// setDate(new Date());
// console.log('tick'); // track the effect frequency
// };

return (
<div className="Clock">
<h3>Digital Clock</h3>
{date.toLocaleTimeString()}
<p>Ticks since mount: {tickCount}</p>
</div>
);
}
// ++ Try removing the dependency array from useEffect
// and notice the difference in ‘tick’ log messages
// ++ Why do the console messages appear double?

function ClockDisplay() {

const [showClock, setShowClock] = useState(false);

const toggleClock = () => {
setShowClock(!showClock);
}



return (
<div className="ClockDisplay componentBox">
{showClock && <Clock />}
<button onClick={toggleClock}>Toggle Clock</button>
</div>
)
}
export default ClockDisplay;

// export default Clock