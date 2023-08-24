import styles from "./Basket.module.css";
import BasketList from "./BasketList";
import delivery from "../../assets/icons/icon-delivery.png";
import { BasketContext } from "../../context/BasketContext";
import { ModalContext } from "../../context/ModuleContext";
import React, { useContext, useState } from "react";
import Button from "../UI/Button";

function Basket(props) {
  const [rollUp, setRollUp] = useState(true);
  const basketContext = useContext(BasketContext);
  const modalContext = useContext(ModalContext);

  const totalAmount = `${basketContext.totalAmount.toFixed(2)}₽`;
  const hasItems = basketContext.items.length > 0;

  const basketItemNumber = basketContext.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  function addBasketItemHandler(item) {
    basketContext.addItems({ ...item, amount: 1 });
  }
  function removeBasketItemHandler(id) {
    basketContext.removeItems(id);
  }

  function collapseBasketHandler() {
    setRollUp(false);
  }

  function openBasketHandler() {
    setRollUp(true);
  }

  function openModalOrderHandler() {
    modalContext.openOrder();
    document.body.style.overflow = "hidden";
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles["box-top-text"]} onClick={openBasketHandler}>
          <h2 className={styles["top-text"]}>Корзина</h2>
          <p className={styles["top-number"]}>{basketItemNumber}</p>
        </div>
        {hasItems || (
          <h2 className={styles["text-empty"]}>Тут пока пусто :(</h2>
        )}
        {rollUp && hasItems && (
          <div className={styles["display-wrapper"]}>
            <ul className={styles["container-food"]}>
              {basketContext.items.map((item) => (
                <BasketList
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  price={item.price}
                  title={item.title}
                  weight={item.weight}
                  amount={item.amount}
                  onAdd={addBasketItemHandler.bind(null, item)}
                  onRemove={removeBasketItemHandler.bind(null, item)}
                />
              ))}
            </ul>

            <div className={styles["container-order"]}>
              <div className={styles["box-buttom-text"]}>
                <h2 className={styles["buttom-text"]}>Итого</h2>
                <p className={styles["buttom-amount"]}>{totalAmount}</p>
              </div>

              <Button onClick={openModalOrderHandler}>Оформить заказ</Button>

              <div className={styles["delivery-wrapper"]}>
                <div className={styles["dilivery-container"]}>
                  <p className={styles["delivery-text"]}>Бесплатная доставка</p>
                  <img
                    className={styles["delivery-icons"]}
                    src={delivery}
                    alt="Иконка"
                  />
                </div>
                <button
                  className={styles["close-basket"]}
                  onClick={collapseBasketHandler}>
                  Свернуть
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Basket;
