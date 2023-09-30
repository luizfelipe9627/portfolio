import styles from "./Logo.module.scss";

interface LogoDataProps {
  emphasis?: string;
  title: string;
}

export default function LogoData({ emphasis, title }: LogoDataProps) {
  return (
    <div className={styles.logo}>
      <a href="#logo">
        <span>{emphasis}</span>
        {title}
      </a>
    </div>
  );
}
