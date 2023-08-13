import styles from "./Menu.module.css";
import { useContext, useState, useEffect } from "react";
import { MenuContext } from "../../context/MenuContext";
import axios from "axios";
import MenuList from "./MenuList";

function Menu() {
  const data = useContext(MenuContext);

  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get(data.menu[data.activ - 1].link)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => console.error(error));
  }, [data.activ]);

  return (
    <ul className={styles.menu}>
      {post.map((item) => (
        <MenuList
          key={item.id}
          img={item.img}
          price={item.price}
          title={item.title}
          weight={item.weight}
        />
      ))}
    </ul>
  );
}

export default Menu;
