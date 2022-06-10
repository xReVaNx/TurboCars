import { useState } from "react";
import style from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { Divide as Hamburger } from "hamburger-react";

import logo from "../../svg/turbocarswhite.svg";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className={style.navbar}>
        <div className={style.logo}>
          <img src={logo} className={style.image} />
        </div>
        <div className={style.menu}>
          <div className={style.list}>
            <Link to="/">Strona Główna</Link>
            <Link to="/price">Cennik</Link>
            <Link to="/fleet">Flota</Link>
            <Link to="/about_us">O nas</Link>
            <Link to="/contact">Kontakt</Link>
            <div className={style.mobileMenu}>
              <Hamburger
                rounded
                color="white"
                toggled={isOpen}
                toggle={setOpen}
              />
            </div>
          </div>
        </div>
      </div>
      {isOpen && <MobileNavbar />}
    </>
  );
};

export default Navbar;
