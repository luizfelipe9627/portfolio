import React from "react";
import styles from "./SwitcherColor.module.scss";
const THEME_PATH = "./src/styles/themes";

const colors = ["color1", "color2", "color3", "color4", "color5"];

export default function SwitcherColor() {
  const [activeTheme, setActiveTheme] = React.useState("");

  const handleColorClick = (color: string) => {
    const spans = document.querySelectorAll(".alternate-style");

    spans.forEach((span) => {
      if (color === span.getAttribute("title")) {
        span.removeAttribute("disabled");
      } else {
        span.setAttribute("disabled", "true");
      }
    });

    localStorage.setItem("activeColor", color);
  };

  const showColors = () => {
    const switcherColor = document.querySelector(
      `.${styles.switcherColor}`,
    ) as HTMLElement;
    switcherColor.classList.toggle(`${styles.open}`);

    setActiveTheme("active");
  };

  const changeTheme = () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      setActiveTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setActiveTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  React.useEffect(() => {
    const head = document.querySelector("head") as HTMLElement;

    colors.forEach((color) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = `${THEME_PATH}/${color}.scss`;
      link.title = color;
      link.classList.add("alternate-style");
      link.setAttribute("disabled", "true");
      head.appendChild(link);
    });

    const savedTheme = localStorage.getItem("theme");
    const savedColor = localStorage.getItem("activeColor");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    if (savedColor) {
      handleColorClick(savedColor);
    }
  }, []);

  return (
    <div className={styles.switcherColor}>
      <div className={styles.toggler} onClick={showColors}>
        <i className="fas fa-cog fa-spin"></i>
      </div>

      <div className={styles.darkOrLight} onClick={changeTheme}>
        <i
          className={`fas ${activeTheme === "dark" ? "fa-moon" : "fa-sun"}`}
        ></i>
      </div>

      <h4>Tema de cores</h4>
      <div className={styles.colors}>
        {["color1", "color2", "color3", "color4", "color5"].map((color) => (
          <span
            key={color}
            className={color}
            onClick={() => handleColorClick(color)}
          ></span>
        ))}
      </div>
    </div>
  );
}
