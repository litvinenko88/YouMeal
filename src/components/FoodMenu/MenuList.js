import styles from "./MenuList.module.css";
import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";

function MenuList(props) {
  const basketContext = useContext(BasketContext);

  function addToBasketHandler(amount) {
    basketContext.addItem({
      id: props.id,
      img: props.img,
      price: props.price,
      title: props.title,
      weight: props.weight,
      amount: 1,
    });
  }

  return (
    <li className={styles.wrapper}>
      <img className={styles.img} src={props.img} alt="Блюдо" />

      <div>
        <h2 className={styles.price}>{props.price}₽</h2>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.weight}>{props.weight}г</p>
      </div>
      <button className={styles.button} onClick={addToBasketHandler}>
        Добавить
      </button>
    </li>
  );
}

export default MenuList;
