import Modal from "../UI/Modal";
import styles from "./ModalOrder.module.css";
import foto from "../../assets/imgs/pic.png";
import ModalOrderRight from "./ModalOrderRight";
import { useContext } from "react";
import { ModalContext } from "../../context/ModuleContext";

function ModalOrder(props) {
  const modalContext = useContext(ModalContext);

  function submitFormHandler(event) {
    event.preventDefault();
  }

  function closeModalOrderHandler() {
    modalContext.closeOrder();
    document.body.style.overflow = "unset";
  }

  return (
    <Modal onClick={closeModalOrderHandler}>
      <form className={styles.wrapper} onSubmit={submitFormHandler}>
        <div className={styles["conteiner-left"]}>
          <img className={styles.img} src={foto} alt="Изображение" />
        </div>
        <div className={styles["conteiner-right"]}>
          <button
            className={styles["close-module"]}
            onClick={closeModalOrderHandler}>
            <i className="bi bi-x-lg"></i>
          </button>
          <ModalOrderRight />
        </div>
      </form>
    </Modal>
  );
}

export default ModalOrder;
