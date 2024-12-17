import styles from "./StartBlock.module.css";
import bg from "../../assets/images/start-flowers.webp";

export const StartBlock = () => {
  return (
    <div className={styles.container}>
      <img src={bg} alt="background flowers" />
      <div className={styles.content}>
        <h2>
          Роскошные розовые пионы
          <br />
          Букет
        </h2>
        <a href="tel:+996 700358560">
          <button>ЗАКАЗАТЬ</button>
        </a>
      </div>
    </div>
  );
};
