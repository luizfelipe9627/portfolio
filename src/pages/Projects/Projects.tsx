import styles from "./Projects.module.scss";

// Adicionar os projetos:
// Obs.: Ainda está faltando 3 projetos que tem pendências.
import Awax from "../../assets/img/awax.webp";
import Bikcraft from "../../assets/img/bikcraft.webp";
import CampinhoBlog from "../../assets/img/campinhoblog.webp";
import CarrosBicicletas from "../../assets/img/carros-e-bicicletas.webp";
import Codelandia from "../../assets/img/codelandia.webp";
import Count from "../../assets/img/count.webp";
import Disney from "../../assets/img/disney.webp";
import Fantastika from "../../assets/img/fantastika.webp";
import Flexblog from "../../assets/img/flexblog.webp";
import Freshmanstore from "../../assets/img/freshmanstore.webp";
import GetCoffee from "../../assets/img/getcoffee.webp";
import Inverno from "../../assets/img/inverno.webp";
import Jordanshoes from "../../assets/img/jordanshoes.webp";
import LandingPageM3Academy from "../../assets/img/landing-page-m3-academy.webp";
import LandingPageM3 from "../../assets/img/landing-page-m3.webp";
import Pizzaria from "../../assets/img/pizzaria.webp";
import PlanPage from "../../assets/img/plan-page.webp";
import PortfolioStartse from "../../assets/img/portfolio-startse.webp";
import Porfolio2 from "../../assets/img/portfolio2.webp";
import Quiz from "../../assets/img/quiz.webp";
import Rocketcoffee from "../../assets/img/rocketcoffee.webp";
import Selfcare from "../../assets/img/selfcare.webp";
import Slideshow from "../../assets/img/slideshow.webp";
import SlideShow2 from "../../assets/img/slideshow2.webp";
import Starbucks from "../../assets/img/starbucks.webp";
import Startse from "../../assets/img/startse.webp";
import TheWitcher from "../../assets/img/the-witcher.webp";
import ToDoList from "../../assets/img/to-do-list.webp";
import UrnaEletronica from "../../assets/img/urna-eletronica.webp";
import ValidadorForm from "../../assets/img/validador-form.webp";
import Wildbeast from "../../assets/img/wildbeast.webp";

import RiotGames from "../../assets/img/riot-games.webp";
import TouristAttractions from "../../assets/img/tourist-attractions.webp";
import M3Academy from "../../assets/img/m3-academy.webp";
import SuperMario from "../../assets/img/super-mario.webp";
import SAC from "../../assets/img/sac.webp";
import Bikcraft2 from "../../assets/img/bikcraft2.webp";
import Calculadora from "../../assets/img/calculadora.webp";
import AnimaisFantasticos from "../../assets/img/animais-fantasticos.webp";
import Steam from "../../assets/img/steam.webp";
import Ranek from "../../assets/img/ranek.webp";
import Dogs from "../../assets/img/dogs.webp";
import Naped from "../../assets/img/naped.webp";
import Blogames from "../../assets/img/blogames.webp";
import Calculadora2 from "../../assets/img/calculadora2.webp";
import FormPesquisa from "../../assets/img/formulario-pesquisa.webp";
import Dados from "../../assets/img/dados.webp";
import SlideStories from "../../assets/img/slide-stories.webp";

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
            img={SlideStories}
            alt="Slide Stories"
            href="https://luizfelipe9627-slide-stories-origamid.netlify.app"
            skill={["HTML", "CSS", "TypeScript"]}
            icon={[html, css, typescript]}
          />
          <ProjectItem
            img={Dados}
            alt="Dados"
            href="https://luizfelipe9627-dados-origamid.netlify.app"
            skill={["HTML", "CSS", "TypeScript"]}
            icon={[html, css, typescript]}
          />
          <ProjectItem
            img={FormPesquisa}
            alt="Formulário de Pesquisa"
            href="https://luizfelipe9627-formulario-pesquisa.netlify.app"
            skill={["HTML", "CSS", "TypeScript"]}
            icon={[html, css, typescript]}
          />
          <ProjectItem
            img={Calculadora2}
            alt="Calculadora"
            href="https://luizfelipe9627-calculadora-vnw.netlify.app"
            skill={["React.JS", "Styled Components", "Eslint"]}
            icon={[react, styledComponents, eslint]}
          />
          <ProjectItem
            img={Blogames}
            alt="Blogames"
            href="https://luizfelipe9627-blogames.netlify.app"
            skill={["React.JS", "Styled Components", "Eslint"]}
            icon={[react, styledComponents, eslint]}
          />
          <ProjectItem
            img={Naped}
            alt="Naped"
            href="https://luizfelipe9627-naped.netlify.app"
            skill={["React.JS", "CSS3", "Eslint"]}
            icon={[react, css, eslint]}
          />
          <ProjectItem
            img={Dogs}
            alt="Dogs"
            href="https://luizfelipe9627-dogs.netlify.app"
            skill={["React.JS", "CSS3", "Eslint"]}
            icon={[react, css, eslint]}
          />
          <ProjectItem
            img={Ranek}
            alt="Ranek"
            href="https://luizfelipe9627-ranek.netlify.app"
            skill={["React.JS", "CSS3", "Eslint"]}
            icon={[react, css, eslint]}
          />
          <ProjectItem
            img={Steam}
            alt="Steam"
            href="https://luizfelipe9627-steam-redesign.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript", "Webpack", "Eslint"]}
            icon={[html, css, javascript, webpack, eslint]}
          />
          <ProjectItem
            img={AnimaisFantasticos}
            alt="Animais Fantásticos"
            href="https://luizfelipe9627-animais-fantasticos.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript", "Webpack", "Eslint"]}
            icon={[html, css, javascript, webpack, eslint]}
          />
          <ProjectItem
            img={Calculadora}
            alt="Calculadora"
            href="https://luizfelipe9627-calculadora.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript", "Webpack", "Eslint"]}
            icon={[html, css, javascript, webpack, eslint]}
          />
          <ProjectItem
            img={Bikcraft2}
            alt="Bikcraft"
            href="https://luizfelipe9627-bikcraft-2.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript"]}
            icon={[html, css, javascript]}
          />
          <ProjectItem
            img={SAC}
            alt="SAC"
            href="https://luizfelipe9627-simulador-sac.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript"]}
            icon={[html, css, javascript]}
          />
          <ProjectItem
            img={SuperMario}
            alt="Super Mario"
            href="https://luizfelipe9627-super-mario.netlify.app"
            skill={["HTML5", "CSS3", "JavaScript"]}
            icon={[html, css, javascript]}
          />
          <ProjectItem
            img={M3Academy}
            alt="M3 Academy"
            href="https://luizfelipe9627-react-e-typescript-m3.netlify.app"
            skill={["React.JS", "TypeScript", "SASS", "Eslint"]}
            icon={[react, typescript, sass, eslint]}
          />
          <ProjectItem
            img={TouristAttractions}
            alt="Tourist Attractions"
            href="https://luizfelipe9627-tourist-attractions-m3.netlify.app"
            skill={["HTML5", "SASS", "JavaScript", "Gulp"]}
            icon={[html, sass, javascript, gulp]}
          />
          <ProjectItem
            img={RiotGames}
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
