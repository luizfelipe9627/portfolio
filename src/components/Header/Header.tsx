import React from "react";
import Logo from "../Logo/Logo";
import NavMenu from "../Nav/NavMenu";
import NavToggle from "../Nav/NavToggle";
import styles from "./Header.module.scss";
import { useModal } from "../../context/ModalContext";

export default function Header() {
  const { openModal } = useModal();

  const [openHeader, setOpenHeader] = React.useState(false);

  return openModal ? null : (
    <header
      className={`
      ${styles.header} ${openHeader ? `${styles.active}` : ""}
    `}
    >
      <Logo emphasis="A" title="tlas" />
      <NavToggle openHeader={openHeader} setOpenHeader={setOpenHeader} />
      <NavMenu
        title={["Inicio", "Sobre", "Serviços", "Projetos", "Contato"]}
        iClass={["home", "user", "list", "briefcase", "comments"]}
        href={["", "about", "services", "projects", "contact"]}
      />
    </header>
  );
}
