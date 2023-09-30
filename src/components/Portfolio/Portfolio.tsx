import styles from "./Portfolio.module.scss";
import img1 from "../../assets/img/portfolio-1.jpg";
import img2 from "../../assets/img/portfolio-2.jpg";
import img3 from "../../assets/img/portfolio-3.jpg";
import img4 from "../../assets/img/portfolio-4.jpg";
import img5 from "../../assets/img/portfolio-5.jpg";
import img6 from "../../assets/img/portfolio-6.jpg";

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
          <PortfolioItem img={img1} alt="Projeto 1" href="" />
          <PortfolioItem img={img2} alt="Projeto 2" href="" />
          <PortfolioItem img={img3} alt="Projeto 3" href="" />
          <PortfolioItem img={img4} alt="Projeto 4" href="" />
          <PortfolioItem img={img5} alt="Projeto 5" href="" />
          <PortfolioItem img={img6} alt="Projeto 6" href="" />
        </div>
      </div>
    </section>
  );
}
