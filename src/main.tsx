import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import "../node_modules/modern-normalize/modern-normalize.css";
import "../node_modules/reset-css/reset.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);