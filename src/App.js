import React, { StrictMode } from "react";
import Header from "./components/Header/Header";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import MenuProvider from "./context/MenuContext";
import Footer from "./components/Footer/Footer";
import ModalOrder from "./components/ModalWindow/ModalOrder";

function App(props) {
  return (
    <MenuProvider>
      <ModalOrder />
      <Header />
      <FoodMenu />
      <Footer />
    </MenuProvider>
  );
}

export default App;
