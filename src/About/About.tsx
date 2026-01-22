import "./About.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import cableContainer from "../assets/images/cable-container.png";
import plug from "../assets/images/plug.svg";
import rocket from "../assets/images/rocket.svg";
import settings from "../assets/images/settings.svg";
import cube from "../assets/images/cube.svg";
import campaign from "../assets/images/campaign.svg";
import shield from "../assets/images/shield.svg";
import process from "../assets/images/process.svg";
import transparency from "../assets/images/transparency.svg";
import flexible from "../assets/images/flexible.svg";
import delivery from "../assets/images/delivery.svg";
import quality from "../assets/images/quality.svg";
import dot from "../assets/images/dot.svg";
import services from "../assets/images/services.svg";
import servicesMobile from "../assets/images/services-mobile.svg";
import useWindowWidth from "../hooks/useWindowWidth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import checkCircle from "../assets/images/check-circle.svg";
import file from "../assets/images/file.svg";
import cross from "../assets/images/cross.svg";
import useContactForm from "../hooks/useContactForm";
import useEmailService from "../services/useEmail";

export default function About() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  const navigate = useNavigate();

  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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

  const ContactFormWeb = ({ onSuccess }: { onSuccess: () => void }) => {
    const { formData, errors, handleChange, handleSubmit } = useContactForm();
    const { form, handleFormSubmit } = useEmailService();
    const [fileName, setFileName] = useState("");

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      handleSubmit(e, () => {
        handleFormSubmit(e, () => {
          onSuccess();
        });
      });
    };

    return (
      <form
        className="contact-form mt-34"
        onSubmit={onFormSubmit}
        ref={form}
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

  const ContactFormMobile = ({ onSuccess }: { onSuccess: () => void }) => {
    const { formData, errors, handleChange, handleSubmit } = useContactForm();
    const { form, handleFormSubmit } = useEmailService();
    const [fileName, setFileName] = useState("");

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      handleSubmit(e, () => {
        handleFormSubmit(e, () => {
          onSuccess();
        });
      });
    };

    return (
      <form
        className="contact-form mt-52"
        onSubmit={onFormSubmit}
        ref={form}
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
      {!isMobile ? (
        <div>
          <Header />

          <section className="mission-container">
            <div
              className="mission-bg"
              style={{ backgroundImage: `url(${cableContainer})` }}
            ></div>

            <div className="mission-content d-flex flex-column">
              <div className="mission-label">
                <span className="about-horizontal-line mt-2"></span>
                <span>Wir sind Konnectiv</span>
              </div>

              <span className="mission-header">
                Our mission, vision, and values guide our daily actions.
              </span>

              <button className="btn-about-cable"  onClick={() => {
                setIsFormSubmitted(false);
                setIsContactOpen(true);
              }}>Jetzt Anfragen</button>
            </div>
          </section>

          <section className="cable-about-container">
            <span className="cable-text">
              Konnactiv ist Ihr Partner für hochpräzise Kabel- und
              Steckerlösungen in anspruchsvollen industriellen Anwendungen.
            </span>
            <span className="cable-about-para">
              Wir entwickeln und liefern maßgeschneiderte Kabelsysteme,
              Baugruppen und Verbindungslösungen, die exakt auf komplexe
              technische Anforderungen abgestimmt sind. Unser Anspruch ist es,
              zuverlässige Performance, einfache Integration und dauerhaft
              sichere Verbindungen zu gewährleisten. Dabei verbinden wir
              technisches Know-how mit klaren Prozessen, kurzen Reaktionszeiten
              und persönlicher Betreuung. Von der ersten Idee über Prototypen
              bis hin zur Serienfertigung begleiten wir unsere Kunden als
              verlässlicher Technologiepartner.
            </span>
          </section>

          <section className="services">
            <div className="services-container">
              <div className="d-flex flex-column">
                <div className="mission-label">
                  <span className="about-horizontal-line mt-2"></span>
                  <span>Unsere Leistungen</span>
                </div>

                <span className="services-header mt-25">
                  End-to-End Kabellösungen
                </span>

                <span className="cable-about-para text-start mt-3">
                  Von der ersten Idee bis zur Serienfertigung bieten wir
                  umfassende Leistungen zur Umsetzung Ihrer individuellen Kabel-
                  und Verbindungslösungen.
                </span>

                <div className="services-grid">
                  <div className="d-flex flex-column align-items-start">
                    <img src={plug} alt="plug" />
                    <span className="service-text mt-28">
                      Individuelle Kabelbäume
                    </span>
                    <span className="cable-about-para text-start mt-3">
                      Maßgeschneiderte Kabellösungen, entwickelt nach Ihren
                      technischen Spezifikationen und relevanten
                      Industriestandards.
                    </span>
                  </div>

                  <div className="d-flex flex-column align-items-start">
                    <img src={campaign} alt="campaign" />
                    <span className="service-text mt-28">
                      Kabelkonfektionen & Baugruppen
                    </span>
                    <span className="cable-about-para text-start mt-3">
                      Hochwertige Kabelkonfektionen für anspruchsvolle
                      Anwendungen in Automation, Robotik und Medizintechnik.
                    </span>
                  </div>

                  <div className="d-flex flex-column align-items-start">
                    <img src={rocket} alt="rocket" />
                    <span className="service-text mt-28">
                      Schnelle Prototypen Fertigung
                    </span>
                    <span className="cable-about-para text-start mt-3">
                      Kurze Durchlaufzeiten für Prototypen und Kleinserien zur
                      Beschleunigung Ihrer Entwicklungs- und Testprozesse.
                    </span>
                  </div>

                  <div className="d-flex flex-column align-items-start">
                    <img src={shield} alt="shield" />
                    <span className="service-text mt-28">
                      Zertifizierte Fertigung
                    </span>
                    <span className="cable-about-para text-start mt-3">
                      Fertigung nach ISO 9001, UL, RoHS und REACH. Umsetzung
                      gemäß IPC/WHMA-A-620 für geprüfte Qualität.
                    </span>
                  </div>

                  <div className="d-flex flex-column align-items-start">
                    <img src={settings} alt="settings" />
                    <span className="service-text mt-28">
                      Steckerlösungen & Integration
                    </span>
                    <span className="cable-about-para text-start mt-3">
                      Entwicklung und Integration spezialisierter
                      Steckerlösungen für zuverlässige und dauerhafte
                      Verbindungen.
                    </span>
                  </div>

                  <div className="d-flex flex-column align-items-start">
                    <img src={cube} alt="settings" />
                    <span className="service-text mt-28">
                      Skalierbare Fertigung
                    </span>
                    <span className="cable-about-para text-start mt-3">
                      Flexible Produktionskapazitäten von Kleinserien bis zur
                      Serienfertigung – mit gleichbleibender Qualität.
                    </span>
                  </div>
                </div>
              </div>
              <img src={services} className="mt-55" alt="services" />
            </div>
          </section>

          <section className="competencies-section">
            <div className="process-label mb-4">
              <span className="about-horizontal-line"></span>
              <span>Unsere Kompetenzen</span>
            </div>

            <span className="services-header">
              Strukturierte Prozesse. Verlässliche Ergebnisse.
            </span>

            <div className="competencies-grid">
              <div className="d-flex flex-column align-items-start">
                <img src={transparency} alt="transparency" />
                <span className="service-text mt-25">Volle Transparenz</span>
                <span className="cable-about-para text-start mt-3">
                  Klare Prozesse, nachvollziehbare Abläufe und offene
                  Kommunikation über alle Projektphasen hinweg. So behalten Sie
                  jederzeit den Überblick über Status, Kosten und Termine.
                </span>
              </div>

              <div className="d-flex flex-column align-items-start">
                <img src={flexible} alt="flexible" />
                <span className="service-text mt-25">Flexible Stückzahlen</span>
                <span className="cable-about-para text-start mt-3">
                  Skalierbare Fertigung von Prototypen und Kleinserien bis hin
                  zur Serienproduktion. Wir passen uns flexibel an Ihre
                  Projektanforderungen und Produktionsbedarfe an.
                </span>
              </div>

              <div className="d-flex flex-column align-items-start">
                <img src={delivery} alt="delivery" />
                <span className="service-text mt-25">Kurze Lieferzeiten</span>
                <span className="cable-about-para text-start mt-3">
                  Effiziente Prozesse und eingespielte Partnernetzwerke
                  ermöglichen kurze Durchlaufzeiten. So bringen wir Ihre
                  Projekte zuverlässig und termingerecht voran.
                </span>
              </div>

              <div className="d-flex flex-column align-items-start">
                <img src={quality} alt="quality" />
                <span className="service-text mt-25">
                  Hohe Qualitätsstandards
                </span>
                <span className="cable-about-para text-start mt-3">
                  Geprüfte Qualität entlang der gesamten Wertschöpfungskette –
                  von der Entwicklung bis zur Auslieferung. Unsere Prozesse sind
                  auf Zuverlässigkeit und Prozesssicherheit ausgelegt.
                </span>
              </div>
            </div>
          </section>

          <section className="process">
            <div className="process-container">
              <div className="process-content">
                <div className="mission-label mb-25">
                  <span className="about-horizontal-line mt-3"></span>
                  <span>Unser Prozess</span>
                </div>

                <span className="services-header mt-25">
                  Wie wir arbeiten, ist genauso entscheidend wie was wir
                  liefern.
                </span>

                <div className="process-steps">
                  <div className="process-step">
                    <img src={dot} alt="dot" className="dot" />

                    <div>
                      <span className="process-step-header">
                        Anforderungen definieren
                      </span>
                    </div>

                    <div>
                      <span className="cable-about-para">
                        Gemeinsam klären wir technische Anforderungen,
                        Einsatzbedingungen und Normen. So schaffen wir eine
                        belastbare Grundlage für eine effiziente Umsetzung.
                      </span>
                    </div>
                  </div>

                  <div className="process-step">
                    <img src={dot} alt="dot" className="dot" />

                    <div>
                      <span className="process-step-header">
                        Prototypen entwickeln
                      </span>
                    </div>

                    <div>
                      <span className="cable-about-para">
                        Auf Basis der definierten Spezifikationen erstellen wir
                        Prototypen und Muster für erste Tests und Freigaben.
                      </span>
                    </div>
                  </div>

                  <div className="process-step">
                    <img src={dot} alt="dot" className="dot" />
                    <div>
                      <span className="process-step-header">
                        Prüfen & testen
                      </span>
                    </div>

                    <div>
                      <span className="cable-about-para">
                        Funktion, Verarbeitung und Qualität werden sorgfältig
                        geprüft, um eine zuverlässige Integration in Ihre
                        Systeme sicherzustellen.
                      </span>
                    </div>
                  </div>

                  <div className="process-step">
                    <img src={dot} alt="dot" className="dot" />

                    <div>
                      <span className="process-step-header">
                        Produktfreigabe
                      </span>
                    </div>

                    <div>
                      <span className="cable-about-para">
                        Nach erfolgreicher Prüfung erfolgt die Freigabe zur
                        Serienfertigung – transparent dokumentiert und mit Ihnen
                        abgestimmt.
                      </span>
                    </div>
                  </div>

                  <div className="process-step last">
                    <img src={dot} alt="dot" className="dot" />

                    <div>
                      <span className="process-step-header">
                        Lieferung & Betreuung
                      </span>
                    </div>

                    <div>
                      <span className="cable-about-para">
                        Wir liefern termingerecht und begleiten Ihr Projekt auch
                        nach der Auslieferung – mit persönlichem Support und
                        klaren Ansprechpartnern.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="process-visual">
                <img src={process} alt="process" />
              </div>
            </div>
          </section>
          <Footer />
        </div>
      ) : (
        <div>
          <Header />
          <section className="mission-container">
            <div
              className="mission-mobile-bg"
              style={{ backgroundImage: `url(${cableContainer})` }}
            ></div>

            <div className="mission-mobile-content">
              <div className="mission-label">
                <span className="about-horizontal-line"></span>
                <span>Wir sind Konnectiv</span>
              </div>

              <span className="mission-header">
                Our mission, vision, and values guide our daily actions.
              </span>

              <button className="btn-about-cable mt-4 w-100"  onClick={() => {
                setIsFormSubmitted(false);
                setIsContactOpen(true);
              }}>
                Jetzt Anfragen
              </button>
            </div>
          </section>
          <section className="cable-about-container">
            <span className="cable-text">
              Konnactiv ist Ihr Partner für hochpräzise Kabel- und
              Steckerlösungen in anspruchsvollen industriellen Anwendungen.
            </span>
            <span className="cable-about-para text-center">
              Wir entwickeln und liefern maßgeschneiderte Kabelsysteme,
              Baugruppen und Verbindungslösungen, die exakt auf komplexe
              technische Anforderungen abgestimmt sind. Unser Anspruch ist es,
              zuverlässige Performance, einfache Integration und dauerhaft
              sichere Verbindungen zu gewährleisten. Dabei verbinden wir
              technisches Know-how mit klaren Prozessen, kurzen Reaktionszeiten
              und persönlicher Betreuung. Von der ersten Idee über Prototypen
              bis hin zur Serienfertigung begleiten wir unsere Kunden als
              verlässlicher Technologiepartner.
            </span>
          </section>

          <section className="services-mobile d-flex flex-column">
            <img src={servicesMobile} alt="servicesMobile" />
            <div className="mission-label mt-40">
              <span className="about-horizontal-line mt-2"></span>
              <span>Unsere Leistungen</span>
            </div>

            <span className="services-header mt-3">
              End-to-End Kabellösungen
            </span>

            <span className="cable-about-para mt-4">
              Von der ersten Idee bis zur Serienfertigung bieten wir umfassende
              Leistungen zur Umsetzung Ihrer individuellen Kabel- und
              Verbindungslösungen.
            </span>

            <div className="d-flex flex-column align-items-start mt-36">
              <img src={plug} alt="plug" />
              <span className="service-text mt-20">
                Individuelle Kabelbäume
              </span>
              <span className="cable-about-para mt-2">
                Maßgeschneiderte Kabellösungen, entwickelt nach Ihren
                technischen Spezifikationen und relevanten Industriestandards.
              </span>
            </div>

            <div className="d-flex flex-column align-items-start mt-36">
              <img src={rocket} alt="rocket" />
              <span className="service-text mt-20">
                Schnelle Prototypen Fertigung
              </span>
              <span className="cable-about-para mt-2">
                Kurze Durchlaufzeiten für Prototypen und Kleinserien zur
                Beschleunigung Ihrer Entwicklungs- und Testprozesse.
              </span>
            </div>

            <div className="d-flex flex-column align-items-start mt-36">
              <img src={settings} alt="settings" />
              <span className="service-text mt-20">
                Steckerlösungen & Integration
              </span>
              <span className="cable-about-para mt-2">
                Entwicklung und Integration spezialisierter Steckerlösungen für
                zuverlässige und dauerhafte Verbindungen.
              </span>
            </div>

            <div className="d-flex flex-column align-items-start mt-36">
              <img src={cube} alt="settings" />
              <span className="service-text mt-20">Skalierbare Fertigung</span>
              <span className="cable-about-para mt-2">
                Flexible Produktionskapazitäten von Kleinserien bis zur
                Serienfertigung – mit gleichbleibender Qualität.
              </span>
            </div>

            <div className="d-flex flex-column align-items-start mt-36">
              <img src={campaign} alt="campaign" />
              <span className="service-text mt-20">
                Kabelkonfektionen & Baugruppen
              </span>
              <span className="cable-about-para mt-2">
                Hochwertige Kabelkonfektionen für anspruchsvolle Anwendungen in
                Automation, Robotik und Medizintechnik.
              </span>
            </div>

            <div className="d-flex flex-column align-items-start mt-36">
              <img src={shield} alt="shield" />
              <span className="service-text mt-20">
                Zertifizierte Fertigung
              </span>
              <span className="cable-about-para mt-2">
                Fertigung nach ISO 9001, UL, RoHS und REACH. Umsetzung gemäß
                IPC/WHMA-A-620 für geprüfte Qualität.
              </span>
            </div>
          </section>

          <section className="competencies-section">
            <div className="process-label mb-4">
              <span className="about-horizontal-line"></span>
              <span>Unsere Kompetenzen</span>
            </div>

            <span className="services-header">
              Strukturierte Prozesse. Verlässliche Ergebnisse.
            </span>

            <div className="d-flex flex-column align-items-start mt-40">
              <img src={transparency} alt="transparency" />
              <span className="service-text mt-12">Volle Transparenz</span>
              <span className="cable-about-para mt-2">
                Klare Prozesse, nachvollziehbare Abläufe und offene
                Kommunikation über alle Projektphasen hinweg. So behalten Sie
                jederzeit den Überblick über Status, Kosten und Termine.
              </span>
            </div>

            <div className="d-flex flex-column align-items-start mt-4">
              <img src={flexible} alt="flexible" />
              <span className="service-text mt-12">Flexible Stückzahlen</span>
              <span className="cable-about-para text-start mt-2">
                Skalierbare Fertigung von Prototypen und Kleinserien bis hin zur
                Serienproduktion. Wir passen uns flexibel an Ihre
                Projektanforderungen und Produktionsbedarfe an.
              </span>
            </div>

            <div className="d-flex flex-column align-items-start mt-4">
              <img src={delivery} alt="delivery" />
              <span className="service-text mt-12">Kurze Lieferzeiten</span>
              <span className="cable-about-para text-start mt-2">
                Effiziente Prozesse und eingespielte Partnernetzwerke
                ermöglichen kurze Durchlaufzeiten. So bringen wir Ihre Projekte
                zuverlässig und termingerecht voran.
              </span>
            </div>

            <div className="d-flex flex-column align-items-start mt-4">
              <img src={quality} alt="quality" />
              <span className="service-text mt-12">
                Hohe Qualitätsstandards
              </span>
              <span className="cable-about-para text-start mt-2">
                Geprüfte Qualität entlang der gesamten Wertschöpfungskette – von
                der Entwicklung bis zur Auslieferung. Unsere Prozesse sind auf
                Zuverlässigkeit und Prozesssicherheit ausgelegt.
              </span>
            </div>
          </section>
          <section className="process-mobile">
            <div className="process-mobile-container">
              <div className="mission-label mb-3">
                <span className="about-horizontal-line mt-2"></span>
                <span>Unser Prozess</span>
              </div>

              <span className="services-header">
                Wie wir arbeiten, ist genauso entscheidend wie was wir liefern.
              </span>

              <div className="process-mobile-steps">
                <div className="process-mobile-step">
                  <img src={dot} alt="dot" className="dot-mobile" />
                  <div className="d-flex flex-column ms-3">
                    <span className="process-step-header">
                      Anforderungen definieren
                    </span>
                    <span className="cable-about-para mt-12">
                      Gemeinsam klären wir technische Anforderungen,
                      Einsatzbedingungen und Normen. So schaffen wir eine
                      belastbare Grundlage für eine effiziente Umsetzung.
                    </span>
                  </div>
                </div>

                <div className="process-mobile-step">
                  <img src={dot} alt="dot" className="dot-mobile" />
                  <div className="d-flex flex-column ms-3">
                    <span className="process-step-header">
                      Prototypen entwickeln
                    </span>
                    <span className="cable-about-para mt-12">
                      Auf Basis der definierten Spezifikationen erstellen wir
                      Prototypen und Muster für erste Tests und Freigaben.
                    </span>
                  </div>
                </div>

                <div className="process-mobile-step">
                  <img src={dot} alt="dot" className="dot-mobile" />
                  <div className="d-flex flex-column ms-3">
                    <span className="process-step-header">Prüfen & testen</span>
                    <span className="cable-about-para mt-12">
                      Funktion, Verarbeitung und Qualität werden sorgfältig
                      geprüft, um eine zuverlässige Integration in Ihre Systeme
                      sicherzustellen.
                    </span>
                  </div>
                </div>

                <div className="process-mobile-step">
                  <img src={dot} alt="dot" className="dot-mobile" />
                  <div className="d-flex flex-column ms-3">
                    <span className="process-step-header">Produktfreigabe</span>
                    <span className="cable-about-para mt-12">
                      Nach erfolgreicher Prüfung erfolgt die Freigabe zur
                      Serienfertigung – transparent dokumentiert und mit Ihnen
                      abgestimmt.
                    </span>
                  </div>
                </div>

                <div className="process-mobile-step mb-0">
                  <img src={dot} alt="dot" className="dot-mobile" />
                  <div className="d-flex flex-column ms-3">
                    <span className="process-step-header">
                      Lieferung & Betreuung
                    </span>
                    <span className="cable-about-para mt-12">
                      Wir liefern termingerecht und begleiten Ihr Projekt auch
                      nach der Auslieferung – mit persönlichem Support und
                      klaren Ansprechpartnern.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
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
