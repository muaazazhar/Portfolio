import React from "react";
import "./themeToggle.css";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import { useTheme } from "../../../context/ThemeContext";

const options = [
  { value: "light", label: "Light", Icon: FiSun },
  { value: "dark", label: "Dark", Icon: FiMoon },
  { value: "system", label: "System", Icon: FiMonitor },
];

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme_toggle" role="radiogroup" aria-label="Theme preference">
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          role="radio"
          aria-checked={theme === value}
          title={`${label} theme`}
          className={theme === value ? "active" : ""}
          onClick={() => setTheme(value)}
        >
          <Icon size={16} />
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
