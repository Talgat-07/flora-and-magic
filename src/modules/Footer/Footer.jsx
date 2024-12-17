import style from "../Footer/Footer.module.css";
import { FaceBook } from "../../assets/icons/FaceBook.jsx";
import { Insta } from "../../assets/icons/Insta.jsx";
import { TikTok } from "../../assets/icons/TikTok.jsx";

const FooterBlock = () => {
  return (
    <div className={style.footer}>
      <div className={style.socialIcons}>
        <a href="https://www.facebook.com/?locale=ru_RU">
          <FaceBook />
        </a>

        <div style={{ borderLeft: "3px solid white", height: "52px" }}></div>
        <a href="https://www.instagram.com/">
          <Insta />
        </a>

        <div style={{ borderLeft: "3px solid white", height: "52px" }}></div>
        <a href="https://www.tiktok.com/">
          <TikTok />
        </a>
      </div>
      <div className={style.infoUser}>
        <p className={style.ShopName}>Flora and Magic</p>
        <p className={style.user}>© 2024 Сабырова Айдана Сыргаковна</p>
      </div>
    </div>
  );
};

export default FooterBlock;
