import React from "react";
import Button from "../../components/Button/Button";
import ContactItem from "../../components/ContactItem/ContactItem";
import Input from "../../components/Form/Input";
import Textarea from "../../components/Form/Textarea";
import Title from "../../components/Title/Title";
import styles from "./Contact.module.scss";
import useEmail from "../../hooks/useEmail";
import Error from "../../helper/Error";
import {
  validateInputChange,
  validateInputValue,
} from "../../schema/validateForm";
import {
  nameSchema,
  emailSchema,
  subjectSchema,
  messageSchema,
} from "../../schema/schemaForm";
import Success from "../../helper/Success";

export default function Contact() {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { sendEmail, success, error } = useEmail();

  const handleInputChange = (typeInput: string, value: string) => {
    validateInputChange({
      schema:
        typeInput === "name"
          ? nameSchema
          : typeInput === "email"
          ? emailSchema
          : typeInput === "subject"
          ? subjectSchema
          : messageSchema,
      setInput: (value) => {
        setFormData({ ...formData, [typeInput]: value });
      },
      setError: (error) => {
        setFormErrors({ ...formErrors, [typeInput]: error });
      },
    })(value);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const isNameValid = validateInputValue({
      input: formData.name,
      schema: nameSchema,
      setError: (error) => {
        setFormErrors({ ...formErrors, name: error });
      },
    });

    const isEmailValid = validateInputValue({
      input: formData.email,
      schema: emailSchema,
      setError: (error) => {
        setFormErrors((prevErrors) => ({ ...prevErrors, email: error }));
      },
    });

    const isSubjectValid = validateInputValue({
      input: formData.subject,
      schema: subjectSchema,
      setError: (error) => {
        setFormErrors((prevErrors) => ({ ...prevErrors, subject: error }));
      },
    });

    const isMessageValid = validateInputValue({
      input: formData.message,
      schema: messageSchema,
      setError: (error) => {
        setFormErrors((prevErrors) => ({ ...prevErrors, message: error }));
      },
    });

    if (isNameValid && isEmailValid && isSubjectValid && isMessageValid) {
      setLoading(true);

      const emailResponse = await sendEmail({ formData });

      if (emailResponse) {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }

      setLoading(false);
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
        <h4 className={styles.subtitle}>Minha resposta costuma ser rápida.</h4>

        <div className={styles.row}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <Input
                type="text"
                placeholder="Nome"
                id="name"
                name="name"
                value={formData.name}
                onChange={({ target }) =>
                  handleInputChange("name", target.value)
                }
                error={formErrors.name}
              />
              <Input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={formData.email}
                onChange={({ target }) =>
                  handleInputChange("email", target.value)
                }
                error={formErrors.email}
              />
            </div>

            <div className={styles.row}>
              <Input
                type="text"
                id="subject"
                name="subject"
                placeholder="Assunto"
                value={formData.subject}
                onChange={({ target }) =>
                  handleInputChange("subject", target.value)
                }
                error={formErrors.subject}
              />
            </div>

            <div className={styles.row}>
              <Textarea
                placeholder="Mensagem"
                name="message"
                id="message"
                value={formData.message}
                onChange={({ target }) =>
                  handleInputChange("message", target.value)
                }
                error={formErrors.message}
              />
            </div>

            <div className={styles.row}>
              {loading ? (
                <Button type="submit" disabled>
                  Enviando...
                </Button>
              ) : (
                <Button type="submit">Enviar mensagem</Button>
              )}
              {error && <Error error={error} />}
              {success && <Success success={success} />}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
