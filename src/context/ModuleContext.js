import { createContext, useReducer } from "react";

export const ModalContext = createContext({
  openModalOrder: () => {},
  closeModalOrder: () => {},
  openInfoModal: () => {},
  closeInfoModal: () => {},
});

const defaultModal = {
  isOrder: false,
  isInfo: false,
};

function modalReducer(state, action) {
  switch (action.type) {
    case "OPEN_ORDER":
      return { ...state, isOrder: true };
    case "CLOSE_ORDER":
      return { ...state, isOrder: false };
    case "OPEN_INFO":
      return { ...state, isInfo: true };
    case "CLOSE_INFO":
      return { ...state, isInfo: true };
    default:
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
  function openModaInfoDishHandler() {
    dispatchModuleAction({
      type: "OPEN_INFO",
    });
  }
  function closeModaInfoDishHandler() {
    dispatchModuleAction({
      type: "CLOSE_INFO",
    });
  }

  const modalContext = {
    isOrder: moduleState.isOrder,
    isInfo: moduleState.isInfo,
    openOrder: openModalOrderHandler,
    closeOrder: closeModalOrderHandler,
    openInfoDish: openModaInfoDishHandler,
    closeInfoDish: closeModaInfoDishHandler,
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
