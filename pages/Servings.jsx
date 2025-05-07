// Import necessary hooks and context
import { useNavigate } from "react-router"; // Hook for navigating between routes
import { useContext } from "react"; // React hook for using context
import { ScrollContext } from "../Context/scroll"; // Custom context for scroll behavior
import "./Servings.css"; // Importing styles for this component

export default function Servings(props) {
  // Use navigate hook to programmatically navigate between routes
  const navigate = useNavigate();

  // Function to handle click on the "Next" button, which navigates to the restrictions page
  function handleClick() {
    navigate(`/restrictions`);
  }

  // Access the scrollToTop function from the ScrollContext to scroll the page to the top
  const { scrollToTop } = useContext(ScrollContext);

  // Calling scrollToTop whenever this component is rendered to ensure the page starts at the top
  scrollToTop();

  return (
    <>
      <div className="servings-container fade-in">
        {/* Main container for servings section with a fade-in animation */}

        <section className="serving-size">
          {/* Section for asking the user how many servings they need */}
          <h1>How many people are you cooking for (including yourself)?</h1>

          <div className="servings-adjustment">
            {/* Section for adjusting servings using buttons */}

            {/* Button to decrement the servings count */}
            <button
              className="decrement-servings-btn"
              aria-label="Decrement serving size"
              onClick={props.decrementServings} // Calls the passed-in decrement function from parent
              disabled={props.servings === 1} // Disables button when servings are 1 to prevent going lower
            >
              <img
                src="/assets/icons/decrement.svg" // Path to the decrement icon image
                alt="Decrement"
                className="decrement-icon"
              />
            </button>

            {/* Displays the current servings count */}
            <span className="servings">{props.servings}</span>

            {/* Button to increment the servings count */}
            <button
              className="increment-servings-btn"
              aria-label="Increment serving size"
              onClick={props.incrementServings} // Calls the passed-in increment function from parent
              disabled={props.servings === 10} // Disables button when servings are 10 to prevent going higher
            >
              <img
                src="assets/icons/increment.svg" // Path to the increment icon image
                alt="Increment"
                className="increment-icon"
              />
            </button>
          </div>
        </section>

        <section className="servings-btn-container">
          {/* Section for the "Next" button to proceed to the next step */}
          <button className="servings-next-btn" onClick={handleClick}>
            Next
          </button>
        </section>
      </div>
    </>
  );
}
