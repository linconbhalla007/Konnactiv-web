import { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
   useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" as ScrollBehavior,
    });
  }, []);
    return (
    <>
      <Header />

      <section className="privacy-policy">
        <div className="privacy-hero">
          <h1>Datenschutzerklärung</h1>

          <p className="privacy-date">
            Stand: [Datum einfügen]
          </p>

          <p className="privacy-intro">
            Der Schutz Ihrer personenbezogenen Daten ist uns wichtig.
            Nachfolgend informieren wir Sie über die Verarbeitung
            personenbezogener Daten bei der Nutzung unserer Website gemäß der
            Datenschutz-Grundverordnung (DSGVO).
          </p>
        </div>

        <div className="privacy-table">

          <div className="privacy-row">
            <div className="privacy-left">Verantwortlicher</div>

            <div className="privacy-right">
              <strong>Konnactiv</strong>
              <br />
              Stresemannstraße 23
              <br />
              10963 Berlin
              <br />
              Deutschland
              <br />
              E-Mail: info@konnactiv.de
            </div>
          </div>

          <div className="privacy-row">
            <div className="privacy-left">Hosting</div>

            <div className="privacy-right">
              Unsere Website wird bei einem externen Hosting-Anbieter
              betrieben. Dabei können personenbezogene Daten wie
              IP-Adressen oder Zugriffsdaten verarbeitet werden.
            </div>
          </div>

          <div className="privacy-row">
            <div className="privacy-left">
              Zugriffsdaten (Server-Logfiles)
            </div>

            <div className="privacy-right">
              <ul>
                <li>IP-Adresse</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Browsertyp und Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>

              Diese Daten dienen ausschließlich der technischen
              Bereitstellung und Sicherheit der Website.
            </div>
          </div>

          <div className="privacy-row">
            <div className="privacy-left">Kontaktformular</div>

            <div className="privacy-right">
              Wenn Sie uns per E-Mail oder über ein Kontaktformular
              kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer
              Anfrage verarbeitet.
            </div>
          </div>

          <div className="privacy-row">
            <div className="privacy-left">Cookies</div>

            <div className="privacy-right">
              Unsere Website kann Cookies oder ähnliche Technologien
              verwenden, um die Nutzererfahrung zu verbessern.
            </div>
          </div>

          <div className="privacy-row">
            <div className="privacy-left">Ihre Rechte</div>

            <div className="privacy-right">
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit und
              Widerspruch.
            </div>
          </div>

          <div className="privacy-row">
            <div className="privacy-left">Beschwerderecht</div>

            <div className="privacy-right">
              Berliner Beauftragte für Datenschutz und Informationsfreiheit
              <br />
              Alt-Moabit 59–61
              <br />
              10555 Berlin
            </div>
          </div>

          <div className="privacy-row">
            <div className="privacy-left">Datensicherheit</div>

            <div className="privacy-right">
              Unsere Website nutzt SSL-/TLS-Verschlüsselung zum Schutz
              übertragener Daten.
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}