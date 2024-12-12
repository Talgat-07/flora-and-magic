import style from "./email.module.scss";

const BlockEmail = () => {
  return (
    <div className={style.Subscribe}>
      <div className={style.email}>
        <h2>Subscribe</h2>
        <p>Sign up to get the latest on sales, new releases and more...</p>
        <div className={style.inputEmail}>
          <input type="email" placeholder="Email*" />
          <button>Sing Up</button>
        </div>
      </div>

      <div className=""></div>

    </div>
  )
}

export default BlockEmail;