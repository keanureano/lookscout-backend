import { useState, useEffect } from "react";
import { DarkModeIcon, LightModeIcon } from "../components/Icons";

function DarkModeButton() {
  const systemDarkMode =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const [darkMode, setDarkMode] = useState(systemDarkMode);

  useEffect(() => {
    const html = document.querySelector("html");
    if (darkMode) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button className="DarkModeButton" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <DarkModeIcon /> : <LightModeIcon />}
    </button>
  );
}

export default DarkModeButton;
