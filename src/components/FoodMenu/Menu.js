import styles from "./Menu.module.css";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import GetMenu from "../Utils/GetMenu";

function Menu() {
  const data = useContext(MenuContext);
  
  async function GetMenuData () {
    const s = await GetMenu(data);

    console.log(s);
  }
  GetMenuData()
  
  return;
}

export default Menu;
