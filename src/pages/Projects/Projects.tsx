import styles from "./Projects.module.scss";

import img1 from "../../assets/img/portfolio-1.webp";
import img2 from "../../assets/img/portfolio-2.webp";
import img3 from "../../assets/img/portfolio-3.webp";
import img4 from "../../assets/img/portfolio-4.webp";
import img5 from "../../assets/img/portfolio-5.webp";
import img6 from "../../assets/img/portfolio-6.webp";
import img7 from "../../assets/img/portfolio-7.webp";
import img8 from "../../assets/img/portfolio-8.webp";
import img9 from "../../assets/img/portfolio-9.webp";
import img10 from "../../assets/img/portfolio-10.webp";
import img11 from "../../assets/img/portfolio-11.webp";
import img12 from "../../assets/img/portfolio-12.webp";
import img13 from "../../assets/img/portfolio-13.webp";

import html from "../../assets/svg/html.svg";
import css from "../../assets/svg/css.svg";
import javascript from "../../assets/svg/javascript.svg";
import react from "../../assets/svg/react.svg";
import typescript from "../../assets/svg/typescript.svg";
import sass from "../../assets/svg/sass.svg";
import webpack from "../../assets/svg/webpack.svg";
import gulp from "../../assets/svg/gulp.svg";
import eslint from "../../assets/svg/eslint.svg";
import styledComponents from "../../assets/svg/styled-components.svg";

import ProjectItem from "../../components/ProjectItem/ProjectItem";
import Title from "../../components/Title/Title";

export default function Projects() {
  return (
    <section className="containerSection animeLeft">
      <div className="container">
        <Title title="Projetos" />

        <div className={styles.heading}>
          <h2>Meus últimos projetos :</h2>
        </div>

        <div className={styles.row}>
          <ProjectItem
            img={img13}
            alt="Blogames"
            href="https://luizfelipe9627-blogames.netlify.app"
            skill={["React.JS", "Styled Components", "Eslint"]}
            icon={[react, styledComponents, eslint]}
          />

          <ProjectItem
            img={img12}
            alt="Naped"
            href="https://luizfelipe9627-naped.netlify.app"
            skill={["React.JS", "CSS3", "Eslint"]}
            icon={[react, css, eslint]}
          />
          <ProjectItem
            img={img11}
            alt="Dogs"
            href="https://luizfelipe9627-dogs.netlify.app"
            skill={["React.JS", "CSS3", "Eslint"]}
            icon={[react, css, eslint]}
          />
          <ProjectItem
            img={img10}
            alt="Ranek"
            href="https://luizfelipe9627-ranek.netlify.app"
            skill={["React.JS", "CSS3", "Eslint"]}
            icon={[react, css, eslint]}
          />
          <ProjectItem
            img={img9}
            alt="Steam"
            href="https://luizfelipe9627-steam-redesign.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript", "Webpack", "Eslint"]}
            icon={[html, css, javascript, webpack, eslint]}
          />
          <ProjectItem
            img={img8}
            alt="Animais Fantásticos"
            href="https://luizfelipe9627-animais-fantasticos.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript", "Webpack", "Eslint"]}
            icon={[html, css, javascript, webpack, eslint]}
          />
          <ProjectItem
            img={img7}
            alt="Calculadora"
            href="https://luizfelipe9627-calculadora.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript", "Webpack", "Eslint"]}
            icon={[html, css, javascript, webpack, eslint]}
          />
          <ProjectItem
            img={img6}
            alt="Bikcraft"
            href="https://luizfelipe9627-bikcraft-2.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript"]}
            icon={[html, css, javascript]}
          />
          <ProjectItem
            img={img5}
            alt="SAC"
            href="https://luizfelipe9627-simulador-sac.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript"]}
            icon={[html, css, javascript]}
          />
          <ProjectItem
            img={img4}
            alt="Super Mario"
            href="https://luizfelipe9627-super-mario.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript"]}
            icon={[html, css, javascript]}
          />
          <ProjectItem
            img={img3}
            alt="M3 Academy"
            href="https://luizfelipe9627-react-e-typescript-m3.netlify.app"
            skill={["React.JS", "TypeScript", "SASS", "Eslint"]}
            icon={[react, typescript, sass, eslint]}
          />
          <ProjectItem
            img={img2}
            alt="Tourist Attractions"
            href="https://luizfelipe9627-tourist-attractions-m3.netlify.app"
            skill={["HTML5", "SASS", "JavaScript", "Gulp"]}
            icon={[html, sass, javascript, gulp]}
          />
          <ProjectItem
            img={img1}
            alt="Riot Games"
            href="https://luizfelipe9627-login-lol.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript"]}
            icon={[html, css, javascript]}
          />
        </div>
      </div>
    </section>
  );
}
