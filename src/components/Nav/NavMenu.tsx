import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.scss";

interface NavMenuProps {
  Title: Array<string>;
  iClass: Array<string>;
  href: Array<string>;
}

export default function NavMenu({ Title, iClass, href }: NavMenuProps) {
  return (
    <nav className={styles.navMenu}>
      <ul>
        {href.map((item, index) => {
          return (
            <li key={index}>
              <NavLink to={`/${item}`}>
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
