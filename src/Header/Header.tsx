import "./Header.css";
import konnactivLogo from "../assets/images/Konnactiv-Logo.svg";
import sideBar from "../assets/images/side-bar.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import useWindowWidth from "../hooks/useWindowWidth";

export default function Header() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/", { state: { scrollTo: "contact" } });
  };
  const width = useWindowWidth();
  const isMobile = width < 768;
  return (
    <header className="header">
      <img src={konnactivLogo} alt="konnactivLogo" />
      {isMobile ? (
        <img src={sideBar} alt="sideBar" />
      ) : (
        <nav className="nav-bar">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-bar-text active" : "nav-bar-text"
            }
          >
            Über Uns
          </NavLink>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-bar-text active" : "nav-bar-text"
            }
          >
            Produkte
          </NavLink>
          <button className="btn-header" onClick={handleContactClick}>
            Jetzt Anfragen
          </button>
        </nav>
      )}
    </header>
  );
}
