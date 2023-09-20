import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

interface LogoDataProps {
  emphasis?: string;
  title: string;
}

export default function LogoData({ emphasis, title }: LogoDataProps) {
  return (
    <div className={styles.logo}>
      <Link to="/">
        <span>{emphasis}</span>
        {title}
      </Link>
    </div>
  );
}
