import { useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import ReactMarkdown from "react-markdown";
import "./GetRecipe.css";

export default function GetRecipe(props) {
  const navigate = useNavigate();

  // reset app to original state when user clicks on "restart" button

  function handleClick() {
    navigate(`/`);
    props.setIngredients([]);
    props.setRestrictions([]);
    props.setServings(1);
    props.setMinutes(20);
    props.setRecipeShown("");
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="recipe-container fade-in">
        <h1> Yes, Chef! Recommends:</h1>
        <section className="get-recipe-btn-container">
          {!props.recipeShown ? (
            <button className="get-recipe-btn" onClick={props.getRecipe}>
              {props.buttonText}
            </button>
          ) : null}
        </section>
        <section className="recipe-container" aria-live="polite">
          {props.recipeShown ? (
            <div className="recipe">
              <div className="markdown">
                <ReactMarkdown>{props.recipeShown}</ReactMarkdown>
              </div>
              <div className="recipe-btn-container">
                <div className="recipe-btn-container">
                  <button
                    className="restart-btn"
                    onClick={handleClick}
                    aria-label="Restart"
                  >
                    Restart
                  </button>
                  {window.innerWidth > 768 ? (
                    <button
                      className="download-btn"
                      onClick={() => window.print()}
                      aria-label="Print or Save Recipe as PDF"
                    >
                      Download PDF
                    </button>
                  ) : (
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
                <button
                  className="restart-btn"
                  onClick={handleClick}
                  aria-label="Restart"
                >
                  Restart
                </button>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </>
  );
}
