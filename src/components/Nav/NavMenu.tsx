import styles from "./NavMenu.module.scss";
import NavData from "./NavData";

export default function NavMenu() {
  return (
    <nav className={styles.navMenu}>
      <ul>
        <NavData
          iText={["Inicio", "Sobre", "Serviços", "Portfólio", "Contato"]}
          iClass={["home", "user", "list", "briefcase", "comments"]}
          href={["", "user", "list", "portfolio", "contact"]}
        />
      </ul>
    </nav>
  );
}
