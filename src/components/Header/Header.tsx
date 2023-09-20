import Logo from "../Logo/Logo";
import NavMenu from "../Nav/NavMenu";
import NavToggle from "../Nav/NavToggle";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo emphasis="L" title="uiz" />
      <NavToggle />
      <NavMenu
        Title={["Inicio", "Sobre", "Serviços", "Portfólio", "Contato"]}
        iClass={["home", "user", "list", "briefcase", "comments"]}
        href={["", "user", "list", "portfolio", "contact"]}
      />
    </header>
  );
}
