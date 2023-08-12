import styles from "./NavigationList.module.css";
import cn from "classnames";

function NavigationList(props) {
  function clickHandler() {
    props.onClickHandler(props.id);
    console.log(props.isActiv, props.id);
  }

  return (
    <li
      className={cn(styles.wrapper, { [styles.active]: props.isActiv })}
      onClick={clickHandler}>
      <img src={props.icons} alt="icons" />
      <p>{props.text}</p>
    </li>
  );
}

export default NavigationList;
