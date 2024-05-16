import { ThemeProvider } from "./contexts/themeContext";
import "./App.css";
import { useState, useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";

function App() {

  

  const [theme, setTheme] = useState("light");

  const darkTheme = () => {
    setTheme("dark");
  };
  const lightTheme = () => {
    setTheme("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <div className="text-xl text-center mt-4 dark:bg-blue-300">
      <ThemeProvider value={{ theme, darkTheme, lightTheme }}>
        {/* <h1>Hello</h1> */}
        <ThemeBtn />
      </ThemeProvider>
    </div>
  );
}

export default App;
