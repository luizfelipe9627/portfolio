import Profile from "../../components/Profile/Profile";
import photo from "../../assets/img/profile.webp";

export default function Home() {
  return (
    <section
      className="containerSection animeLeft"
      style={{ display: "flex" }}
      id="home"
    >
      <div className="container">
        <Profile
          presentation="Olá, meu nome é"
          name="Luiz Felipe"
          profession="Sou um"
          jobs={["Desenvolvedor Web", "Desenvolvedor Front-end"]}
          description=" Tenho dedicado os últimos dois anos ao estudo e prática em desenvolvimento web front-end. Possuo especialização na criação de landing pages funcionais, utilizando as tecnologias mais atualizadas disponíveis no mercado."
          buttonHref="contact"
          buttonText="Entrar em contato"
          photo={photo}
          alt="Foto de Luiz Felipe"
        />
      </div>
    </section>
  );
}
