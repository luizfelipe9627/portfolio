import Logo from "../Logo/Logo";
import NavMenu from "../Nav/NavMenu";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />
      <NavMenu />
    </header>
  );
}
