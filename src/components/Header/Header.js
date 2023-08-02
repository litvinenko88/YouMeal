import styles from "./Header.module.css";

import headerLago from "../../assets/icons/logo-header.png";
import Pic from "../../assets/imgs/pic.png";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles["text-container"]}>
          <img className={styles.headerLago} src={headerLago} alt="Логотип" />
        </div>

        <div className={styles.containerPic}>
          <img className={styles["img-pic"]} src={Pic} alt="Гамбургер" />

          <div className={styles["container-text"]}>
            <h1 className={styles.heading}>
              Только самые <br />
              <span>сочные бургеры!</span>
            </h1>
            <p className={styles["dilivery-text"]}>
              Бесплатная доставка от 599₽
            </p>
          </div>
        </div>
      </div>
      <Navigation/>
    </div>
  );
}

export default Header;
