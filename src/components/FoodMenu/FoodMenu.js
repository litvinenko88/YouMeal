import styles from "./FoodMenu.module.css";
import BasketProvider from "../../context/BasketContext";
import Basket from "./Basket";
import Menu from "./Menu";

function FoodMenu() {
  return (
    <BasketProvider>
      <div className={styles.wrapper}>
        <Basket />
        <Menu />
      </div>
    </BasketProvider>
  );
}

export default FoodMenu;
