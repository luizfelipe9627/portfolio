import styles from "./InfoItem.module.scss";

interface InfoItemProps {
  aText?: string;
  aHref?: string;
  spanText?: string
  pText: string;
}

export default function InfoItem({
  aText,
  spanText,
  pText,
  aHref,
}: InfoItemProps) {
  return (
    <div className={styles.infoItem}>
      <p>
        {pText}
        {aText && (
          <a href={aHref} target="_blank" rel="noopener noreferrer">
            {aText}
          </a>
        )}
        {spanText && <span>{spanText}</span>}
      </p>
    </div>
  );
}
