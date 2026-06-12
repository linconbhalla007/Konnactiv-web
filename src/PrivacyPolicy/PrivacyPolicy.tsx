import "../Legal.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function PrivacyPolicy() {
    const rows = [
        {
            title: "Verantwortlicher",
            content: (
                <>
                    <strong>Konnactiv</strong>
                    <br />
                    Stresemannstraße 23
                    <br />
                    10963 Berlin
                    <br />
                    Deutschland
                    <br />
                    E-Mail: info@konnactiv.de
                </>
            ),
        },

        {
            title: "Hosting",
            content: (
                <>
                    <p className="m-0">
                        Unsere Website wird bei einem externen Hosting-Anbieter betrieben. Dabei können personenbezogene Daten wie IP-Adressen oder Zugriffsdaten verarbeitet werden.
                    </p>
                    <p className="m-0">
                        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem sicheren und effizienten Betrieb der Website).
                    </p>
                </>
            ),
        },

        {
            title: "Zugriffsdaten (Server-Logfiles)",
            content: (
                <>
                    <p className="m-0">
                        Beim Besuch unserer Website werden automatisch technische Daten erfasst, z. B.:
                    </p>

                    <ul>
                        <li>IP-Adresse</li>
                        <li>Datum und Uhrzeit des Zugriffs</li>
                        <li>Browsertyp und Betriebssystem</li>
                        <li>Referrer-URL</li>
                    </ul>

                    <p className="m-0">
                        Diese Daten dienen ausschließlich der technischen Bereitstellung und Sicherheit der Website.
                    </p>

                    <p className="m-0">
                        Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                </>
            ),
        },

        {
            title: "Kontaktformular",
            content: (
                <>
                    <p className="m-0">
                        Wenn Sie uns per E-Mail oder über ein Kontaktformular kontaktieren, werden Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeitet.
                    </p>
                    <p className="m-0">
                        Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                </>
            ),
        },

        {
            title: "Cookies",
            content: (
                <>
                    <p className="m-0">
                        Unsere Website kann Cookies oder ähnliche Technologien verwenden. Diese dienen dazu, die Nutzung unserer Website zu analysieren und unser Angebot zu verbessern.
                    </p>

                    <p className="m-0">
                        Sofern Analyse- oder Tracking-Tools eingesetzt werden, erfolgt dies nur mit Ihrer Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
                    </p>
                </>
            ),
        },

        {
            title: "Ihre Rechte",
            content: (
                <>
                    <p>
                        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten.
                    </p>
                </>
            ),
        },

        {
            title: "Beschwerderecht",
            content: (
                <>
                    <p className="m-0">
                        Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren.
                    </p>

                    <p className="m-0">
                        Zuständige Aufsichtsbehörde:
                        <br />
                        Berliner Beauftragte für Datenschutz und Informationsfreiheit
                        <br />
                        Alt-Moabit 59–61
                        <br />
                        10555 Berlin
                    </p>
                </>
            ),
        },

        {
            title: "Datensicherheit",
            content: (
                <>
                    <p>
                        Unsere Website nutzt SSL- bzw. TLS-Verschlüsselung zum Schutz übertragener Daten.
                    </p>
                </>
            ),
        },
    ];

    return (
        <>
            <Header />

            <section className="legal-hero">
                <span className="legal-title">Datenschutzerklärung</span>
                <span className="legal-subtitle">
                    Stand: [Datum einfügen]
                </span>
                <span className="legal-description">
                    Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. Nachfolgend informieren wir Sie über die Verarbeitung personenbezogener Daten bei der Nutzung unserer Website gemäß der Datenschutz-Grundverordnung (DSGVO).
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