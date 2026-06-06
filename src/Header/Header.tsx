import "./Header.css";
import konnactivLogo from "../assets/images/Konnactiv-Logo.svg";
import sideBar from "../assets/images/side-bar.svg";
import cross from "../assets/images/cross.svg";
import { NavLink } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";
import { useState } from "react";
import checkCircle from "../assets/images/check-circle.svg";
import file from "../assets/images/file.svg";

export default function Header() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const useContactForm = () => {
    const [formData, setFormData] = useState({
      gender: "",
      name: "",
      phone: "",
      email: "",
      company: "",
      description: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e: any) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
      const newErrors = {};

      if (!formData.email.trim()) {
        newErrors.email = "Pflichtfeld";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Pflichtfeld";
      }

      return newErrors;
    };

    const handleSubmit = (e, onSuccess) => {
      e.preventDefault();
      const validationErrors = validate();
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        onSuccess();
      }
    };

    return {
      formData,
      errors,
      handleChange,
      handleSubmit,
    };
  };

  const SuccessView = () => {
    return (
      <div className="d-flex justify-content-center align-items-center flex-column mt-3">
        <img src={checkCircle} alt="checkCircle" />
        <span className="success-text mt-3">
          Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden
          bei Ihnen zurück.
        </span>
      </div>
    );
  };

  const ContactFormWeb = ({ onSuccess }) => {
    const { formData, errors, handleChange, handleSubmit } = useContactForm();
    const [fileName, setFileName] = useState("");

    return (
      <form
        className="contact-form mt-34"
        onSubmit={(e) => handleSubmit(e, onSuccess)}
      >
        <div className="gender-container">
          {["Herr", "Frau", "Divers"].map((item) => (
            <label key={item} className="gender-option">
              <input
                type="radio"
                name="gender"
                value={item}
                checked={formData.gender === item}
                onChange={handleChange}
              />
              <span className="custom-radio"></span>
              {item}
            </label>
          ))}
        </div>
        <div className="form-group w-100">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <input
              type="email"
              placeholder="Email*"
              value={formData.email}
              onChange={handleChange}
              name="email"
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              placeholder="Telefon"
              value={formData.phone}
              onChange={handleChange}
              name="phone"
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Firma"
            value={formData.company}
            onChange={handleChange}
            name="company"
          />
        </div>

        <div className="form-group w-100">
          <textarea
            placeholder="Ihre Nachricht"
            value={formData.description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>

        <div className="upload">
          <label className="upload-btn">
            <img src={file} alt="file" />
            <span>Anhang</span>
            <input
              type="file"
              hidden
              onChange={(e) => setFileName(e.target.files[0]?.name || "")}
            />
          </label>
          <span className="file-name-text">{fileName || "(Optional)"}</span>
        </div>
        <span className="file-max-size">
          Die maximale Dateigröße beträgt 10 MB.
        </span>
        <div className="form-actions">
          <button className="submit-btn-header w-50">Einreichen</button>
          <button
            type="button"
            className="btn-cancel w-50"
            onClick={() => setIsContactOpen(false)}
          >
            Abbrechen
          </button>
        </div>

        <span className="file-max-size">
          Mit Absenden akzeptieren Sie unsere AGB.
        </span>
      </form>
    );
  };

  const ContactFormMobile = ({ onSuccess }) => {
    const { formData, errors, handleChange, handleSubmit } = useContactForm();

    const [fileName, setFileName] = useState("");

    return (
      <form
        className="contact-form mt-52"
        onSubmit={(e) => handleSubmit(e, onSuccess)}
      >
        <div className="gender-container">
          {["Herr", "Frau", "Divers"].map((item) => (
            <label key={item} className="gender-option">
              <input
                type="radio"
                name="gender"
                value={item}
                checked={formData.gender === item}
                onChange={handleChange}
              />
              <span className="custom-radio"></span>
              {item}
            </label>
          ))}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            name="name"
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            placeholder="Email*"
            value={formData.email}
            onChange={handleChange}
            name="email"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Telefon"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Firma"
            value={formData.company}
            onChange={handleChange}
            name="company"
          />
        </div>

        <div className="form-group w-100">
          <textarea
            placeholder="Ihre Nachricht"
            value={formData.description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>

        <div className="upload">
          <label className="upload-btn">
            <img src={file} alt="file" />
            <span>Anhang</span>
            <input
              type="file"
              hidden
              onChange={(e) => setFileName(e.target.files[0]?.name || "")}
            />
          </label>
          <span className="file-name-text">{fileName || "(Optional)"}</span>
        </div>
        <span className="file-max-size">
          Die maximale Dateigröße beträgt 10 MB.
        </span>
        <div className="form-actions">
          <button className="submit-btn-header w-100">Einreichen</button>
          <button
            type="button"
            className="btn-cancel w-100"
            onClick={() => setIsContactOpen(false)}
          >
            Abbrechen
          </button>
        </div>

        <span className="file-max-size">
          Mit Absenden akzeptieren Sie unsere AGB.
        </span>
      </form>
    );
  };

  return (
    <>
      <header className="header">
        <img src={konnactivLogo} alt="konnactivLogo" />
        {isMobile ? (
          <img
            src={sideBar}
            alt="sideBar"
            onClick={() => setIsMenuOpen(true)}
            className="cursor-pointer"
          />
        ) : (
          <nav className="nav-bar">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-bar-text active" : "nav-bar-text"
              }
            >
              Über Uns
            </NavLink>

            <NavLink
              to="/Products"
              className={({ isActive }) =>
                isActive ? "nav-bar-text active" : "nav-bar-text"
              }
            >
              Produkte
            </NavLink>
            <button
              className="btn-header"
              onClick={() => {
                setIsFormSubmitted(false);
                setIsContactOpen(true);
              }}
            >
              Jetzt Anfragen
            </button>
          </nav>
        )}
      </header>
      {isMobile && isMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-header">
            <img src={konnactivLogo} alt="logo" />
            <img
              src={cross}
              alt="cross"
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          <nav className="mobile-nav">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-bar-text active" : "nav-bar-text"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Über Uns
            </NavLink>

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-bar-text active" : "nav-bar-text"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Produkte
            </NavLink>
            <button
              className="btn-header"
              onClick={() => {
                setIsFormSubmitted(false);
                setIsContactOpen(true);
              }}
            >
              Jetzt Anfragen
            </button>
          </nav>
        </div>
      )}

      {isContactOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <img
              src={cross}
              alt="close"
              className="modal-close cursor-pointer"
              onClick={() => setIsContactOpen(false)}
            />
            {!isFormSubmitted && (
              <>
                <span className="modal-title-form">
                  Senden Sie uns bitte Ihre Anfrage
                </span>
              </>
            )}

            {isFormSubmitted ? (
              <SuccessView />
            ) : isMobile ? (
              <ContactFormMobile onSuccess={() => setIsFormSubmitted(true)} />
            ) : (
              <ContactFormWeb onSuccess={() => setIsFormSubmitted(true)} />
            )}
          </div>
        </div>
      )}
    </>
  );
}
