import styles from "./Profile.module.scss";
import Button from "../Button/Button";
import Typewriter from "typewriter-effect";

interface ProfileProps {
  presentation: string;
  name: string;
  profession: string;
  jobs: Array<string>;
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
  jobs,
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
            <p>{profession}</p>

            <span className={styles.job}>
              <Typewriter
                options={{
                  strings: jobs,
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 60,
                }}
              />
            </span>
          </h3>

          <p>{description}</p>

          <Button href={buttonHref}>{buttonText}</Button>
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
