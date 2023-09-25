import styles from "./PortfolioItem.module.scss";

interface PortfolioItemProps {
  img: string;
  alt: string;
  href?: string;
}

export default function PortfolioItem({ img, alt, href }: PortfolioItemProps) {
  return (
    <div className={styles.portfolioItem}>
      <div className={styles.inner}>
        <div className={styles.img}>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={img} alt={alt} />
          </a>
        </div>
      </div>
    </div>
  );
}
