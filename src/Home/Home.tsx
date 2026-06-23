import "./Home.css";
import cable from "../assets/images/cable.png";
import cableConnector from "../assets/images/cable-connector.png";
import email from "../assets/images/email.svg";
import phone from "../assets/images/phone.svg";
import location from "../assets/images/location.svg";
import file from "../assets/images/file.svg";
import checkCircle from "../assets/images/check-circle.svg";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useWindowWidth from "../hooks/useWindowWidth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useContactForm from "../hooks/useContactForm";
import useEmailService from "../services/useEmail";
import product1 from "../assets/images/product1.svg";
import product2 from "../assets/images/product2.svg";
import product3 from "../assets/images/product3.svg";
import product4 from "../assets/images/product4.svg";

const products = [
  {
    id: 1,
    title: "Kabelkonfektionen",
    img: product4,
  },
  {
    id: 2,
    title: "Kabelbäume",
    img: product3,
  },
  {
    id: 3,
    title: "Daten & Signalkabel",
    img: product2,
  },
  {
    id: 4,
    title: "Prototypen",
    img: product1,
  },
];

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

const Loader = () => (
  <div className="d-flex justify-content-center align-items-center">
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export const ContactFormWeb = () => {
  const {
    formData,
    errors,
    isSubmitted,
    handleChange,
    handleSubmit,
    setIsSubmitted,
  } = useContactForm();
  const { handleFormSubmit, form, isLoading } = useEmailService();
  const [fileName, setFileName] = useState("");

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e, () => {
      handleFormSubmit(e, () => {
        setIsSubmitted(true);
      });
    });
  };

  if (isLoading) return <Loader />;
  if (isSubmitted) return <SuccessView />;
  return (
    <form className="contact-form" onSubmit={onFormSubmit} ref={form}>
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
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
        </label>
        <span className="file-name-text">{fileName || "(Optional)"}</span>
      </div>
      <span className="file-max-size">
        Die maximale Dateigröße beträgt 10 MB.
      </span>
      <button className="submit-btn">Einreichen</button>

      <span className="file-max-size">
        Mit Absenden akzeptieren Sie unsere AGB.
      </span>
    </form>
  );
};

const ContactFormMobile = () => {
  const {
    formData,
    errors,
    isSubmitted,
    handleChange,
    handleSubmit,
    setIsSubmitted,
  } = useContactForm();

  const { form, handleFormSubmit, isLoading } = useEmailService();

  const [fileName, setFileName] = useState("");

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e, () => {
      handleFormSubmit(e, () => {
        setIsSubmitted(true);
      });
    });
  };

  if (isLoading) return <Loader />;
  if (isSubmitted) return <SuccessView />;

  return (
    <form className="contact-form mt-52" onSubmit={onFormSubmit} ref={form}>
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
            onChange={(e) => setFileName(e.target.files?.[0]?.name || "")}
          />
        </label>
        <span className="file-name-text">{fileName || "(Optional)"}</span>
      </div>
      <span className="file-max-size">
        Die maximale Dateigröße beträgt 10 MB.
      </span>
      <button className="submit-btn">Einreichen</button>

      <span className="file-max-size">
        Mit Absenden akzeptieren Sie unsere AGB.
      </span>
    </form>
  );
};

