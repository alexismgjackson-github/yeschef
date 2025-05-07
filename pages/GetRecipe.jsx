import { useNavigate } from "react-router"; // For navigation between pages
import { useContext } from "react"; // For accessing context (ScrollContext)
import { ScrollContext } from "../Context/scroll"; // Custom context to handle scrolling behavior
import ReactMarkdown from "react-markdown"; // For rendering markdown content into HTML
import "./GetRecipe.css"; // Import styles specific to this component

export default function GetRecipe(props) {
  // Initialize navigate for page navigation
  const navigate = useNavigate();

  // Reset app state and navigate to the homepage when user clicks the "restart" button
  function handleClick() {
    // Navigate to the home page
    navigate(`/`);

    // Reset the state of the app to the initial state
    props.setIngredients([]);
    props.setRestrictions([]);
    props.setServings(1);
    props.setMinutes(20);
    props.setRecipeShown("");
  }

  // Access the scrollToTop function from ScrollContext to scroll to top whenever the component is rendered
  const { scrollToTop } = useContext(ScrollContext);

  // Scroll to top whenever this component is mounted or re-rendered
  scrollToTop();

  return (
    <>
      <div className="recipe-container fade-in">
        {/* Heading for recipe recommendation */}
        <h1> Yes, Chef! Recommends:</h1>

        {/* Section for the "Get Recipe" button */}
        <section className="get-recipe-btn-container">
          {/* Only show the "Get Recipe" button if no recipe is currently shown */}
          {!props.recipeShown ? (
            <button className="get-recipe-btn" onClick={props.getRecipe}>
              {props.buttonText}
            </button>
          ) : null}
        </section>

        {/* Section for displaying the recipe if available */}
        <section className="recipe-container" aria-live="polite">
          {/* Check if recipe is shown, if yes, render the recipe */}
          {props.recipeShown ? (
            <div className="recipe">
              {/* Render the recipe in markdown format */}
              <div className="markdown">
                <ReactMarkdown>{props.recipeShown}</ReactMarkdown>
              </div>

              {/* Buttons for restarting the app or downloading the recipe */}
              <div className="recipe-btn-container">
                <div className="recipe-btn-container">
                  {/* Button for restarting the app */}
                  <button
                    className="restart-btn"
                    onClick={handleClick}
                    aria-label="Restart"
                  >
                    Restart
                  </button>

                  {/* Check if screen width is greater than 768px for showing "Download PDF" option */}
                  {window.innerWidth > 768 ? (
                    <button
                      className="download-btn"
                      onClick={() => window.print()} // Allows user to print the recipe or save as PDF
                      aria-label="Print or Save Recipe as PDF"
                    >
                      Download PDF
                    </button>
                  ) : (
                    // If screen width is smaller than 768px, show share option if available
                    navigator.share && (
                      <button
                        className="download-btn"
                        onClick={() =>
                          navigator.share({
                            title: "Yes, Chef! Recipe",
                            text: props.recipeShown,
                          })
                        }
                        aria-label="Share Recipe"
                      >
                        Share Recipe
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </>
  );
}
