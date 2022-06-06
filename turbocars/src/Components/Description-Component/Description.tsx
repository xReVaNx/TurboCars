import style from "./Description.module.scss";
import image from "../../images/sportscars.jpg";

const Description = () => {
  return (
    <div className={style.container}>
      <div className={style.image}></div>
      <div className={style.description}>
        <p>
          Jesteśmy jedną z największych wypożyczalni samochodowych w Polsce,
          która dysponuje zróżnicowaną flotą samochodów odpowiednią dla każdej
          grupy wiekowej oraz charakterystyki wykorzystania.
        </p>
      </div>
      <div className={style.stripeTop}></div>
      <div className={style.stripeTop}></div>
      <div className={style.stripeTop}></div>
      <div className={style.stripeTop}></div>
      <div className={style.stripeTop}></div>
      <div className={style.stripeTop}></div>
      <div className={style.stripeTop}></div>
    </div>
  );
};

export default Description;
