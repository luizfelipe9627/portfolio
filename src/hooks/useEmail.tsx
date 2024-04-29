import React from "react";
import emailjs from "@emailjs/browser";

interface useEmailProps {
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
}

const useEmail = () => {
  const [error, setError] = React.useState<string | null>(null);
  const [success, setSuccess] = React.useState<string | null>(null);
  const [timeoutId, setTimeoutId] = React.useState<number | null>(null);

  const sendEmail = async ({ formData }: useEmailProps) => {
    const { name, email, subject, message } = formData;

    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    try {
      await emailjs.send(
        "service_kbmlnav",
        "template_pu73bpu",
        templateParams,
        "8MoajfaFVwn0NMxad",
      );
      setSuccess("Email enviado com sucesso!");
      setError(null);
      const newTimeoutId = setTimeout(() => {
        setSuccess(null);
      }, 3000);
      setTimeoutId(newTimeoutId);
      return true;
    } catch (error) {
      setError("Ocorreu um erro ao enviar o email.");
      setSuccess(null);
      const newTimeoutId = setTimeout(() => {
        setError(null);
      }, 3000);
      setTimeoutId(newTimeoutId);
      return false;
    }
  };

  return { sendEmail, success, error };
};

export default useEmail;
