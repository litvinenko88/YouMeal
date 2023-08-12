import React from "react";
import Header from "./components/Header/Header";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import MenuProvider from "./context/MenuContext";

function App(props) {
  return (
    <MenuProvider>
      <Header />
      <FoodMenu />
    </MenuProvider>
  );
}

export default App;
