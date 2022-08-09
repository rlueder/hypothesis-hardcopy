import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";

import { Scanner } from "./components";
import Store from "./store";

const root = document.getElementById("root") as HTMLElement;

createRoot(root).render(
  <StrictMode>
    <Store>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/scanner" element={<Scanner />} />
        </Routes>
      </BrowserRouter>
    </Store>
  </StrictMode>
);
