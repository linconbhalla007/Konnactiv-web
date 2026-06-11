import "./Footer.css";
import konnactivLogo from "../assets/images/Konnactiv-Logo.svg";
import { Link } from "react-router-dom";
import facebook from "../assets/images/facebook.svg";
import instagram from "../assets/images/instagram.svg";
import linkedin from "../assets/images/linkedin.svg";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Footer() {
  const width = useWindowWidth();
  const isMobile = width < 768;
  return (
    <footer className="footer">
      <div className="footer-top">
        <img src={konnactivLogo} alt="konnactivLogo" className="footer-logo" />

        <div className="footer-divider"></div>

        <nav className="footer-nav">
          <Link to="/" className="footer-nav-bar-text">
            Über Uns
          </Link>
          <Link to="/products" className="footer-nav-bar-text">
            Produkte & Leistungen
          </Link>
          <Link to="/contact-details" className="footer-nav-bar-text">
            Impressum
          </Link>
        </nav>

        <span className="footer-text">
          Maßgeschneiderte Kabellösungen für Industrien der nächsten Generation.
        </span>

        <div className="footer-socials">
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
          <img src={facebook} alt="facebook" />
        </div>
      </div>

      <div
        className={`${
          isMobile ? "footer-bottom-mobile d-flex flex-column" : "footer-bottom"
        }`}
      >
        <span className="copyright-text">
          © 2025 Konnactiv. All rights reserved.
        </span>

        <div className="footer-legal">
          <Link to="/privacy-policy" className="copyright-text">
            Datenschutzerklärung
          </Link>
          <Link to="/terms-and-conditions" className="copyright-text">
            Allgemeine Geschäftsbedingungen
          </Link>
        </div>
      </div>
    </footer>
  );
}
