import { useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll";
// import { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./GetRecipe.css";

export default function GetRecipe(props) {
  // const [buttonText, setButtonText] = useState("Get recipe");

  // const changeText = (text) => setButtonText(text);

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/`);
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
        <section className="recipes-container" aria-live="polite">
          {props.recipeShown ? (
            <div className="recipes">
              <div className="markdown">
                <ReactMarkdown>{props.recipeShown}</ReactMarkdown>
              </div>
              <div className="recipes-btn-container">
                <button
                  className="download-recipe-btn"
                  aria-label="Download recipe"
                >
                  Download PDF
                </button>
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
