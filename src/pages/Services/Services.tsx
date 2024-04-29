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
            title="Implementação de Formulários Interativos"
            description="Criação de formulários com validação de dados e feedback visual em tempo real."
            icon="fas fa-file-alt"
          />
          <ServiceItem
            title="Desenvolvimento de Interfaces Responsivas"
            description="Criação de layouts adaptáveis para proporcionar uma experiência consistente em diferentes dispositivos."
            icon="fas fa-mobile-alt"
          />
          <ServiceItem
            title="Desenvolvimento de Componentes Interativos"
            description="Criação de componentes front-end interativos como sliders, modais, carrosséis, entre outros."
            icon="fas fa-cogs"
          />
          <ServiceItem
            title="Integrações de API"
            description="Integração de APIs para melhorar a funcionalidade e experiência do usuário."
            icon="fas fa-code"
          />
          <ServiceItem
            title="Desenvolvimento de Portfólios Online"
            description="Criação de sites personalizados para exibir o trabalho e as habilidades de profissionais em diversas áreas."
            icon="fas fa-suitcase"
          />
          <ServiceItem
            title="Desenvolvimento de Páginas de 404"
            description="Criação de páginas de erro personalizadas para manter os usuários engajados em caso de página não encontrada."
            icon="fas fa-exclamation-triangle"
          />
          <ServiceItem
            title="Implementação de Páginas de Confirmação"
            description="Criação de páginas que aparecem após uma ação específica do usuário, como o envio de um formulário."
            icon="far fa-check-circle"
          />
          <ServiceItem
            title="Animações Front-End"
            description="Transforme sua interface em uma obra de arte animada, proporcionando uma experiência de usuário envolvente e sofisticada."
            icon="fas fa-paint-brush"
          />
           <ServiceItem
            title="Desenvolvimento de APIs Restful"
            description="Criação de APIs RESTful robustas para interconectar o front-end e o back-end."
            icon="fas fa-code-branch"
          />
          <ServiceItem
            title="Configuração de Bancos de Dados"
            description="Configuração de bancos de dados SQL ou NoSQL como MySQL ou MongoDB."
            icon="fas fa-database"
          />
          <ServiceItem
            title="Autenticação e Autorização"
            description="Implementação de sistemas de autenticação e autorização seguros, como JWT."
            icon="fas fa-lock"
          />
          <ServiceItem
            title="Desenvolvimento de CRUD Operations"
            description="Criação de operações CRUD (Create, Read, Update, Delete) para manipulação de dados."
            icon="fas fa-server"
          />
        </div>
      </div>
    </section>
  );
}
