import styles from "./Profile.module.scss";
import Button from "../Button/Button";

interface ProfileProps {
  presentation: string;
  name: string;
  profession: string;
  job: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  photo?: string;
  alt?: string;
}

export default function Profile({
  presentation,
  name,
  profession,
  job,
  description,
  buttonText,
  buttonHref,
  photo,
  alt,
}: ProfileProps) {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.info}>
          <h3 className={styles.hello}>
            {presentation} <span className={styles.name}>{name}</span>
          </h3>

          <h3 className={styles.profession}>
            {profession} <span className={styles.job}>{job}</span>
          </h3>

          <p>{description}</p>

          <Button link={buttonHref}>{buttonText}</Button>
        </div>

        {photo && (
          <div className={styles.photo}>
            <img src={photo} alt={alt} />
          </div>
        )}
      </div>
    </div>
  );
}
