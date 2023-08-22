import styles from "./BasketList.module.css";
import foto from "../../assets//imgs/pic.png";
import React from "react";

const BasketList = (props) => {
  return (
    <li className={styles.wrapper}>
      <div className={styles["box-food"]}>
        <img className={styles.img} src={props.img} alt="Блюдо" />
        <div className={styles["container-text"]}>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.weight}>{props.weight}</p>
          <p className={styles.price}>{props.price}</p>
        </div>
      </div>
      <div className={styles["container-quantity"]}>
        <button className={styles["btn-minus"]} onClick={props.onRemove}>
          -
        </button>
        <p className={styles["text-quantity"]}>{props.amount}</p>

        <button className={styles["btn-plus"]} onClick={props.onAdd}>
          +
        </button>
      </div>
    </li>
  );
};

export default BasketList;
