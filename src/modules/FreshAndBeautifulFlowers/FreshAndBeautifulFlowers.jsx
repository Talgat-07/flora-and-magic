import imgFlowers1 from "../../assets/images/flowers-1.webp";
import imgFlowers2 from "../../assets/images/flowers-2.webp";
import imgFlowers3 from "../../assets/images/flowers-3.webp";
import styles from "./FreshAndBeautifulFlowers.module.scss";

export const FreshAndBeautifulFlowers = () => {
  return (
    <div className={styles.container}>
      <h2>СВЕЖИЕ И КРАСИВЫЕ ЦВЕТЫ</h2>
      <div className={styles.content}>
        <div>
          <img src={imgFlowers1} alt="Грустная любовь" />
          <p>Саде любовь</p>
        </div>
        <div>
          <img src={imgFlowers2} alt="Грустная любовь" />
          <p>Выходи за меня</p>
        </div>
        <div>
          <img src={imgFlowers3} alt="Грустная любовь" />
          <p>Отправить любовь</p>
        </div>
      </div>
      <div className={styles.text}>
        <h3>Лучший интернет-магазин цветов в городе</h3>
        <a href="tel:+996 700358560">Узнать больше</a>
      </div>
    </div>
  );
};
