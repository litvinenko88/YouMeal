import styles from "./NavigationList.module.css";

function NavigationList(props) {
  return (
    <li className={styles.wrapper}>
      <img src={props.icons} alt="icons" />
      <p>{props.text}</p>
    </li>
  );
}

export default NavigationList;
