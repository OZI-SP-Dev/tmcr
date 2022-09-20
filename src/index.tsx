import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { GlobalStore } from "./stateManagement/GlobalStore";
import "bootstrap/dist/css/bootstrap.min.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <GlobalStore>
      <App />
    </GlobalStore>
  </React.StrictMode>
);
