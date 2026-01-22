import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const useEmailService = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    onSuccess?: () => void
  ) => {
    e.preventDefault();
    console.log("Form submission triggered");
    setIsLoading(true);

    if (form.current) {
      console.log("Form reference is valid");
      // TODO: Replace with your EmailJS credentials
      console.log("Sending email...");
      emailjs
        .sendForm(
          "service_lwgoq7n",
          "template_s84lag5",
          form.current,
          "wU-_5ST--T5_WkTuW"
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            if (onSuccess) {
              onSuccess();
            }
            setIsLoading(false);
          },
          (error) => {
            console.error("Failed to send email:", error.text);
            setIsLoading(false);
          }
        );
    } else {
      console.error("Form reference is not valid");
      setIsLoading(false);
    }
  };

  return { form, handleFormSubmit, isLoading };
};

export default useEmailService;
