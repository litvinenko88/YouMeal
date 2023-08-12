import styles from "./Navigation.module.css";
import NavigationList from "./NavigationList";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

function Navigation() {
  const data = useContext(MenuContext);

  return (
    <ul className={styles.wrapper}>
      {data.menu.map((item, i) => (
        <NavigationList key={i} icons={item.icons} text={item.text} />
      ))}
    </ul>
  );
}

export default Navigation;
