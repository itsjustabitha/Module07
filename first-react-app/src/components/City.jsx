// destructures props object into 3 variables, two with defaults
function City({name, state = 'NSW', country = 'Australia'}) {
return (
<div className="City componentBox">
<strong>{name}</strong> is in {state}, {country}
{children}
</div>
)
}
export default City;