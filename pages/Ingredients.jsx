import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./Ingredients.css";

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsListItem = ingredients.map((ingredient) => (
    <li className="ingredients-list-item" key={ingredient}>
      {ingredient}
    </li>
  ));

  function addIngredient(formData) {
    const newIngredient = formData.get("add-ingredients");

    console.log(`Added new ingredient: ${newIngredient}`);

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  // console.log(`${ingredients.length} ingredients total`);

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/time`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="add-ingredients-container fade-in">
        <section className="add-ingredients">
          <h1>Please enter at least 4 ingredients that you have available?</h1>
          <form className="add-ingredients-form" action={addIngredient}>
            <input
              type="text"
              name="add-ingredients"
              className="add-ingredients-input"
              aria-label="Add ingredient"
              placeholder="e.g garlic"
              required
            />
            <div className="add-ingredients-btn-container">
              <button className="add-ingredients-btn">Add Ingredient</button>
            </div>
          </form>
        </section>
        <section className="ingredients-list-container">
          <ul className="ingredients-list">{ingredientsListItem}</ul>
        </section>
        <section className="ingredients-btn-container">
          <button
            className="ingredients-next-btn"
            onClick={handleClick}
            disabled={ingredients.length < 4}
          >
            Next
          </button>
        </section>
      </div>
    </>
  );
}
