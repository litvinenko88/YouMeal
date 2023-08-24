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

  function addAmountHandler(amount) {
    console.log(amount);
    dispatchModuleAction({
      type: "ADD_AMOUNT",
      amount: amount,
    });
  }

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

// const initialState = {
//   isOpen: false,
//   message: "",
// };

// function reducer(state, action) {
//   switch (action.type) {
//     case "openModal":
//       return { ...state, isOpen: true };
//     case "closeModal":
//       return { ...state, isOpen: false };
//     default:
//       throw new Error();
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   function handleOpenModal() {
//     dispatch({ type: "openModal" });
//   }

//   function handleCloseModal() {
//     dispatch({ type: "closeModal" });
//   }

//   return (
//     <div>
//       <button onClick={handleOpenModal}>Открыть модальное окно</button>
//       {state.isOpen && (
//         <div>
//           <h1>Модальное окно</h1>
//           <p>{state.message}</p>
//           <button onClick={handleCloseModal}>Закрыть модальное окно</button>
//         </div>
//       )}
//     </div>
//   );
// }
