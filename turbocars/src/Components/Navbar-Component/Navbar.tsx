import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";

import logo from "../../svg/turbocarswhite.svg";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <img src={logo} className={style.image} />
      </div>
      <div className={style.menu}>
        <div className={style.list}>
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
