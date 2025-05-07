// Import necessary dependencies for routing, state management, and AI interaction
import { BrowserRouter, Routes, Route } from "react-router"; // For routing within the app
import { useState } from "react"; // For managing component state
import { getRecipeFromMistral } from "../src/ai"; // Function to fetch recipe data from the Mistral AI
import Layout from "../components/Layout/Layout"; // Layout component for shared layout structure
import Introduction from "../pages/Introduction"; // Page for the introduction
import Ingredients from "../pages/Ingredients"; // Page to handle user input for ingredients
import CookingTime from "../pages/CookingTime"; // Page to handle user input for cooking time
import Servings from "../pages/Servings"; // Page to handle user input for servings
import Restrictions from "../pages/Restrictions"; // Page to handle dietary restrictions
import GetRecipe from "../pages/GetRecipe"; // Page to display the generated recipe

// Main component for the application
export default function App() {
  // State variables to store user inputs and recipe information
  const [ingredients, setIngredients] = useState([]); // List of ingredients
  const [restrictions, setRestrictions] = useState([]); // List of dietary restrictions
  const [minutes, setMinutes] = useState(20); // Cooking time in minutes
  const [servings, setServings] = useState(1); // Number of servings
  const [recipeShown, setRecipeShown] = useState(""); // Recipe result to display
  const [buttonText, setButtonText] = useState("Get recipe"); // Text for the button

  // Function to add a new ingredient to the list
  function addIngredient(formData) {
    const newIngredient = formData.get("add-ingredients");
    // Updating state with the new ingredient
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  // Decrease the cooking time by 10 minutes
  function decrementMinutes() {
    setMinutes((prevMinutes) => prevMinutes - 10);
  }

  // Increase the cooking time by 10 minutes
  function incrementMinutes() {
    setMinutes((prevMinutes) => prevMinutes + 10);
  }

  // Decrease the servings by 1
  function decrementServings() {
    setServings((prevServings) => prevServings - 1);
  }

  // Increase the servings by 1
  function incrementServings() {
    setServings((prevServings) => prevServings + 1);
  }

  // Function to add a new dietary restriction to the list
  function addRestrictions(formData) {
    const newRestriction = formData.get("dietary-restrictions");
    // Updating state with the new restriction
    setRestrictions((prevRestrictions) => [
      ...prevRestrictions,
      newRestriction,
    ]);
  }

  // Function to fetch recipe from Mistral AI based on user's inputs
  async function getRecipe() {
    // Change button text to indicate the recipe is being loaded
    setButtonText("Loading recipe...");
    // Get the recipe in markdown format from the Mistral AI
    const recipeMarkdown = await getRecipeFromMistral(
      ingredients,
      restrictions,
      minutes,
      servings
    );
    // Set the fetched recipe to be shown
    setRecipeShown(recipeMarkdown);
  }

  return (
    // The main routing container for the application
    <>
      <BrowserRouter>
        <Routes>
          {/* Shared Layout for the app */}
          <Route element={<Layout />}>
            {/* Define routes for each page in the app */}
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
