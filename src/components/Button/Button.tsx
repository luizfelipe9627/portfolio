import styles from "./Button.module.scss";

interface ButtonProps {
  href?: string;
  link?: string;
  type?: "button" | "submit" | "reset" | undefined;
  download?: boolean;
  children: React.ReactNode;
}

export default function Button({
  href,
  link,
  children,
  type,
  ...props
}: ButtonProps) {
  return (
    <>
      {link && <button className={styles.button}>{children}</button>}
      {href && (
        <button className={styles.button}>
          <a href={`#${href}`} {...props}>
            {children}
          </a>
        </button>
      )}
      {type && (
        <button className={styles.button} type={type}>
          {children}
        </button>
      )}
    </>
  );
}
