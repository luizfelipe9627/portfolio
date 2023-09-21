import styles from "./Bio.module.scss";
import Button from "../Button/Button";

export default function Bio() {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.title}>
          <h2>Sobre mim</h2>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.content}>
          <div className={styles.row}>
            <div className={styles.text}>
              <h3>
                Eu sou o Luiz Felipe e sou <span>Desenvolvedor Web</span>
              </h3>
              <p>
                Sou um desenvolvedor web front-end com experiência na criação de
                interfaces de usuário atraentes e funcionais. Ao longo dos anos,
                adquiri habilidades sólidas em tecnologias atuais. Estou sempre
                buscando aprender e implementar as melhores práticas no
                desenvolvimento web para criar experiências de usuário
                excepcionais.
              </p>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <p>Educação : <span>Cursando Técnologo em ADS</span></p>
              </div>
              <div className={styles.infoItem}>
                <p>Cidade : <span>São Paulo</span></p>
              </div>

              <div className={styles.infoItem}>
                <p>Email : <a href="mailto:felipesilva9627@hotmail.com" target="_blank" rel="noopener noreferrer">felipesilva9627@hotmail.com</a></p>
              </div>
              <div className={styles.infoItem}>
                <p>Telefone : <a href="tel:11952353969" target="_blank" rel="noopener noreferrer">(11) 95235-3969</a></p>
              </div>

              <div className={styles.infoItem}>
                <p>Linkedin : <a href="https://www.linkedin.com/in/luizfelipe9627" target="_blank" rel="noopener noreferrer">in/luizfelipe9627</a></p>
              </div>
              <div className={styles.infoItem}>
                <p>GitHub : <a href="https://github.com/luizfelipe9627" target="_blank" rel="noopener noreferrer">luizfelipe9627</a></p>
              </div>

              <Button href="">Baixar CV</Button>
              <Button href="">Contate-me</Button>
            </div>

            <div className={styles.row}>
              <Button href="">Baixar CV</Button>
              <Button href="">Contate-me</Button>
            </div>
  
            <div className={styles.skills}>Habilidades</div>
          </div>
        </div>
      </div>
    </div>
  );
}
