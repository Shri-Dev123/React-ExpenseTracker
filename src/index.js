import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import MyContextProvider from "./context/MyContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);
