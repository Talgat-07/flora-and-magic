import { PhoneIcon } from "../../assets/icons/PhoneIcon";
import { IconSearch } from "../../assets/icons/IconSearch";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <a href="tel:+996 700358560">
          <PhoneIcon />
          +996 700358560
        </a>
      </div>
      <div className={styles.title}>
        <h1>Flora and Magic</h1>
        <p>Мои любимые цвета — цветы</p>
      </div>
      <form className={styles.search}>
        <input type="text" placeholder="Поиск" />
        <button type="submit">
          <IconSearch />
        </button>
      </form>
    </div>
  );
};
