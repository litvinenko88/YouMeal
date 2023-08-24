import styles from "./QuantityButton.module.css";

function QuantityButton(props) {
  return (
    <div className={styles["container-quantity"]}>
      <button className={styles["btn-minus"]} onClick={props.onRemove}>
        -
      </button>
      <p className={styles["text-quantity"]}>{props.amount}</p>

      <button className={styles["btn-plus"]} onClick={props.onAdd}>
        +
      </button>
    </div>
  );
}

export default QuantityButton;
