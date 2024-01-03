import Overlay from "../Overlay/Overlay";
import styles from "./ProjectItem.module.scss";
import React from "react";

interface ProjectItemProps {
  img: string;
  title: string;
  href?: string;
  skill?: Array<string>;
  icon?: Array<string>;
}

export default function ProjectItem({
  img,
  title,
  href,
  skill,
  icon,
}: ProjectItemProps) {
  const [showSkills, setShowSkills] = React.useState(false);

  return (
    <div className={styles.projectItem}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Overlay title={title} />
            <img
              src={img}
              title={title}
              onMouseEnter={() => setShowSkills(true)}
              onMouseLeave={() => setShowSkills(false)}
            />
          </a>
        </div>
        {skill && (
          <div
            className={`${styles.skills} ${showSkills ? `${styles.show}` : ""}`}
            onMouseEnter={() => setShowSkills(true)}
            onMouseLeave={() => setShowSkills(false)}
          >
            {skill?.map(
              (item, index) =>
                showSkills && (
                  <div key={index} className={styles.skill}>
                    {icon && icon[index] && (
                      <img src={icon[index]} title={item} />
                    )}
                    <span>{item}</span>
                  </div>
                ),
            )}
          </div>
        )}
      </div>
    </div>
  );
}
