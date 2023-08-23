import React from "react";
import ModalProvider from "./context/ModuleContext";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>
);
