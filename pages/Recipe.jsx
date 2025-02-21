import { useNavigate } from "react-router";
import "./Recipe.css";

export default function Recipe() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/`);
  }

  return (
    <>
      <div className="recipe-container">
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
