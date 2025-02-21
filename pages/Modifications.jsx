import { useNavigate, useContext } from "react-router";
import { ScrollContext } from "../Context/scroll";
import "./Modifications.css";

export default function Modifications() {
  const ingredients = [
    "cheddar cheese",
    "eggs",
    "ground beef",
    "garlic",
    "tomatoes",
  ];

  const ingredientsListItem = ingredients.map((ingredient) => (
    <li className="ingredients-list-item" key={ingredient}>
      {ingredient}
    </li>
  ));

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Submit button clicked");
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("add-ingredients");
    // console.log(newIngredient);
    ingredients.push(newIngredient);
    console.log(ingredients);
  }

  function handleClick() {
    navigate(`/recipe`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="modifications-container fade-in">
        <section className="modifications-selection-container">
          <h1>What ingredients do you have available?</h1>
          <form className="add-ingredients-form" onSubmit={handleSubmit}>
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
        <section className="modifications-btn-container">
          <button className="modifications-next-btn" onClick={handleClick}>
            Next
          </button>
        </section>
      </div>
    </>
  );
}
