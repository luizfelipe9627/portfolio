import styles from "./Input.module.scss";

interface InputProps {
  type: string;
  placeholder: string;
  required?: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}

export default function Input({
  type,
  placeholder,
  id,
  name,
  required,
  value,
  onChange,
  error,
}: InputProps) {
  return (
    <div className={styles.formItem}>
      <div className={styles.group}>
        <input
          type={type}
          className={styles.control}
          placeholder={placeholder}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
        />
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
