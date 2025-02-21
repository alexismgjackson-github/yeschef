import { useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./DietaryRestrictions.css";

export default function DietaryRestrictions() {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/recipe`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();
  return (
    <>
      <div className="dietary-restrictions-container fade-in">
        <section className="dietary-restrictions">
          <h1>What are your food allergies or restrictions?</h1>
          <form className="dietary-restrictions-form">
            <input
              type="text"
              name="dietary-restrictions"
              className="dietary-restrictions-input"
              aria-label="Add food allergies or restrictions"
              placeholder="e.g shellfish"
              required
            />
            <div className="dietary-restrictions-btn-container">
              <button className="add-modifications-btn">
                Add Modifications
              </button>
            </div>
          </form>
        </section>
        <section className="dietary-restrictions-btn-container">
          <button className="get-recipe-btn" onClick={handleClick}>
            Get Recipe
          </button>
        </section>
      </div>
    </>
  );
}
