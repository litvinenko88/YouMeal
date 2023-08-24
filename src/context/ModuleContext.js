import { createContext, useReducer, useContext } from "react";
import { BasketContext } from "./BasketContext";

export const ModalContext = createContext({});

const defaultModal = {
  isOrder: false,
  isInfo: false,
  itemInfo: [],
  amount: 1,
};

function modalReducer(state, action) {
 
  if (action.type === "OPEN_ORDER") {
    return { ...state, isOrder: true };
  }
  if (action.type === "CLOSE_ORDER") {
    return { ...state, isOrder: false };
  }
  if (action.type === "OPEN_INFO") {
    return { ...state, isInfo: true, itemInfo: action.item };
  }
  if (action.type === "CLOSE_INFO") {
    return { ...state, isInfo: false };
  }
}

function ModalProvider({ children }) {
  const [moduleState, dispatchModuleAction] = useReducer(
    modalReducer,
    defaultModal
  );

  function openModalOrderHandler() {
    dispatchModuleAction({
      type: "OPEN_ORDER",
    });
  }
  function closeModalOrderHandler() {
    dispatchModuleAction({
      type: "CLOSE_ORDER",
    });
  }
  function openModaInfoDishHandler(item) {
    dispatchModuleAction({
      type: "OPEN_INFO",
      item: item,
    });
  }
  function closeModaInfoDishHandler() {
    dispatchModuleAction({
      type: "CLOSE_INFO",
    });
  }

  function addAmountHandler(amount) {}

  const modalContext = {
    amount: moduleState.amount,
    itemInfo: moduleState.itemInfo,
    isOrder: moduleState.isOrder,
    isInfo: moduleState.isInfo,
    openOrder: openModalOrderHandler,
    closeOrder: closeModalOrderHandler,
    openInfoDish: openModaInfoDishHandler,
    closeInfoDish: closeModaInfoDishHandler,
    addAmount: addAmountHandler,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;

