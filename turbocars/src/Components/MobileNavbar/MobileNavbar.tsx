import ReactDOM from "react-dom";
import style from "./MobileNavbar.module.scss";
import { Link } from "react-router-dom";

const MobileNavbar = () => {
  const modal = document.querySelector("#modal") as HTMLElement;

  return ReactDOM.createPortal(
    <div className={style.container}>
      <div className={style.menu}>
        <Link to="/">Strona Główna</Link>
        <Link to="/price">Cennik</Link>
        <Link to="/fleet">Flota</Link>
        <Link to="/about_us">O nas</Link>
        <Link to="/contact">Kontakt</Link>
      </div>
    </div>,
    modal
  );
};

export default MobileNavbar;
