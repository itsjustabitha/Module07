import { useState } from "react";
import { useUserContext, MyThemeContext } from "../context/UserContext";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  // new state value for showing submission messages to user
  const [submitResult, setSubmitResult] = useState("");
  // destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useUserContext();
  // to use this context in a component, first employ useContext hook
const {theme, darkMode} = useContext(MyThemeContext);

// then use the theme object for inline styling
{/* <div className="LoginForm componentBox" 
style={{background: theme.background, color:
theme.foreground}}>

// or the boolean to create a CSS class
<div className={darkMode ? 'dark' : 'light'}></div> */}

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit

    // add some password validation
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
    }
  };

  {/* if the user is already logged in, show msg instead of form */}
  if (currentUser.email)
    return (
      <>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>);
  // otherwise render same form as previously, no changes

  return (
    <div className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>

        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>

        <button>Log In</button>

        <p>{submitResult}</p>
      </form>
    </div>
  );
}

// OLD CODE before Slide 77 - User Input Controlled
// return (
// <div className="LoginForm componentBox">
// <div className="formRow">
// <label>Email Address:
// {/* Controlled form element needs both value and onChange.
// onChange handler uses event param e to access target

// value.

// Whenever user types, new value is stored in state. */}
// <input type="email" value={userEmail} name="userEmail"
// onChange={(e) => setUserEmail(e.target.value)} />
// </label>
// </div>
// <div className="formRow">
// <label>Password:
// <input type="password" value={userPassword} name="password"
// onChange={(e) => setUserPassword(e.target.value)} />
// </label>
// </div>
// </div>
// )
// }
// try removing the onChange prop and typing in a field

export default LoginForm;
