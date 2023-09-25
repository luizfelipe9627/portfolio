import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  link?: string;
  type?: "button" | "submit" | "reset" | undefined;
  download?: boolean;
  children: React.ReactNode;
}

export default function Button({
  href,
  link,
  children,
  type,
  ...props
}: ButtonProps) {
  return (
    <>
      {link && (
        <Link to={`/${link}`}>
          <button className={styles.button}>{children}</button>
        </Link>
      )}
      {href && (
        <button className={styles.button}>
          <a href={href} {...props} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        </button>
      )}
      {type && (
        <button className={styles.button} type={type}>
          {children}
        </button>
      )}
    </>
  );
}
