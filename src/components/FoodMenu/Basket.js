import styles from "./Basket.module.css";
import BasketList from "./BasketList";
import delivery from "../../assets/icons/icon-delivery.png";
import { BasketContext } from "../../context/BasketContext";
import { useContext, useRef } from "react";

function Basket() {
  const basketContext = useContext(BasketContext);
  const basketNumber = basketContext.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  function submitHandler(event) {
    event.preventDefault();
  }

  const totalAmount = `${basketContext.totalAmount.toFixed(2)}₽`;
  const hesItem = basketContext.items.length > 0;

  function removeBasketItemHandler(id) {
    // basketContext.removeItem(id);
  }
  function addBasketItemHendler(item) {
    basketContext.addItem({ ...item, amount: 1 });
  }

  return (
    <form className={styles.wrapper} onSubmit={submitHandler}>
      <div className={styles.container}>
        <div className={styles["box-top-text"]}>
          <h2 className={styles["top-text"]}>Корзина</h2>
          <p className={styles["top-number"]}>{basketNumber}</p>
        </div>

        {hesItem || <h2>Тут пока пусто :( </h2>}
        {hesItem && (
          <div className={styles["display-wrapper"]}>
            <ul className={styles["container-food"]}>
              {basketContext.items.map((item) => (
                <BasketList
                  key={item.id}
                  img={item.img}
                  price={item.price}
                  title={item.title}
                  weight={item.weight}
                  amount={item.amount}
                  onAdd={addBasketItemHendler.bind(null, item)}
                  onRemove={removeBasketItemHandler.bind(null, item.id)}
                />
              ))}
            </ul>

            <div className={styles["container-order"]}>
              <div className={styles["box-buttom-text"]}>
                <h2 className={styles["buttom-text"]}>Итого</h2>
                <p className={styles["buttom-amount"]}>{totalAmount}</p>
              </div>

              <button className={styles["button-order"]}>Оформить заказ</button>

              <div className={styles["dilivery-container"]}>
                <p className={styles["delivery-text"]}>Бесплатная доставка</p>
                <img
                  className={styles["delivery-icons"]}
                  src={delivery}
                  alt="Иконка"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default Basket;
