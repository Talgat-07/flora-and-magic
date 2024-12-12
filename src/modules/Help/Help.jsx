import bg from "../../assets/images/help-flowers.webp";
import styles from "./Help.module.scss";

export const Help = () => {
  return (
    <div className={styles.container}>
      <img src={bg} alt="background flowers" />
      <div className={styles.content}>
        <h3>НУЖНА ПОМОЩЬ?</h3>
        <h2>НАША КОМАНДА ПО ОБСЛУЖИВАНИЮ КЛИЕНТОВ ГОТОВА ПОМОЧЬ</h2>
        <p>
          Позвоните нам или напишите нам в WhatsApp по номеру +996 700 35 85 60.
          Наша команда с радостью расскажет вам обо всем процессе и поможет
          выбрать идеальные цветы для вашего случая.
        </p>
      </div>
    </div>
  );
};
