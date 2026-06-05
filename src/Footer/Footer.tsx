import "./Footer.css";
import konnactivLogo from "../assets/images/Konnactiv-Logo.svg";
import { Link } from "react-router-dom";
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
          <Link to="/about" className="footer-nav-bar-text">
            Über Uns
          </Link>
          <Link to="/" className="footer-nav-bar-text">
            Produkte & Leistungen
          </Link>
          <Link to="/" className="footer-nav-bar-text">
            Impressum
          </Link>
        </nav>

        <span className="footer-text">
          Maßgeschneiderte Kabellösungen für Industrien der nächsten Generation.
        </span>

        <div className="footer-socials">
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
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
          <Link to="/" className="copyright-text">
            Privacy Policy
          </Link>
          <Link to="/terms" className="copyright-text">
            Terms of Service
          </Link>
          <Link to="/contact" className="copyright-text">
            Quality Standards
          </Link>
        </div>
      </div>
    </footer>
  );
}
