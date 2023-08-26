import styles from "./MenuList.module.css";
import { BasketContext } from "../../context/BasketContext";
import { ModalContext } from "../../context/ModuleContext";
import { useContext } from "react";

function MenuList(props) {
  const basketContext = useContext(BasketContext);
  const moduleContext = useContext(ModalContext);

  function addToBasketHendler() {
    basketContext.addItems({
      id: props.id,
      img: props.img,
      price: props.price,
      title: props.title,
      weight: props.weight,
      amount: 1,
    });
  }

  function openModalInfoHandler() {
    moduleContext.openInfoDish(props);
  }

  return (
    <li className={styles.wrapper}>
      <div className={styles.container} onClick={openModalInfoHandler}>
        <img className={styles.img} src={props.img} alt="Блюдо" />

        <div>
          <h2 className={styles.price}>{props.price}₽</h2>
          <p className={styles.title}>{props.title}</p>
          <p className={styles.weight}>{props.weight}г</p>
        </div>
      </div>
      <button className={styles.button} onClick={addToBasketHendler}>
        Добавить
      </button>
    </li>
  );
}

export default MenuList;
