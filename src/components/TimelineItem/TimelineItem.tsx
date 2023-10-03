import styles from "./Timeline.module.scss";

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  text?: string;
}

export default function TimelineItem({
  date,
  title,
  subtitle,
  text,
}: TimelineItemProps) {
  return (
    <div className={styles.timelineItem}>
      <div className={`${styles.circleDot} ${styles.shineEffect}`}></div>
      <h3 className={styles.timelineDate}>
        <i className="fa fa-calendar"></i> {date}
      </h3>
      <h4 className={styles.timelineTitle}>{title}</h4>
      <h4 className={styles.timelineSubtitle}>{subtitle}</h4>
      <p className={styles.timelineText}>{text}</p>
    </div>
  );
}
