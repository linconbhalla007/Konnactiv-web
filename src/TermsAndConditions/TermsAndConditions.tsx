import "../Legal.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function TermsAndConditions() {
 const rows = [
  {
    title: "Geltungsbereich",
    content: (
      <>
        <p className="m-0">
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Lieferungen und Leistungen der
        </p>

        <p className="m-0">
          <strong>Konnactiv</strong>
        </p>

        <p className="m-0">
          Stresemannstraße 23
          <br />
          10963 Berlin
          <br />
          Deutschland
          <br />
          gegenüber Unternehmern im Sinne von §14 BGB.
        </p>

        <p className="m-0">
          Abweichende Bedingungen des Kunden gelten nur, wenn wir ihnen ausdrücklich schriftlich zustimmen.
        </p>
      </>
    ),
  },

  {
    title: "Vertragsschluss",
    content: (
      <>
        <p className="m-0">
          Unsere Angebote sind freibleibend und unverbindlich.
        </p>

        <p className="m-0">
          Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch Lieferung der Ware zustande.
        </p>
      </>
    ),
  },

  {
    title: "Preise und Zahlung",
    content: (
      <>
        <p className="m-0">
          Alle Preise verstehen sich <strong>zuzüglich der gesetzlichen Umsatzsteuer.</strong>
        </p>

        <p className="m-0">
          Sofern nichts anderes vereinbart, gilt ein
          <strong> Zahlungsziel von 14 Tagen netto.</strong>
        </p>

        <p className="m-0">
          Bei Zahlungsverzug gelten die gesetzlichen Verzugszinsen gemäß
          <strong> §288 BGB.</strong>
        </p>
      </>
    ),
  },

  {
    title: "Lieferung",
    content: (
      <>
        <p className="m-0">
          Lieferfristen sind unverbindlich, sofern sie nicht ausdrücklich schriftlich bestätigt wurden.
        </p>

        <p className="m-0">
          Teillieferungen sind zulässig, soweit sie für den Kunden zumutbar sind.
        </p>

        <p className="m-0">
          Lieferverzögerungen aufgrund höherer Gewalt oder aufgrund von Umständen, die wir nicht zu vertreten haben, berechtigen uns zur angemessenen Verlängerung der Lieferfrist.
        </p>
      </>
    ),
  },

  {
    title: "Eigentumsvorbehalt",
    content: (
      <>
        <p className="m-0">
          Die gelieferte Ware bleibt bis zur vollständigen Bezahlung sämtlicher Forderungen aus der Geschäftsbeziehung Eigentum der
          <strong> Konnactiv.</strong>
        </p>
      </>
    ),
  },

  {
    title: "Gewährleistung",
    content: (
      <>
        <p className="m-0">
          Es gelten die gesetzlichen Mängelrechte.
        </p>

        <p className="m-0">
          Offensichtliche Mängel sind vom Kunden
          <strong>
            {" "}
            unverzüglich nach Erhalt der Ware schriftlich anzuzeigen.
          </strong>
        </p>

        <p className="m-0">
          Im Falle eines Mangels sind wir zunächst zur
          <strong>
            {" "}
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
        <p className="m-0">
          Wir haften unbeschränkt bei
          <strong> Vorsatz und grober Fahrlässigkeit.</strong>
        </p>

        <p className="m-0">
          Bei einfacher Fahrlässigkeit haften wir nur bei Verletzung
          wesentlicher Vertragspflichten, jedoch beschränkt auf den
          <strong> typischerweise vorhersehbaren Schaden.</strong>
        </p>

        <p className="m-0">
          Die Haftungsbeschränkung gilt nicht bei
          <strong>
            {" "}
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
        <p className="m-0">
          Es gilt das Recht der
          <strong>
            {" "}
            Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts
            (CISG).
          </strong>
        </p>

        <p className="m-0">
          Gerichtsstand ist
          <strong> Berlin,</strong> sofern der Kunde Kaufmann,
          juristische Person des öffentlichen Rechts oder
          öffentlich-rechtliches Sondervermögen ist.
        </p>
      </>
    ),
  },

  {
    title: "Schlussbestimmungen",
    content: (
      <>
        <p className="m-0">
          Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam
          sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
        </p>
      </>
    ),
  },
];

    return (
        <>
            <Header />

            <section className="legal-hero">
                <span className="legal-title">
                    Allgemeine Geschäftsbedingungen (AGB)
                </span>
            </section>

            <section className="legal-content-section">
                {rows.map((item) => (
                    <div className="legal-row" key={item.title}>
                        <div className="legal-row-title">{item.title}</div>
                        <div className="legal-row-content">{item.content}</div>
                    </div>
                ))}
            </section>

            <Footer />
        </>
    );
}