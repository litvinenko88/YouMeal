import styles from "./BasketList.module.css";
import foto from "../../assets//imgs/pic.png";

function BasketList() {
  return (
    <li className={styles.wrapper}>
      <div className={styles["box-food"]}>
        <img className={styles.img} src={foto} alt="Блюдо" />
        <div className={styles["container-text"]}>
          <h2 className={styles.title}>Супер сырный</h2>
          <p className={styles.weight}>520г</p>
          <p className={styles.price}>560₽</p>
        </div>
      </div>
      <div className={styles["container-quantity"]}>
        <button className={styles["btn-minus"]}>-</button>
        <p className={styles["text-quantity"]}>1</p>
        <button className={styles["btn-plus"]}>+</button>
      </div>
    </li>
  );
}

export default BasketList;
