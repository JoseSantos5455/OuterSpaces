//2024.11.16...

import React, { StrictMode } from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
