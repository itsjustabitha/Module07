//  ============================= Module 07 Exercise 04 Side 59 =============================
// MyThemeContext.jsx, Exercise4NavBar.jsx, Exercise4Routes.jsx, Home.jsx, Login.jsx, and BitcoinRates.jsx are all related to this Exercise. 
// Please see those files for the code for this Exercise. 
// I have commented out the imports in App.jsx to not affect the rest of the module, but you can uncomment them to see the full code for this Exercise.

// MyThemeContext.jsx — Theme context with light/dark mode support.

import { createContext, useState, useContext } from "react";

// Theme color definitions
export const themes = {
  light: {
    foreground: "#333333",
    background: "#cc6633",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

// Named export for the context (used directly via useContext elsewhere if needed)
export const MyThemeContext = createContext({ theme: themes.light });

// Provider wrapper — use in App.jsx like <MyThemeProvider>...</MyThemeProvider>
export default function MyThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.light);

  // Helper boolean: true when dark theme is active
  const darkMode = theme.background === themes.dark.background;

  // Toggles between light and dark theme
  function toggleTheme() {
    setTheme((prev) => (prev === themes.light ? themes.dark : themes.light));
  }

  return (
    <MyThemeContext.Provider value={{ theme, setTheme, darkMode, toggleTheme }}>
      {children}
    </MyThemeContext.Provider>
  );
}

// Custom hook — this is what Login.jsx imports as { useTheme }
export function useTheme() {
  return useContext(MyThemeContext);
}

// ++ Try to use this context to style some existing components
// ++ Try to add a component with a button/checkbox to switch themes