// Import necessary hooks and context
import { useNavigate } from "react-router"; // Hook for navigating between routes
import { useContext } from "react"; // React hook for using context
import { ScrollContext } from "../Context/scroll"; // Custom context for scroll behavior
import "./Restrictions.css"; // Importing styles for this component

export default function Restrictions(props) {
  // Map through the 'restrictions' array passed in as props to create list items
  const restrictionsListItem = props.restrictions.map((restriction) => (
    <li className="restrictions-list-item" key={restriction}>
      {restriction}
    </li>
  ));

  // Use navigate hook to programmatically navigate between routes
  const navigate = useNavigate();

  // Function to handle click on the "Next" button, which navigates to the recipe page
  function handleClick() {
    navigate(`/recipe`);
  }

  // Access the scrollToTop function from the ScrollContext to scroll the page to the top
  const { scrollToTop } = useContext(ScrollContext);

  // Calling scrollToTop whenever this component is rendered to ensure the page starts at the top
  scrollToTop();

  return (
    <>
      <div className="dietary-restrictions-container fade-in">
        {/* Main container for dietary restrictions section with a fade-in animation */}

        <section className="dietary-restrictions">
          {/* Section asking the user for food allergies, dislikes, or dietary restrictions */}
          <h1>
            Please enter any food allergies, dislikes, and/or restrictions?
          </h1>

          <form
            className="dietary-restrictions-form"
            action={props.addRestrictions} // Calls the addRestrictions function passed as a prop when the form is submitted
          >
            <input
              type="text"
              name="dietary-restrictions"
              className="dietary-restrictions-input"
              aria-label="Add food allergies or restrictions"
              placeholder="e.g shellfish"
              required // Ensures the input is filled before submission
            />
            <div className="dietary-restrictions-btn-container">
              <button className="add-modification-btn">Add Modification</button>
            </div>
          </form>
        </section>

        <section className="dietary-restrictions-list-container">
          {/* Section to display the list of restrictions added by the user */}
          <ul className="dietary-restrictions-list">
            {restrictionsListItem}
            {/* Renders each restriction in the list */}
          </ul>
        </section>

        <section className="dietary-restrictions-btn-container">
          {/* Section for the "Next" button to proceed to the next step */}
          <button
            className="get-recipe-btn"
            onClick={handleClick} // Navigates to the /recipe page when clicked
            disabled={props.restrictions.length === 0} // Button is disabled until at least one restriction is added
          >
            Next
          </button>
        </section>
      </div>
    </>
  );
}
