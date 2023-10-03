import styles from "./SkillItem.module.scss";

interface SkillItemProps {
  skill: string;
  progress: string;
}

export default function SkillItem({ skill, progress }: SkillItemProps) {
  return (
    <div className={styles.skillItem}>
      <div className={styles.title}>
        <h5>{skill}</h5>
        <p className={styles.percentage}>{progress}</p>
      </div>

      <div className={styles.progress}>
        <div
          className={styles.progressIn}
          style={{ width: `${progress}` }}
        ></div>
        <div className={styles.percentage}>{progress}</div>
      </div>
    </div>
  );
}
