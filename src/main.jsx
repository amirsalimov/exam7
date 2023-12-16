import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AppProvider } from "./context..jsx";
import store from "./store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider store={store}>
    <App />
  </AppProvider>
);
