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
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
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
  onBlur,
}: InputProps) {
  return (
    <div className={styles.formItem}>
      <div className={styles.group}>
        <input
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          required={required}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={styles.control}
        />
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}
