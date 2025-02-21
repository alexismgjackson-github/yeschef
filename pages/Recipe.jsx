import { useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./Recipe.css";

export default function Recipe() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();

  return (
    <>
      <div className="recipe-container fade-in">
        <section className="recipe-card">
          <p>Recipe page</p>
        </section>
        <section className="recipe-btn-container">
          <button className="download-recipe-btn" aria-label="Download recipe">
            Download Recipe
          </button>
          <button
            className="restart-btn"
            onClick={handleClick}
            aria-label="Restart"
          >
            Restart
          </button>
        </section>
      </div>
    </>
  );
}
