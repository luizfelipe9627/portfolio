import { useState } from "react";
import Button from "../components/Button/Button";
import ContactItem from "../components/ContactItem/ContactItem";
import Input from "../components/Form/Input";
import Textarea from "../components/Form/Textarea";
import Title from "../components/Title/Title";
import styles from "./Contact.module.scss";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_kbmlnav",
        "template_pu73bpu",
        templateParams,
        "8MoajfaFVwn0NMxad",
      )
      .then(
        (response) => {
          console.log(
            "Mensagem enviada com sucesso!",
            response.status,
            response.text,
          );
        },
        (err) => {
          console.log("Ocorreu um erro ao enviar a mensagem...", err);
        },
      );

    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  }

  return (
    <section className="containerSection animeLeft">
      <div className="container">
        <Title title="Contato" />

        <h3 className={styles.title}>Você tem alguma pergunta?</h3>
        <h4 className={styles.subtitle}>Estou ao seu serviço.</h4>

        <div className={styles.rowContact}>
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
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <Input
                type="text"
                placeholder="Nome"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.row}>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Assunto"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className={styles.row}>
              <Textarea
                placeholder="Mensagem"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className={styles.row}>
              <Button type="submit">Enviar mensagem</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
