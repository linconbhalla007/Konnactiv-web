import "./Home.css";
import cable from "../assets/images/cable.png";
import flatRibbon from "../assets/images/flat-ribbon-cable.png";
import singleStrands from "../assets/images/single-strands.png";
import dataCable from "../assets/images/data-cable.png";
import cableConnector from "../assets/images/cable-connector.png";
import email from "../assets/images/email.svg";
import phone from "../assets/images/phone.svg";
import location from "../assets/images/location.svg";
import file from "../assets/images/file.svg";
import leftArrow from "../assets/images/left-arrow.svg";
import rightArrow from "../assets/images/right-arrow.svg";
import checkCircle from "../assets/images/check-circle.svg";
import { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import useWindowWidth from "../hooks/useWindowWidth";
import { useLocation, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    tag: "Flat Ribbon Cable",
    title: "Modular cables",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: `${flatRibbon}`,
  },
  {
    id: 2,
    tag: "Single strands",
    title: "Modular cables",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    img: `${singleStrands}`,
  },
  {
    id: 3,
    tag: "Data cable",
    title: "Modular cables",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    img: `${dataCable}`,
  },
];

const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    industry: "",
    company: "",
    description: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: any) => {
    console.log(e);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) newErrors.phone = "Telefon is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.company.trim()) newErrors.company = "Company is required";

    if (!formData.description.trim())
      newErrors.description = "Description is required";

    return newErrors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    }
  };

  return {
    formData,
    errors,
    isSubmitted,
    handleChange,
    handleSubmit,
  };
};

const SuccessView = () => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column mt-3">
      <img src={checkCircle} alt="checkCircle" />
      <span className="success-text mt-3">
        Thank you for contacting us. Our cable expert will contact you in next
        24hrs.
      </span>
    </div>
  );
};

const ContactFormWeb = () => {
  const { formData, errors, isSubmitted, handleChange, handleSubmit } =
    useContactForm();
  const [fileName, setFileName] = useState("");
  if (isSubmitted) return <SuccessView />;
  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group w-100">
        <label className="form-label">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          name="name"
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Telefon</label>
          <input
            type="text"
            placeholder="+49 999999999"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
            className={errors.phone ? "input-error" : ""}
          />
          {errors.phone && <span className="error-text">{errors.phone}</span>}
        </div>
        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            name="email"
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error-text">{errors.email}</span>}
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label">Industrie (Optional)</label>
          <select
            value={formData.industry}
            onChange={handleChange}
            name="industry"
          >
            <option>Select</option>
            <option>Automotive</option>
            <option>Medical</option>
            <option>Industrial</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Firma</label>
          <input
            type="text"
            placeholder="Your Company Name"
            value={formData.company}
            onChange={handleChange}
            name="company"
            className={errors.company ? "input-error" : ""}
          />
          {errors.company && (
            <span className="error-text">{errors.company}</span>
          )}
        </div>
      </div>

      <div className="form-group w-100">
        <label className="form-label">Projekt Beschreibung</label>
        <textarea
          placeholder="Teilen Sie uns Ihre Kabelanforderungen mit"
          value={formData.description}
          onChange={handleChange}
          name="description"
          className={errors.description ? "input-error" : ""}
        ></textarea>
        {errors.description && (
          <span className="error-text">{errors.description}</span>
        )}
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
      <button className="submit-btn">Einreichen</button>

      <span className="file-max-size">
        Wir antworten normalerweise innerhalb von einem Werktag.
      </span>
    </form>
  );
};

const ContactFormMobile = () => {
  const { formData, errors, isSubmitted, handleChange, handleSubmit } =
    useContactForm();

  const [fileName, setFileName] = useState("");
  if (isSubmitted) return <SuccessView />;

  return (
    <form className="contact-form mt-52" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label">Name</label>
        <input
          type="text"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          name="name"
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && <span className="error-text">{errors.name}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Telefon</label>
        <input
          type="text"
          placeholder="+49 999999999"
          value={formData.phone}
          onChange={handleChange}
          name="phone"
          className={errors.phone ? "input-error" : ""}
        />
        {errors.phone && <span className="error-text">{errors.phone}</span>}
      </div>
      <div className="form-group">
        <label className="form-label">Email</label>
        <input
          type="email"
          placeholder="john@company.com"
          value={formData.email}
          onChange={handleChange}
          name="email"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <span className="error-text">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label className="form-label">Industrie (Optional)</label>
        <select>
          <option>Select</option>
          <option>Automotive</option>
          <option>Medical</option>
          <option>Industrial</option>
        </select>
      </div>
      <div className="form-group">
        <label className="form-label">Firma</label>
        <input
          type="text"
          placeholder="Your Company Name"
          value={formData.company}
          onChange={handleChange}
          name="company"
          className={errors.company ? "input-error" : ""}
        />
        {errors.company && <span className="error-text">{errors.company}</span>}
      </div>

      <div className="form-group">
        <label className="form-label">Projekt Beschreibung</label>
        <textarea
          placeholder="Teilen Sie uns Ihre Kabelanforderungen mit"
          value={formData.description}
          onChange={handleChange}
          name="description"
          className={errors.description ? "input-error" : ""}
        ></textarea>
        {errors.description && (
          <span className="error-text">{errors.description}</span>
        )}
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
      <button className="submit-btn">Einreichen</button>

      <span className="file-max-size">
        Wir antworten normalerweise innerhalb von einem Werktag.
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
            <div className="production-label">
              <span className="horizontal-line mt-2"></span>
              <span>Überblick</span>
            </div>
            <div className="production-header">
              <span className="production-text">
                Unser Angebot an Produktionslösungen
              </span>
              <button className="all-products-btn">Alle Produkte</button>
            </div>

            <div className="carousel-wrapper">
              <img src={leftArrow} alt="leftArrow" className="arrow left" />

              <div className="d-flex align-items-center product-container">
                {products.map((item, i) => (
                  <div className="d-flex flex-column" key={item.id}>
                    <div className="image-box">
                      <img src={item.img} alt={item.title} />
                    </div>

                    <span className="product-tag">{item.tag}</span>
                    <span className="product-title">{item.title}</span>
                    <span className="cable-para product-desc">{item.desc}</span>
                  </div>
                ))}
              </div>

              <img src={rightArrow} alt="rightArrow" className="arrow right" />
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
                      info@cableexperts.com
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
            <div className="production-label mb-3">
              <span className="horizontal-line mt-2"></span>
              <span>Überblick</span>
            </div>

            <span className="production-text">
              Unser Angebot an Produktionslösungen
            </span>

            <div className="mobile-carousel mt-4">
              <div className="product-container">
                {products.map((item) => (
                  <div
                    className="product-card-mobile d-flex flex-column"
                    key={item.id}
                  >
                    <div className="image-box">
                      <img src={item.img} alt={item.title} />
                    </div>

                    <span className="product-tag">{item.tag}</span>
                    <span className="product-title">{item.title}</span>
                    <span className="cable-para product-desc">{item.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <button className="all-products-btn w-100">Alle Produkte</button>
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
                    info@cableexperts.com
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
