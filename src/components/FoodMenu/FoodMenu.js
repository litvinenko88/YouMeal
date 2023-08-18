import styles from "./FoodMenu.module.css";
import BasketProvider from "../../context/BasketContext";

import Basket from "./Basket";
import Menu from "./Menu";

function FoodMenu() {
  return (
    <div className={styles.wrapper}>
      <BasketProvider>
        <Basket />
        <Menu />
      </BasketProvider>
    </div>
  );
}

export default FoodMenu;
