import styles from "./Navigation.module.css";
import NavigationList from "./NavigationList";
import { useContext, useState } from "react";
import { MenuContext } from "../../context/MenuContext";

function Navigation() {
  const data = useContext(MenuContext);

  const [activ, setActiv] = useState(0);
  

  function clickHandler(id) {
    setActiv(id);
  }

  return (
    <ul className={styles.wrapper}>
      {data.menu.map((item) => (
        <NavigationList
          key={item.id}
          id={item.id}
          icons={item.icons}
          text={item.text}
          isActiv={activ === item.id}
          onClickHandler={clickHandler}
        />
      ))}
    </ul>
  );
}

export default Navigation;
