import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./RecipeQuantity.css";

export default function RecipeQuantity() {
  const [recipeQuantity, setRecipeQuantity] = useState(1);

  function decrementRecipeQuantity() {
    setRecipeQuantity((prevRecipeQuantity) => prevRecipeQuantity - 1);
  }

  function incrementRecipeQuantity() {
    setRecipeQuantity((prevRecipeQuantity) => prevRecipeQuantity + 1);
  }

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/recipe`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();
  return (
    <>
      <div className="recipe-quantity-container fade-in">
        <section className="recipe-quantity">
          <h1>How many different recipes would you like?</h1>
          <div className="recipe-quantity-adjustment">
            <button
              className="decrement-recipe-quantity-btn"
              aria-label="Decrement amount of recipes"
              onClick={decrementRecipeQuantity}
            >
              <img
                src="/assets/icons/decrement.svg"
                alt="Decrement"
                className="decrement-icon"
              />
            </button>
            <span className="recipe-quantity">{recipeQuantity}</span>
            <button
              className="increment-recipe-quantity-btn"
              aria-label="Increment amount of recipes"
              onClick={incrementRecipeQuantity}
            >
              <img
                src="assets/icons/increment.svg"
                alt="Increment"
                className="increment-icon"
              />
            </button>
          </div>
        </section>
        <section className="recipe-quantity-btn-container">
          <button className="recipe-quantity-next-btn" onClick={handleClick}>
            Get Recipe
          </button>
        </section>
      </div>
    </>
  );
}
