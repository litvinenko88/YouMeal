import React, { createContext, useReducer } from "react";

export const BasketContext = createContext({
  items: [], //корзина
  totalAmount: 0, // сумма в корзине
  addItem: (item) => {}, //добавить элимент
  removeItem: (id) => {}, //Удаляет элимент
});

const defaultBasket = {
  items: [],
  totalAmount: 0,
};

function basketReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultBasket;
}

function BasketProvider({ children }) {
  const [basketState, dispatchBasketAction] = useReducer(
    basketReducer,
    defaultBasket
  );

  function addItemHandler(item) {
    console.log(item);
    dispatchBasketAction({
      type: "ADD_ITEM",
      item: item,
    });
  }

  function removeItemHandler(id) {
    dispatchBasketAction({
      type: "REMOVE_ITEM",
      item: id,
    });
  }

  const basketContext = {
    items: basketState.items,
    totalAmount: basketState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <BasketContext.Provider value={basketContext}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
