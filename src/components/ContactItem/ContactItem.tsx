import styles from "./ContactItem.module.scss";

interface ContactItemProps {
  icon: string;
  title: string;
  subtitle: string;
  aHref?: string;
}

export default function ContactItem({
  icon,
  title,
  subtitle,
  aHref,
}: ContactItemProps) {
  return (
    <div className={styles.contactItem}>
      <div className={styles.icon}>
        <i className={`fa fa-${icon}`}></i>
      </div>
      <h4>{title}</h4>
      {aHref ? (
        <a href={aHref} target="_blank" rel="noopener noreferrer">
          {subtitle}
        </a>
      ) : (
        <p>{subtitle}</p>
      )}
    </div>
  );
}
