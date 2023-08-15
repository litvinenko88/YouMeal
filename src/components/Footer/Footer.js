import styles from "./Footer.module.css";
import logo from "../../assets/icons/logo-footer.png";

function Footer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="Логотип" />
        <div className={styles.box1}>
          <i className="bi bi-c-circle"></i>
          <p>YouMeal, 2022</p>
        </div>
        <p>Design: Anastasia Ilina</p>
      </div>

      <div className={styles.container}>
        <h2 className={styles.heading}>Номер для заказа</h2>
        <div className={styles.box2}>
          <i className="bi bi-telephone-fill"></i>
          <p>+7(930)833-38-11</p>
        </div>
      </div>

      <div className={styles.container}>
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
  );
}

export default Footer;
