import React, { StrictMode } from "react";
import Header from "./components/Header/Header";
import FoodMenu from "./components/FoodMenu/FoodMenu";
import MenuProvider from "./context/MenuContext";
import Footer from "./components/Footer/Footer";

function App(props) {
  return (
    <StrictMode>
      <MenuProvider>
        <Header />
        <FoodMenu />
        <Footer />
      </MenuProvider>
    </StrictMode>
  );
}

export default App;
