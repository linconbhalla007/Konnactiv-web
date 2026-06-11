import "../Legal.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Impressum() {
  const rows = [
    {
      title: "Impressum",
      content: (
        <>
          <p className="m-0">
            <strong>Konnactiv</strong>
            <br />
            Stresemannstraße 23
            <br />
            10963 Berlin
            <br />
            Deutschland
          </p>

          <p className="m-0 mt-3">
            <strong>Geschäftsführung</strong>
            <br />
            [Name des Geschäftsführers]
          </p>

          <p className="m-0 mt-3">
            <strong>Kontakt</strong>
            <br />
            E-Mail: info@konnactiv.de
            <br />
            Telefon: [optional]
          </p>

          <p className="m-0 mt-3">
            <strong>Registereintrag</strong>
            <br />
            Handelsregister: Amtsgericht Berlin Charlottenburg
            <br />
            Registernummer: HRB [Nummer]
          </p>

          <p className="m-0 mt-3">
            <strong>Umsatzsteuer-ID</strong>
            <br />
            USt-IdNr. gemäß §27a UStG: DE [Nummer]
          </p>

          <p className="m-0 mt-3">
            <strong>Verantwortlich für den Inhalt nach §18 Abs. 2 MStV</strong>
            <br />
            Konnactiv
            <br />
            Stresemannstraße 23
            <br />
            10963 Berlin
          </p>
        </>
      ),
    },
    {
      title: "Haftungsausschluss",
      content: (
        <>
          <p className="m-0">
            <strong>Haftung für Inhalte</strong>
            <br />
            Die Inhalte unserer Website wurden mit größter Sorgfalt erstellt.
            Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
            können wir jedoch keine Gewähr übernehmen.
          </p>

          <p className="m-0 mt-3">
            <strong>Haftung für Links</strong>
            <br />
            Unsere Website enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Für diese fremden Inhalte
            übernehmen wir keine Gewähr.
          </p>

          <p className="m-0 mt-3">
            <strong>Urheberrecht</strong>
            <br />
            Die durch die Konnactiv erstellten Inhalte und Werke auf dieser
            Website unterliegen dem deutschen Urheberrecht.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      <Header />

      <section className="legal-hero">
        <span className="legal-title">Impressum</span>
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