import styles from "./NavMenu.module.scss";
import { NavLink } from "react-router-dom";

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
            <li>
              <NavLink to={`/${item}`} key={index}>
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
