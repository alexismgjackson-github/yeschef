import { useNavigate } from "react-router";
import { useState, useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./Servings.css";

export default function Servings() {
  const [servings, setServings] = useState(1);

  function decrementServings() {
    setServings((prevServings) => prevServings - 1);
  }

  function incrementServings() {
    setServings((prevServings) => prevServings + 1);
  }

  const navigate = useNavigate();

  function handleClick() {
    navigate(`/restrictions`);
  }

  const { scrollToTop } = useContext(ScrollContext);

  scrollToTop();
  return (
    <>
      <div className="servings-container fade-in">
        <section className="serving-size">
          <h1>How many people are you cooking for (including yourself)?</h1>
          <div className="servings-adjustment">
            <button
              className="decrement-servings-btn"
              aria-label="Decrement serving size"
              onClick={decrementServings}
            >
              <img
                src="/assets/icons/decrement.svg"
                alt="Decrement"
                className="decrement-icon"
              />
            </button>
            <span className="servings">{servings}</span>
            <button
              className="increment-servings-btn"
              aria-label="Increment serving size"
              onClick={incrementServings}
            >
              <img
                src="assets/icons/increment.svg"
                alt="Increment"
                className="increment-icon"
              />
            </button>
          </div>
        </section>
        <section className="servings-btn-container">
          <button className="servings-next-btn" onClick={handleClick}>
            Next
          </button>
        </section>
      </div>
    </>
  );
}
