import styles from "./Basket.module.css";
import BasketList from "./BasketList";
import delivery from "../../assets/icons/icon-delivery.png";

function Basket() {
  return (
    <form className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles["box-top-text"]}>
          <h2 className={styles["top-text"]}>Корзина</h2>
          <p className={styles["top-number"]}>4</p>
        </div>

        {/* <h2>Тут пока пусто :( </h2> */}
        <div className={styles["display-wrapper"]}>
          <ul className={styles["container-food"]}>
            <BasketList />
          </ul>

          <div className={styles["container-order"]}>
            <div className={styles["box-buttom-text"]}>
              <h2 className={styles["button-text"]}>Итого</h2>
              <p className={styles["button-amount"]}>1200р</p>
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
      </div>
    </form>
  );
}

export default Basket;
