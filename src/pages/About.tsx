import styles from "./About.module.scss";

import Button from "../components/Button/Button";
import InfoItem from "../components/InfoItem/InfoItem";
import SkillItem from "../components/SkillItem/SkillItem";
import TimelineItem from "../components/TimelineItem/TimelineItem";
import Title from "../components/Title/Title";

export default function About() {
  return (
    <section
      className="containerSection animeLeft"
      style={{ display: "block", left: "270px" }}
    >
      <div className="container">
        <Title title="Sobre mim" />

        <div className={styles.row}>
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.text}>
                <h3>
                  Eu sou o Luiz Felipe e sou <span>Desenvolvedor Web</span>
                </h3>
                <p>
                  Sou um desenvolvedor web front-end com experiência na criação
                  de interfaces de usuário atraentes e funcionais. Ao longo dos
                  anos, adquiri habilidades sólidas em tecnologias atuais. Estou
                  sempre buscando aprender e implementar as melhores práticas no
                  desenvolvimento web para criar experiências de usuário
                  excepcionais.
                </p>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.info}>
                <InfoItem pText="Cidade : " spanText="São Paulo" />
                <InfoItem pText="Estado : " spanText="SP" />
                <InfoItem
                  pText="Email : "
                  aText="felipesilva9627@hotmail.com"
                  aHref="mailto:felipesilva9627@hotmail.com"
                />
                <InfoItem
                  pText="Telefone : "
                  aText="(11) 95235-3969"
                  aHref="tel:5511952353969"
                />
                <InfoItem
                  pText="LinkedIn : "
                  aText="in/luizfelipe9627"
                  aHref="https://www.linkedin.com/in/luizfelipe9627"
                />
                <InfoItem
                  pText="GitHub : "
                  aText="luizfelipe9627"
                  aHref="https://github.com/luizfelipe9627"
                />

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

              <div className={styles.skills}>
                <div className={styles.row}>
                  <SkillItem skill="HTML5" progress="90%" />
                  <SkillItem skill="CSS3" progress="90%" />
                  <SkillItem skill="SASS" progress="80%" />
                  <SkillItem skill="JavaScript" progress="80%" />
                  <SkillItem skill="Git" progress="70%" />
                  <SkillItem skill="Github" progress="80%" />
                  <SkillItem skill="React.JS" progress="80%" />
                  <SkillItem skill="TypeScript" progress="70%" />
                </div>
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.education}>
                <h3 className={styles.title}>Educação</h3>
                <div className={styles.row}>
                  <div className={styles.timeline}>
                    <TimelineItem
                      date="2022 - 2024"
                      title="Análise e Desenvolvimento de Sistemas"
                      subtitle="Tecnólogo"
                      text="Especializado em Análise e Desenvolvimento de Sistemas, com foco em arquitetura de software e desenvolvimento de aplicações. Experiência em modelagem de dados, gestão de projetos e requisitos."
                    />
                  </div>
                </div>
              </div>

              <div className={styles.experience}>
                <h3 className={styles.title}>Experiência</h3>
                <div className={styles.row}>
                  <div className={styles.timeline}>
                    <TimelineItem
                      date="2022 - Atualmente"
                      title="Estagiário de TI"
                      subtitle="Colégio Domus Sapiens"
                      text="Como Estagiário de Tecnologia da Informação no Colégio Domus Sapiens, desempenho papéis essenciais. Auxilio na manutenção de redes e computadores, ofereço suporte técnico a coordenadores, administradores e alunos, e também conduzo a restauração de senhas e e-mails."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
