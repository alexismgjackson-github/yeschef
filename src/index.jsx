import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/Layout/Layout";
import { RadioProvider } from "../Context/radios";
import { ScrollProvider } from "../Context/scroll";
import Introduction from "../pages/Introduction";
import Ingredients from "../pages/Ingredients";
import Recipe from "../pages/Recipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Introduction />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/recipe" element={<Recipe />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollProvider>
      <RadioProvider>
        <App />
      </RadioProvider>
    </ScrollProvider>
  </StrictMode>
);
