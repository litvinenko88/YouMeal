import React, { useContext } from "react";
import { ModalContext } from "./context/ModuleContext";
import Header from "./components/Header/Header";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import MenuProvider from "./context/MenuContext";
import Footer from "./components/Footer/Footer";
import ModalOrder from "./components/ModalWindow/ModalOrder";
import ModalInfo from "./components/ModalWindow/ModalInfo";

function App(props) {
  const modalContext = useContext(ModalContext);

  return (
    <MenuProvider>
      {modalContext.isOrder && <ModalOrder />}
      <Header />
      <FoodMenu />
      <Footer />
    </MenuProvider>
  );
}

export default App;
