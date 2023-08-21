import React, { createContext, useReducer } from "react";

export const BasketContext = createContext({
  items: [],
  totalAmount: 0,
  addItems: (item) => {},
  removeItems: (id) => {},
});

const defaultBasket = {
  items: [],
  totalAmount: 0,
};

function basketReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item); // Добавляем элимент в массив карзины items
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount; // Подсчет стоимости блюда

    //Тоесть эта часть кода возвращает в defaultBasket новое значение
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultBasket;
}

//basketState = defaultBasket, dispatchBasketAction = basketReducer

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
    addItems: addItemHandler,
    removeItems: removeItemHandler,
  };

  return (
    <BasketContext.Provider value={basketContext}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
