import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset" | undefined;
  download?: boolean;
  children: React.ReactNode;
}

export default function Button({
  href,
  children,
  type,
  ...props
}: ButtonProps) {
  return (
    <>
      {href && (
        <a href={`#${href}`} {...props} className={styles.button}>
          {children}
        </a>
      )}
      {type && (
        <button className={styles.button} type={type}>
          {children}
        </button>
      )}
    </>
  );
}
