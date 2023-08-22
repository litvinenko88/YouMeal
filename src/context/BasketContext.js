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
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount; // Подсчет стоимости блюда

    const existingBasketItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    ); // Если у элимента существует такой id в массиве и вернет индекс такого элимента если он существует

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

    //Тоесть эта часть кода возвращает в defaultBasket новое значение
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingBasketItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingBasketItem = state.items[existingBasketItemIndex];

    const updatedTotalAmount = state.totalAmount - existingBasketItem.price; // Подсчет стоимости блюда // Если у элимента существует такой id в массиве и вернет индекс такого элимента если он существует

    let updatedItems;
    
    if (existingBasketItem.amount === 1) {
      updatedItems = state.items.filter((item) => {
        console.log(item.id);
      }); //item.id != action.id // state.items[existingBasketItemIndex].amount)
      // console.log("ggggg");
    } else {
      const updatedItem = {
        ...existingBasketItem,
        amount: existingBasketItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingBasketItemIndex] = updatedItem;
      // console.log(state.items);
    }
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
