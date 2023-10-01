import styles from "./NavMenu.module.scss";
import React, { useState, useEffect } from "react";

interface NavMenuProps {
  Title: Array<string>;
  iClass: Array<string>;
  href: Array<string>;
}

export default function NavMenu({ Title, iClass, href }: NavMenuProps) {
  const [linkActive, setLinkActive] = useState(0);
  const [linkClicked, setLinkClicked] = useState(false);

  const handleClick = (index: number) => {
    const links = document.querySelectorAll(`.${styles.navMenu} a`);
    links.forEach((link) => link.classList.remove(styles.active));

    setLinkActive(index);
    setLinkClicked(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!linkClicked) {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll("section");

        sections.forEach((section, index) => {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            if (linkActive !== index) {
              setLinkActive(index);
            }
          }
        });
      }
    };

    if (!linkClicked) {
      window.addEventListener("scroll", handleScroll);
    } else {
      window.removeEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [linkActive, linkClicked]);

  return (
    <nav className={styles.navMenu}>
      <ul>
        {href.map((item, index) => {
          return (
            <li key={index}>
              <a
                href={`#${item}`}
                onClick={() => handleClick(index)}
                className={index === linkActive ? styles.active : ""}
              >
                <i className={`fa fa-${iClass[index]}`}></i>
                {Title[index]}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
