import styles from "./Portfolio.module.scss";
import img1 from "../../assets/img/portfolio-1.jpg";
import img2 from "../../assets/img/portfolio-2.jpg";
import img3 from "../../assets/img/portfolio-3.jpg";
import img4 from "../../assets/img/portfolio-4.jpg";
import img5 from "../../assets/img/portfolio-5.jpg";
import img6 from "../../assets/img/portfolio-6.jpg";
import img7 from "../../assets/img/portfolio-7.jpg";
import img8 from "../../assets/img/portfolio-8.jpg";
import img9 from "../../assets/img/portfolio-9.jpg";
import img10 from "../../assets/img/portfolio-10.jpg";
import img11 from "../../assets/img/portfolio-11.jpg";
import img12 from "../../assets/img/portfolio-12.jpg";

import PortfolioItem from "../PortfolioItem/PortfolioItem";
import Title from "../Title/Title";

export default function Portfolio() {
  return (
    <section className="containerSection animeLeft" id="portfolio">
      <div className="container">
        <Title title="Portfólio" />

        <div className={styles.heading}>
          <h2>Meus últimos projetos :</h2>
        </div>

        <div className={styles.row}>
          <PortfolioItem
            img={img1}
            alt="Naped"
            href="https://luizfelipe9627-naped.netlify.app"
          />
          <PortfolioItem
            img={img2}
            alt="Dogs"
            href="https://luizfelipe9627-dogs.netlify.app"
          />
          <PortfolioItem
            img={img3}
            alt="Ranek"
            href="https://luizfelipe9627-ranek.netlify.app"
          />
          <PortfolioItem
            img={img4}
            alt="Steam"
            href="https://luizfelipe9627-steam-redesign.netlify.app"
          />
          <PortfolioItem
            img={img5}
            alt="Animais Fantásticos"
            href="https://luizfelipe9627-animais-fantasticos.netlify.app"
          />
          <PortfolioItem
            img={img6}
            alt="Calculadora"
            href="https://luizfelipe9627-calculadora.netlify.app"
          />
          <PortfolioItem
            img={img7}
            alt="Bikcraft"
            href="https://luizfelipe9627-bikcraft-2.netlify.app"
          />
          <PortfolioItem
            img={img8}
            alt="SAC"
            href="https://luizfelipe9627-simulador-sac.netlify.app"
          />
          <PortfolioItem
            img={img9}
            alt="Super Mario"
            href="https://luizfelipe9627-super-mario.netlify.app"
          />
          <PortfolioItem
            img={img10}
            alt="M3 Academy"
            href="https://luizfelipe9627-react-e-typescript-m3.netlify.app"
          />
          <PortfolioItem
            img={img11}
            alt="Tourist Attractions"
            href="https://luizfelipe9627-tourist-attractions-m3.netlify.app"
          />
          <PortfolioItem
            img={img12}
            alt="Riot Games"
            href="https://luizfelipe9627-login-lol.netlify.app/"
          />
        </div>
      </div>
    </section>
  );
}
