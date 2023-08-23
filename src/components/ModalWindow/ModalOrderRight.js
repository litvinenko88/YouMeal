import Button from "../UI/Button";
import styles from "./ModalOrderRight.module.css";
import { useState } from "react";

function ModalOrderRight() {
  const [value, setValue] = useState(1);

  function chengeValue(e) {
    setValue(e.target.value);
  }

  return (
    <div className={styles["container-form"]}>
      <h2 className={styles.heading}>Доставка</h2>

      <div className={styles["container-input"]}>
        <input className={styles.input} type="text" placeholder="Ваше имя" />
        <input className={styles.input} type="number" placeholder="Телефон" />
      </div>

      <div className={styles["constainer-radio"]}>
        <div>
          <input
            className={styles.radio}
            type="radio"
            name="Самовывоз"
            id="pickup"
            value="1"
            checked={value == "1" ? true : false}
            onChange={chengeValue}
          />
          <label className={styles.label} htmlFor="pickup">
            Самовывоз
          </label>
        </div>

        <div>
          <input
            className={styles.radio}
            type="radio"
            name="Доставка"
            id="delivery"
            value="2"
            checked={value == "2" ? true : false}
            onChange={chengeValue}
          />
          <label className={styles.label} htmlFor="delivery">
            Доставка
          </label>
        </div>
      </div>

      <div className={styles["container-input"]}>
        <input
          className={styles.input}
          type="text"
          placeholder="Улица, дом, квартира"
        />
        <div className={styles["input-box"]}>
          <input className={styles.input} type="number" placeholder="Этаж" />
          <input className={styles.input} type="number" placeholder="Домофон" />
        </div>
      </div>
      <Button>Оформить</Button>
    </div>
  );
}

export default ModalOrderRight;
