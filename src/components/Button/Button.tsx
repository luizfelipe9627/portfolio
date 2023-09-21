import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  href: string;
  children?: React.ReactNode;
}

export default function Button({ href, children }: ButtonProps) {
  return (
    <Link to={`/${href}`}>
      <button className={styles.button}>{children}</button>
    </Link>
  );
}
