import styles from "./Menu.module.css";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import GetMenu from "../Utils/GetMenu";

function Menu() {
  const data = useContext(MenuContext);
  
  
  GetMenu(data);
  return;
}

export default Menu;
