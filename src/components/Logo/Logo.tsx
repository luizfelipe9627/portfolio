import LogoData from "./LogoData";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <LogoData emphasis="L" title="uiz" />
    </div>
  );
}
