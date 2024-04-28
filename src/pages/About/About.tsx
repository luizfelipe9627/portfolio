import styles from "./About.module.scss";

import Button from "../../components/Button/Button";
import InfoItem from "../../components/InfoItem/InfoItem";
import SkillItem from "../../components/SkillItem/SkillItem";
import TimelineItem from "../../components/TimelineItem/TimelineItem";
import Title from "../../components/Title/Title";

import {
  css,
  html,
  javascript,
  react,
  redux,
  styledcomponents,
  tailwindcss,
  typescript,
  vite,
  sass,
  gulp,
  figma,
  node,
  mysql,
  mongodb,
  prisma,
  fastify,
  webpack,
  express,
  docker,
  git,
  github,
} from "../../utils/icons";

export default function About() {
  const skills = [
    {
      skill: "HTML",
      icon: html,
      href: "https://developer.mozilla.org/pt-BR/docs/Web/HTML",
    },
    {
      skill: "CSS",
      icon: css,
      href: "https://developer.mozilla.org/pt-BR/docs/Web/CSS",
    },
    { skill: "SASS", icon: sass, href: "https://sass-lang.com/" },
    {
      skill: "JavaScript",
      icon: javascript,
      href: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
    },
    { skill: "Gulp", icon: gulp, href: "https://gulpjs.com/" },
    { skill: "Webpack", icon: webpack, href: "https://webpack.js.org/" },
    { skill: "React.js", icon: react, href: "https://reactjs.org/" },
    { skill: "Vite", icon: vite, href: "https://vitejs.dev/" },
    {
      skill: "Styled Components",
      icon: styledcomponents,
      href: "https://styled-components.com/",
    },
    {
      skill: "TypeScript",
      icon: typescript,
      href: "https://www.typescriptlang.org/",
    },
    { skill: "Redux", icon: redux, href: "https://redux.js.org/" },

    {
      skill: "Tailwind CSS",
      icon: tailwindcss,
      href: "https://tailwindcss.com/",
    },
    { skill: "Figma", icon: figma, href: "https://www.figma.com/" },
    { skill: "Node.js", icon: node, href: "https://nodejs.org/en/" },
    { skill: "Express.js", icon: express, href: "https://expressjs.com/" },
    { skill: "MongoDB", icon: mongodb, href: "https://www.mongodb.com/" },
    { skill: "MySQL", icon: mysql, href: "https://www.mysql.com/" },
    { skill: "Prisma", icon: prisma, href: "https://www.prisma.io/" },
    { skill: "Fastify", icon: fastify, href: "https://www.fastify.io/" },
    { skill: "Docker", icon: docker, href: "https://www.docker.com/" },
    { skill: "Git", icon: git, href: "https://git-scm.com/" },
    { skill: "GitHub", icon: github, href: "https://github.com/" },
  ];

  return (
    <section
      className="containerSection animeLeft"
      style={{ display: "block", left: "16.875rem" }}
    >
      <div className="container">
        <Title title="Sobre mim" />

        <div className={styles.row}>
          <div className={styles.content}>
            <div className={styles.row}>
              <div className={styles.text}>
                <h3>
                  Me chamo Luiz Felipe e sou <span>Desenvolvedor Web</span>
                </h3>
                <p>
                  Sou um Desenvolvedor FullStack, apaixonado por tecnologia e
                  programação. Atualmente, estou no meu último ano Análise e
                  Desenvolvimento de Sistemas. Estou sempre em busca de novos
                  desafios e oportunidades para aprimorar minhas habilidades e
                  conhecimentos.
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
                  <Button href="contact">Contate-me</Button>
                </div>
              </div>

              <div className={styles.skills}>
                <div className={styles.row}>
                  {skills.map((skill, index) => (
                    <SkillItem
                      key={index}
                      skill={skill.skill}
                      icon={skill.icon}
                      href={skill.href}
                    />
                  ))}
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
                      date="2022 - 2024"
                      title="Estagiário de TI"
                      subtitle="Colégio Domus Sapientiae"
                      text="Como Estagiário de Tecnologia da Informação no Colégio Domus Sapientiae, desempenho papéis essenciais. Auxilio na manutenção de redes e computadores, ofereço suporte técnico a coordenadores, administradores e alunos, e também conduzo a restauração de senhas e e-mails."
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
