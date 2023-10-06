import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.scss";

interface NavMenuProps {
  Title: Array<string>;
  iClass: Array<string>;
  href: Array<string>;
}

export default function NavMenu({ Title, iClass, href }: NavMenuProps) {
  const [shouldNavigate, setShouldNavigate] = useState(false);

  const handleNavLinkClick = (item:string) => {
    setShouldNavigate(true);
    setTimeout(() => {
      window.location.href = `/${item}`;
    }, 2000);
  };

  if (shouldNavigate) {
    return null; // Não renderize o componente enquanto estiver aguardando a navegação
  }

  return (
    <nav className={styles.navMenu}>
      <ul>
        {href.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={`/${item}`} onClick={() => handleNavLinkClick(item)}>
                <i className={`fa fa-${iClass[index]}`}></i>
                {Title[index]}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
