import styles from "./Overlay.module.scss";

interface OverlayProps {
  title: string;
}

export default function Overlay({ title }: OverlayProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlayText}>{title}</div>
    </div>
  );
}
