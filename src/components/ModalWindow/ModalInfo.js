import styles from "./ModalInfo.module.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import { ModalContext } from "../../context/ModuleContext";
import foto from "../../assets/imgs/pic.png";
import Button from "../UI/Button";
import QuantityButton from "../UI/QuantityButton";

function ModalInfo(props) {
  const modalContext = useContext(ModalContext);
  const itemInfo = modalContext.itemInfo;

  function closeModalInfo() {
    modalContext.closeInfoDish();
  }

  console.log(modalContext);

  return (
    <Modal>
      <div className={styles.wrapper}>
        <div className={styles["container-top"]}>
          <h2 className={styles.title}>Большой стен</h2>
          <button className={styles["close-module"]} onClick={closeModalInfo}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        <div className={styles["container-info"]}>
          <img className={styles.img} src={foto} alt="Изображение" />

          <div className={styles["box-text"]}>
            <h2 className={styles.description}>
              Супер мясное наслаждение! Большая рубленая котлета из свежего
              говяжего мяса покорит вас своей сочностью, а хрустящие листья
              салата добавят свежести.
            </h2>
            <p className={styles.structure}>
              Состав: автоатоьдыьдлыььлдьыьлывсысымсымсымйаофо
            </p>
            <p className={styles.calories}>{`ddddddddd`}</p>
          </div>
        </div>

        <div className={styles["container-order"]}>
          <div className={styles["box-btn"]}>
            <QuantityButton/>
          </div>
          <h2 className={styles.price}>556</h2>
        </div>
      </div>
    </Modal>
  );
}

export default ModalInfo;
