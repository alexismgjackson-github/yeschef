// Import necessary hooks and context
import { useNavigate } from "react-router"; // For navigating between routes
import { useContext } from "react"; // For using React's context API
import { ScrollContext } from "../Context/scroll"; // Custom context to handle scroll behavior

// Import styling specific to this component
import "./Ingredients.css";

export default function Ingredients(props) {
  // Map the ingredients array from props to list items for rendering
  const ingredientsListItem = props.ingredients.map((ingredient) => (
    <li className="ingredients-list-item" key={ingredient}>
      {ingredient}
    </li>
  ));

  // Initialize useNavigate hook to handle navigation
  const navigate = useNavigate();

  // Handle the click event on the "Next" button
  function handleClick() {
    // Navigates to the "time" page when the user is ready to proceed
    navigate(`/time`);
  }

  // Access scrollToTop from ScrollContext to scroll to the top when this component loads
  const { scrollToTop } = useContext(ScrollContext);

  // Ensure the page scrolls to the top every time the Ingredients component is loaded
  scrollToTop();

  return (
    <>
      <div className="add-ingredients-container fade-in">
        {/* Section for entering ingredients */}
        <section className="add-ingredients">
          <h1>Please enter at least 4 ingredients that you have available?</h1>

          {/* Form for adding an ingredient */}
          <form className="add-ingredients-form" action={props.addIngredient}>
            <input
              type="text"
              name="add-ingredients"
              className="add-ingredients-input"
              aria-label="Add ingredient"
              placeholder="e.g garlic"
              required
            />
            <div className="add-ingredients-btn-container">
              {/* Button to add ingredient */}
              <button className="add-ingredients-btn">Add Ingredient</button>
            </div>
          </form>
        </section>

        {/* Section displaying the list of added ingredients */}
        <section className="ingredients-list-container">
          <ul className="ingredients-list">
            {ingredientsListItem} {/* Render the list of ingredients */}
          </ul>
        </section>

        {/* Section for the "Next" button */}
        <section className="ingredients-btn-container">
          <button
            className="ingredients-next-btn"
            onClick={handleClick} // Trigger the navigation to next page
            disabled={props.ingredients.length < 4} // Disable button until at least 4 ingredients are added
          >
            Next
          </button>
        </section>
      </div>
    </>
  );
}
