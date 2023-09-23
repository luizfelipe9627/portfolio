import styles from "./ServiceItem.module.scss";

interface ServiceItemProps {
  title: string;
  description?: string;
  icon: string;
}

export default function ServiceItem({
  title,
  description,
  icon,
}: ServiceItemProps) {
  return (
    <div className={styles.serviceItem}>
      <div className={styles.inner}>
        {icon && (
          <div className={styles.icon}>
            <i className={`fa fa-${icon}`}></i>
          </div>
        )}
        <h4>{title}</h4>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
