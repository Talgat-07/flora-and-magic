import style from '../Footer/Footer.module.scss'
import {FaceBook} from '../../assets/icons/FaceBook.jsx'
import {Insta} from '../../assets/icons/Insta.jsx'
import { TikTok } from '../../assets/icons/TikTok.jsx'
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.socialIcons}>
        <FaceBook />
        <div style={{borderLeft: '3px solid white', height: '52px'}}></div>
        <Insta/>
        <div style={{borderLeft: '3px solid white', height: '52px'}}></div>
        <TikTok/>
      </div>
      <div className={style.infoUser}>
      <p className={style.ShopName}>Flora and Magic</p>
      <p className={style.user}>© 2024  Сабырова Айдана Сыргаковна</p>
      </div>
    </div>
  )
}

export default Footer