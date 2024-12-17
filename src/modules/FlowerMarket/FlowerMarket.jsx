import styles from "./FlowerMarket.module.css";
import img from "../../assets/images/flower-market-img.webp";

export const FlowerMarket = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content1}>
        <h2>№1 ОРИГИНАЛЬНЫЙ ЦВЕТОЧНЫЙ РЫНОК</h2>
        <p>
          С 2016 года мы осуществляем доставку по всей стране с самыми свежими и
          красивыми цветами. Безупречные цветы по отличным ценам, быстрая
          доставка по всему городу.
        </p>
        <a href="tel:+996 700358560">
          <button>ЗАКАЗАТЬ</button>
        </a>
      </div>
      <div className={styles.content2}>
        <img src={img} alt="image flowers" />
      </div>
    </div>
  );
};
