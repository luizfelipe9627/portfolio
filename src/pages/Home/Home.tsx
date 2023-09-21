import styles from "./Home.module.scss";
import photo from "../../assets/img/profile.jpg";
import Button from "../../components/Button/Button";

export default function Home() {
  return (
    <section className={styles.home}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.info}>
            <h3 className={styles.hello}>
              Olá, meu nome é <span className={styles.name}>Luiz Felipe</span>
            </h3>
            <h3 className={styles.profession}>
              Sou um <span className={styles.job}>Desenvolvedor Front-end</span>
            </h3>
            <p>
              Tenho dedicado os últimos dois anos ao estudo e prática em
              desenvolvimento front-end. Possuo especialização na criação de
              landing pages funcionais, utilizando as tecnologias mais
              atualizadas disponíveis no mercado.
            </p>

            <Button href="about" buttonText="Entrar em contato" />
          </div>

          <div className={styles.photo}>
            <img src={photo} alt="Foto de Luiz Felipe" />
          </div>
        </div>
      </div>
    </section>
  );
}
