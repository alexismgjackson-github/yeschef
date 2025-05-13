// Import necessary hooks and context
import { useNavigate } from "react-router"; // Hook for navigation between pages
import { useContext } from "react"; // Hook for using context
import { ScrollContext } from "../Context/scroll"; // Custom scroll context to manage scroll behavior
import "./Introduction.css"; // Importing styles specific to this component

export default function Introduction() {
  // Initialize useNavigate hook to navigate between routes
  const navigate = useNavigate();

  // Function to handle the "Start" button click
  // This should reset any previous states (like starting a new recipe) and then navigate to the next page
  function handleClick() {
    // Navigate to the ingredients page
    navigate(`/ingredients`);
  }

  // Use scrollToTop from ScrollContext to scroll to the top of the page when this component is rendered
  const { scrollToTop } = useContext(ScrollContext);

  // Ensure the page scrolls to the top when the Introduction page is loaded
  scrollToTop();

  return (
    <>
      {/* Main container for the Introduction section with a fade-in effect */}
      <div className="introduction-container fade-in">
        {/* Header section with the app title */}
        <section className="introduction-header-container">
          <span className="introduction-header">Yes, Chef!</span>
        </section>

        {/* Paragraph section with a brief introduction to the app */}
        <section className="introduction-paragraph-container">
          <span className="introduction-paragraph">
            Get your own personalized recipes using ingredients on hand.
          </span>
        </section>

        {/* Button to start the recipe process */}
        <section className="introduction-btn-container">
          <button className="start-btn" onClick={handleClick}>
            Start
          </button>
        </section>
      </div>
    </>
  );
}
