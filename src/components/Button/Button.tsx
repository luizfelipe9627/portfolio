import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

interface ButtonProps {
  href: string;
  buttonText: string;
}

export default function Button({ href, buttonText }: ButtonProps) {
  return (
    <Link to={`/${href}`}>
      <button className={styles.button}>{buttonText}</button>
    </Link>
  );
}
