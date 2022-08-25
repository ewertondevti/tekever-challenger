import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Main.scss";
import "antd/dist/antd.css";
import AppContext from "@Store/context/AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContext>
      <App />
    </AppContext>
  </React.StrictMode>
);
