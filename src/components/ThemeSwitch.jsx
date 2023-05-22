import { useState, useEffect } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleColorMode = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body?.setAttribute("data-theme", theme);
  }, [theme || localStorage.getItem("theme")]);

  return (
    <div onClick={toggleColorMode} className="pointer">
      {theme === "dark" ? <BsMoon /> : <BsSun />}
    </div>
  );
};

export default ThemeSwitch;
