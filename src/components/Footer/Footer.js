import styles from "./Footer.module.css";
import logo from "../../assets/icons/logo-footer.png";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.box}>
          <img className={styles.logo} src={logo} alt="Логотип" />
        </div>

        <div className={styles.box}>
          <h2 className={styles.heading}>Номер для заказа</h2>
          <div className={styles.box2}>
            <i className="bi bi-telephone-fill"></i>
            <p>+7(930)833-38-11</p>
          </div>
        </div>

        <div className={styles.box}>
          <h2 className={styles.heading}>Мы в соцсетях</h2>

          <div className={styles.box3}>
            <a href="#">
              <i className="bi bi-telegram"></i>
            </a>
            <a href="#">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.box1}>
        <i className="bi bi-c-circle"></i>
        <p>YourMeal, 2023</p>
      </div>
      <p className={styles.author}>
        Author: <a href="https://clck.ru/35QvLT">Litvinenko n.v</a>
      </p>
    </div>
  );
}

export default Footer;
