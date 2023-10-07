import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset" | undefined;
  download?: boolean;
  children: React.ReactNode;
}

export default function Button({
  href,
  children,
  type,
  ...props
}: ButtonProps) {
  function handleClick() {
    setTimeout(() => {
      const containerSection = document.querySelector(".containerSection");

      if (containerSection) {
        containerSection?.classList.add("active");
      }
    }, 100);
  }
  return (
    <>
      {href && (
        <Link
          to={`/${href}`}
          {...props}
          className={styles.button}
          onClick={handleClick}
        >
          {children}
        </Link>
      )}
      {type && (
        <button className={styles.button} type={type}>
          {children}
        </button>
      )}
    </>
  );
}
