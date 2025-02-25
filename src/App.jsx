import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";
import { getRecipeFromMistral } from "../src/ai";
import Layout from "../components/Layout/Layout";
import Introduction from "../pages/Introduction";
import Ingredients from "../pages/Ingredients";
import CookingTime from "../pages/CookingTime";
import Servings from "../pages/Servings";
import Restrictions from "../pages/Restrictions";
import GetRecipe from "../pages/GetRecipe";

export default function App() {
  const [ingredients, setIngredients] = useState([]);

  const [restrictions, setRestrictions] = useState([]);

  const [minutes, setMinutes] = useState(20);

  const [servings, setServings] = useState(1);

  const [recipeShown, setRecipeShown] = useState("");

  const [buttonText, setButtonText] = useState("Get recipe");

  function addIngredient(formData) {
    const newIngredient = formData.get("add-ingredients");

    console.log(`Added new ingredient: ${newIngredient}`);

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  function decrementMinutes() {
    setMinutes((prevMinutes) => prevMinutes - 10);
  }

  function incrementMinutes() {
    setMinutes((prevMinutes) => prevMinutes + 10);
  }

  function decrementServings() {
    setServings((prevServings) => prevServings - 1);
  }

  function incrementServings() {
    setServings((prevServings) => prevServings + 1);
  }

  function addRestrictions(formData) {
    const newRestriction = formData.get("dietary-restrictions");

    console.log(`Added new restriction: ${newRestriction}`);

    setRestrictions((prevRestrictions) => [
      ...prevRestrictions,
      newRestriction,
    ]);
  }

  async function getRecipe() {
    setButtonText("Loading recipe...");
    const recipeMarkdown = await getRecipeFromMistral(
      ingredients,
      restrictions,
      minutes,
      servings
    );
    //console.log(recipeMarkdown);
    setRecipeShown(recipeMarkdown);
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Introduction />} />
            <Route
              path="/ingredients"
              element={
                <Ingredients
                  ingredients={ingredients}
                  addIngredient={addIngredient}
                />
              }
            />
            <Route
              path="/time"
              element={
                <CookingTime
                  minutes={minutes}
                  incrementMinutes={incrementMinutes}
                  decrementMinutes={decrementMinutes}
                />
              }
            />
            <Route
              path="/servings"
              element={
                <Servings
                  servings={servings}
                  decrementServings={decrementServings}
                  incrementServings={incrementServings}
                />
              }
            />
            <Route
              path="/restrictions"
              element={
                <Restrictions
                  restrictions={restrictions}
                  addRestrictions={addRestrictions}
                />
              }
            />
            <Route
              path="/recipe"
              element={
                <GetRecipe
                  getRecipe={getRecipe}
                  recipeShown={recipeShown}
                  buttonText={buttonText}
                  setIngredients={setIngredients}
                  setRestrictions={setRestrictions}
                  setMinutes={setMinutes}
                  setServings={setServings}
                  setRecipeShown={setRecipeShown}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
