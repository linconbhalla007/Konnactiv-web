import { useState } from "react";

const useContactForm = () => {
  const [formData, setFormData] = useState({
    gender: "",
    name: "",
    phone: "",
    email: "",
    company: "",
    description: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email.trim()) {
      newErrors.email = "Pflichtfeld";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Pflichtfeld";
    }

    return newErrors;
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    callback?: () => void
  ) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (callback) {
        callback();
      }
    }
  };

  return {
    formData,
    errors,
    isSubmitted,
    handleChange,
    handleSubmit,
    setFormData,
    setIsSubmitted,
  };
};

export default useContactForm;
