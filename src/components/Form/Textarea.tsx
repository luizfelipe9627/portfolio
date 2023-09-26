import styles from "./Textarea.module.scss";

interface TextareaProps {
  placeholder: string;
  required?: boolean;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string | null;
}

export default function Textarea({
  placeholder,
  required,
  id,
  name,
  value,
  onChange,
  error,
}: TextareaProps) {
  return (
    <div className={styles.formItem}>
      <div className={styles.group}>
        <textarea
          name={name}
          id={id}
          placeholder={placeholder}
          className={styles.control}
          required={required}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
