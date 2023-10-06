import ServiceItem from "../../components/ServiceItem/ServiceItem";
import Title from "../../components/Title/Title";
import styles from "./Services.module.scss";

export default function Services() {
  return (
    <section className="containerSection animeLeft">
      <div className="container">
        <Title title="Serviços" />

        <div className={styles.row}>
          <ServiceItem
            title="Desenvolvimento Web Profissional"
            description="Criação de sites e sistemas web otimizados e de alta qualidade."
            icon="laptop-code"
          />
          <ServiceItem
            title="Desenvolvimento de Interfaces Responsivas"
            description="Criação de layouts adaptáveis para proporcionar uma experiência consistente em diferentes dispositivos."
            icon="mobile"
          />

          <ServiceItem
            title="E-commerce"
            description="Criação de plataformas de comércio eletrônico seguras e intuitivas."
            icon="shopping-cart"
          />
          <ServiceItem
            title="Integrações de API"
            description="Integração de APIs para melhorar a funcionalidade e experiência do usuário."
            icon="code"
          />
        </div>
      </div>
    </section>
  );
}
