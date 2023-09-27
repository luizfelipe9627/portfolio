import React from "react";
import styles from "./SwitcherColor.module.scss";

export default function SwitcherColor() {
  const [color, setColor] = React.useState("");

  const setActiveStyle = (color: string) => {
    setColor(color);
  };

  return (
    <div className={styles.switcherColor}>
      <div className={styles.toggler}>
        <i className="fas fa-cog fa-spin"></i>
      </div>
      
      <div className={styles.darkOrLight}>
        <i className="fas fa-moon"></i>
      </div>

      <h4>Tema de cores</h4>
      <div className={styles.colors}>
        <span className="color1" onClick={() => setActiveStyle("color1")}></span>
        <span className="color2" onClick={() => setActiveStyle("color2")}></span>
        <span className="color3" onClick={() => setActiveStyle("color3")}></span>
        <span className="color4" onClick={() => setActiveStyle("color4")}></span>
        <span className="color5" onClick={() => setActiveStyle("color5")}></span>
      </div>
      {color}
    </div>
  );
}
