import { useEffect, type ReactNode } from "react";
import "./Terms.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

type TermsSection = {
  title: string;
  content: ReactNode;
};

const termsSections: TermsSection[] = [
  {
    title: "Geltungsbereich",
    content: (
      <>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Lieferungen und
          Leistungen der
          <br />
          <strong>Konnactiv</strong>.
        </p>
        <p>
          Stresemannstraße 23
          <br />
          10963 Berlin
          <br />
          Deutschland
          <br />
          gegenüber Unternehmern im Sinne von §14 BGB.
        </p>
        <p>
          Abweichende Bedingungen des Kunden gelten nur, wenn wir ihnen
          ausdrücklich schriftlich zustimmen.
        </p>
      </>
    ),
  },
  {
    title: "Vertragsschluss",
    content: (
      <>
        <p>Unsere Angebote sind freibleibend und unverbindlich.</p>
        <p>
          Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung
          oder durch Lieferung der Ware zustande.
        </p>
      </>
    ),
  },
  {
    title: "Preise und Zahlung",
    content: (
      <>
        <p>
          Alle Preise verstehen sich{" "}
          <strong>zuzüglich der gesetzlichen Umsatzsteuer.</strong>
        </p>
        <p>
          Sofern nicht anders vereinbart, gilt ein{" "}
          <strong>Zahlungsziel von 14 Tagen netto.</strong>
        </p>
        <p>
          Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen gemäß{" "}
          <strong>§288 BGB.</strong>
        </p>
      </>
    ),
  },
  {
    title: "Lieferung",
    content: (
      <>
        <p>
          Lieferfristen sind unverbindlich, sofern sie nicht ausdrücklich
          schriftlich bestätigt wurden.
        </p>
        <p>
          Teillieferungen sind zulässig, soweit sie für den Kunden zumutbar
          sind.
        </p>
        <p>
          Lieferverzögerungen aufgrund höherer Gewalt oder aufgrund von
          Umständen, die wir nicht zu vertreten haben, berechtigen uns zur
          angemessenen Verlängerung der Lieferfrist.
        </p>
      </>
    ),
  },
  {
    title: "Eigentumsvorbehalt",
    content: (
      <p>
        Die gelieferte Ware bleibt bis zur vollständigen Bezahlung sämtlicher
        Forderungen aus der Geschäftsbeziehung Eigentum der{" "}
        <strong>Konnactiv.</strong>
      </p>
    ),
  },
  {
    title: "Gewährleistung",
    content: (
      <>
        <p>Es gelten die gesetzlichen Mängelrechte.</p>
        <p>
          Offensichtliche Mängel sind vom Kunden{" "}
          <strong>
            unverzüglich nach Erhalt der Ware schriftlich anzuzeigen.
          </strong>
        </p>
        <p>
          Im Falle eines Mangels sind wir zunächst zur{" "}
          <strong>
            Nacherfüllung (Nachbesserung oder Ersatzlieferung)
          </strong>{" "}
          berechtigt.
        </p>
      </>
    ),
  },
  {
    title: "Haftung",
    content: (
      <>
        <p>
          Wir haften unbeschränkt bei{" "}
          <strong>Vorsatz und grober Fahrlässigkeit.</strong>
        </p>
        <p>
          Bei einfacher Fahrlässigkeit haften wir nur bei Verletzung
          wesentlicher Vertragspflichten, jedoch beschränkt auf den{" "}
          <strong>typischerweise vorhersehbaren Schaden.</strong>
        </p>
        <p>
          Die Haftungsbeschränkung gilt nicht bei{" "}
          <strong>
            Verletzung von Leben, Körper oder Gesundheit sowie nach dem
            Produkthaftungsgesetz.
          </strong>
        </p>
      </>
    ),
  },
  {
    title: "Anwendbares Recht und Gerichtsstand",
    content: (
      <>
        <p>
          Es gilt das Recht der{" "}
          <strong>
            Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts
            (CISG).
          </strong>
        </p>
        <p>
          Gerichtsstand ist <strong>Berlin</strong>, sofern der Kunde Kaufmann,
          juristische Person des öffentlichen Rechts oder öffentlich-rechtliches
          Sondervermögen ist.
        </p>
      </>
    ),
  },
  {
    title: "Schlussbestimmungen",
    content: (
      <p>
        Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam sein,
        bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
      </p>
    ),
  },
];

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />

      <main className="terms-page">
        <section className="terms-hero">
          <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
        </section>

        <section className="terms-content" aria-label="Allgemeine Geschäftsbedingungen">
          {termsSections.map((section) => (
            <article className="terms-row" key={section.title}>
              <h2>{section.title}</h2>
              <div className="terms-copy">{section.content}</div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
