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
      .catch((error) =>
        setPost({
          errorMessage: error.response.status,
        })
      );
  }, [data.activ]);

  return (
    <ul className={styles.menu}>
      {post.errorMessage ? (
        <div className={styles["error-container"]}>
          <h2 className={styles.error}>{post.errorMessage}</h2>
          <h2 className={styles["error-message"]}>
            Непредвиденная ошибка! Перезагрузите страницу или попробуйте позже!
          </h2>
        </div>
      ) : (
        post.map((item) => (
          <MenuList
            key={item.id}
            id={item.id}
            img={item.img}
            price={item.price}
            title={item.title}
            weight={item.weight}
            description={item.description}
            structure={item.structure}
            calories={item.calories}
          />
        ))
      )}
    </ul>
  );
}

export default Menu;
