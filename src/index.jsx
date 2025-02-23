import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from "../components/Layout/Layout";
import { ScrollProvider } from "../Context/scroll";
import Introduction from "../pages/Introduction";
import Ingredients from "../pages/Ingredients";
import CookingTime from "../pages/CookingTime";
import Servings from "../pages/Servings";
import Restrictions from "../pages/Restrictions";
import RecipeQuantity from "../pages/RecipeQuantity";
import Recipe from "../pages/Recipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Introduction />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/time" element={<CookingTime />} />
            <Route path="/servings" element={<Servings />} />
            <Route path="/restrictions" element={<Restrictions />} />
            <Route path="/quantity" element={<RecipeQuantity />} />
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
      <App />
    </ScrollProvider>
  </StrictMode>
);
