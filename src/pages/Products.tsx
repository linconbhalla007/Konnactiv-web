import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Products.css";

import flatRibbon from "../assets/images/flat-ribbon-cable.png";
import singleStrands from "../assets/images/single-strands.png";
import dataCable from "../assets/images/data-cable.png";
import cableConnector from "../assets/images/cable-connector.png";

const C = "#4a90d9";
const O = (o: number) => ({ opacity: o });

function CableDiagramSVG() {
  // Connector housing dimensions
  const hx = 210; // housing left x
  const hy = 40;  // housing top y
  const hw = 200; // housing width
  const hh = 220; // housing height
  const hxr = hx + hw; // housing right x

  // Wire rows: 7 horizontal wires coming out the left side of housing
  const wireCount = 7;
  const wireSpacing = hh / (wireCount + 1);
  const wireLeft = 0; // wires start from far left (partially off screen)

  // Ribs inside housing (vertical dividers)
  const ribXs = [hx + 40, hx + 80, hx + 120, hx + 160];

  // Right-side pins coming out of housing
  const pinLength = 32;

  return (
    <svg
      className="cable-diagram-svg"
      viewBox="0 0 560 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Outer housing rectangle ── */}
      <rect
        x={hx} y={hy} width={hw} height={hh}
        stroke={C} strokeWidth="1.4"
        style={O(0.75)}
      />

      {/* ── Top bracket (angle bracket shape above housing) ── */}
      <line x1={hx + 20} y1={hy - 18} x2={hx + 20} y2={hy} stroke={C} strokeWidth="1" style={O(0.5)} />
      <line x1={hx + 20} y1={hy - 18} x2={hxr - 20} y2={hy - 18} stroke={C} strokeWidth="1" style={O(0.5)} />
      <line x1={hxr - 20} y1={hy - 18} x2={hxr - 20} y2={hy} stroke={C} strokeWidth="1" style={O(0.5)} />

      {/* ── Bottom bracket ── */}
      <line x1={hx + 20} y1={hy + hh} x2={hx + 20} y2={hy + hh + 18} stroke={C} strokeWidth="1" style={O(0.5)} />
      <line x1={hx + 20} y1={hy + hh + 18} x2={hxr - 20} y2={hy + hh + 18} stroke={C} strokeWidth="1" style={O(0.5)} />
      <line x1={hxr - 20} y1={hy + hh} x2={hxr - 20} y2={hy + hh + 18} stroke={C} strokeWidth="1" style={O(0.5)} />

      {/* ── Outer dashed boundary box (shield envelope) ── */}
      <rect
        x={hx - 8} y={hy - 28} width={hw + 16} height={hh + 56}
        stroke={C} strokeWidth="0.8" strokeDasharray="6 4"
        style={O(0.3)}
      />

      {/* ── Vertical ribs inside housing ── */}
      {ribXs.map((rx, i) => (
        <line
          key={i}
          x1={rx} y1={hy + 8}
          x2={rx} y2={hy + hh - 8}
          stroke={C} strokeWidth="1"
          style={O(0.55)}
        />
      ))}

      {/* ── Horizontal wires from left edge into housing ── */}
      {Array.from({ length: wireCount }).map((_, i) => {
        const wy = hy + wireSpacing * (i + 1);
        return (
          <g key={i}>
            {/* Wire line from left edge to housing left wall */}
            <line
              x1={wireLeft} y1={wy}
              x2={hx} y2={wy}
              stroke={C} strokeWidth="1.2"
              style={O(i < 5 ? 0.65 : 0.4)}
            />
            {/* Small circle terminal at far left */}
            <circle
              cx={wireLeft + 12} cy={wy} r="3.5"
              stroke={C} strokeWidth="1.1"
              style={O(i < 5 ? 0.7 : 0.45)}
            />
            {/* Wire continues inside housing to right wall */}
            <line
              x1={hx} y1={wy}
              x2={hxr} y2={wy}
              stroke={C} strokeWidth="1"
              style={O(i < 5 ? 0.5 : 0.3)}
            />
          </g>
        );
      })}

      {/* ── Right-side pins exiting housing ── */}
      {Array.from({ length: wireCount }).map((_, i) => {
        const wy = hy + wireSpacing * (i + 1);
        return (
          <g key={i}>
            <line
              x1={hxr} y1={wy}
              x2={hxr + pinLength} y2={wy}
              stroke={C} strokeWidth="1.3"
              style={O(i < 5 ? 0.75 : 0.5)}
            />
            <circle
              cx={hxr + pinLength} cy={wy} r="3"
              stroke={C} strokeWidth="1.1"
              style={O(i < 5 ? 0.7 : 0.45)}
            />
          </g>
        );
      })}

      {/* ── Top annotation lines (callout leaders from housing top) ── */}
      <line x1={hx + 60} y1={hy} x2={hx + 60} y2={hy - 38} stroke={C} strokeWidth="0.9" style={O(0.4)} />
      <line x1={hx + 60} y1={hy - 38} x2={hx + 100} y2={hy - 38} stroke={C} strokeWidth="0.9" style={O(0.4)} />
      <circle cx={hx + 100} cy={hy - 38} r="3" stroke={C} strokeWidth="1" style={O(0.4)} />

      <line x1={hx + 150} y1={hy} x2={hx + 150} y2={hy - 48} stroke={C} strokeWidth="0.9" style={O(0.4)} />
      <line x1={hx + 150} y1={hy - 48} x2={hx + 196} y2={hy - 48} stroke={C} strokeWidth="0.9" style={O(0.4)} />
      <circle cx={hx + 196} cy={hy - 48} r="3" stroke={C} strokeWidth="1" style={O(0.4)} />

      {/* ── Bottom annotation lines ── */}
      <line x1={hx + 80} y1={hy + hh} x2={hx + 80} y2={hy + hh + 38} stroke={C} strokeWidth="0.9" style={O(0.4)} />
      <line x1={hx + 80} y1={hy + hh + 38} x2={hx + 120} y2={hy + hh + 38} stroke={C} strokeWidth="0.9" style={O(0.4)} />
      <circle cx={hx + 120} cy={hy + hh + 38} r="3" stroke={C} strokeWidth="1" style={O(0.4)} />

      <line x1={hx + 160} y1={hy + hh} x2={hx + 160} y2={hy + hh + 48} stroke={C} strokeWidth="0.9" style={O(0.4)} />
      <line x1={hx + 160} y1={hy + hh + 48} x2={hx + 200} y2={hy + hh + 48} stroke={C} strokeWidth="0.9" style={O(0.4)} />
      <circle cx={hx + 200} cy={hy + hh + 48} r="3" stroke={C} strokeWidth="1" style={O(0.4)} />

      {/* ── Dimension / measurement baseline ── */}
      <line x1={hx} y1={hy + hh + 68} x2={hxr} y2={hy + hh + 68} stroke={C} strokeWidth="0.8" style={O(0.25)} />
      <line x1={hx} y1={hy + hh + 63} x2={hx} y2={hy + hh + 73} stroke={C} strokeWidth="0.8" style={O(0.25)} />
      <line x1={hxr} y1={hy + hh + 63} x2={hxr} y2={hy + hh + 73} stroke={C} strokeWidth="0.8" style={O(0.25)} />

      {/* ── Subtle cable bundle grouping bracket on the left ── */}
      <line x1={wireLeft + 30} y1={hy + wireSpacing - 12} x2={wireLeft + 22} y2={hy + wireSpacing - 12} stroke={C} strokeWidth="0.9" style={O(0.35)} />
      <line x1={wireLeft + 22} y1={hy + wireSpacing - 12} x2={wireLeft + 22} y2={hy + wireSpacing * wireCount + 12} stroke={C} strokeWidth="0.9" style={O(0.35)} />
      <line x1={wireLeft + 22} y1={hy + wireSpacing * wireCount + 12} x2={wireLeft + 30} y2={hy + wireSpacing * wireCount + 12} stroke={C} strokeWidth="0.9" style={O(0.35)} />
    </svg>
  );
}

