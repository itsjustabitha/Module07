import { useState, useContext } from "react";
import { useUserContext } from "../context/UserContext";
import { MyThemeContext, themes } from "../context/MyThemeContext";


// Module 07 Exercise 05 Side 100
import { TextField, Button } from "@mui/material";



function LoginForm() {
  
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const { currentUser, handleUpdateUser } = useUserContext();
  const { theme, darkMode, setTheme } = useContext(MyThemeContext);


  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail });
    }
  };

  const toggleTheme = () => {
    setTheme(darkMode ? themes.light : themes.dark);
  };


  if (currentUser.email)
    return (
      <>
        <p>Welcome {currentUser.email}!</p>

        {/* 2. Swapped old buttons for MUI Buttons */}
        <Button variant="outlined" onClick={() => handleUpdateUser({})}>
        Log Out
        </Button>

        <Button variant="text" onClick={toggleTheme} sx={{ ml: 2 }}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </Button>

        {/* <button onClick={() => handleUpdateUser({})}>Log Out</button> <button onClick={toggleTheme}>
          Swicth to {darkMode ? "Light" : "Dark"} Mode </button> */}
      </>
      );


  return (
    <div className="LoginForm componentBox" style={{background: theme.background, color: theme.foreground}}>

      <form onSubmit={handleSubmit}>
        <div className="formRow">

          {/* 3. Replaced <label> and <input> with MUI TextField */}
          <TextField
            label="Email Address"
            type="email"
            value={userEmail}
            name="userEmail"
            onChange={(e) => setUserEmail(e.target.value)}
            margin="normal"
            required
          />
        </div>

        <div className="formRow">
          <TextField
            label="Password"
            type="password"
            value={userPassword}
            name="password"
            onChange={(e) => setUserPassword(e.target.value)}
            margin="normal"
            required
          />
        </div>

        {/* 4. Swapped standard buttons for MUI Buttons */}
        <Button type="submit" variant="contained" sx={{ mt: 2, mr: 2 }}>
          Log In
        </Button>
        <Button type="button" variant="outlined" onClick={toggleTheme} sx={{ mt: 2 }}>
          Switch to {darkMode ? "Light" : "Dark"} Mode
        </Button>

        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;
          




// Everything Below is old code before I started Exercise 05 Slide 100. I left it here for reference but it is not used in the app anymore.
// function LoginForm() {
  // input state values always need to be strings - empty initially
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");
  // new state value for showing submission messages to user
//   const [submitResult, setSubmitResult] = useState("");
  // destructure the context values passed via UserProvider
//   const { currentUser, handleUpdateUser } = useUserContext();
  // to use this context in a component, first employ useContext hook
// const { theme, darkMode, setTheme } = useContext(MyThemeContext);

// then use the theme object for inline styling
// {/* <div className="LoginForm componentBox" 
// style={{background: theme.background, color:
// theme.foreground}}>

// or the boolean to create a CSS class
// <div className={darkMode ? 'dark' : 'light'}></div> */}

//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent page reloading on form submit

    // add some password validation
//     if (userPassword.length < 5) {
//       setSubmitResult("Password must be at least 5 characters long");
//     } else if (userPassword === userEmail) {
//       setSubmitResult("Password must not match email address");
//     } else {
//       setSubmitResult("Successful login.");
//       handleUpdateUser({ email: userEmail });
//     }
//   };

//   const toggleTheme = () => {
//     setTheme(darkMode ? themes.light : themes.dark);
//   };

//   {/* if the user is already logged in, show msg instead of form */}
//   if (currentUser.email)
//     return (
//       <>
//         <p>Welcome {currentUser.email}!</p>
//         <button onClick={() => handleUpdateUser({})}>Log Out</button>
//         <button onClick={toggleTheme}>
//           Swicth to {darkMode ? "Light" : "Dark"} Mode
//           </button>
//       </>
//       );
  
  // otherwise render same form as previously, no changes

//   return (
//     <div className="LoginForm componentBox"
//     style={{background: theme.background, color: theme.foreground}}>

//       <form onSubmit={handleSubmit}>
//         <div className="formRow">
//           <label>
//             Email Address:
//             <input
//               type="email"
//               value={userEmail}
//               name="userEmail"
//               onChange={(e) => setUserEmail(e.target.value)}
//             />
//           </label>
//         </div>

//         <div className="formRow">
//           <label>
//             Password:
//             <input
//               type="password"
//               value={userPassword}
//               name="password"
//               onChange={(e) => setUserPassword(e.target.value)}
//             />
//           </label>
//         </div>

//         <button type="submit">Log In</button>
//         <button type="button" onClick={toggleTheme}>
//           Swith to {darkMode ? "Light" : "Dark"} Mode
//         </button>

//         <p>{submitResult}</p>
//       </form>
//     </div>
//   );
//   }
// export default LoginForm;


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

