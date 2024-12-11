import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/Nullstyles.scss";
import { App } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);