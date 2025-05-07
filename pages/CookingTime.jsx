import { useNavigate } from "react-router"; // Importing the hook for navigating between pages
import { useContext } from "react"; // Importing the useContext hook to access context
import { ScrollContext } from "../Context/scroll"; // Importing ScrollContext to control page scroll behavior
import "./CookingTime.css"; // Importing styles specific to this component

export default function CookingTime(props) {
  // Initialize navigate for page navigation
  const navigate = useNavigate();

  // Function to handle navigation to the next page ("/servings")
  function handleClick() {
    navigate(`/servings`);
  }

  // Access the scrollToTop function from the ScrollContext
  const { scrollToTop } = useContext(ScrollContext);

  // Call scrollToTop when the component is rendered to ensure the page starts at the top
  scrollToTop();

  return (
    <>
      {/* Main container for cooking time selection */}
      <div className="cooking-time-container fade-in">
        <section className="cooking-time">
          {/* Heading for the cooking time section */}
          <h1>How many minutes do you have available for cooking?</h1>
          <div className="cooking-time-adjustment">
            {/* Button to decrement cooking time by 10 minutes */}
            <button
              className="decrement-time-btn"
              aria-label="Decrement by 10 minutes" // Accessibility label
              onClick={props.decrementMinutes} // Calls the decrement function passed as a prop
              disabled={props.minutes === 20} // Disables the button if minutes are 20 (minimum limit)
            >
              {/* Icon for decrementing time */}
              <img
                src="/assets/icons/decrement.svg"
                alt="Decrement"
                className="decrement-icon"
              />
            </button>

            {/* Display the current cooking time */}
            <span className="minutes">{props.minutes}</span>

            {/* Button to increment cooking time by 10 minutes */}
            <button
              className="increment-time-btn"
              aria-label="Increment by 10 minutes" // Accessibility label
              onClick={props.incrementMinutes} // Calls the increment function passed as a prop
              disabled={props.minutes === 90} // Disables the button if minutes are 90 (maximum limit)
            >
              {/* Icon for incrementing time */}
              <img
                src="assets/icons/increment.svg"
                alt="Increment"
                className="increment-icon"
              />
            </button>
          </div>
        </section>

        {/* Button to navigate to the next page */}
        <section className="cooking-time-btn-container">
          <button className="cooking-time-next-btn" onClick={handleClick}>
            Next
          </button>
        </section>
      </div>
    </>
  );
}