export default function Products() {
  return (
    <>
      <Header />

      <section className="products-page">

        {/* Products Section — FIRST */}
        <section className="products-list-section">
          <h1 className="products-title">
            Custom Cable Assemblies &amp;
            <br />
            Wire Harnesses
          </h1>

          <div className="products-grid">
            <div className="product-card">
              <img
                className="product-card-image"
                src={flatRibbon}
                alt="Kabelkonfektionen"
              />
              <h3>Kabelkonfektionen</h3>
              <p>
                Kundenspezifische Kabelkonfektionen für industrielle
                Anwendungen – von einfachen Leitungen bis zu komplexen
                Verbindungslösungen, gefertigt nach Zeichnung, Muster oder
                Spezifikation.
              </p>
              <a href="#" className="product-card-link" aria-label="Mehr erfahren">↗</a>
            </div>

            <div className="product-card">
              <img
                className="product-card-image"
                src={singleStrands}
                alt="Kabelbäume"
              />
              <h3>Kabelbäume</h3>
              <p>
                Fertigung komplexer Kabelbäume mit mehreren Abzweigungen und
                Steckverbindern – strukturiert, dokumentiert und für den
                Serieneinsatz ausgelegt.
              </p>
              <a href="#" className="product-card-link" aria-label="Mehr erfahren">↗</a>
            </div>

            <div className="product-card">
              <img
                className="product-card-image"
                src={dataCable}
                alt="Daten & Signalkabel"
              />
              <h3>Daten &amp; Signalkabel</h3>
              <p>
                Geschirmte und ungeschirmte Kabel für zuverlässige Signal-
                und Datenübertragung in industriellen Anwendungen.
              </p>
              <a href="#" className="product-card-link" aria-label="Mehr erfahren">↗</a>
            </div>

            <div className="product-card">
              <img
                className="product-card-image"
                src={cableConnector}
                alt="Prototypen"
              />
              <h3>Prototypen</h3>
              <p>
                Schnelle Umsetzung von Prototypen und Kleinserien zur
                Unterstützung von Entwicklung, Tests und Freigaben.
              </p>
              <a href="#" className="product-card-link" aria-label="Mehr erfahren">↗</a>
            </div>
          </div>
        </section>

        {/* Expertise Section — SECOND */}
        <section className="products-intro">
          <div className="products-intro-content">
            <div className="products-label">
              <span className="products-line"></span>
              <span>Unsere Expertise</span>
            </div>

            <h2 className="products-intro-title">
              Ganzheitliche Entwicklung von
              Kabelsystemen
            </h2>

            <p className="products-intro-text">
              Kombination aus Kabeldesign, Aufbaukonzepten und
              Verbindungstechnologien zur Entwicklung zuverlässiger und
              leistungsfähiger Kabelsysteme für industrielle Anwendungen.
              Fokus auf Signalintegrität, stabile Energieübertragung,
              mechanische Belastbarkeit und Schutz gegenüber
              Umwelteinflüssen.
            </p>
          </div>

          <div className="products-intro-image">
            <CableDiagramSVG />
          </div>
        </section>

      </section>

      <Footer />
    </>
  );
}