import Modal from "../UI/Modal";
import styles from "./ModalOrder.module.css";
import foto from "../../assets/imgs/pic.png";
import Input from "../UI/Input";

function ModalOrder() {
  return (
    <Modal>
      <div className={styles.wrapper}>
        <div className={styles["conteiner-left"]}>
          <img className={styles.img} src={foto} alt="Изображение" />
        </div>
        <div className={styles["conteiner-right"]}>
          <button className={styles["close-module"]}>
            <i className="bi bi-x-lg"></i>
          </button>

          <div className={styles["container-form"]}>
            <h2 className={styles.heading}>Доставка</h2>

            <div className={styles["container-input"]}>
              <Input className={styles.input} type="text" plac="Ваше имя" />
              <Input className={styles.input} type="number" plac="Телефон" />
            </div>

            <div className={styles["constainer-radio"]}>
              <div>
                <Input
                  className={styles.radio}
                  type="radio"
                  id="pickup"
                  checked
                  name="radio"
                />
                <label htmlFor="pickup">Самовывоз</label>
              </div>

              <div>
                <Input
                  className={styles.radio}
                  type="radio"
                  id="delivery"
                  name="radio"
                />
                <label htmlFor="delivery">Доставка</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ModalOrder;
