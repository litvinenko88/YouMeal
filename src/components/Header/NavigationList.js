import styles from "./NavigationList.module.css";
import icon1 from "../../assets/icons/btn-1.png";

function NavigationList(props) {
  return (
    <li className={styles.wrapper}>
      <img src={props.icons} alt="icons"/>
      <p>{props.text}</p>
    </li>
  );
}

export default NavigationList;
