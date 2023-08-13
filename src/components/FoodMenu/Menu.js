import styles from "./Menu.module.css";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

function Menu() {
  const data = useContext(MenuContext);
}

export default Menu;
