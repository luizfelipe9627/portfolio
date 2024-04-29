import { Link } from "react-router-dom";
import styles from "./Button.module.scss";

type ButtonProps = React.ComponentProps<"button"> & {
  children: React.ReactNode;
  href?: string;
  download?: boolean;
};

export default function Button({
  href,
  children,
  type,
  disabled,
  download,
}: ButtonProps) {
  const handleClick = () => {
    setTimeout(() => {
      const containerSection = document.querySelector(".containerSection");

      if (containerSection) {
        containerSection?.classList.add("active");
      }
    }, 100);
  };

  return (
    <>
      {href && !download && (
        <Link to={`/${href}`} className={styles.button} onClick={handleClick}>
          {children}
        </Link>
      )}
      {type && (
        <button
          className={styles.button}
          type={type}
          disabled={disabled}
          onClick={handleClick}
        >
          {children}
        </button>
      )}
      {download && (
        <a href={href} download className={styles.button} onClick={handleClick}>
          {children}
        </a>
      )}
    </>
  );
}
