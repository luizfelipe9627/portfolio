import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  link?: string;
  download?: boolean;
  children?: React.ReactNode;
}

export default function Button({
  href,
  link,
  children,
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
    </>
  );
}
