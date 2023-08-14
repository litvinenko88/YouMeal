import styles from "./MenuList.module.css";

function MenuList(props) {
  return (
    <li className={styles.wrapper}>
      <img className={styles.img} src={props.img} alt="Блюдо" />

      <div>
        <h2 className={styles.price}>{props.price}₽</h2>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.weight}>{props.weight}г</p>
      </div>
      <button className={styles.button}>Добавить</button>
    </li>
  );
}

export default MenuList;
