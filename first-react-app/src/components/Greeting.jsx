
function Greeting({name, children}) {
return (

<div className="Greeting componentBox">

 <h2>Hello {name ? name : 'World'}!</h2>

{children}

</div>
)
}

export default Greeting;