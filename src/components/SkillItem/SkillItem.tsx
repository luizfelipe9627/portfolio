import styles from "./SkillItem.module.scss";

interface SkillItemProps {
  skill: string;
  icon: string;
  href: string;
}

export default function SkillItem({ skill, icon, href }: SkillItemProps) {
  return (
    <a
      href={href}
      className={styles.skillItem}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img className={styles.img} src={icon} alt={skill} title={skill} />
    </a>
  );
}
