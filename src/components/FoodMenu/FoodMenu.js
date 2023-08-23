import styles from "./FoodMenu.module.css";
import BasketProvider from "../../context/BasketContext";
import Basket from "./Basket";
import Menu from "./Menu";

function FoodMenu(props) {
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