export default function Home() {
  const [index, setIndex] = useState(0);
  const prev = () =>
    setIndex((prev) => (prev === 0 ? products.length - 1 : prev - 1));

  const next = () =>
    setIndex((prev) => (prev === products.length - 1 ? 0 : prev + 1));

  const width = useWindowWidth();
  const isMobile = width < 768;
  const navigate = useNavigate();
  const contactSection = useLocation();

  useEffect(() => {
    if (contactSection.state?.scrollTo === "contact") {
      setTimeout(() => {
        document
          .getElementById("contact-section")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [contactSection]);

  const handleAboutClick = () => {
    navigate("/about");
  };
  return (
    <>
      {!isMobile ? (
        <div>
          <Header />

          <div className="d-flex align-items-center justify-content-between cable-container home-page-padding">
            <div className="d-flex flex-column justify-content-start align-items-start cable-wrapper">
              <span className="cable-assembly-text">
                Kabelkonfektionen. Schnell. Präzise. Persönlich.
              </span>
              <span className="cable-para cable-width">
                Maßgeschneiderte Kabel- und Steckerlösungen – mit kurzen
                Lieferzeiten, kompromissloser Qualität und direkter Betreuung.
                Ihr Partner für individuelle Kabelsysteme – von der Idee bis zur
                Serie.
              </span>
              <button
                className="btn-cable"
                onClick={() =>
                  document.getElementById("contact-section")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Jetzt Anfragen
              </button>
            </div>
            <img src={cable} alt="cable" />
          </div>

          <section className="production home-page-padding">
            <div className="production-layout">
              <div className="production-left">
                <div className="production-label">
                  <span className="horizontal-line mt-2"></span>
                  <span>Überblick</span>
                </div>

                <span className="production-text">
                  Unser Angebot an Produktionslösungen
                </span>

                <span className="production-para">
                  Wir entwickeln und liefern maßgeschneiderte Kabelkonfektionen,
                  Baugruppen und Verbindungslösungen, die exakt auf komplexe
                  technische Anforderungen abgestimmt sind.
                </span>

                <Link to="/products">
                  <button className="all-products-btn">
                    Kabelkonfektion ansehen
                  </button>
                </Link>
              </div>

              <div className="production-grid">
                {products.slice(0, 4).map((item) => (
                  <div className="production-card" key={item.id}>
                    <div className="production-image-box">
                      <img src={item.img} alt={item.title} />
                    </div>

                    <span className="production-card-title">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="excellence">
            <div>
              <div className="d-flex flex-column excellence-wrapper">
                <div className="production-label">
                  <span className="horizontal-line mt-2"></span>
                  <span>Wir sind Konnactiv</span>
                </div>
                <span className="production-text excellence-header">
                  Ihr Partner für Exzellenz in der Kabeltechnik
                </span>
                <span className="cable-para excellence-header">
                  Unsere Mission ist es, innovative Unternehmen dabei zu
                  unterstützen, ihre Produkte schneller und sicherer auf den
                  Markt zu bringen – mit zuverlässigen, hochwertigen
                  Verbindungslösungen.
                </span>
                <span className="cable-para">
                  Ob in der Entwicklung moderner Robotik, der nächsten
                  Generation von Elektrofahrzeugen oder lebenswichtiger
                  Medizintechnik – wir liefern die maßgeschneiderten Kabelbäume,
                  Baugruppen und Steckerlösungen, die Sie benötigen.
                </span>

                <button
                  className="btn-cable excellence-header"
                  onClick={handleAboutClick}
                >
                  Mehr Erfahren
                </button>
              </div>

              <div className="excellence-image-card">
                <img src={cableConnector} alt="Cable connector" />
              </div>
            </div>
          </section>

          <section
            className="contact-section home-page-padding"
            id="contact-section"
          >
            <div className="contact-container">
              <div className="d-flex flex-column">
                <div className="production-label">
                  <span className="horizontal-line mt-2"></span>
                  <span>Wir sind für Sie da</span>
                </div>

                <span className="production-text contact-header">
                  Besprechen Sie Ihre Anforderungen Kabellösungen an
                </span>

                <span className="cable-para contact-para">
                  Sie sind auf der Suche nach hochwertigen Kabellösungen, die
                  genau auf Ihre Bedürfnisse zugeschnitten sind? Dann
                  kontaktieren Sie uns noch heute für eine Beratung.
                </span>

                <div className="d-flex flex-column contact-details-gap ms-2">
                  <div className="d-flex align-items-center">
                    <img src={email} alt="email" />
                    <span className="contact-details-text">
                      info@konnactiv.de
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={phone} alt="phone" />
                    <span className="contact-details-text">
                      +49 (0) 123 456 7890
                    </span>
                  </div>
                  <div className="d-flex align-items-center">
                    <img src={location} alt="location" />
                    <span className="contact-details-text">
                      Konnactiv Berlin, Germany
                    </span>
                  </div>
                </div>
              </div>

              <ContactFormWeb />
            </div>
          </section>

          <Footer />
        </div>
      ) : (
        <div>
          <Header />
          <div className="d-flex flex-column justify-content-between cable-container home-page-padding cable-container-gap">
            <img src={cable} alt="cable" className="cable-img" />
            <span className="cable-assembly-text">
              Kabelkonfektionen. Schnell. Präzise. Persönlich.
            </span>
            <span className="cable-para">
              Maßgeschneiderte Kabel- und Steckerlösungen – mit kurzen
              Lieferzeiten, kompromissloser Qualität und direkter Betreuung. Ihr
              Partner für individuelle Kabelsysteme – von der Idee bis zur
              Serie.
            </span>
            <button
              className="btn-cable w-100"
              onClick={() =>
                document.getElementById("contact-section")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Jetzt Anfragen
            </button>
          </div>

          <section className="production">
            <div className="production-label">
              <span className="horizontal-line"></span>
              <span>Überblick</span>
            </div>

            <h2 className="production-text">
              Unser Angebot an Produktionslösungen
            </h2>

            <p className="production-para">
              Wir entwickeln und liefern maßgeschneiderte Kabelkonfektionen,
              Baugruppen und Verbindungslösungen, die exakt auf komplexe
              technische Anforderungen abgestimmt sind.
            </p>

            <div className="production-grid">
              {products.map((item) => (
                <div className="production-card" key={item.id}>
                  <div className="production-image-box">
                    <img src={item.img} alt={item.title} />
                  </div>

                  <span className="production-card-title">{item.title}</span>
                </div>
              ))}
            </div>

            <Link to="/products">
              <button className="all-products-btn production-btn">
                Kabelkonfektion ansehen
              </button>
            </Link>
          </section>

          <div>
            <img src={cableConnector} alt="Cable connector" className="w-100" />
            <div className="d-flex flex-column excellence-mobile">
              <div className="production-label">
                <span className="horizontal-line mt-2"></span>
                <span>Wir sind Konnactiv</span>
              </div>
              <span className="production-text mt-3">
                Ihr Partner für Exzellenz in der Kabeltechnik
              </span>
              <span className="cable-para excellence-header">
                Unsere Mission ist es, innovative Unternehmen dabei zu
                unterstützen, ihre Produkte schneller und sicherer auf den Markt
                zu bringen – mit zuverlässigen, hochwertigen
                Verbindungslösungen.
              </span>
              <span className="cable-para">
                Ob in der Entwicklung moderner Robotik, der nächsten Generation
                von Elektrofahrzeugen oder lebenswichtiger Medizintechnik – wir
                liefern die maßgeschneiderten Kabelbäume, Baugruppen und
                Steckerlösungen, die Sie benötigen.
              </span>

              <button
                className="btn-cable excellence-header w-100"
                onClick={handleAboutClick}
              >
                Mehr Erfahren
              </button>
            </div>
          </div>

          <section className="contact-section-mobile" id="contact-section">
            <div className="d-flex flex-column">
              <div className="production-label">
                <span className="horizontal-line mt-2"></span>
                <span>Wir sind für Sie da</span>
              </div>

              <span className="production-text mt-3">
                Besprechen Sie Ihre Anforderungen Kabellösungen an
              </span>

              <span className="cable-para mt-4">
                Sie sind auf der Suche nach hochwertigen Kabellösungen, die
                genau auf Ihre Bedürfnisse zugeschnitten sind? Dann kontaktieren
                Sie uns noch heute für eine Beratung.
              </span>

              <div className="d-flex flex-column contact-details-gap ms-2 mt-28">
                <div className="d-flex align-items-center">
                  <img src={email} alt="email" />
                  <span className="contact-details-text">
                    info@konnactiv.de
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <img src={phone} alt="phone" />
                  <span className="contact-details-text">
                    +49 (0) 123 456 7890
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <img src={location} alt="location" />
                  <span className="contact-details-text">
                    Konnactiv Berlin, Germany
                  </span>
                </div>
              </div>
              <ContactFormMobile />
            </div>
          </section>

          <Footer />
        </div>
      )}
    </>
  );
}
