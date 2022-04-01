import { Link } from "react-router-dom";

import "./Navbar.scss";
import logo from "../../svg/turbocarswhite.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} />
      </div>
      <div className="navbar-menu">
        <div className="navbar-list">
          <Link to="/">Strona Główna</Link>
          <Link to="/price">Cennik</Link>
          <Link to="/about_us">O nas</Link>
          <Link to="/contact">Kontakt</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
