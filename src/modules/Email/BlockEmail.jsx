import Hand from "../../assets/icons/Hand";
import Protection from "../../assets/icons/Protection";
import Truck from "../../assets/icons/Truck";
import Truck2 from "../../assets/icons/Truck2";
import style from "./email.module.scss";


const BlockEmail = () => {
  return (
    <div className={style.Subscribe}>
      <div className={style.email}>
        <h2>Подписаться</h2>
        <p>Подпишитесь, чтобы получать последние новости о продажах, новых выпусках и многом другом...</p>
        <div className={style.inputEmail}>
          <input type="email" placeholder="Email*" />
          <button>Регистрация</button>
        </div>
      </div>

      <div className={style.InfoEmail}>
        <div className={style.hand}>
          <Hand />
          <p>Связанная рука
            Красиво упакованный
            Букеты</p>
        </div>
        <div className={style.truck1}>
          <Truck />
          <p>Доставка по всей стране</p>
        </div>
        <div className={style.truck2}>
          <Truck2 />
          <p>Бесплатная доставка по городу</p>
        </div>
        <div className={style.protection}>
        <Protection/>
        <p>Безопасные платежи и превосходное качество
        Обслуживание клиентов</p>
        </div>
      </div>

    </div>
  )
}

export default BlockEmail;