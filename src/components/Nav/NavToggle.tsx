import React, { useEffect } from "react";
import styles from "./NavToggle.module.scss";

interface NavToggleProps {
  setOpenHeader: React.Dispatch<React.SetStateAction<boolean>>;
  openHeader: boolean;
}

export default function NavToggle({
  setOpenHeader,
  openHeader,
}: NavToggleProps) {
  const [openNav, setOpenNav] = React.useState(false);
  const [section, setSection] = React.useState(true);

  useEffect(() => {
    const containerSection = document.querySelector(".containerSection");

    if (section) {
      containerSection?.classList.add("active");
    } else {
      containerSection?.classList.remove("active");
    }

    function handleNavClick() {
      setOpenNav(!openNav);
      setOpenHeader(!openHeader);
    }

    function handleOutsideClick(event: MouseEvent) {
      const navToggle = document.querySelector(`.${styles.navToggle}`);
      if (navToggle && !navToggle.contains(event.target as Node)) {
        setOpenNav(false);
        setOpenHeader(false);
        setSection(true);
      }
    }

    const media = window.matchMedia("(max-width: 1200px)");

    if (media.matches) {
      const liHref = document.querySelectorAll("li a");

      liHref.forEach((link) => {
        link.addEventListener("click", handleNavClick);
      });

      document.addEventListener("click", handleOutsideClick);

      return () => {
        liHref.forEach((link) => {
          link.removeEventListener("click", handleNavClick);
        });
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, [openNav, section, openHeader, setOpenHeader]);

  function handleClick() {
    setOpenNav(!openNav);
    setOpenHeader(!openHeader);
    setSection(!section);
  }

  return (
    <div
      className={`${styles.navToggle} ${openNav ? `${styles.active}` : ""}`}
      onClick={handleClick}
    >
      <span></span>
    </div>
  );
}
