import React from "react";
import styles from "./SwitcherColor.module.scss";

import color1 from "../../styles/themes/color1.module.scss";
import color2 from "../../styles/themes/color2.module.scss";
import color3 from "../../styles/themes/color3.module.scss";
import color4 from "../../styles/themes/color4.module.scss";
import color5 from "../../styles/themes/color5.module.scss";

type ColorModule = {
  name: string;
  default: { color: string };
};

const colors: ColorModule[] = [
  { name: "color1", default: { color: color1.color } },
  { name: "color2", default: { color: color2.color } },
  { name: "color3", default: { color: color3.color } },
  { name: "color4", default: { color: color4.color } },
  { name: "color5", default: { color: color5.color } },
];

export default function SwitcherColor() {
  const [activeTheme, setActiveTheme] = React.useState("");

  const handleColorClick = (colorModule: ColorModule) => {
    const spans = document.querySelectorAll(".alternate-style");
    spans.forEach((span) => {
      if (colorModule.name === span.getAttribute("title")) {
        span.removeAttribute("disabled");
      } else {
        span.setAttribute("disabled", "true");
      }
    });

    document.documentElement.style.setProperty(
      "--skin-color",
      colorModule.default.color,
    );

    localStorage.setItem("activeColor", colorModule.name);
  };

  const showColors = () => {
    const switcherColor = document.querySelector(`.${styles.switcherColor}`);

    if (switcherColor) {
      switcherColor.classList.toggle(`${styles.open}`);
      setActiveTheme("active");

      document.addEventListener("click", handleOutsideClick);
    }
  };

  const handleOutsideClick = (event: MouseEvent) => {
    const switcherColor = document.querySelector(`.${styles.switcherColor}`);

    if (switcherColor && !switcherColor.contains(event.target as Node)) {
      switcherColor.classList.remove(`${styles.open}`);
      setActiveTheme("");
      document.removeEventListener(
        "click",
        handleOutsideClick as EventListenerOrEventListenerObject,
      );
    }
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
    const savedTheme = localStorage.getItem("theme");
    const savedColor = localStorage.getItem("activeColor");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    if (savedColor) {
      handleColorClick({
        name: savedColor,
        default: colors.find((color) => color.name === savedColor)?.default || {
          color: "",
        },
      });
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
        {colors.map((color, index) => (
          <span
            key={index}
            className={color.name}
            onClick={() => handleColorClick(color)}
          ></span>
        ))}
      </div>
    </div>
  );
}
