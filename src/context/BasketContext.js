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
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingBasketItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingBasketItem = state.items[existingBasketItemIndex];

    let updatedItem;
    let updatedItems;

    if (existingBasketItem) {
      updatedItem = {
        ...existingBasketItem,
        amount: existingBasketItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingBasketItemIndex] = updatedItem;
    } else {
      updatedItem = {
        ...action.item,
      };
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
   
  }

  return defaultBasket;
}

function BasketProvider({ children }) {
  const [basketState, dispatchBasketAction] = useReducer(
    basketReducer,
    defaultBasket
  );

  function addItemHandler(item) {
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
