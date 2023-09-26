import React from "react";
import emailjs from "@emailjs/browser";

interface useEmailProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const useEmail = () => {
  const [error, setError] = React.useState<string | null>(null);

  const sendEmail = async ({
    name,
    email,
    subject,
    message,
  }: useEmailProps) => {
    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    try {
      await emailjs.send(
        "service_kbmlnav",
        "template_pu73bpu",
        templateParams,
        "8MoajfaFVwn0NMxad",
      );
      setError(null);
    } catch (error) {
      setError("Ocorreu um erro ao enviar o email.");
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  };

  return { sendEmail, error };
};

export default useEmail;
