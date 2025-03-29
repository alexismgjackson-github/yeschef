import { useNavigate } from "react-router";
import { useContext } from "react";
import { ScrollContext } from "../Context/scroll";
import "./Servings.css";

export default function Servings(props) {
  // console.log(props.servings);

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
              onClick={props.decrementServings}
              disabled={props.servings === 1}
            >
              {/* disable button when the "servings" are equal to 1 */}
              <img
                src="/assets/icons/decrement.svg"
                alt="Decrement"
                className="decrement-icon"
              />
            </button>
            <span className="servings">{props.servings}</span>
            <button
              className="increment-servings-btn"
              aria-label="Increment serving size"
              onClick={props.incrementServings}
              disabled={props.servings === 10}
            >
              {/* disable button when the "servings" are equal to 10 */}
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
