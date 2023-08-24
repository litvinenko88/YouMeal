import styles from "./BasketList.module.css";
import { ModalContext } from "../../context/ModuleContext";
import { useContext } from "react";
import React from "react";
import QuantityButton from "../UI/QuantityButton";

const BasketList = (props) => {
  const modalContext = useContext(ModalContext);

  return (
    <li className={styles.wrapper}>
      <div className={styles["box-food"]}>
        <img className={styles.img} src={props.img} alt="Блюдо" />
        <div className={styles["container-text"]}>
          <h2 className={styles.title}>{props.title}</h2>
          <p className={styles.weight}>{props.weight}г</p>
          <p className={styles.price}>{props.price}₽</p>
        </div>
      </div>
      <QuantityButton
        onRemove={props.onRemove}
        onAdd={props.onAdd}
        amount={props.amount}
      />
    </li>
  );
};

export default BasketList;
