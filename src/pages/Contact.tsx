import { useState } from "react";
import Button from "../components/Button/Button";
import ContactItem from "../components/ContactItem/ContactItem";
import Input from "../components/Form/Input";
import Textarea from "../components/Form/Textarea";
import Title from "../components/Title/Title";
import styles from "./Contact.module.scss";
import useEmail from "../hooks/useEmail";
import Error from "../helper/Error";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const { sendEmail, error } = useEmail();

  const [errorEmail, setErrorEmail] = useState<string | null>(null);
  const [errorName, setErrorName] = useState<string | null>(null);
  const [errorSubject, setErrorSubject] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (name === "") {
      setErrorName("O campo nome é obrigatório.");

      setTimeout(() => {
        setErrorName(null);
      }, 3000);
      return;
    }

    if (email === "") {
      setErrorEmail("O campo email é obrigatório.");
      setTimeout(() => {
        setErrorEmail(null);
      }, 3000);
      return;
    }

    if (subject === "") {
      setErrorSubject("O campo assunto é obrigatório.");
      setTimeout(() => {
        setErrorSubject(null);
      }, 3000);
      return;
    }

    if (message === "") {
      setErrorMessage("O campo mensagem é obrigatório.");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return;
    }

    await sendEmail({ name, email, subject, message });

    if (error === null) {
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
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
                error={errorName}
              />
              <Input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errorEmail}
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
                error={errorSubject}
              />
            </div>

            <div className={styles.row}>
              <Textarea
                placeholder="Mensagem"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={errorMessage}
              />
            </div>

            <div className={styles.row}>
              <Button type="submit">Enviar mensagem</Button>
              <Error error={error} />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
