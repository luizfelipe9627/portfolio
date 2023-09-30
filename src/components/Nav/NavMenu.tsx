import styles from "./NavMenu.module.scss";
import React from "react";

interface NavMenuProps {
  Title: Array<string>;
  iClass: Array<string>;
  href: Array<string>;
}

export default function NavMenu({ Title, iClass, href }: NavMenuProps) {
  const [linkActive, setLinkActive] = React.useState(0);

  const handleClick = (index: number) => {
    setLinkActive(index);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const sections = document.querySelectorAll("section");

      sections.forEach((section, index) => {
        const offsetTop = section.offsetTop;
        const offsetBottom = offsetTop + section.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setLinkActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
