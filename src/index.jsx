import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ScrollProvider } from "../Context/scroll";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollProvider>
      <App />
    </ScrollProvider>
  </StrictMode>
);
