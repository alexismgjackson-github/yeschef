import { useNavigate, useContext } from "react-router";
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
          <button className="restart-btn" onClick={handleClick}>
            Restart
          </button>
        </section>
      </div>
    </>
  );
}
