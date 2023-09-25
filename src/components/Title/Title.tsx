import styles from "./Title.module.scss";

interface TitleProps {
  title: string;
}

export default function Title({ title }: TitleProps) {
  return (
    <div className={styles.title}>
      <h2>{title}</h2>
    </div>
  );
}
