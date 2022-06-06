import style from "./Footer.module.scss";
import { Button, Form, FormControl } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.logo}></div>
        <div className={style.menu}>
          <h1>
            <b>Menu</b>
          </h1>
          <ul>
            <li>Strona Główna</li>
            <li>Cennik</li>
            <li>O nas</li>
            <li>Flota</li>
            <li>Kontakt</li>
          </ul>
        </div>
        <div className={style.contact}>
          <h1>
            <b>Kontakt</b>
          </h1>
          <ul>
            <li>TurboCars</li>
            <li>Wypożyczalnia samochodów</li>
            <li>ul. Chorzowska 114</li>
            <li>40-101 Katowice</li>
            <li>Tel.: XXX-XXX-XXX</li>
            <li>kontakt@turbocars.pl</li>
          </ul>
        </div>
        <div className={style.poliecies}>
          <h1>
            <b>Zasady i warunki korzystania</b>
          </h1>
          <ul>
            <li>Regulamin</li>
            <li>Warunki korzystania</li>
          </ul>
        </div>
        <div className={style.social}>
          <h1>
            <b>Social</b>
          </h1>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>TikTok</li>
          </ul>
        </div>
        <div className={style.newsletter}>
          <h1>
            <b>Newsletter</b>
          </h1>
          <ul>
            <li>
              Chcesz dowiadywać się o promocjach oraz nowych samochodach w
              naszej flocie? Zarejestruj się do newslettera już teraz.
            </li>
            <Form className={style.form}>
              <Form.Control type="text" placeholder="Wpisz swój email" />
              <Button variant="primary">Zapisz się</Button>
            </Form>
          </ul>
        </div>
      </div>
      <div className={style.devSign}>
        <h1>&copy; Kamil Rutyna 2022</h1>
      </div>
    </>
  );
};

export default Footer;
