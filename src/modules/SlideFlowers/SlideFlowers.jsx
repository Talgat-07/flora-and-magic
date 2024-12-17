import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SlideFlowers.module.css";
import Slider from "react-slick";
import { slideFlowersData } from "../../utils/constants/constants";
import { ArrowIcon } from "../../assets/icons/ArrowIcon";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.nextArrow} onClick={onClick}>
      <ArrowIcon />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={styles.prevArrow} onClick={onClick}>
      <ArrowIcon />
    </div>
  );
}

export const SlideFlowers = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "90px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1700,
        settings: {
          slidesToShow: 2.7,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2.3,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h2>Цветочный магазин Саде</h2>
        <p>Искусство дарить подарки</p>
      </div>
      <div className={styles.slide}>
        <Slider {...settings}>
          {slideFlowersData.map((item, i) => (
            <div key={i} className={styles.slideCard}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p className={styles.category}>{item.category}</p>
              <p className={styles.price}>{item.price} сом</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
