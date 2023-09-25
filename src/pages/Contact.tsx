import ContactItem from "../components/ContactItem/ContactItem";
import Title from "../components/Title/Title";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <section className="containerSection animeLeft">
      <div className="container">
        <Title title="Contato" />

        <h3 className={styles.title}>Você tem alguma pergunta?</h3>
        <h4 className={styles.subtitle}>Estou ao seu serviço.</h4>

        <div className={styles.row}>
          <ContactItem
            icon="phone"
            title="Celular"
            subtitle="(11) 95235-3969"
            aHref="tel:5511952353969"
          />
          <ContactItem
            icon="envelope"
            title="Email"
            subtitle="felipesilva9627@hotmail.com"
            aHref="mailto:felipesilva9627@hotmail.com"
          />
          <ContactItem
            icon="map-marker-alt"
            title="Endereço"
            subtitle="São Paulo, SP"
          />
          <ContactItem
            icon="globe-europe"
            title="LinkedIn"
            subtitle="in/luizfelipe9627"
            aHref="https://www.linkedin.com/in/luizfelipe9627"
          />
        </div>

        <h3 className={styles.title}>Me mande um email</h3>
        <h4 className={styles.subtitle}>Eu respondo muito às mensagens.</h4>

        <div className={styles.row}>
          <div className={styles.form}>
            <div className={styles.row}>
              <div className={styles.formItem}>
                <div className={styles.group}>
                  <input type="text" className={styles.control} placeholder="Nome" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
