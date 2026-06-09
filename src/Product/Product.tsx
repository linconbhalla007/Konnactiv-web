import "./Product.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useState } from "react";
import inquiry from "../assets/images/technical-inquiry.svg";
import cableSystems from "../assets/images/cable-systems.svg";
import product1 from "../assets/images/product1.svg";
import product2 from "../assets/images/product2.svg";
import product3 from "../assets/images/product3.svg";
import product4 from "../assets/images/product4.svg";

import iso from "../assets/images/iso.svg";
import ul from "../assets/images/ul.svg";
import rohs from "../assets/images/rohs.svg";
import reach from "../assets/images/reach.svg";
import ipc from "../assets/images/ipc.svg";

export default function Product() {
    const [selectedCard, setSelectedCard] = useState<any>(null);
    const productCards = [
        {
            image: product4,
            title: "Kabelkonfectionen",
            text: "Kundenspezifische Kabelkonfektionen für industrielle Anwendungen – von einfachen Leitungen bis zu komplexen Verbindungslösungen, gefertigt nach Zeichnung, Muster oder Spezifikation.",
            popupTitle: "Kabelkonfectionen",
            popupText: (
                <>
                    <p>
                        Kundenspezifische Kabelkonfektionen für industrielle Anwendungen – von einfachen Leitungen bis zu komplexen Verbindungslösungen, gefertigt nach Zeichnung, Muster oder Spezifikation.
                    </p>

                    <p>
                        Entwicklung und Fertigung individueller Kabelkonfektionen für Signal-, Daten- und Stromanwendungen in industriellen Umgebungen. Umsetzung nach technischen Anforderungen, Zeichnungen oder Mustern unter Berücksichtigung von Normen und Einsatzbedingungen.
                        Verarbeitung unterschiedlicher Leitungstypen wie einadrige und mehradrige Kabel, geschirmte und ungeschirmte Ausführungen sowie Rund- und Flachkabel. Integration verschiedenster Steckverbinder, darunter D-Sub, Rundsteckverbinder, JST-Systeme und weitere herstellerspezifische Lösungen.
                        Anwendung von Verbindungstechnologien wie Crimp-, Löt- und Schraubverbindungen sowie umspritzen Bauformen. Ergänzende Leistungen umfassen Kennzeichnung, Prüfung und Dokumentation für eine reproduzierbare und zuverlässige Serienfertigung.
                    </p>


                </>
            ),
        },
        {
            image: product3,
            title: "Kabelbäume",
            text: "Fertigung komplexer Kabelbäume mit mehreren Abzweigungen und Steckverbindern – strukturiert, dokumentiert und für den Serieneinsatz ausgelegt.",
            popupTitle: "Kabelbäume",
            popupText: (
                <>
                    <p>
                        Planung und Fertigung individueller Kabelbäume für Maschinenbau,
                        Automation, Medizintechnik und industrielle Anwendungen.
                    </p>
                    <p>
                        Wir realisieren Kabelbäume nach Zeichnung, Muster oder technischer
                        Spezifikation – inklusive Leitungsauswahl, Steckverbinderintegration,
                        Kennzeichnung und Prüfung.
                    </p>
                </>
            ),
        },
        {
            image: product2,
            title: "Daten & Signalkabel",
            text: "Geschirmte und ungeschirmte Kabel für zuverlässige Signal- und Datenübertragung in industriellen Anwendungen.",
            popupTitle: "Daten & Signalkabel",
            popupText: (
                <>
                    <p>
                        Fertigung geschirmter und ungeschirmter Daten- und Signalkabel für
                        industrielle Schnittstellen und zuverlässige Kommunikation.
                    </p>
                    <p>
                        Dazu zählen Ethernet-Kabel, Busleitungen, Schnittstellenkabel sowie
                        kundenspezifische Leitungen für Sensorik, Steuerungen und Automation.
                    </p>
                </>
            ),
        },
        {
            image: product1,
            title: "Prototypen",
            text: "Schnelle Umsetzung von Prototypen und Kleinserien zur Unterstützung von Entwicklung, Tests und Freigaben.",
            popupTitle: "Wire Harness",
            popupText: (
                <>
                    <p>
                        Maßgeschneiderte Wire-Harness-Lösungen für komplexe elektrische und
                        elektronische Systeme.
                    </p>
                    <p>
                        Wir unterstützen von der Konzeption über Prototypen bis zur
                        Serienfertigung mit geprüfter Qualität und reproduzierbaren Prozessen.
                    </p>
                </>
            ),
        },
    ];

    const components = [
        "JST",
        "CONEC",
        "LEMO",
        "LUMBERG",
        "PHOENIX CONTACT",
        "BINDER",
        "MOLEX",
        "TE CONNECTIVITY",
    ];

    const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

    const accordionData = [
        {
            shortTitle: "Signal-, Daten- und Versorgungskabel",
            shortDescription:
                "Fertigung unterschiedlicher Kabeltypen für Signalübertragung, Datenkommunikation und Energieversorgung. Dazu zählen geschirmte und ungeschirmte Signalkabel, Datenkabel für industrielle Schnittstellen sowie Strom- und Versorgungskabel für elektrische Anwendungen.",

            content: (
                <>
                    <h6>Typische Ausführungen:</h6>

                    <ul>
                        <li>
                            Signalkabel für Sensorik, Steuerungen und industrielle Kommunikation
                        </li>
                        <li>
                            Datenkabel wie Ethernet-Kabel, Busleitungen und Schnittstellenkabel (z. B. D-Sub, RJ45, M12)
                        </li>
                        <li>Steuerleitungen und flexible Steuerkabel</li>
                        <li>
                            Stromkabel und Versorgungsleitungen für Niederspannungs- und Industrieanwendungen
                        </li>
                        <li>
                            Hybridkabel zur Kombination von Signal- und Energieübertragung
                        </li>
                    </ul>

                    <p>
                        Einsatz in Bereichen wie Maschinenbau, Automatisierungstechnik, Medizintechnik und industrieller Elektronik.
                    </p>
                </>
            ),
        },

        {
            shortTitle: "Kabelaufbau & Leitungstypen",

            shortDescription:
                "Umsetzung unterschiedlicher Leiteraufbauten und Kabeltypen je nach mechanischer, elektrischer und thermischer Anforderung.",

            content: (
                <>

                    <h6>Typische Varianten:</h6>

                    <ul>
                        <li>Einadrige Leitungen und mehradrige Kabel</li>
                        <li>Litzenleitungen und Massivleiter</li>
                        <li>
                            Geschirmte Kabel mit Geflechtschirm, Folienschirm oder kombinierter Schirmung
                        </li>
                        <li>Ungeschirmte Leitungen für einfache Anwendungen</li>
                        <li> Rundkabel und Flachbandkabel</li>
                    </ul>

                    <h6>Verwendete Materialien und Spezifikationen:</h6>

                    <ul>
                        <li>PVC-, PUR-, TPE- und Silikonleitungen</li>
                        <li>halogenfreie Kabel (LSZH)</li>
                        <li>
                            UL-zertifizierte Leitungen (z. B. UL1007, UL1015, UL2464, UL2586)
                        </li>
                        <li>temperaturbeständige und ölbeständige Kabel</li>
                        <li>hochflexible Leitungen für bewegte Anwendungen</li>
                    </ul>

                    <p>
                        Auslegung unter Berücksichtigung von EMV-Anforderungen, Biegeradien und mechanischer Belastung..
                    </p>
                </>
            ),
        },

        {
            shortTitle: "Verbindungstechnologien",

            shortDescription:
                "Einsatz verschiedener Verbindungstechnologien und Stecksysteme für sichere elektrische Kontakte und langlebige Verbindungen.",

            content: (
                <>

                    <h6>Kontaktierungstechniken:</h6>

                    <ul>
                        <li>
                            Crimpverbindungen für reproduzierbare industrielle Kontakte
                        </li>
                        <li>
                            Lötverbindungen für spezifische Anwendungen und Bauformen
                        </li>
                        <li>Schneidklemm- und IDC-Technik</li>
                        <li>Schraub- und Federklemmen</li>
                    </ul>

                    <h6>Steckverbindersysteme:</h6>

                    <ul>
                        <li>D-Sub Steckverbinder (Sub-D)</li>
                        <li>
                            Rundsteckverbinder (z. B. M8, M12, Push-Pull Systeme wie LEMO)
                        </li>
                        <li>JST Steckverbinder und Board-to-Wire Systeme</li>
                        <li>RJ45, USB, BNC und weitere Schnittstellen</li>
                        <li>kundenspezifische Stecklösungen</li>
                    </ul>

                    <h6>Zusätzliche Ausführungen:</h6>

                    <ul>
                        <li>umspritze Steckverbinder (Overmolding)</li>
                        <li>Zugentlastungen und Knickschutz</li>
                        <li>
                            vergossene Verbindungen für erhöhte Schutzarten (IP67, IP68)
                        </li>
                    </ul>
                </>
            ),
        },
    ];

    return (
        <>
            <Header />

            <section className="product-main-section">
                <span className="product-main-title">
                    Custom Cable Assemblies & Wire Harnesses
                </span>

                <div className="product-card-grid">
                    {productCards.map((item) => (
                        <div
                            className="product-card"
                            key={item.title}
                            onClick={() => setSelectedCard(item)}
                        >
                            <img src={item.image} alt={item.title} />

                            <span className="product-card-title">{item.title}</span>

                            <span className="product-card-para">{item.text}</span>

                            <span className="product-card-arrow">↗</span>
                        </div>
                    ))}

                    {selectedCard && (
                        <div className="product-popup-overlay">
                            <div className="product-popup">
                                <button
                                    className="product-popup-close"
                                    onClick={() => setSelectedCard(null)}
                                >
                                    ×
                                </button>

                                <h3>{selectedCard.popupTitle}</h3>

                                <div className="product-popup-content">
                                    {selectedCard.popupText}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <section className="expertise-section">
                <div className="expertise-content">
                    <div className="expertise-left">
                        <div className="mission-label">
                            <span className="about-horizontal-line"></span>
                            <span>Unsere Expertise</span>
                        </div>

                        <span className="expertise-title">
                            Ganzheitliche Entwicklung von Kabelsystemen
                        </span>

                        <span className="expertise-para">
                            Kombination aus Kabeldesign, Aufbaukonzepten und Verbindungstechnologien
                            zur Entwicklung zuverlässiger und leistungsfähiger Kabelsysteme für
                            industrielle Anwendungen. Fokus auf Signalintegrität, stabile
                            Energieübertragung, mechanische Belastbarkeit und Schutz gegenüber
                            Umwelteinflüssen.
                        </span>
                    </div>

                    <div className="expertise-image-wrapper">
                        <img src={cableSystems} alt="expertise" className="expertise-img" />
                    </div>
                </div>
            </section>
            <section className="product-accordion-section">
                {accordionData.map((item, index) => {
                    const isOpen = activeAccordion === index;

                    return (
                        <div className="accordion-item" key={index}>
                            <div className={`accordion-header ${isOpen ? "active" : ""}`}>
                                <div className="accordion-title">{item.shortTitle}</div>

                                <div className="accordion-right-content">
                                    <div className="accordion-description">
                                        {item.shortDescription}
                                    </div>

                                    {isOpen && (
                                        <div className="accordion-expanded">
                                            {item.content}
                                        </div>
                                    )}
                                </div>

                                <button
                                    className="accordion-icon"
                                    onClick={() => setActiveAccordion(isOpen ? null : index)}
                                >
                                    {isOpen ? "−" : "+"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </section>
            <section className="components-section">
                <span className="components-title">Connectors & Components</span>

                <span className="components-para">
                    Manufacturer-independent selection according to technical requirements
                </span>

                <div className="components-grid">
                    {components.map((item) => (
                        <div className="component-box" key={item}>
                            {item}
                        </div>
                    ))}
                </div>
            </section>

            <section className="quality-section">
                <div>
                    <span className="quality-title">Quality & Standards</span>

                    <span className="quality-para">
                        Unsere Fertigung orientiert sich an anerkannten Standards wie ISO
                        9001, UL, RoHS und REACH. Dadurch gewährleisten wir gleichbleibend
                        hohe Qualität.
                    </span>
                </div>

                <div className="quality-icons">
                    <img src={iso} alt="iso" />
                    <img src={ul} alt="ul" />
                    <img src={rohs} alt="rohs" />
                    <img src={reach} alt="reach" />
                    <img src={ipc} alt="ipc" />
                </div>
            </section>

            <section className="technical-section">
                <img src={inquiry} alt="technical inquiry" />

                <span className="technical-title">Submit a Technical Inquiry</span>

                <span className="technical-para">
                    Submit a technical inquiry for cable assemblies or wire harnesses. Our engineering team will review your requirements and provide a detailed proposal.
                </span>

                <button className="btn-about-cable">Jetzt Anfragen</button>
                <span className="technical-footer mt-2">
                    Drawings, specifications, or samples can be provided
                </span>
            </section>
            <Footer />
        </>
    );
}