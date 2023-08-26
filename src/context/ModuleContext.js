import { createContext, useReducer, useContext } from "react";

export const ModalContext = createContext({});

const defaultModal = {
  isOrder: false,
  isInfo: false,
  itemInfo: [],
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

  function addItemHandler(item) {
    console.log(item);
    dispatchModuleAction({
      type: "ADD_ITEM",
      item: item,
    });
  }

  const modalContext = {
    itemInfo: moduleState.itemInfo,
    isOrder: moduleState.isOrder,
    isInfo: moduleState.isInfo,
    openOrder: openModalOrderHandler,
    closeOrder: closeModalOrderHandler,
    openInfoDish: openModaInfoDishHandler,
    closeInfoDish: closeModaInfoDishHandler,
    addItem: addItemHandler,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
