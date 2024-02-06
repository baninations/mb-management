import { Link, NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          className="rounded-2xl w-42 h-16 lg:w-64 lg:h-24 "
          src="../src/assets/logo.png"
          alt="Logo"
        />
      </div>

      <nav className="h-16 flex justify-center items-center">
        <ul>
          <li>
            <NavLink className="hidden sm:block" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="hidden sm:block" to="/leistungen">
              Leistungen
            </NavLink>
          </li>
          <li>
            <NavLink className="hidden sm:block" to="/impressium">
              Impressium
            </NavLink>
          </li>
          <li>
            <NavLink className="hidden sm:block" to="/kontakt">
              Kontakt
            </NavLink>
          </li>
          <li>
            <input className="sm:hidden" type="checkbox" />
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
