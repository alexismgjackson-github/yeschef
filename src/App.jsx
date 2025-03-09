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
  const [ingredients, setIngredients] = useState([]); // initialize the state variable "ingredients" with an empty array

  const [restrictions, setRestrictions] = useState([]); // initialize the state variable "restrictions" with an empty array

  const [minutes, setMinutes] = useState(20); // initialize the state variable "minutes" with the value 20

  const [servings, setServings] = useState(1); // initialize the state variable "servings" with the value 0

  const [recipeShown, setRecipeShown] = useState(""); // initalize the state variable "recipeShown" with an empty string

  const [buttonText, setButtonText] = useState("Get recipe"); // initialize the state variable "buttonText" with text "Get recipe"

  // update the state variable with a new "ingredient" item taking into account the existing "ingredient" items

  function addIngredient(formData) {
    const newIngredient = formData.get("add-ingredients");

    console.log(`Added new ingredient: ${newIngredient}`);

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  // update the "minutes" value by decrementing by 10

  function decrementMinutes() {
    setMinutes((prevMinutes) => prevMinutes - 10);
  }

  // update the "minutes" value by incrementing by 10

  function incrementMinutes() {
    setMinutes((prevMinutes) => prevMinutes + 10);
  }

  // update the "servings" value by decrementing by 1

  function decrementServings() {
    setServings((prevServings) => prevServings - 1);
  }

  // update the "servings" value by incrementing by 1

  function incrementServings() {
    setServings((prevServings) => prevServings + 1);
  }

  // update the state variable with a new "restrictions" item taking into account the existing "restrictions" items

  function addRestrictions(formData) {
    const newRestriction = formData.get("dietary-restrictions");

    console.log(`Added new restriction: ${newRestriction}`);

    setRestrictions((prevRestrictions) => [
      ...prevRestrictions,
      newRestriction,
    ]);
  }

  // when "get recipe" button is clicked change the text to "loading recipe"
  // then send the user's data to Mistral to get a response
  // if the response is successful then send it back as markdown

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
