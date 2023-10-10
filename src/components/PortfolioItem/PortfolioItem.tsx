import Overlay from "../Overlay/Overlay";
import styles from "./PortfolioItem.module.scss";
import React from "react";

interface PortfolioItemProps {
  img: string;
  alt: string;
  href?: string;
  skill?: Array<string>;
}

export default function PortfolioItem({
  img,
  alt,
  href,
  skill,
}: PortfolioItemProps) {
  const [showSkills, setShowSkills] = React.useState(false);

  return (
    <div className={styles.portfolioItem}>
      <div className={styles.inner}>
        <div className={styles.image}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Overlay title={alt}/>
            <img
              src={img}
              alt={alt}
              onMouseEnter={() => setShowSkills(true)}
              onMouseLeave={() => setShowSkills(false)}
            />
          </a>
        </div>
        {skill && (
          <div
            className={`${styles.skills} ${showSkills ? `${styles.show}` : ""}`}
          >
            {skill?.map(
              (item, index) => showSkills && <span key={index}>{item}</span>,
            )}
          </div>
        )}
      </div>
    </div>
  );
}
