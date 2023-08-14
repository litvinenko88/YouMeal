import styles from "./FoodMenu.module.css";

import Basket from "./Basket";
import Menu from "./Menu";

function FoodMenu() {
  return (
    <div className={styles.wrapper}>
      <Basket />
      <Menu />
    </div>
  );
}

export default FoodMenu;
