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
                <p>
                  Cidade : <span>São Paulo</span>
                </p>
              </div>
              <div className={styles.infoItem}>
                <p>
                  Estado : <span>SP</span>
                </p>
              </div>

              <div className={styles.infoItem}>
                <p>
                  Email :{" "}
                  <a
                    href="mailto:felipesilva9627@hotmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    felipesilva9627@hotmail.com
                  </a>
                </p>
              </div>
              <div className={styles.infoItem}>
                <p>
                  Telefone :{" "}
                  <a
                    href="tel:11952353969"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    (11) 95235-3969
                  </a>
                </p>
              </div>

              <div className={styles.infoItem}>
                <p>
                  Linkedin :{" "}
                  <a
                    href="https://www.linkedin.com/in/luizfelipe9627"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    in/luizfelipe9627
                  </a>
                </p>
              </div>
              <div className={styles.infoItem}>
                <p>
                  GitHub :{" "}
                  <a
                    href="https://github.com/luizfelipe9627"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    luizfelipe9627
                  </a>
                </p>
              </div>

              <div className={styles.row}>
                <div className={styles.buttons}>
                  <Button
                    href="https://drive.usercontent.google.com/download?id=1_TrhoOqfIlQie-kBNXyTeolIh67-gNiM&export=download&authuser=0&confirm=t&uuid=c07fd05e-d086-480c-adef-550642ee1dcd&at=APZUnTXd9m_S_lgmXVNSgbW2cb4p:1695338086061"
                    download
                  >
                    Baixar CV
                  </Button>
                  <Button link="contact">Contate-me</Button>
                </div>
              </div>
            </div>

            <div className={styles.skills}>
              <div className={styles.row}>
                <div className={styles.skillItem}>
                  <h5>HTML5</h5>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressIn}
                      style={{ width: "90%" }}
                    ></div>
                    <div className={styles.percentage}>90%</div>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <h5>CSS3</h5>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressIn}
                      style={{ width: "90%" }}
                    ></div>
                    <div className={styles.percentage}>90%</div>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <h5>SASS</h5>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressIn}
                      style={{ width: "80%" }}
                    ></div>
                    <div className={styles.percentage}>80%</div>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <h5>JavaScript</h5>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressIn}
                      style={{ width: "80%" }}
                    ></div>
                    <div className={styles.percentage}>80%</div>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <h5>Git</h5>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressIn}
                      style={{ width: "70%" }}
                    ></div>
                    <div className={styles.percentage}>70%</div>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <h5>Github</h5>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressIn}
                      style={{ width: "80%" }}
                    ></div>
                    <div className={styles.percentage}>80%</div>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <h5>React.JS</h5>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressIn}
                      style={{ width: "80%" }}
                    ></div>
                    <div className={styles.percentage}>80%</div>
                  </div>
                </div>

                <div className={styles.skillItem}>
                  <h5>TypeScript</h5>
                  <div className={styles.progress}>
                    <div
                      className={styles.progressIn}
                      style={{ width: "70%" }}
                    ></div>
                    <div className={styles.percentage}>70%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.education}>
              <h3 className={styles.title}>Educação</h3>
              <div className={styles.row}>
                <div className={styles.timelineBox}>
                  <div className={styles.timeline}>Linha do tempo</div>
                </div>
              </div>
            </div>
            <div className={styles.experience}>
              <h3 className={styles.title}>Experiência</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
