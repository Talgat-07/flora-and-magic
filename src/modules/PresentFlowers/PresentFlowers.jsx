import { ArrowRightIcon } from "../../assets/icons/ArrowRightIcon";
import bg from "../../assets/images/present-flowers.webp";
import styles from "./PresentFlowers.module.css";

export const PresentFlowers = () => {
  return (
    <div className={styles.container}>
      <img src={bg} alt="background flowers" />
      <div className={styles.content}>
        <div className={styles.text}>
          <p>ПОДАРКИ СДЕЛАНЫ ПРАВИЛЬНО</p>
        </div>
        <h2>МЫ ПРЕДЛАГАЕМ ПРЕКРАСНЫЙ ВЫБОР ПОДАРКОВ ДЛЯ ВАШИХ БЛИЗКИХ.</h2>
        <a href="tel:+996 700358560">
          ЗАКАЗАТЬ
          <ArrowRightIcon />
        </a>
      </div>
    </div>
  );
};
